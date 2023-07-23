/**
 * 抽奖接口
 * 1、礼品的数量作为其中奖概率（数量少--则认为价值大，中奖概率小；反之则大）
 * 2、设置一个总概率（不需对每个礼品都设置中奖概率）
 * 3、产生随机数，落在哪个区间，就中什么奖
 * 如下面例子：
     随机数发生区间为[0, 250)   (250 = 200/0.8  随机数范围 = 礼品总数 / 总中奖率)
     礼品A中奖区间[0, 10), 礼品B中奖区间[10, 60), 礼品C中奖区间[60, 200), 不中奖区间[200, 250)
     所落的区间，礼品没库存了，也当做没中奖
 */
// 模拟礼品
const goods = [
  { id: 1, name: 'A', stock: 5, total: 5 },
  { id: 2, name: 'B', stock: 26, total: 26 },
  { id: 3, name: 'C', stock: 85, total: 85 },
  { id: 4, name: 'D', stock: 359, total: 359 },
  { id: 5, name: 'E', stock: 328, total: 328 },
  { id: 6, name: 'F', stock: 160, total: 160 },
  { id: 7, name: 'G', stock: 5, total: 5 },
  { id: 8, name: 'H', stock: 197, total: 197 },
  { id: 9, name: 'I', stock: 35, total: 35 },
];
const threshold = 1; // 总中奖概率

const luck1Action = () => {
  // 模拟num次抽奖
  // 随机数发生
  const allGoods = goods.filter((g) => g.stock > 0);

  if (allGoods.length == 0) {
    console.log('活动结束');
    return;
  }

  const tal = allGoods.length; // 礼品总数
  const num = tal / threshold; // 随机数范围 = 礼品总数 / 总中奖率
  const random = Math.round(Math.random() * (num - 1));
  // 随机数发生在没中奖的范围
  if (random >= tal) {
    console.log(`没中奖, 随机数是${random}`);
    return;
  }
  let cur = 0;

  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < allGoods.length; j++) {
    const good = allGoods[j];
    const next = cur + good.total;
    // 随机数落在奖品的区间
    if (cur <= random && random < next) {
      // // 所落的区间，礼品没库存了
      // if (allGoods[j].stock <= 0) {
      //   console.log(`【没库存】: ${good.name}, 随机数是${random}`);
      //   break;
      // }
      // 中奖
      console.log(`中奖: ${allGoods[j].name}, 随机数是${random}`);
      console.count('-----------------');
      goods.find((item) => item.id === good.id).stock -= 1; // 中奖减库存
      break;
    }
    cur = next;
  }
};

for (let i = 0; i < 800; i++) {
  luck1Action();
}
