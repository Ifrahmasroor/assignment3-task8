/*const RPS =["Rock","Paper","Scissor"];
let player ="rock";
let computer = "paper";
const playgame  =Math.floor(Math.random()*2);

//let computer=playgame;
//let player =playgame;
if(computer ===0 && player === 1){
    console.log("computer  won");
}else if(player ===0 && computer ===1){
    console.log("player wins")
}else if(computer===player){
console.log("its tie");
}
else {
    console.log("invalid input");
}
console.log("playgame");*/
//const RPS =["Rock","Paper","Scissor"];
function playgame(){
    return Math.floor(Math.random()*2);
    console.log(Math);
}
let comp =playgame();
let player=playgame();
function check_result(){
    if(comp===0&& player ===2){
        return "comp wins!"
    }else if(player===0 && comp===2){
        return "player wins!" 
    } else if(comp===player){
      return "tie!" 
    }else {
        return"invalid input";
    }
}
console.log(check_result());

