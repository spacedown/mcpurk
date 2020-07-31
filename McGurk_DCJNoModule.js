/******************* 
 * Mcgurk_Dcj Test *
 *******************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'McGurk_DCJ';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(expIntroRoutineBegin);
flowScheduler.add(expIntroRoutineEachFrame);
flowScheduler.add(expIntroRoutineEnd);
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin, blockLoopScheduler);
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);
flowScheduler.add(expEndRoutineBegin);
flowScheduler.add(expEndRoutineEachFrame);
flowScheduler.add(expEndRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var expIntroClock;
var expIntro_text;
var expIntro_key_resp;
var blkIntroClock;
var blkIntro_text;
var blkIntro_key_resp;
var aud_Reps;
var vis_Reps;
var AV_Reps;
var fixClock;
var aud_text;
var aud_trialClock;
var aud_sound;
var aud_key_resp;
var vis_trialClock;
var vis_key_resp;
var AV_trialClock;
var AV_key_resp;
var expEndClock;
var expEnd_text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "expIntro"
  expIntroClock = new util.Clock();
  expIntro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'expIntro_text',
    text: '欢迎参加本实验。\n\n按[ SPACE ]继续',
    font: 'Songti SC',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  expIntro_key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blkIntro"
  blkIntroClock = new util.Clock();
  blkIntro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'blkIntro_text',
    text: '继续实验轻按[ SPACE ]',
    font: 'Songti SC',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  blkIntro_key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  aud_Reps = 0;
  vis_Reps = 0;
  AV_Reps = 0;
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  aud_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aud_text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "aud_trial"
  aud_trialClock = new util.Clock();
  aud_sound = new Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  aud_sound.setVolume(1);
  aud_key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  aud_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aud_text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  aud_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aud_text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "vis_trial"
  vis_trialClock = new util.Clock();
  vis_key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  aud_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aud_text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  aud_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aud_text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "AV_trial"
  AV_trialClock = new util.Clock();
  AV_key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  aud_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'aud_text',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "expEnd"
  expEndClock = new util.Clock();
  expEnd_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'expEnd_text',
    text: '实验结束，谢谢！',
    font: 'Songti SC',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var expIntroComponents;
function expIntroRoutineBegin() {
  //------Prepare to start Routine 'expIntro'-------
  t = 0;
  expIntroClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  expIntro_key_resp.keys = undefined;
  expIntro_key_resp.rt = undefined;
  // keep track of which components have finished
  expIntroComponents = [];
  expIntroComponents.push(expIntro_text);
  expIntroComponents.push(expIntro_key_resp);
  
  expIntroComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function expIntroRoutineEachFrame() {
  //------Loop for each frame of Routine 'expIntro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = expIntroClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *expIntro_text* updates
  if (t >= 0.0 && expIntro_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    expIntro_text.tStart = t;  // (not accounting for frame time here)
    expIntro_text.frameNStart = frameN;  // exact frame index
    expIntro_text.setAutoDraw(true);
  }

  
  // *expIntro_key_resp* updates
  if (t >= 0.0 && expIntro_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    expIntro_key_resp.tStart = t;  // (not accounting for frame time here)
    expIntro_key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { expIntro_key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { expIntro_key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { expIntro_key_resp.clearEvents(); });
  }

  if (expIntro_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = expIntro_key_resp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      expIntro_key_resp.keys = theseKeys[0].name;  // just the last key pressed
      expIntro_key_resp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  expIntroComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function expIntroRoutineEnd() {
  //------Ending Routine 'expIntro'-------
  expIntroComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('expIntro_key_resp.keys', expIntro_key_resp.keys);
  if (typeof expIntro_key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('expIntro_key_resp.rt', expIntro_key_resp.rt);
      routineTimer.reset();
      }
  
  expIntro_key_resp.stop();
  // the Routine "expIntro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var block;
var currentLoop;
var trialIterator;
function blockLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'LIST_main.xlsx',
    seed: undefined, name: 'block'});
  psychoJS.experiment.addLoop(block); // add the loop to the experiment
  currentLoop = block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = block[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisBlock = result.value;
    thisScheduler.add(importConditions(block));
    thisScheduler.add(blkIntroRoutineBegin);
    thisScheduler.add(blkIntroRoutineEachFrame);
    thisScheduler.add(blkIntroRoutineEnd);
    const aud_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(aud_trialsLoopBegin, aud_trialsLoopScheduler);
    thisScheduler.add(aud_trialsLoopScheduler);
    thisScheduler.add(aud_trialsLoopEnd);
    const vis_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(vis_trialsLoopBegin, vis_trialsLoopScheduler);
    thisScheduler.add(vis_trialsLoopScheduler);
    thisScheduler.add(vis_trialsLoopEnd);
    const AV_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(AV_trialsLoopBegin, AV_trialsLoopScheduler);
    thisScheduler.add(AV_trialsLoopScheduler);
    thisScheduler.add(AV_trialsLoopEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}

var aud_trials;
function aud_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  aud_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: aud_Reps, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'LIST_aud.xlsx',
    seed: undefined, name: 'aud_trials'});
  psychoJS.experiment.addLoop(aud_trials); // add the loop to the experiment
  currentLoop = aud_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = aud_trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisAud_trial = result.value;
    thisScheduler.add(importConditions(aud_trials));
    thisScheduler.add(fixRoutineBegin);
    thisScheduler.add(fixRoutineEachFrame);
    thisScheduler.add(fixRoutineEnd);
    thisScheduler.add(aud_trialRoutineBegin);
    thisScheduler.add(aud_trialRoutineEachFrame);
    thisScheduler.add(aud_trialRoutineEnd);
    thisScheduler.add(fixRoutineBegin);
    thisScheduler.add(fixRoutineEachFrame);
    thisScheduler.add(fixRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function aud_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(aud_trials);

  return Scheduler.Event.NEXT;
}

var vis_trials;
function vis_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  vis_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: vis_Reps, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'LIST_vis.xlsx',
    seed: undefined, name: 'vis_trials'});
  psychoJS.experiment.addLoop(vis_trials); // add the loop to the experiment
  currentLoop = vis_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = vis_trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisVis_trial = result.value;
    thisScheduler.add(importConditions(vis_trials));
    thisScheduler.add(fixRoutineBegin);
    thisScheduler.add(fixRoutineEachFrame);
    thisScheduler.add(fixRoutineEnd);
    thisScheduler.add(vis_trialRoutineBegin);
    thisScheduler.add(vis_trialRoutineEachFrame);
    thisScheduler.add(vis_trialRoutineEnd);
    thisScheduler.add(fixRoutineBegin);
    thisScheduler.add(fixRoutineEachFrame);
    thisScheduler.add(fixRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function vis_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(vis_trials);

  return Scheduler.Event.NEXT;
}

var AV_trials;
function AV_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  AV_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: AV_Reps, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'LIST_AV.xlsx',
    seed: undefined, name: 'AV_trials'});
  psychoJS.experiment.addLoop(AV_trials); // add the loop to the experiment
  currentLoop = AV_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = AV_trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisAV_trial = result.value;
    thisScheduler.add(importConditions(AV_trials));
    thisScheduler.add(fixRoutineBegin);
    thisScheduler.add(fixRoutineEachFrame);
    thisScheduler.add(fixRoutineEnd);
    thisScheduler.add(AV_trialRoutineBegin);
    thisScheduler.add(AV_trialRoutineEachFrame);
    thisScheduler.add(AV_trialRoutineEnd);
    thisScheduler.add(fixRoutineBegin);
    thisScheduler.add(fixRoutineEachFrame);
    thisScheduler.add(fixRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function AV_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(AV_trials);

  return Scheduler.Event.NEXT;
}


function blockLoopEnd() {
  psychoJS.experiment.removeLoop(block);

  return Scheduler.Event.NEXT;
}

var blkIntroComponents;
function blkIntroRoutineBegin() {
  //------Prepare to start Routine 'blkIntro'-------
  t = 0;
  blkIntroClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  blkIntro_key_resp.keys = undefined;
  blkIntro_key_resp.rt = undefined;
  // keep track of which components have finished
  blkIntroComponents = [];
  blkIntroComponents.push(blkIntro_text);
  blkIntroComponents.push(blkIntro_key_resp);
  
  blkIntroComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function blkIntroRoutineEachFrame() {
  //------Loop for each frame of Routine 'blkIntro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = blkIntroClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *blkIntro_text* updates
  if (t >= 0.0 && blkIntro_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blkIntro_text.tStart = t;  // (not accounting for frame time here)
    blkIntro_text.frameNStart = frameN;  // exact frame index
    blkIntro_text.setAutoDraw(true);
  }

  
  // *blkIntro_key_resp* updates
  if (t >= 0.0 && blkIntro_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blkIntro_key_resp.tStart = t;  // (not accounting for frame time here)
    blkIntro_key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { blkIntro_key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { blkIntro_key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { blkIntro_key_resp.clearEvents(); });
  }

  if (blkIntro_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = blkIntro_key_resp.getKeys({keyList: ['space'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      blkIntro_key_resp.keys = theseKeys[0].name;  // just the last key pressed
      blkIntro_key_resp.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  if ((mod === "aud")) {
      aud_Reps = 10;
      vis_Reps = 0;
      AV_Reps = 0;
  }
  
  if ((mod === "vis")) {
      aud_Reps = 0;
      vis_Reps = 10;
      AV_Reps = 0;
  }
  
  if ((mod === "AV")) {
      aud_Reps = 0;
      vis_Reps = 0;
      AV_Reps = 10;
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  blkIntroComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function blkIntroRoutineEnd() {
  //------Ending Routine 'blkIntro'-------
  blkIntroComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('blkIntro_key_resp.keys', blkIntro_key_resp.keys);
  if (typeof blkIntro_key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('blkIntro_key_resp.rt', blkIntro_key_resp.rt);
      routineTimer.reset();
      }
  
  blkIntro_key_resp.stop();
  // the Routine "blkIntro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var fixComponents;
function fixRoutineBegin() {
  //------Prepare to start Routine 'fix'-------
  t = 0;
  fixClock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.500000);
  // update component parameters for each repeat
  // keep track of which components have finished
  fixComponents = [];
  fixComponents.push(aud_text);
  
  fixComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function fixRoutineEachFrame() {
  //------Loop for each frame of Routine 'fix'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = fixClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *aud_text* updates
  if (t >= 0.0 && aud_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    aud_text.tStart = t;  // (not accounting for frame time here)
    aud_text.frameNStart = frameN;  // exact frame index
    aud_text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (aud_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    aud_text.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  fixComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function fixRoutineEnd() {
  //------Ending Routine 'fix'-------
  fixComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var aud_trialComponents;
function aud_trialRoutineBegin() {
  //------Prepare to start Routine 'aud_trial'-------
  t = 0;
  aud_trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  aud_sound = new Sound({
    win: psychoJS.window,
    value: stim_aud,
    secs: -1,
    });
  aud_sound.setVolume(1);
  aud_key_resp.keys = undefined;
  aud_key_resp.rt = undefined;
  // keep track of which components have finished
  aud_trialComponents = [];
  aud_trialComponents.push(aud_sound);
  aud_trialComponents.push(aud_key_resp);
  
  aud_trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function aud_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'aud_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = aud_trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // start/stop aud_sound
  if (t >= 0 && aud_sound.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    aud_sound.tStart = t;  // (not accounting for frame time here)
    aud_sound.frameNStart = frameN;  // exact frame index
    psychoJS.window.callOnFlip(function(){ aud_sound.play(); });  // screen flip
    aud_sound.status = PsychoJS.Status.STARTED;
  }
  if (t >= (aud_sound.getDuration() + aud_sound.tStart)     && aud_sound.status === PsychoJS.Status.STARTED) {
    aud_sound.stop();  // stop the sound (if longer than duration)
    aud_sound.status = PsychoJS.Status.FINISHED;
  }
  
  // *aud_key_resp* updates
  if (t >= 0.0 && aud_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    aud_key_resp.tStart = t;  // (not accounting for frame time here)
    aud_key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { aud_key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { aud_key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { aud_key_resp.clearEvents(); });
  }

  frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (aud_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    aud_key_resp.status = PsychoJS.Status.FINISHED;
  }

  if (aud_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = aud_key_resp.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      aud_key_resp.keys = theseKeys[0].name;  // just the last key pressed
      aud_key_resp.rt = theseKeys[0].rt;
      // was this 'correct'?
      if (aud_key_resp.keys === correct) {
          aud_key_resp.corr = 1;
      } else {
          aud_key_resp.corr = 0;
      }
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  aud_trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function aud_trialRoutineEnd() {
  //------Ending Routine 'aud_trial'-------
  aud_trialComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  aud_sound.stop();  // ensure sound has stopped at end of routine
  // was no response the correct answer?!
  if (aud_key_resp.keys === undefined) {
    if (['None','none',undefined].includes(correct)) {
       aud_key_resp.corr = 1  // correct non-response
    } else {
       aud_key_resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('aud_key_resp.keys', aud_key_resp.keys);
  psychoJS.experiment.addData('aud_key_resp.corr', aud_key_resp.corr);
  if (typeof aud_key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('aud_key_resp.rt', aud_key_resp.rt);
      }
  
  aud_key_resp.stop();
  // the Routine "aud_trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var vis_movieClock;
var vis_movie;
var vis_trialComponents;
function vis_trialRoutineBegin() {
  //------Prepare to start Routine 'vis_trial'-------
  t = 0;
  vis_trialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  vis_movieClock = new util.Clock();
  vis_movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'vis_movie', 
    movie: stim_vis,
    pos: [0, 0],
    size: [720, 576],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: false,
    });
  vis_key_resp.keys = undefined;
  vis_key_resp.rt = undefined;
  // keep track of which components have finished
  vis_trialComponents = [];
  vis_trialComponents.push(vis_movie);
  vis_trialComponents.push(vis_key_resp);
  
  vis_trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function vis_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'vis_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = vis_trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *vis_movie* updates
  if (t >= 0 && vis_movie.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    vis_movie.tStart = t;  // (not accounting for frame time here)
    vis_movie.frameNStart = frameN;  // exact frame index
    vis_movie.setAutoDraw(true);
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (vis_movie.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    vis_movie.setAutoDraw(false);
  }

  
  // *vis_key_resp* updates
  if (t >= 0 && vis_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    vis_key_resp.tStart = t;  // (not accounting for frame time here)
    vis_key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { vis_key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { vis_key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { vis_key_resp.clearEvents(); });
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (vis_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    vis_key_resp.status = PsychoJS.Status.FINISHED;
  }

  if (vis_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = vis_key_resp.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      vis_key_resp.keys = theseKeys[0].name;  // just the last key pressed
      vis_key_resp.rt = theseKeys[0].rt;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  vis_trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function vis_trialRoutineEnd() {
  //------Ending Routine 'vis_trial'-------
  vis_trialComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('vis_key_resp.keys', vis_key_resp.keys);
  if (typeof vis_key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('vis_key_resp.rt', vis_key_resp.rt);
      }
  
  vis_key_resp.stop();
  return Scheduler.Event.NEXT;
}

var AV_movieClock;
var AV_movie;
var AV_trialComponents;
function AV_trialRoutineBegin() {
  //------Prepare to start Routine 'AV_trial'-------
  t = 0;
  AV_trialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(4.000000);
  // update component parameters for each repeat
  AV_movieClock = new util.Clock();
  AV_movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'AV_movie', 
    movie: stim_AV,
    pos: [0, 0],
    size: [720, 576],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: false,
    });
  AV_key_resp.keys = undefined;
  AV_key_resp.rt = undefined;
  // keep track of which components have finished
  AV_trialComponents = [];
  AV_trialComponents.push(AV_movie);
  AV_trialComponents.push(AV_key_resp);
  
  AV_trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function AV_trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'AV_trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = AV_trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *AV_movie* updates
  if (t >= 0 && AV_movie.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    AV_movie.tStart = t;  // (not accounting for frame time here)
    AV_movie.frameNStart = frameN;  // exact frame index
    AV_movie.setAutoDraw(true);
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (AV_movie.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    AV_movie.setAutoDraw(false);
  }

  
  // *AV_key_resp* updates
  if (t >= 0 && AV_key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    AV_key_resp.tStart = t;  // (not accounting for frame time here)
    AV_key_resp.frameNStart = frameN;  // exact frame index
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { AV_key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { AV_key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { AV_key_resp.clearEvents(); });
  }

  frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (AV_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    AV_key_resp.status = PsychoJS.Status.FINISHED;
  }

  if (AV_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = AV_key_resp.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      AV_key_resp.keys = theseKeys[0].name;  // just the last key pressed
      AV_key_resp.rt = theseKeys[0].rt;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  AV_trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function AV_trialRoutineEnd() {
  //------Ending Routine 'AV_trial'-------
  AV_trialComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('AV_key_resp.keys', AV_key_resp.keys);
  if (typeof AV_key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('AV_key_resp.rt', AV_key_resp.rt);
      }
  
  AV_key_resp.stop();
  return Scheduler.Event.NEXT;
}

var expEndComponents;
function expEndRoutineBegin() {
  //------Prepare to start Routine 'expEnd'-------
  t = 0;
  expEndClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  expEndComponents = [];
  expEndComponents.push(expEnd_text);
  
  expEndComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function expEndRoutineEachFrame() {
  //------Loop for each frame of Routine 'expEnd'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = expEndClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *expEnd_text* updates
  if (t >= 0.0 && expEnd_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    expEnd_text.tStart = t;  // (not accounting for frame time here)
    expEnd_text.frameNStart = frameN;  // exact frame index
    expEnd_text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (expEnd_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    expEnd_text.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  expEndComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function expEndRoutineEnd() {
  //------Ending Routine 'expEnd'-------
  expEndComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
