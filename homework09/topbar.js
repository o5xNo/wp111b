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
  `,

  '#logout':`
  <a href="#home">登出</a>
  `,

  '#signup':`
  <h2>註冊</h2>
  <input class="x1" type="text" placeholder="姓名"/>
  <input class="x1" type="mail" placeholder="電子信箱或手機號碼"/>
  <input class="x1" type="password" placeholder="設定密碼"/>
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