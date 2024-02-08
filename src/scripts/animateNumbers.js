const data = [
  {id: "count1", countValue:2245341 },
  {id: "count2", countValue:46328 },
  {id: "count3", countValue:828867 },
  {id: "count4", countValue:1926436 }
];

data.forEach(item => {
  const numAnim = new countUp.CountUp(item.id, item.countValue, {enableScrollSpy: true});
  numAnim.start();
})
