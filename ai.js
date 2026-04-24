export function botMove(state){

 let max = state.maxNumber;

 // pressure logic
 if(state.innings===2){
  let ballsLeft = (state.oversLimit*6) - state.ball;
  let runsLeft = state.target - state.score;

  if(ballsLeft <= 6){
    return Math.floor(Math.random()*max);
  }

  if(runsLeft > ballsLeft){
    return Math.floor(Math.random()*max); // aggressive
  }
 }

 // pattern read
 let last = state.history[state.history.length-1] || 0;

 if(Math.random() < 0.4){
  return last; // try wicket
 }

 return Math.floor(Math.random()*(max+1));
}
