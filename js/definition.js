var contractAddress = "0x49b7934779D4a30A1ddF31Bf8007191A49c8Fd39";
var contractAddress_2 = "0xa94F56803179c64EC880a38D4e64475238cD4C33";
var contractAddress2 = "0xeAA1f7dEb0e5E3d15Cab5C251a0CBe54f1281510";
var contractAddress3 = "";
var contractAddress4 = "";
var hadcapB = 20000000000000;
var limitbuy = 2;
var abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coinNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Convert",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "End",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [],
    name: "activate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "activated_",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "busd",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "current",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "end",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gemCoin",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThePrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isJoined",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "max",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "min",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "per",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "preAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "setDRSCoinAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "setPreAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_state",
        type: "uint256",
      },
    ],
    name: "setTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "setUsdAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "total",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "withdrawWhenEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
var abi2 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "gameAddress",
        type: "address",
      },
    ],
    name: "addisExcluded",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "setDRSCoinAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "takeOutTokenInCase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "towner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "busd",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deadAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isExcluded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxPers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// 点击跳转页面
$("#listFlag li").click(function () {
  let index = $("#listFlag li").index(this);
  const uri = window.location.href.split('?')[1]
  const params = new URLSearchParams(uri)
  const code = params.get('code')
  if (index == 0) {
    //0美国
    window.location.href = code?"index.html" + `?code=${code}` :'index.html';
  } else if (index == 1) {
    //1中国
    window.location.href = code?"indexCN.html" + `?code=${code}` : 'indexCN.html';
  }
  //  else if (index == 2) { //1日本
  //   window.location.href = "indexJP.html";
  // } else if (index == 3) { //1韩国
  //   window.location.href = "indexKR.html";
  // }
});
$("#listFlagNode li").click(function () {
  let index = $("#listFlagNode li").index(this);
  const uri = window.location.href.split('?')[1]
  const params = new URLSearchParams(uri)
  const code = params.get('code')
  // window.open(`https://pop-app.github.io/#/?code=${code}`)
  if (index == 0) {
    //0美国
    window.location.href = "node.html" + `?code=${code}`;
  } else if (index == 1) {
    //1中国
    window.location.href = "nodeCN.html" + `?code=${code}`;
  }
  //  else if (index == 2) { //1日本
  //   window.location.href = "indexJP.html";
  // } else if (index == 3) { //1韩国
  //   window.location.href = "indexKR.html";
  // }
});
// 切换国籍的下拉框
function changeLanguage() {
  if ($("#selectNationality").is(":hidden")) {
    //如果隐藏时。。。
    $("#selectNationality").show();
    $("#arrowd").show();
    $("#arrowu").hide();
  } else {
    //如果显示时。。。
    $("#selectNationality").hide();
    $("#arrowd").hide();
    $("#arrowu").show();
  }
}

function stopPropagation(e) {
  e = e || window.event;
  if (e.stopPropagation) {
    //W3C阻止冒泡方法
    e.stopPropagation();
  } else {
    e.cancelBubble = true; //IE阻止冒泡方法
  }
}

// 点击模态窗隐藏弹窗
function conceal() {
  $(".pop-upWindows").hide();
}

// 点击跳转
$(".Button4").click(() => {
  window.open("http://www.github.com");
});

// 小弹窗显示
function remindMistake(remind) {
  $(".smallPop-up").show();
  $(".promptStatement").text(remind);

  // $('.smallPop-up').show();
}

$(".confirmButton").click(() => {
  $(".smallPop-up").hide();
});

$(function () {
  var opts = {
    lines: 9, // The number of lines to draw

    length: 0, // The length of each line

    width: 10, // The line thickness

    radius: 15, // The radius of the inner circle

    corners: 1, // Corner roundness (0..1)

    rotate: 0, // The rotation offset

    color: "#FFFFFF", // #rgb or #rrggbb

    speed: 1, // Rounds per second

    trail: 60, // Afterglow percentage

    shadow: false, // Whether to render a shadow

    hwaccel: false, // Whether to use hardware acceleration

    className: "spinner", // The CSS class to assign to the spinner

    zIndex: 2e9, // The z-index (defaults to 2000000000)

    top: "auto", // Top position relative to parent in px

    left: "auto", // Left position relative to parent in px
  };

  var target = document.getElementById("foo");

  var spinner = new Spinner(opts).spin(target);
});

$("#inputDigit").bind("input propertychange", function () {
  /*事件写在这里*/
  let value = $("#inputDigit").val();

  if (value > limitbuy) $("#inputDigit").val(limitbuy);
  if (value % 1 != 0) {
    let value2 = Number(value).toFixed(0);
    $("#inputDigit").val(value2);
  }

  let quantity = $("#inputDigit").val() * 0.1;
  $("#beCapable span").text(quantity);
});

var isAuthorized = true; //是否授权

var WhetherBuy = false; //是否购买    true 已经购买，不可在购买   false没有购买，还能购买

