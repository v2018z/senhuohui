function randomNum(minNum: number, maxNum: number) {
  switch (arguments.length) {
    case 1:
      return +(Math.random() * minNum + 1);
      break;
    case 2:
      return ~~(Math.random() * (maxNum - minNum + 1) + minNum);
      break;
    default:
      return 0;
      break;
  }
}

export { randomNum };
