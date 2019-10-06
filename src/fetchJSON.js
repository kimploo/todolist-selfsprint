const fetch = require('node-fetch');

export const fetchJSON = (callback) => {
  window
    .fetch('./testData/testData.json')
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((data) => {
      console.log(data);
      return callback(data);
    });
  // .catch(err => console.log(err));
};
