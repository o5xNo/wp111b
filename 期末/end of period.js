function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

function Function2() {
  var dropdown = document.getElementById("myDropdown2");
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown2-content");
    var j;
    for (j = 0; j < dropdowns2.length; j++) {
      var openDropdown2 = dropdowns2[j];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}

let main = document.querySelector('#main')

let pages = 
{
  '#maker':`
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <div class="p-4 bg-dark text-white text-center">
  <h1>作者介紹</h1>
</div>

<nav class="navbar navbar-expand-sm bg-success navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="https://github.com/o5xNo/wp111b">github</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/profile.php?id=100039799727214">facebook</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.nqu.edu.tw/">我的學校</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h2>關於我</h2>
      <h5>我的相片:</h5>
      <div>
        <img src="head.jpg" class="rounded-circle" width="160" height="150"></img>
      </div>
      <p>金門大學</p>
      <p>資工系</p>
      <p>吳丞恩</p>
      <h3 class="mt-4">外部連結</h3>
      <p>請放心內無病毒</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="https://github.com/o5xNo/wp111b">github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.facebook.com/profile.php?id=100039799727214">facebook</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://www.nqu.edu.tw/">我的學校</a>
          </li>
      </ul>
      <hr class="d-sm-none">
    </div>
    <div class="col-sm-8">
      <h2>我的Github</h2>
      <h5></h5>
      <img src="github.png" class="fakeimg"></img>
      <p>上圖是我這學期網頁設計，所有的作業，有提供外部連結可以參觀</p>
      <h2 class="mt-5">目前就讀</h2>
      <img class="fakeimg" src="nqu.jpg"></img>
      <p>金門大學</p>
      <p></p>
    </div>
  </div>
</div>

<div class="alert alert-info text-center">
遇到bug請點擊首頁重製
</div>
  `,

  '#home':`
  <div id="main" class="d1">
  <h1>首頁</h1>
  <p>歡迎來到這個網站</p>
  <p>本網是我學習成果的呈現</p>
  <p>可能會有一些bug</p>
  <div id="main" class="d2">
    <br>
    <p>遇到bug請點擊首頁重製</p>
    <p>遇到bug請點擊首頁重製</p>
    <p>遇到bug請點擊首頁重製</p>
    <p>因為很重要所以說3次</p>
  </div>
</div>
  `,

  '#back':`
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <style>
  .fakeimg {
    height: 200px;
    background: #aaa;
  }
  </style>
</head>
<body>

<div class="p-3 bg-success text-white text-center">
  <h1>背景介紹</h1>
</div>


<div class="container mt-5">
  <div class="row">
    <div class="text-center img-center">
      <h2>出生</h2>
      <img class="fakeimg" src="b1.jpg"></img>
      <p>我出生於高雄，但是卻在雲林縣的四湖鄉長大</p>
      <br>
      <h2>國小</h2>
      <img class="fakeimg" src="b2.jpg"></img>
      <p>我就讀於飛沙國小，那是間很小的學校，以舞龍舞獅中的舞獅聞名</p>
      <br>
      <h2>國中</h2>
      <img class="fakeimg" src="b3.jpg"></img>
      <p>我就讀於飛沙國中，我在國中時期我學會了兩種銅管樂器，低音號(Euphonium)和低音號(Tuba)</p>
      <br>
      <h2>高中</h2>
      <img class="fakeimg" src="b4.jpg"></img>
      <p>我就讀於文升高中，我在高中時期學又學會了一種銅管樂器，巴里東號(Baritone)</p>
      <br>
      <h2>大學</h2>
      <img class="fakeimg" src="nqu.jpg"></img>
      <p>目前我正就讀於金門大學，並就讀該校的資工系</p>
    </div>
  </div>
</div>

<div class="alert alert-info text-center">
遇到bug請點擊首頁重製
</div>
  `,

  '#web':`
  <div class="d1">
    <p> 本網站以 Bootstrap 和 ChatGPT 協助完成 </p>
    <P> 不過使用 Bootstrap 產產生了很多BUG (作者和背景)</p>
    <p> 而chatgpa 主要負責 de-bug </p>
    <br>
    <img src="C1.jpg"></img>
    <img src="C2.PNG"></img>
</div>

  `,

  '#matrix':`
  <head>
  <title>n階矩陣計算機</title>
  <style>
    .body1 {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100vh;
    }

    .calculator {
      text-align: left;
      transform: scale(1.5);
      transform-origin: top left;
      margin-left: 20px;
    }

    input {
      width: 50px;
    }

    table {
      margin: 0 auto;
    }

    table td {
      padding: 5px;
    }
  </style>
</head>
<body class="body1">
  <div class="calculator">
    <h2>n階矩陣計算機</h2>

    <label for="order">n值:</label>
    <input type="number" id="order">
    <br><br>

    <div id="matrixInputsA"></div>

    <h3>運算符號:</h3>
    <label for="addition">+</label>
    <input type="radio" id="addition" name="operator" value="+">
    <label for="subtraction">-</label>
    <input type="radio" id="subtraction" name="operator" value="-">
    <label for="multiplication">*</label>
    <input type="radio" id="multiplication" name="operator" value="*">

    <br><br>

    <div id="matrixInputsB"></div>

    <br>
    <button onclick="addMatrices()">新增矩陣</button>
    <button onclick="calculate()">計算</button>

    <br><br>
    <table id="resultTable"></table>
  </div>

  <script src="matrix.js"></script>
</body>
  `,
  '#normal':`
  <head>
  <title>簡單計算機</title>
  <style>
    .calculator {
      width: 200px;
      height: 250px;
      margin: 0;
      margin-left: 20px;
      padding: 10px;
      background-color: #f2f2f2;
      border: 1px solid #ccc;
      transform: scale(1.5);
      transform-origin: top left;
    }

    .calculator button {
      transform: scale(1.2);
      margin: 5px;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <input type="text" id="display" readonly style="width: 100%;">
    <br>
    <button onclick="addToDisplay(1)">1</button>
    <button onclick="addToDisplay(2)">2</button>
    <button onclick="addToDisplay(3)">3</button>
    <button onclick="addToDisplay('+')">+</button>
    <br>
    <button onclick="addToDisplay(4)">4</button>
    <button onclick="addToDisplay(5)">5</button>
    <button onclick="addToDisplay(6)">6</button>
    <button onclick="addToDisplay('-')">-</button>
    <br>
    <button onclick="addToDisplay(7)">7</button>
    <button onclick="addToDisplay(8)">8</button>
    <button onclick="addToDisplay(9)">9</button>
    <button onclick="addToDisplay('*')">*</button>
    <br>
    <button onclick="addToDisplay(0)">0</button>
    <button onclick="addToDisplay('.')">.</button>
    <button onclick="calculate1()">=</button>
    <button onclick="addToDisplay('/')">/</button>
    <br>
    <button onclick="clearDisplay()">ac</button>
  </div>

  <script src="normal.js"></script>
</body>
  `,
}

window.onhashchange = function () {
  let hash = window.location.hash;
  if (pages.hasOwnProperty(hash)) {
    main.innerHTML = pages[hash];
  } else {
    main.innerHTML = "Page not found.";
  }
}