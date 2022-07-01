document.querySelector(".navbar").style.setProperty('background-color', '#0D47A1', 'important');
 const logoutBtn = document.querySelector("body > div.wrapper > div.main-panel.ps > nav > div > div.collapse.navbar-collapse.justify-content-end > ul > li.nav-item.dropdown.pfile.dd > div > a:nth-child(5)");
  if (logoutBtn) {
    logoutBtn.onclick = function () {
        alert("bingo");
        Android.logOut();
    };
  }
