dataSetVersion = "2021-06-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Rounds",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Round 1", key: "rone" },
      { name: "Round 2", key: "rtwo" },
      { name: "Round 3", key: "rthree" },
      { name: "Round 4", key: "rfour" },
	  { name: "Round 5", key: "rfive" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Dangers",
    img: "Is8nUaY.jpg",
    opts: {
      series: ["rone"]
    }
  },
  {
    name: "naz remix",
    img: "ziIrT3R.jpg",
    opts: {
      series: ["rone"]
    }
  },
  {
    name: "Dan Off the Perc",
    img: "vQXwL7X.jpg",
    opts: { series: ["rtwo"]
  },
  {
    name: "Erwin",
    img: "oyk5Pw5.jpg",
    opts: { series: ["rtwo"]
  },
  {
    name: "LilRed Mix #2",
    img: "XDLnE4u.jpg",
    opts: {
      series: [ "rthree"]
    }
  },
  {
    name: "11 2 (Pranav)",
    img: "Aqgubc4.jpg",
    opts: { series: ["rthree"]
  },
  {
    name: "tam jam",
    img: "yYP2Yuc.jpg",
    opts: { series: ["rfour"]
  },
  {
    name: "Matt-summer Madness",
    img: "jy7dtDx.jpg",
    opts: {
      series: ["rfour"]
    }
  },
  {
    name: "Jambangers 2",
    img: "sL44Rc4.jpg",
    opts: { series: ["rfive"]
  },
  {
    name: "Sunny 101.5",
    img: "Is8nUaY.jpg",
    opts: { series: ["rfive"]
  },
];
