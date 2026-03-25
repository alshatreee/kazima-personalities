(function(){
    if(location.pathname.indexOf('shxs_iat-uth651qt-alkuit')===-1) return;
    document.addEventListener("DOMContentLoaded", function(){
          var c = document.querySelector(".contactus");
          if(c) c.style.display = "none";
          var pc = document.querySelector(".pageContent");
          if(pc) pc.style.padding = "0";
          var ic = document.querySelector(".inside_content");
          if(ic){
                  ic.innerHTML = '<div style="width:100%;max-width:1200px;margin:0 auto"><iframe src="https://alshatreee.github.io/kazima-personalities/" style="width:100%;min-height:100vh;border:none;border-radius:12px" scrolling="yes" allowfullscreen></iframe></div>';
          }
    });
})();
