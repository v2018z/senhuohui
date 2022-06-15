const fetch = require('node-fetch');

const run = (body) => {
  return fetch('http://localhost:3000/rework/login-test', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const randomPhone = () => {
  const headerNums = [
    '139',
    '138',
    '137',
    '136',
    '135',
    '134',
    '159',
    '158',
    '157',
    '150',
    '151',
    '152',
    '188',
    '187',
    '182',
    '183',
    '184',
    '178',
    '130',
    '131',
    '132',
    '156',
    '155',
    '186',
    '185',
    '176',
    '133',
    '153',
    '189',
    '180',
    '181',
    '177',
  ];
  const headerNum = headerNums[parseInt(Math.random() * 10, 10)];
  const bodyNum = Math.random().toString().replace('0.', '').slice(0, 8);
  return headerNum + bodyNum;
};

const timer = setInterval(() => {
  console.time('abc___');
  const body = JSON.stringify({ phone: randomPhone(), captcha: '3306' });
  run(body)
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        if (data.code == -300) {
          console.log('抽奖已结束');
          clearInterval(timer);
        }
        console.timeEnd('abc___');
      });
    })
    .catch((error) => {
      console.timeEnd('abc___');
      console.log(error);
    });
}, 200);

// const body = JSON.stringify({ phone: randomPhone(), captcha: '3306' });
// run(body)
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//       if (data.code == -300) {
//         console.log('抽奖已结束');
//       }
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
