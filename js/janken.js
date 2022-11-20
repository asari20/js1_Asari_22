let eneHund = 0
let myHund = 99;
let judge = ""
let lv = 1;
let time = 1500;
let s_time = Date();
let sto;

// -----------------------------------------------------
function displayChange() {
    $('#top').css('display',"none");
    $('#main').delay(1000)
    $('#main').fadeIn(1000)
    

    $('#trans').css('display', "table");

    $('#trans_text').text("レベル : " + lv);
    $('#trans_text').addClass("lv_animaion");
 
    $('#trans').delay(1000);
    $('#trans').fadeOut(1000);

}
function hundImg() {
    eneHund = Math.ceil(Math.random() * 3 )
    if(eneHund == 1){
        $('#eneHund_img').html('<img src="img/gu-.png" alt="gu-">');
    }else if(eneHund == 2){
        $('#eneHund_img').html('<img src="img/choki.png" alt="choki">');
    }else if(eneHund == 3){
        $('#eneHund_img').html('<img src="img/pa-.png" alt="pa-">');
    };
    return eneHund;
}
function hundApper(){
    
    setTimeout(function(){
        $('#et1').css("visibility", "visible");
        $('#timer_inner').fadeIn(1);
    },2000)
    setTimeout(function(){
        $('#et2').css("visibility", "visible");
    },2800)
    

    setTimeout(function(){
        $('#et3').css("visibility", "visible");
        $('#eneHund_img').fadeIn(1);
        $('#timer_inner').css("animation-duration", time / 1000 +"s");
        $('#timer_inner').addClass("timer_animation");


    },3600)

    sto = setTimeout(function(){
        lose();
    },time + 3600);

}

function nextReset(){
    $('#et1').css("visibility", "hidden");
    $('#et2').css("visibility", "hidden");
    $('#et3').css("visibility", "hidden");
    $('#eneHund_img').fadeOut(1);
    $('#timer_inner').fadeOut(1);

    $('#win_text').removeClass("lv_animaion");
    $('#timer_inner').removeClass("timer_animation");

    lv = lv + 1;
    time = time - 100;
    eneHund = 0;
    myHund = 99;
    judge = "";
}
function winNext(){

    nextReset();

    $('#win').css('display', "table");
    $('#win_text').text("レベル : " + lv);
   
    $('#win_text').addClass("lv_animaion");
    
    $('#win').delay(1000)
    $('#win').fadeOut(1000)

}
function lose(){
    $('#lose').css('display', "flex");

    $('#lose_lv').text("レベル : " + lv + " ");

    if(lv <= 5){
        $('#lose_var').text("君ならまだ上にいけるはず！");
    }else if(lv <= 8){
        $('#lose_var').text("なかなかやるね！");
    }else if(lv <= 10){
        $('#lose_var').text("反射神経の鬼だね！");
    }else if(lv > 10){
        $('#lose_var').text("もはや神の領域！");
    }
}

function judgeFunc(a,b){
    if((a - b +3) % 3 == 1){
        judge = "win";
        winNext();
    }else{
        judge = "lose";
        lose();
    }   
    return judge;
}

// ----------------------------------------------------------

$('#start').on('click',function(){
    displayChange();

    hundImg();
    hundApper();


    $('#gu_btn').on('click', function(){
        clearTimeout(sto);
        myHund = 1;
        judgeFunc(eneHund,myHund);
        hundImg();
        hundApper();
    })
    $('#cho_btn').on('click', function(){
        clearTimeout(sto);
        myHund = 2;
        judgeFunc(eneHund,myHund);
        hundImg();
        hundApper();
    })
    $('#par_btn').on('click', function(){
        clearTimeout(sto);
        myHund = 3;
        judgeFunc(eneHund,myHund);
        hundImg();
        hundApper();
    })
            
});


$('#quite').on('click',function(){
    window.location.reload();
});

// $('#more').on('click',function(){
//     $('#lose').fadeOut(1)
    
//     nextReset()
//     lv = 1;
//     time =1500; 

//     displayChange() 
//     hundImg();
//     hundApper();

// });
// 選択して負けて、もう一度を押した場合にエラーあり。
// Topに戻るボタンのみでDeploy



