import OMDB from './omdb';

const API_KEY = process.env.REACT_APP_OMDB_APIKEY;

/** GET THE PLOT OF A PARTICULAR MOVIE */
const getPlot = async (imdbID) => {
  try {
    const response = await OMDB.get(`?apikey=${API_KEY}&i=${imdbID}&type=movie&plot=short`);
    console.log(response.data);
    return response.data.Plot || '';
  } catch (e) {
    return '';
  }
};

/** FETCH MOVIE INFO BASED ON SEARCH TERM */
const fetchSearchData = async (searchTerm, page = 1) => {
  try {
    // GET SEARCH RESULTS
    const response = await OMDB.get(`?apikey=${API_KEY}&s=${searchTerm}&type=movie&page=${page}`);
    if (response.status !== 200) {
      return { data: [], count: 0 };
    }
    let data = response.data.Search || [];
    const count = response.data.totalResults || 0;

    // FOR EACH SEARCH RESULT, GET PLOT
    if (data.length > 0) {
      const dataWithPlot = await Promise.all(data.map(async (item) => {
        const Plot = await getPlot(item.imdbID);
        return {
          ...item,
          Plot: Plot.slice(0, 100),
        };
      }));
      data = dataWithPlot;
    }

    return { data, count };
  } catch (e) {
    console.log(e);
    return { data: [], count: 0 };
  }
};

export default fetchSearchData;
