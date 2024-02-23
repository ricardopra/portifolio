function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('barra-menu');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "220px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval (function () {
    nextImage();

}, 10000)

function nextImage(){
    count++;
    if (count > 4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true 
}

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-160BJX85DD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-160BJX85DD');
</script>
