export function createGame(){
 return {
  innings:1,
  score:0,
  wk:0,
  ball:0,
  over:0,
  target:null,

  oversLimit:2,
  maxNumber:10,

  batMove:null,
  bowlMove:null,

  history:[],

  matchOver:false,
  winner:null
 };
}

export function resolveBall(state){

 let bat = Number(state.batMove)||0;
 let bowl = Number(state.bowlMove)||0;

 let result;

 if(bat === bowl){
  state.wk++;
  result = "W";
 } else {
  state.score += bat;
  result = bat;
 }

 state.history.push(bat);
 if(state.history.length>10) state.history.shift();

 state.ball++;
 if(state.ball % 6 === 0) state.over++;

 // innings switch
 if(state.innings===1 && (state.over>=state.oversLimit || state.wk>=10)){
  state.target = state.score+1;

  state.innings=2;
  state.score=0;
  state.wk=0;
  state.ball=0;
  state.over=0;
 }

 // match end
 if(state.innings===2){
  if(state.score>=state.target){
    state.matchOver=true;
    state.winner="CHASED";
  }
  if(state.over>=state.oversLimit || state.wk>=10){
    state.matchOver=true;
    if(state.score>=state.target){
      state.winner="CHASED";
    } else {
      state.winner="DEFENDED";
    }
  }
 }

 state.batMove=null;
 state.bowlMove=null;

 return {state,result};
}
