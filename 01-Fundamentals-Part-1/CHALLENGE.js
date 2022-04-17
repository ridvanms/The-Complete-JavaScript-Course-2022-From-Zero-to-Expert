const dolphineAverageScore =(96 + 108 + 89 ) / 3 ;
const koalasAverageScore = (88 + 91 + 123) / 3 ;


if(dolphineAverageScore > koalasAverageScore && dolphineScore >= 100){
  console.log(`The Dolphine team score: ${ dolphineAverageScore } and they are the winner with ${dolphineAverageScore - koalasAverageScore}`);
}else if (koalasAverageScore > dolphineAverageScore && koalasAverageScore >= 100){
  console.log(`The Koala team  team score: ${ koalasAverageScore } and they are the winner with ${koalasAverageScore - dolphineAverageScore} SCORE`);
}else if (dolphineAverageScore === koalasAverageScore && dolphineAverageScore >= 100 && koalasAverageScore >= 100){
  console.log("Draw! They are with same score");
}else {
  console.log(`No one is winner ${ dolphineAverageScore } : DOLPHINE SCORE  and ${ koalasAverageScore } : KOALAS SCORE`);
} 

