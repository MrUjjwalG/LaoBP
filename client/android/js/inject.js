if(window.location.href=="https://www.laobp.in/Home/Registration"){
    if(window.screen.width<290){
        document.querySelector("body > div > div > div.container > div").style.marginTop="8em";
    }else{
        document.querySelector("body > div > div > div.container > div").style.marginTop="10em";
    }
}
 document.querySelector(".navbar").style.setProperty('background-color', '#0D47A1', 'important');
if(document.querySelector("body > div.wrapper > div.main-panel.ps > nav > div > div.navbar-wrapper > a:nth-child(2) > label")){
 Android.setVendorName(document.querySelector("body > div.wrapper > div.main-panel.ps > nav > div > div.navbar-wrapper > a:nth-child(2) > label").innerHTML);
}
