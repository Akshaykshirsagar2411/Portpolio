


var name;
var email;

var samosa_price=10,kachori_price=12,vadapav_price=20,maggi_price=30;

var samosa_q=0, kachori_q=0,vadapav_q=0,maggi_q=0;

var samosaPriceshow ="",kachoriPriceshow="",vadapavPriceshow="",maggiPriceshow="";



document.getElementById('name').addEventListener('keyup',function(){

    name=document.getElementById('name').value;
    document.getElementById('name2').innerHTML=name;

    
    console.log(name);
});

document.getElementById('email').addEventListener('keyup', function(){
    email=document.getElementById('email').value;
    document.getElementById('email2').innerHTML=email;
});

// for second column
//for samosa
document.getElementById('samosa').addEventListener('keyup',function(){

      if(this.value=="" || this.value==0)
      {

       samosaPriceshow="";
       Showbill();
      }
      else{

     samosa_q=this.value;
     samosaPriceshow="<tr><td>Samosa</td><td>"+samosa_price+"</td><td>"+samosa_q+"</td><td>"+samosa_price+"x"+samosa_q+"="+samosa_price*samosa_q+"</td></tr>";
     Showbill();


      }     
});

//for kachori

document.getElementById('kachori').addEventListener('keyup',function(){

    if(this.value=="" || this.value==0)
    {

        kachoriPriceshow="";
        Showbill();
    }
    else{

   kachori_q=this.value;
   kachoriPriceshow="<tr><td>Kachori</td><td>"+kachori_price+"</td><td>"+kachori_q+"</td><td>"+kachori_price+"x"+kachori_q+"="+kachori_price*kachori_q+"</td></tr>";
   Showbill();

    }     
});

// vadapav

document.getElementById('vadapav').addEventListener('keyup',function(){

    if(this.value=="" || this.value==0)
    {

        vadapavPriceshow="";
        Showbill();
    }
    else{

   vadapav_q=this.value;
   vadapavPriceshow="<tr><td>Vadapav</td><td>"+vadapav_price+"</td><td>"+vadapav_q+"</td><td>"+vadapav_price+"x"+vadapav_q+"="+vadapav_price*vadapav_q+"</td></tr>";
   Showbill();

    }     
});



//for Maggi

document.getElementById('maggi').addEventListener('keyup',function(){

    if(this.value=="" || this.value==0)
    {

        maggiPriceshow="";
        Showbill();
    }
    else{

   maggi_q=this.value;
   maggiPriceshow="<tr><td>Maggi</td><td>"+maggi_price+"</td><td>"+maggi_q+"</td><td>"+maggi_price+"x"+maggi_q+"="+maggi_price*maggi_q+"</td></tr>";
   Showbill();

    }     
});


var form1= document.getElementById('form1');
var display=0;

function hide(){
    if(display=1){
        form1.style.display="block";
        display=0;

    }
    else{
        form1.style.display="none";
        display=1;
    }
};
console.log(hide);


function Showbill(){
    document.getElementById('bills').innerHTML=samosaPriceshow+kachoriPriceshow+vadapavPriceshow+maggiPriceshow;
    document.getElementById('amount').innerHTML=samosa_price*samosa_q+kachori_price*kachori_q+vadapav_price*vadapav_q+maggi_price*maggi_q;
}

function reset(){
    document.getElementById('form2').value="";

}


function click(){
    document.getElementById("form1").style.display="none";
    document.getElementById("form2").style.display="block"
}


$(document).ready(function(){
    $("#done").click(function(){
        $("#form1").remove();
       
        $("#done").hide();
       
       

        });

      $("#btn").click(function(){
        $("#btn").hide();
    
       
      }) ; 
     
   });