/***
 * @desc gaodun  cpe  调试F12  清理下控制台，把代码复制上去，回车
 * 有些课程最后会弹个问卷，需要手工点下。
 *
 * @type {number}
 */

//closeTips x_c
// //tips

var i_c = 1;


console.log("gogoo");

/**
 * oveerride function
 */
function tt_a_c() {
    var i_b = $("#sureTips");

    var i_div = $("#tips");

    //console.log("-div display-."+i_div[0].style.display);
    if (i_b && i_div[0].style.display == "block") {
        i_b.click();
        //
        i_sayVd(tids[i_c].tid);
        console.log("我点了----》" + i_c);

        i_c++;
    }else{
        console.log("我 无聊着-a ->" + i_b[0].className);
    }
}

/**
 * server click
 * @param i_tid
 */
function i_sayVd(i_tid){
    console.log("--i_sayVd=" + i_tid);
    $.post(
        AJAX_URL +"/Mycpe/updateTids",
        {"tidId":i_tid,"cid":cid,"cwpid":cwpid,"cwid":cwid},
        function(data){
            if(data.status == 101){
                $(".not_Login").click();
            }else if(data.status == "-1"){
                alert("你未正确的参加课程，请返回至该课程页面选择参加课程！");
            }else if(data.status == 0){
                alert("系统错误，请稍后重试！");
            }else{
                // var player = getSWF($('.playBox').find('object').attr('id'));
                var player = VideoCPEPlayer.player;
                player.resume();
            }
        },"json")

}




var i_key = 0;
function i_main() {
    console.log("being ----->i_main" + i_key);
    if(i_key < tids.length){
        console.log("我看好一会了" +i_key);
        i_sayVd(tids[i_key].tid);
    }else{
        console.log("结束了" +i_key);
        playerEndCB();
        clearInterval(i_go);

        clearInterval(i_run);
    }
    i_key ++;
}




function  i_callInterval() {
    var cc = tids;
    if(cc){
        for(i = 0; i< cc.length; i++){
            i_sayVd(tids[i].tid);
        }
    }
}

//零食包 click screen
var i_go = setInterval( tt_a_c,5000);
//加速包。。测试用，认真看的就注释掉他
var i_run = setInterval(i_main,1000*6*1);


