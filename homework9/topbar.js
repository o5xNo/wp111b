function myFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function (e) 
{
    if (!e.target.matches('.dropbtn')) 
    {
        var myDropdown = document.getElementById("myDropdown");

        if (myDropdown.classList.contains('show')) 
        {
            myDropdown.classList.remove('show');
        }
    }
}

let main = document.querySelector('#main')

let pages = 
{
  '#login':`
  <h1>登入</h1>
  <input type="text" placeholder="帳號"/><br/>
  <input type="text" placeholder="密碼"/><br/>
  <a href="#home">確認</a>
  `,

  '#home':`
  <div id="main" class="d1">
    <h1>首頁</h1>
    <p>歡迎來到這個網站</p>
    <p>本網站將提供一些強大的功能</p>
    <p>詳細內容需要登入註冊才可解鎖</p>
    <div id="main" class="d2">
      <br>
      <p>本網站非詐騙網站!!!</p>
      <p>本網站非詐騙網站!!!</p>
      <p>本網站非詐騙網站!!!</p>
      <p>因為很重要所以說3次</p>
    </div>
  </div>
  `,

  '#logout':`
  <a href="#home">登出</a>
  `,

  '#signup':`
  <h2>註冊</h2>
  <input class="x1" type="text" placeholder="姓名"/><br>
  <input class="x1" type="mail" placeholder="電子信箱或手機號碼"/><br>
  <input class="x1" type="password" placeholder="設定密碼"/><br>
  <label class="x1" for="birthdaytime">出生年月日:</label><br>
  <input class="x1" required type="date"><br>
  <br>
  <label for="gender">性別:</label><br>
  <input type="radio" name="gender" value="male">
  <label for="male">男性</label>
  <input type="radio" name="gender" value="female">
  <label for="female">女性</label> 
  <input type="radio" name="gender" value="other">
  <label for="other">其他</label><br>
  <br>
  <input type="button" onclick="alert('恭喜你填寫這個詐欺表單，你的個資已成功外洩，恭喜!恭喜!')" value="送出">
  `,
}

window.onhashchange = function () 
{
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}