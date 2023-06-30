// to get a random number
function getRandom(){
    rand_num=Math.random();
    rand_num=(rand_num*6);
    rand_num=Math.round(rand_num)
    if (rand_num==0){
        console.log("#0 here");
        return rand_num+1;
    }
    else{
        return rand_num;
    }
}



// player1
p1_score=getRandom();
dice_img="./images/dice"+p1_score+".png";
src_img=document.querySelector("src");
document.getElementsByClassName("img1")[0].setAttribute("src",dice_img);
console.log(p1_score + "img set")

// player2
p2_score=getRandom();
dice_img="./images/dice"+p2_score+".png";
src_img=document.querySelector("src");
document.getElementsByClassName("img2")[0].setAttribute("src",dice_img);
console.log(p2_score+"img set")

// Display the winner
if (p1_score === p2_score){
    document.querySelector("h1").innerText="It's a draw!";
}
else if(p1_score > p2_score){
    document.querySelector("h1").innerText="Player 1 won!";
}
else{
    document.querySelector("h1").innerText="Player 2 won!";
}
console.log("execution completed")
