import Noty from 'noty';

const Notify = (text, type) => {
  const n = new Noty({
    text,
    type,
    theme: 'sunset',
    timeout: 3000,
  });
  n.show();
};

export default Notify;
