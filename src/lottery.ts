// 定义奖品数据
const prizes = [
  { id: 1, name: '星巴克星礼卡', stock: 5 },
  { id: 2, name: '杜邦纸包', stock: 26 },
  { id: 3, name: '相机包', stock: 85 },
  { id: 4, name: '蕉下冰袖', stock: 359 },
  { id: 5, name: '天堂太阳伞', stock: 328 },
  { id: 6, name: 'F防晒帽', stock: 160 },
  { id: 7, name: 'GG袖珍绿植', stock: 5 },
  { id: 8, name: '运动腰包', stock: 197 },
  { id: 9, name: '保温杯', stock: 35 },
];

const drawTimes = 1500;
const winProbability = 0.5;

// 抽奖函数
function drawLottery() {
  const randomNum = Math.random(); // 生成0到1之间的随机数

  const currPrices = prizes.filter((p) => p.stock > 0); // 过滤出库存大于0的奖品

  if (randomNum > winProbability || currPrices.length <= 0) {
    console.log('randomNum', randomNum, '未中奖 ');
    return '未中奖'; // 如果没有任何奖品中奖或库存不足，则返回未中奖
  }

  // 50%中奖率
  const randomIndex = Math.floor(Math.random() * currPrices.length); // 随机生成奖品下标
  const prize = currPrices[randomIndex]; // 根据奖品下标找到对应奖品
  if (prize.stock > 0) {
    // 更新奖品库存
    prize.stock--;
    console.log(currPrices.length, 'index: ', randomIndex, 'prize', prize);
    return prize.name; // 返回中奖奖品名字
  }

  console.log('randomNum', randomNum, '未中奖 ');
}

const winningCount = 0;

// for (let i = 0; i < drawTimes; i++) {
//   ((index) => {
//     setTimeout(() => {
//       const result = drawLottery();
//       if (result !== '未中奖') {
//         winningCount++;
//       }
//       if (index === drawTimes - 1) {
//         console.log(
//           `抽奖${drawTimes}次，中奖${winningCount}次，中奖率为${
//             (winningCount / drawTimes) * 100
//           }%`,
//         );
//       }
//     }, index * 10);
//   })(i);
// }

const today = new Date();
today.setUTCHours(0, 0, 0, 0); // 设置为当天的 00:00:00

console.log(today);

const tomorrow = new Date(today);
tomorrow.setHours(today.getDate() + 1); // 设置为第二天的 00:00:00

console.log(tomorrow);