var web3;
var contract; //链接钱包

var contract2;
var contract3;

var walletAccount;

// 链接钱包
async function linkPurse() {
  if (!window.web3) {
    web3 = new Web3(
      new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")
    );
  } else {
    web3 = new Web3(window.web3.currentProvider);
  }

  contract = new web3.eth.Contract(abi, contractAddress); //链接钱包
  contract2 = new web3.eth.Contract(abi2, contractAddress2);
  // contract3 = new web3.eth.Contract(abi2, contractAddress3);

  const accounts = await this.web3.eth.getAccounts();
  // let walletAddress = accounts[0];

  if (accounts && accounts.length > 0) {
    let walletAddress = accounts[0];

    let text1 = walletAddress.slice(0, 3);

    let text2 = walletAddress.slice(-3);

    $(".thePurse").hide();
    $(".account").show();
    $(".account span").text(text1 + "..." + text2);
  }

  await getTime();
  getTotalRaised(); //获取百分比
  // await isJoined();  //去判断用户有没有购买
  // management();
  // combustion();
  totalSupply();
  // RoadmapICO();
}
async function getTime() {
  const res = await contract.methods.getTime().call();
  console.log("getTime", res);
  let timeB = res[0] || 0;
  let statusB = res[1] || 1;

  setTimeB(timeB * 1000);
  setStatusB(statusB);
  $("#hadcap").text("20, 000, 000, 000, 000");
  //第二轮换合约
  if (statusB == 4) {
    contract = new web3.eth.Contract(abi, contractAddress_2); //链接钱包
    // 硬顶1700000 00000000
    $("#hadcap").text("170, 000, 000, 000, 000");
    hadcapB = 170000000000000;
    limitbuy = 10;
  }
}

// 获取 百分比
async function getTotalRaised() {
  let decimals = await contract.methods.currentNum().call();
  decimals = decimals / Math.pow(10, 18);
  $("#HaveUsing").text(decimals.toFixed(0));
  let percentage = (decimals / hadcapB) * 100;
  $(".rang-line span").css("width", percentage + "%");
  $(".rangTotal").text(percentage.toFixed(3) + "%");
}

// 进来就判断有没有授权
async function isJoined() {
  const accounts = await this.web3.eth.getAccounts();
  let walletAddress = accounts[0];
  WhetherBuy = await contract.methods.isJoined(walletAddress).call();
  console.log("isjoin", WhetherBuy);
}

// 获取	Insurance mechanism
async function totalSupply() {
  let Supply = await contract2.methods.totalSupply().call();
  console.log("totalSupply", Supply);

  Supply = Supply / Math.pow(10, 18);

  $("#insurance").text(Supply + " FISTKING");
}

// // 获取	Total combustion
// async function combustion() {
//   let Supply = await contract2.methods.totalBurn().call();
//   Supply = Supply / Math.pow(10, 18);
//   $("#TotalCombustion").text(Supply + 'SEE');
// }

// async function management() {
//   let Supply = await contract2.methods.balanceOf(contractAddress4).call();
//   Supply = Supply / Math.pow(10, 18);
//   $("#ICOAsset").text(Supply + ' FISTKING');
// }

// // 获取Roadmap ICO 百分比
// async function RoadmapICO() {

//   let Supply = await contract2.methods.taxPers().call();
//   Supply = Supply / 10
//   console.log(Supply);
//   $("#Roadmap").text(Supply + '%');

//   $("#indifferent").text(Supply + '%');
// }

// 判断是否可以购买
// async function allowance() {
//   const accounts = await this.web3.eth.getAccounts();
//   let walletAddress = accounts[0];

//   //  值/10的18cfang  =1000  就没有授权  不等于就授权了
//   let value = await contract3.methods.allowance(walletAddress, contractAddress).call();

//   value = value / Math.pow(10, 18);

//   console.log(value);
//   if (value >= 1000) {
//     // 如果直大于等于1000 就不授权
//     this.getWeb3List()
//     // isAuthorized = false; //已经授权
//     return
//   }

//   let num = new BigNumber(1000 * Math.pow(10, 18));

//   contract3.methods.approve(contractAddress, num).send({
//     from: walletAddress
//   }).on("receipt", (receipt) => {
//     const {
//       status
//     } = receipt;

//     if (status) {

//       isAuthorized = false;
//       this.getWeb3List()
//       // remindMistake("Authorization success"); //授权成功

//     } else {
//       // isAuthorized = true;
//       $('.loading').hide();
//       remindMistake("Authorization failed. Please check the cause of the failure in the browser. ")//授权失败，请去浏览器检查失败原因。

//     }
//   })
//     .on("error", (error, receipt) => {
//       // isAuthorized = true;
//       $('.loading').hide();
//       remindMistake("Authorization failed. Please check the cause of the failure in the browser.")//授权失败，请去浏览器检查失败原因。

//     });
// };
