export function botMove(state){

 let max = state.maxNumber;

 // chase logic
 if(state.innings === 2){
  let ballsLeft = (state.oversLimit*6) - state.ball;
  let runsLeft = state.target - state.score;

  if(runsLeft > ballsLeft){
    return Math.floor(Math.random()*(max+1));
  }
 }

 // wicket attempt
 let last = state.history?.[state.history.length-1];

 if(last !== undefined && Math.random() < 0.5){
  return last;
 }

 return Math.floor(Math.random()*(max+1));
}
