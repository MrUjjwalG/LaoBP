if(window.location.href=="https://www.laobp.in/Home/Registration"){
    if(window.screen.width<290){
        document.querySelector("body > div > div > div.container > div").style.marginTop="8em";
    }else if(window.screen.width<365){
        document.querySelector("body > div > div > div.container > div").style.marginTop="5em";
    } else{
        document.querySelector(".navbar").style.setProperty('background-color', '#0D47A1', 'important');
    }
}
