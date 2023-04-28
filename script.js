







function click1(){
    document.getElementById('sk1').style.display="block";
    document.getElementById('sk2').style.display="none";
    document.getElementById('sk3').style.display="none";
    document.getElementById('card1').style.height="400px";
    
}

function click2(){
    document.getElementById('sk2').style.display="block";
    document.getElementById('sk1').style.display="none";
    document.getElementById('sk3').style.display="none";

    // margin-left: 22%;
    // margin-right:20%;
    // width: 150px;
    // height: 150px;

    // document.getElementById('sk2').style.border="1px solid black";

    // document.getElementById('sk2').style.marginLeft="22%";
    // document.getElementById('sk2').style.marginRight="20%";
    // document.getElementById('sk2').style.height="450px";
 
}



function click3(){
    document.getElementById('sk3').style.display="block";
    document.getElementById('sk1').style.display="none";
    document.getElementById('sk2').style.display="none";
}



// fadeing


//  $('#bt1').click(function(){
//     $('#sk1').fadeOut(500);
//   });


//   $('#bt1').click(function(){
//     $('#sk1').fadeIn(500);
//   });



//   $('#bt2').click(function(){
//     $('#sk2').fadeOut(500);
//   });


//   $('#bt2').click(function(){
//     $('#sk2').fadeIn(500);
//   });

//   $('#bt3').click(function(){
//     $('#sk3').fadeOut(500);
//   });


//   $('#bt3').click(function(){
//     $('#sk3').fadeIn(500);
//   });
  




$(document).ready(function(){
    $('#home').hide(0).delay(200).slideDown(2000);
});

$(document).ready(function(){
  $("#bt1").click(function(){
   $('#sk1').hide(0).delay(200).slideDown(1000);
  });
 });

 $(document).ready(function(){
  $("#bt2").click(function(){
   $('#sk2').hide(0).delay(200).slideDown(1000);
  });
 });

 $(document).ready(function(){
  $("#bt3").click(function(){
   $('#sk3').hide(0).delay(200).slideDown(1000);
  });
 });

 $(document).ready(function(){
    $("#mi").click(function(){
     $('#detailsub').hide(0).delay(200).slideDown(1000);
    });
   });

   $(document).ready(function(){
    $("#hom1-btn").click(function(){
     $('#home').hide(0).delay(200).slideDown(1000);
    });
   });


   

// $(document).ready(function(){
//   $('#sk1').hide(0).delay(200).slideDown(4000);
// });

   


 



    // $(document).ready(function(){
    //   $("#pro").click(function(){
    //    $('#project').display();
    //   });
    //  });




  //sliding
//   $('#bt2').click(function(){
//     $('#sk2').slideUp(2000);
//   });
  
//   $('#bt2').click(function(){
//     $('#sk2').slideDown(2000);
//   });

//   $(document).ready(function(){
  //     $('.title').hide(0).delay(200).slideDown(4000);
  // });