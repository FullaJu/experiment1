/******************** 
 * Experiment1 *
 ********************/


// store info about the experiment session:
let expName = 'experiment1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    '性别': ["\u7537", "\u5973"],
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code
let random_value = Math.floor(Math.random() * 4);

if ((random_value === 0)) {
    tReps = 1;
    atReps = 0;
    dReps = 0;
    abReps = 0;
} else {
    if ((random_value === 1)) {
        tReps = 0;
        atReps = 1;
        dReps = 0;
        abReps = 0;
    } else {
        if ((random_value === 2)) {
            tReps = 0;
            atReps = 0;
            dReps = 1;
            abReps = 0;
        } else {
            if ((random_value === 3)) {
                tReps = 0;
                atReps = 0;
                dReps = 0;
                abReps = 1;
            }
        }
    }
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
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
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trustworthyLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trustworthyLoopBegin(trustworthyLoopScheduler));
flowScheduler.add(trustworthyLoopScheduler);
flowScheduler.add(trustworthyLoopEnd);



const attractivenessLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(attractivenessLoopBegin(attractivenessLoopScheduler));
flowScheduler.add(attractivenessLoopScheduler);
flowScheduler.add(attractivenessLoopEnd);



const dominanceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(dominanceLoopBegin(dominanceLoopScheduler));
flowScheduler.add(dominanceLoopScheduler);
flowScheduler.add(dominanceLoopEnd);



const abilityLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(abilityLoopBegin(abilityLoopScheduler));
flowScheduler.add(abilityLoopScheduler);
flowScheduler.add(abilityLoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_80.xlsx', 'path': 'conditions_80.xlsx'},
    {'name': 'stimuli/1-2-1.jpg', 'path': 'stimuli/1-2-1.jpg'},
    {'name': 'stimuli/1-2-2.jpg', 'path': 'stimuli/1-2-2.jpg'},
    {'name': 'stimuli/1-2-3.jpg', 'path': 'stimuli/1-2-3.jpg'},
    {'name': 'stimuli/1-2-4.jpg', 'path': 'stimuli/1-2-4.jpg'},
    {'name': 'stimuli/1-2-5.jpg', 'path': 'stimuli/1-2-5.jpg'},
    {'name': 'stimuli/1-2-6.jpg', 'path': 'stimuli/1-2-6.jpg'},
    {'name': 'stimuli/1-2-7.jpg', 'path': 'stimuli/1-2-7.jpg'},
    {'name': 'stimuli/1-2-8.jpg', 'path': 'stimuli/1-2-8.jpg'},
    {'name': 'stimuli/0-3-1.jpg', 'path': 'stimuli/0-3-1.jpg'},
    {'name': 'stimuli/0-3-2.jpg', 'path': 'stimuli/0-3-2.jpg'},
    {'name': 'stimuli/0-3-3.jpg', 'path': 'stimuli/0-3-3.jpg'},
    {'name': 'stimuli/0-3-4.jpg', 'path': 'stimuli/0-3-4.jpg'},
    {'name': 'stimuli/0-3-5.jpg', 'path': 'stimuli/0-3-5.jpg'},
    {'name': 'stimuli/0-3-6.jpg', 'path': 'stimuli/0-3-6.jpg'},
    {'name': 'stimuli/0-3-7.jpg', 'path': 'stimuli/0-3-7.jpg'},
    {'name': 'stimuli/0-3-8.jpg', 'path': 'stimuli/0-3-8.jpg'},
    {'name': 'stimuli/1-4-1.jpg', 'path': 'stimuli/1-4-1.jpg'},
    {'name': 'stimuli/1-4-2.jpg', 'path': 'stimuli/1-4-2.jpg'},
    {'name': 'stimuli/1-4-3.jpg', 'path': 'stimuli/1-4-3.jpg'},
    {'name': 'stimuli/1-4-4.jpg', 'path': 'stimuli/1-4-4.jpg'},
    {'name': 'stimuli/1-4-5.jpg', 'path': 'stimuli/1-4-5.jpg'},
    {'name': 'stimuli/1-4-6.jpg', 'path': 'stimuli/1-4-6.jpg'},
    {'name': 'stimuli/1-4-7.jpg', 'path': 'stimuli/1-4-7.jpg'},
    {'name': 'stimuli/1-4-8.jpg', 'path': 'stimuli/1-4-8.jpg'},
    {'name': 'stimuli/0-6-1.jpg', 'path': 'stimuli/0-6-1.jpg'},
    {'name': 'stimuli/0-6-2.jpg', 'path': 'stimuli/0-6-2.jpg'},
    {'name': 'stimuli/0-6-3.jpg', 'path': 'stimuli/0-6-3.jpg'},
    {'name': 'stimuli/0-6-4.jpg', 'path': 'stimuli/0-6-4.jpg'},
    {'name': 'stimuli/0-6-5.jpg', 'path': 'stimuli/0-6-5.jpg'},
    {'name': 'stimuli/0-6-6.jpg', 'path': 'stimuli/0-6-6.jpg'},
    {'name': 'stimuli/0-6-7.jpg', 'path': 'stimuli/0-6-7.jpg'},
    {'name': 'stimuli/0-6-8.jpg', 'path': 'stimuli/0-6-8.jpg'},
    {'name': 'stimuli/1-7-1.jpg', 'path': 'stimuli/1-7-1.jpg'},
    {'name': 'stimuli/1-7-2.jpg', 'path': 'stimuli/1-7-2.jpg'},
    {'name': 'stimuli/1-7-3.jpg', 'path': 'stimuli/1-7-3.jpg'},
    {'name': 'stimuli/1-7-4.jpg', 'path': 'stimuli/1-7-4.jpg'},
    {'name': 'stimuli/1-7-5.jpg', 'path': 'stimuli/1-7-5.jpg'},
    {'name': 'stimuli/1-7-6.jpg', 'path': 'stimuli/1-7-6.jpg'},
    {'name': 'stimuli/1-7-7.jpg', 'path': 'stimuli/1-7-7.jpg'},
    {'name': 'stimuli/1-7-8.jpg', 'path': 'stimuli/1-7-8.jpg'},
    {'name': 'stimuli/1-8-1.jpg', 'path': 'stimuli/1-8-1.jpg'},
    {'name': 'stimuli/1-8-2.jpg', 'path': 'stimuli/1-8-2.jpg'},
    {'name': 'stimuli/1-8-3.jpg', 'path': 'stimuli/1-8-3.jpg'},
    {'name': 'stimuli/1-8-4.jpg', 'path': 'stimuli/1-8-4.jpg'},
    {'name': 'stimuli/1-8-5.jpg', 'path': 'stimuli/1-8-5.jpg'},
    {'name': 'stimuli/1-8-6.jpg', 'path': 'stimuli/1-8-6.jpg'},
    {'name': 'stimuli/1-8-7.jpg', 'path': 'stimuli/1-8-7.jpg'},
    {'name': 'stimuli/1-8-8.jpg', 'path': 'stimuli/1-8-8.jpg'},
    {'name': 'stimuli/0-9-1.jpg', 'path': 'stimuli/0-9-1.jpg'},
    {'name': 'stimuli/0-9-2.jpg', 'path': 'stimuli/0-9-2.jpg'},
    {'name': 'stimuli/0-9-3.jpg', 'path': 'stimuli/0-9-3.jpg'},
    {'name': 'stimuli/0-9-4.jpg', 'path': 'stimuli/0-9-4.jpg'},
    {'name': 'stimuli/0-9-5.jpg', 'path': 'stimuli/0-9-5.jpg'},
    {'name': 'stimuli/0-9-6.jpg', 'path': 'stimuli/0-9-6.jpg'},
    {'name': 'stimuli/0-9-7.jpg', 'path': 'stimuli/0-9-7.jpg'},
    {'name': 'stimuli/0-9-8.jpg', 'path': 'stimuli/0-9-8.jpg'},
    {'name': 'stimuli/0-10-1.jpg', 'path': 'stimuli/0-10-1.jpg'},
    {'name': 'stimuli/0-10-2.jpg', 'path': 'stimuli/0-10-2.jpg'},
    {'name': 'stimuli/0-10-3.jpg', 'path': 'stimuli/0-10-3.jpg'},
    {'name': 'stimuli/0-10-4.jpg', 'path': 'stimuli/0-10-4.jpg'},
    {'name': 'stimuli/0-10-5.jpg', 'path': 'stimuli/0-10-5.jpg'},
    {'name': 'stimuli/0-10-6.jpg', 'path': 'stimuli/0-10-6.jpg'},
    {'name': 'stimuli/0-10-7.jpg', 'path': 'stimuli/0-10-7.jpg'},
    {'name': 'stimuli/0-10-8.jpg', 'path': 'stimuli/0-10-8.jpg'},
    {'name': 'stimuli/1-14-1.jpg', 'path': 'stimuli/1-14-1.jpg'},
    {'name': 'stimuli/1-14-2.jpg', 'path': 'stimuli/1-14-2.jpg'},
    {'name': 'stimuli/1-14-3.jpg', 'path': 'stimuli/1-14-3.jpg'},
    {'name': 'stimuli/1-14-4.jpg', 'path': 'stimuli/1-14-4.jpg'},
    {'name': 'stimuli/1-14-5.jpg', 'path': 'stimuli/1-14-5.jpg'},
    {'name': 'stimuli/1-14-6.jpg', 'path': 'stimuli/1-14-6.jpg'},
    {'name': 'stimuli/1-14-7.jpg', 'path': 'stimuli/1-14-7.jpg'},
    {'name': 'stimuli/1-14-8.jpg', 'path': 'stimuli/1-14-8.jpg'},
    {'name': 'stimuli/0-15-1.jpg', 'path': 'stimuli/0-15-1.jpg'},
    {'name': 'stimuli/0-15-2.jpg', 'path': 'stimuli/0-15-2.jpg'},
    {'name': 'stimuli/0-15-3.jpg', 'path': 'stimuli/0-15-3.jpg'},
    {'name': 'stimuli/0-15-4.jpg', 'path': 'stimuli/0-15-4.jpg'},
    {'name': 'stimuli/0-15-5.jpg', 'path': 'stimuli/0-15-5.jpg'},
    {'name': 'stimuli/0-15-6.jpg', 'path': 'stimuli/0-15-6.jpg'},
    {'name': 'stimuli/0-15-7.jpg', 'path': 'stimuli/0-15-7.jpg'},
    {'name': 'stimuli/0-15-8.jpg', 'path': 'stimuli/0-15-8.jpg'},
    {'name': 'conditions_80.xlsx', 'path': 'conditions_80.xlsx'},
    {'name': 'stimuli/1-2-1.jpg', 'path': 'stimuli/1-2-1.jpg'},
    {'name': 'stimuli/1-2-2.jpg', 'path': 'stimuli/1-2-2.jpg'},
    {'name': 'stimuli/1-2-3.jpg', 'path': 'stimuli/1-2-3.jpg'},
    {'name': 'stimuli/1-2-4.jpg', 'path': 'stimuli/1-2-4.jpg'},
    {'name': 'stimuli/1-2-5.jpg', 'path': 'stimuli/1-2-5.jpg'},
    {'name': 'stimuli/1-2-6.jpg', 'path': 'stimuli/1-2-6.jpg'},
    {'name': 'stimuli/1-2-7.jpg', 'path': 'stimuli/1-2-7.jpg'},
    {'name': 'stimuli/1-2-8.jpg', 'path': 'stimuli/1-2-8.jpg'},
    {'name': 'stimuli/0-3-1.jpg', 'path': 'stimuli/0-3-1.jpg'},
    {'name': 'stimuli/0-3-2.jpg', 'path': 'stimuli/0-3-2.jpg'},
    {'name': 'stimuli/0-3-3.jpg', 'path': 'stimuli/0-3-3.jpg'},
    {'name': 'stimuli/0-3-4.jpg', 'path': 'stimuli/0-3-4.jpg'},
    {'name': 'stimuli/0-3-5.jpg', 'path': 'stimuli/0-3-5.jpg'},
    {'name': 'stimuli/0-3-6.jpg', 'path': 'stimuli/0-3-6.jpg'},
    {'name': 'stimuli/0-3-7.jpg', 'path': 'stimuli/0-3-7.jpg'},
    {'name': 'stimuli/0-3-8.jpg', 'path': 'stimuli/0-3-8.jpg'},
    {'name': 'stimuli/1-4-1.jpg', 'path': 'stimuli/1-4-1.jpg'},
    {'name': 'stimuli/1-4-2.jpg', 'path': 'stimuli/1-4-2.jpg'},
    {'name': 'stimuli/1-4-3.jpg', 'path': 'stimuli/1-4-3.jpg'},
    {'name': 'stimuli/1-4-4.jpg', 'path': 'stimuli/1-4-4.jpg'},
    {'name': 'stimuli/1-4-5.jpg', 'path': 'stimuli/1-4-5.jpg'},
    {'name': 'stimuli/1-4-6.jpg', 'path': 'stimuli/1-4-6.jpg'},
    {'name': 'stimuli/1-4-7.jpg', 'path': 'stimuli/1-4-7.jpg'},
    {'name': 'stimuli/1-4-8.jpg', 'path': 'stimuli/1-4-8.jpg'},
    {'name': 'stimuli/0-6-1.jpg', 'path': 'stimuli/0-6-1.jpg'},
    {'name': 'stimuli/0-6-2.jpg', 'path': 'stimuli/0-6-2.jpg'},
    {'name': 'stimuli/0-6-3.jpg', 'path': 'stimuli/0-6-3.jpg'},
    {'name': 'stimuli/0-6-4.jpg', 'path': 'stimuli/0-6-4.jpg'},
    {'name': 'stimuli/0-6-5.jpg', 'path': 'stimuli/0-6-5.jpg'},
    {'name': 'stimuli/0-6-6.jpg', 'path': 'stimuli/0-6-6.jpg'},
    {'name': 'stimuli/0-6-7.jpg', 'path': 'stimuli/0-6-7.jpg'},
    {'name': 'stimuli/0-6-8.jpg', 'path': 'stimuli/0-6-8.jpg'},
    {'name': 'stimuli/1-7-1.jpg', 'path': 'stimuli/1-7-1.jpg'},
    {'name': 'stimuli/1-7-2.jpg', 'path': 'stimuli/1-7-2.jpg'},
    {'name': 'stimuli/1-7-3.jpg', 'path': 'stimuli/1-7-3.jpg'},
    {'name': 'stimuli/1-7-4.jpg', 'path': 'stimuli/1-7-4.jpg'},
    {'name': 'stimuli/1-7-5.jpg', 'path': 'stimuli/1-7-5.jpg'},
    {'name': 'stimuli/1-7-6.jpg', 'path': 'stimuli/1-7-6.jpg'},
    {'name': 'stimuli/1-7-7.jpg', 'path': 'stimuli/1-7-7.jpg'},
    {'name': 'stimuli/1-7-8.jpg', 'path': 'stimuli/1-7-8.jpg'},
    {'name': 'stimuli/1-8-1.jpg', 'path': 'stimuli/1-8-1.jpg'},
    {'name': 'stimuli/1-8-2.jpg', 'path': 'stimuli/1-8-2.jpg'},
    {'name': 'stimuli/1-8-3.jpg', 'path': 'stimuli/1-8-3.jpg'},
    {'name': 'stimuli/1-8-4.jpg', 'path': 'stimuli/1-8-4.jpg'},
    {'name': 'stimuli/1-8-5.jpg', 'path': 'stimuli/1-8-5.jpg'},
    {'name': 'stimuli/1-8-6.jpg', 'path': 'stimuli/1-8-6.jpg'},
    {'name': 'stimuli/1-8-7.jpg', 'path': 'stimuli/1-8-7.jpg'},
    {'name': 'stimuli/1-8-8.jpg', 'path': 'stimuli/1-8-8.jpg'},
    {'name': 'stimuli/0-9-1.jpg', 'path': 'stimuli/0-9-1.jpg'},
    {'name': 'stimuli/0-9-2.jpg', 'path': 'stimuli/0-9-2.jpg'},
    {'name': 'stimuli/0-9-3.jpg', 'path': 'stimuli/0-9-3.jpg'},
    {'name': 'stimuli/0-9-4.jpg', 'path': 'stimuli/0-9-4.jpg'},
    {'name': 'stimuli/0-9-5.jpg', 'path': 'stimuli/0-9-5.jpg'},
    {'name': 'stimuli/0-9-6.jpg', 'path': 'stimuli/0-9-6.jpg'},
    {'name': 'stimuli/0-9-7.jpg', 'path': 'stimuli/0-9-7.jpg'},
    {'name': 'stimuli/0-9-8.jpg', 'path': 'stimuli/0-9-8.jpg'},
    {'name': 'stimuli/0-10-1.jpg', 'path': 'stimuli/0-10-1.jpg'},
    {'name': 'stimuli/0-10-2.jpg', 'path': 'stimuli/0-10-2.jpg'},
    {'name': 'stimuli/0-10-3.jpg', 'path': 'stimuli/0-10-3.jpg'},
    {'name': 'stimuli/0-10-4.jpg', 'path': 'stimuli/0-10-4.jpg'},
    {'name': 'stimuli/0-10-5.jpg', 'path': 'stimuli/0-10-5.jpg'},
    {'name': 'stimuli/0-10-6.jpg', 'path': 'stimuli/0-10-6.jpg'},
    {'name': 'stimuli/0-10-7.jpg', 'path': 'stimuli/0-10-7.jpg'},
    {'name': 'stimuli/0-10-8.jpg', 'path': 'stimuli/0-10-8.jpg'},
    {'name': 'stimuli/1-14-1.jpg', 'path': 'stimuli/1-14-1.jpg'},
    {'name': 'stimuli/1-14-2.jpg', 'path': 'stimuli/1-14-2.jpg'},
    {'name': 'stimuli/1-14-3.jpg', 'path': 'stimuli/1-14-3.jpg'},
    {'name': 'stimuli/1-14-4.jpg', 'path': 'stimuli/1-14-4.jpg'},
    {'name': 'stimuli/1-14-5.jpg', 'path': 'stimuli/1-14-5.jpg'},
    {'name': 'stimuli/1-14-6.jpg', 'path': 'stimuli/1-14-6.jpg'},
    {'name': 'stimuli/1-14-7.jpg', 'path': 'stimuli/1-14-7.jpg'},
    {'name': 'stimuli/1-14-8.jpg', 'path': 'stimuli/1-14-8.jpg'},
    {'name': 'stimuli/0-15-1.jpg', 'path': 'stimuli/0-15-1.jpg'},
    {'name': 'stimuli/0-15-2.jpg', 'path': 'stimuli/0-15-2.jpg'},
    {'name': 'stimuli/0-15-3.jpg', 'path': 'stimuli/0-15-3.jpg'},
    {'name': 'stimuli/0-15-4.jpg', 'path': 'stimuli/0-15-4.jpg'},
    {'name': 'stimuli/0-15-5.jpg', 'path': 'stimuli/0-15-5.jpg'},
    {'name': 'stimuli/0-15-6.jpg', 'path': 'stimuli/0-15-6.jpg'},
    {'name': 'stimuli/0-15-7.jpg', 'path': 'stimuli/0-15-7.jpg'},
    {'name': 'stimuli/0-15-8.jpg', 'path': 'stimuli/0-15-8.jpg'},
    {'name': 'conditions_80.xlsx', 'path': 'conditions_80.xlsx'},
    {'name': 'stimuli/1-2-1.jpg', 'path': 'stimuli/1-2-1.jpg'},
    {'name': 'stimuli/1-2-2.jpg', 'path': 'stimuli/1-2-2.jpg'},
    {'name': 'stimuli/1-2-3.jpg', 'path': 'stimuli/1-2-3.jpg'},
    {'name': 'stimuli/1-2-4.jpg', 'path': 'stimuli/1-2-4.jpg'},
    {'name': 'stimuli/1-2-5.jpg', 'path': 'stimuli/1-2-5.jpg'},
    {'name': 'stimuli/1-2-6.jpg', 'path': 'stimuli/1-2-6.jpg'},
    {'name': 'stimuli/1-2-7.jpg', 'path': 'stimuli/1-2-7.jpg'},
    {'name': 'stimuli/1-2-8.jpg', 'path': 'stimuli/1-2-8.jpg'},
    {'name': 'stimuli/0-3-1.jpg', 'path': 'stimuli/0-3-1.jpg'},
    {'name': 'stimuli/0-3-2.jpg', 'path': 'stimuli/0-3-2.jpg'},
    {'name': 'stimuli/0-3-3.jpg', 'path': 'stimuli/0-3-3.jpg'},
    {'name': 'stimuli/0-3-4.jpg', 'path': 'stimuli/0-3-4.jpg'},
    {'name': 'stimuli/0-3-5.jpg', 'path': 'stimuli/0-3-5.jpg'},
    {'name': 'stimuli/0-3-6.jpg', 'path': 'stimuli/0-3-6.jpg'},
    {'name': 'stimuli/0-3-7.jpg', 'path': 'stimuli/0-3-7.jpg'},
    {'name': 'stimuli/0-3-8.jpg', 'path': 'stimuli/0-3-8.jpg'},
    {'name': 'stimuli/1-4-1.jpg', 'path': 'stimuli/1-4-1.jpg'},
    {'name': 'stimuli/1-4-2.jpg', 'path': 'stimuli/1-4-2.jpg'},
    {'name': 'stimuli/1-4-3.jpg', 'path': 'stimuli/1-4-3.jpg'},
    {'name': 'stimuli/1-4-4.jpg', 'path': 'stimuli/1-4-4.jpg'},
    {'name': 'stimuli/1-4-5.jpg', 'path': 'stimuli/1-4-5.jpg'},
    {'name': 'stimuli/1-4-6.jpg', 'path': 'stimuli/1-4-6.jpg'},
    {'name': 'stimuli/1-4-7.jpg', 'path': 'stimuli/1-4-7.jpg'},
    {'name': 'stimuli/1-4-8.jpg', 'path': 'stimuli/1-4-8.jpg'},
    {'name': 'stimuli/0-6-1.jpg', 'path': 'stimuli/0-6-1.jpg'},
    {'name': 'stimuli/0-6-2.jpg', 'path': 'stimuli/0-6-2.jpg'},
    {'name': 'stimuli/0-6-3.jpg', 'path': 'stimuli/0-6-3.jpg'},
    {'name': 'stimuli/0-6-4.jpg', 'path': 'stimuli/0-6-4.jpg'},
    {'name': 'stimuli/0-6-5.jpg', 'path': 'stimuli/0-6-5.jpg'},
    {'name': 'stimuli/0-6-6.jpg', 'path': 'stimuli/0-6-6.jpg'},
    {'name': 'stimuli/0-6-7.jpg', 'path': 'stimuli/0-6-7.jpg'},
    {'name': 'stimuli/0-6-8.jpg', 'path': 'stimuli/0-6-8.jpg'},
    {'name': 'stimuli/1-7-1.jpg', 'path': 'stimuli/1-7-1.jpg'},
    {'name': 'stimuli/1-7-2.jpg', 'path': 'stimuli/1-7-2.jpg'},
    {'name': 'stimuli/1-7-3.jpg', 'path': 'stimuli/1-7-3.jpg'},
    {'name': 'stimuli/1-7-4.jpg', 'path': 'stimuli/1-7-4.jpg'},
    {'name': 'stimuli/1-7-5.jpg', 'path': 'stimuli/1-7-5.jpg'},
    {'name': 'stimuli/1-7-6.jpg', 'path': 'stimuli/1-7-6.jpg'},
    {'name': 'stimuli/1-7-7.jpg', 'path': 'stimuli/1-7-7.jpg'},
    {'name': 'stimuli/1-7-8.jpg', 'path': 'stimuli/1-7-8.jpg'},
    {'name': 'stimuli/1-8-1.jpg', 'path': 'stimuli/1-8-1.jpg'},
    {'name': 'stimuli/1-8-2.jpg', 'path': 'stimuli/1-8-2.jpg'},
    {'name': 'stimuli/1-8-3.jpg', 'path': 'stimuli/1-8-3.jpg'},
    {'name': 'stimuli/1-8-4.jpg', 'path': 'stimuli/1-8-4.jpg'},
    {'name': 'stimuli/1-8-5.jpg', 'path': 'stimuli/1-8-5.jpg'},
    {'name': 'stimuli/1-8-6.jpg', 'path': 'stimuli/1-8-6.jpg'},
    {'name': 'stimuli/1-8-7.jpg', 'path': 'stimuli/1-8-7.jpg'},
    {'name': 'stimuli/1-8-8.jpg', 'path': 'stimuli/1-8-8.jpg'},
    {'name': 'stimuli/0-9-1.jpg', 'path': 'stimuli/0-9-1.jpg'},
    {'name': 'stimuli/0-9-2.jpg', 'path': 'stimuli/0-9-2.jpg'},
    {'name': 'stimuli/0-9-3.jpg', 'path': 'stimuli/0-9-3.jpg'},
    {'name': 'stimuli/0-9-4.jpg', 'path': 'stimuli/0-9-4.jpg'},
    {'name': 'stimuli/0-9-5.jpg', 'path': 'stimuli/0-9-5.jpg'},
    {'name': 'stimuli/0-9-6.jpg', 'path': 'stimuli/0-9-6.jpg'},
    {'name': 'stimuli/0-9-7.jpg', 'path': 'stimuli/0-9-7.jpg'},
    {'name': 'stimuli/0-9-8.jpg', 'path': 'stimuli/0-9-8.jpg'},
    {'name': 'stimuli/0-10-1.jpg', 'path': 'stimuli/0-10-1.jpg'},
    {'name': 'stimuli/0-10-2.jpg', 'path': 'stimuli/0-10-2.jpg'},
    {'name': 'stimuli/0-10-3.jpg', 'path': 'stimuli/0-10-3.jpg'},
    {'name': 'stimuli/0-10-4.jpg', 'path': 'stimuli/0-10-4.jpg'},
    {'name': 'stimuli/0-10-5.jpg', 'path': 'stimuli/0-10-5.jpg'},
    {'name': 'stimuli/0-10-6.jpg', 'path': 'stimuli/0-10-6.jpg'},
    {'name': 'stimuli/0-10-7.jpg', 'path': 'stimuli/0-10-7.jpg'},
    {'name': 'stimuli/0-10-8.jpg', 'path': 'stimuli/0-10-8.jpg'},
    {'name': 'stimuli/1-14-1.jpg', 'path': 'stimuli/1-14-1.jpg'},
    {'name': 'stimuli/1-14-2.jpg', 'path': 'stimuli/1-14-2.jpg'},
    {'name': 'stimuli/1-14-3.jpg', 'path': 'stimuli/1-14-3.jpg'},
    {'name': 'stimuli/1-14-4.jpg', 'path': 'stimuli/1-14-4.jpg'},
    {'name': 'stimuli/1-14-5.jpg', 'path': 'stimuli/1-14-5.jpg'},
    {'name': 'stimuli/1-14-6.jpg', 'path': 'stimuli/1-14-6.jpg'},
    {'name': 'stimuli/1-14-7.jpg', 'path': 'stimuli/1-14-7.jpg'},
    {'name': 'stimuli/1-14-8.jpg', 'path': 'stimuli/1-14-8.jpg'},
    {'name': 'stimuli/0-15-1.jpg', 'path': 'stimuli/0-15-1.jpg'},
    {'name': 'stimuli/0-15-2.jpg', 'path': 'stimuli/0-15-2.jpg'},
    {'name': 'stimuli/0-15-3.jpg', 'path': 'stimuli/0-15-3.jpg'},
    {'name': 'stimuli/0-15-4.jpg', 'path': 'stimuli/0-15-4.jpg'},
    {'name': 'stimuli/0-15-5.jpg', 'path': 'stimuli/0-15-5.jpg'},
    {'name': 'stimuli/0-15-6.jpg', 'path': 'stimuli/0-15-6.jpg'},
    {'name': 'stimuli/0-15-7.jpg', 'path': 'stimuli/0-15-7.jpg'},
    {'name': 'stimuli/0-15-8.jpg', 'path': 'stimuli/0-15-8.jpg'},
    {'name': 'conditions_80.xlsx', 'path': 'conditions_80.xlsx'},
    {'name': 'stimuli/1-2-1.jpg', 'path': 'stimuli/1-2-1.jpg'},
    {'name': 'stimuli/1-2-2.jpg', 'path': 'stimuli/1-2-2.jpg'},
    {'name': 'stimuli/1-2-3.jpg', 'path': 'stimuli/1-2-3.jpg'},
    {'name': 'stimuli/1-2-4.jpg', 'path': 'stimuli/1-2-4.jpg'},
    {'name': 'stimuli/1-2-5.jpg', 'path': 'stimuli/1-2-5.jpg'},
    {'name': 'stimuli/1-2-6.jpg', 'path': 'stimuli/1-2-6.jpg'},
    {'name': 'stimuli/1-2-7.jpg', 'path': 'stimuli/1-2-7.jpg'},
    {'name': 'stimuli/1-2-8.jpg', 'path': 'stimuli/1-2-8.jpg'},
    {'name': 'stimuli/0-3-1.jpg', 'path': 'stimuli/0-3-1.jpg'},
    {'name': 'stimuli/0-3-2.jpg', 'path': 'stimuli/0-3-2.jpg'},
    {'name': 'stimuli/0-3-3.jpg', 'path': 'stimuli/0-3-3.jpg'},
    {'name': 'stimuli/0-3-4.jpg', 'path': 'stimuli/0-3-4.jpg'},
    {'name': 'stimuli/0-3-5.jpg', 'path': 'stimuli/0-3-5.jpg'},
    {'name': 'stimuli/0-3-6.jpg', 'path': 'stimuli/0-3-6.jpg'},
    {'name': 'stimuli/0-3-7.jpg', 'path': 'stimuli/0-3-7.jpg'},
    {'name': 'stimuli/0-3-8.jpg', 'path': 'stimuli/0-3-8.jpg'},
    {'name': 'stimuli/1-4-1.jpg', 'path': 'stimuli/1-4-1.jpg'},
    {'name': 'stimuli/1-4-2.jpg', 'path': 'stimuli/1-4-2.jpg'},
    {'name': 'stimuli/1-4-3.jpg', 'path': 'stimuli/1-4-3.jpg'},
    {'name': 'stimuli/1-4-4.jpg', 'path': 'stimuli/1-4-4.jpg'},
    {'name': 'stimuli/1-4-5.jpg', 'path': 'stimuli/1-4-5.jpg'},
    {'name': 'stimuli/1-4-6.jpg', 'path': 'stimuli/1-4-6.jpg'},
    {'name': 'stimuli/1-4-7.jpg', 'path': 'stimuli/1-4-7.jpg'},
    {'name': 'stimuli/1-4-8.jpg', 'path': 'stimuli/1-4-8.jpg'},
    {'name': 'stimuli/0-6-1.jpg', 'path': 'stimuli/0-6-1.jpg'},
    {'name': 'stimuli/0-6-2.jpg', 'path': 'stimuli/0-6-2.jpg'},
    {'name': 'stimuli/0-6-3.jpg', 'path': 'stimuli/0-6-3.jpg'},
    {'name': 'stimuli/0-6-4.jpg', 'path': 'stimuli/0-6-4.jpg'},
    {'name': 'stimuli/0-6-5.jpg', 'path': 'stimuli/0-6-5.jpg'},
    {'name': 'stimuli/0-6-6.jpg', 'path': 'stimuli/0-6-6.jpg'},
    {'name': 'stimuli/0-6-7.jpg', 'path': 'stimuli/0-6-7.jpg'},
    {'name': 'stimuli/0-6-8.jpg', 'path': 'stimuli/0-6-8.jpg'},
    {'name': 'stimuli/1-7-1.jpg', 'path': 'stimuli/1-7-1.jpg'},
    {'name': 'stimuli/1-7-2.jpg', 'path': 'stimuli/1-7-2.jpg'},
    {'name': 'stimuli/1-7-3.jpg', 'path': 'stimuli/1-7-3.jpg'},
    {'name': 'stimuli/1-7-4.jpg', 'path': 'stimuli/1-7-4.jpg'},
    {'name': 'stimuli/1-7-5.jpg', 'path': 'stimuli/1-7-5.jpg'},
    {'name': 'stimuli/1-7-6.jpg', 'path': 'stimuli/1-7-6.jpg'},
    {'name': 'stimuli/1-7-7.jpg', 'path': 'stimuli/1-7-7.jpg'},
    {'name': 'stimuli/1-7-8.jpg', 'path': 'stimuli/1-7-8.jpg'},
    {'name': 'stimuli/1-8-1.jpg', 'path': 'stimuli/1-8-1.jpg'},
    {'name': 'stimuli/1-8-2.jpg', 'path': 'stimuli/1-8-2.jpg'},
    {'name': 'stimuli/1-8-3.jpg', 'path': 'stimuli/1-8-3.jpg'},
    {'name': 'stimuli/1-8-4.jpg', 'path': 'stimuli/1-8-4.jpg'},
    {'name': 'stimuli/1-8-5.jpg', 'path': 'stimuli/1-8-5.jpg'},
    {'name': 'stimuli/1-8-6.jpg', 'path': 'stimuli/1-8-6.jpg'},
    {'name': 'stimuli/1-8-7.jpg', 'path': 'stimuli/1-8-7.jpg'},
    {'name': 'stimuli/1-8-8.jpg', 'path': 'stimuli/1-8-8.jpg'},
    {'name': 'stimuli/0-9-1.jpg', 'path': 'stimuli/0-9-1.jpg'},
    {'name': 'stimuli/0-9-2.jpg', 'path': 'stimuli/0-9-2.jpg'},
    {'name': 'stimuli/0-9-3.jpg', 'path': 'stimuli/0-9-3.jpg'},
    {'name': 'stimuli/0-9-4.jpg', 'path': 'stimuli/0-9-4.jpg'},
    {'name': 'stimuli/0-9-5.jpg', 'path': 'stimuli/0-9-5.jpg'},
    {'name': 'stimuli/0-9-6.jpg', 'path': 'stimuli/0-9-6.jpg'},
    {'name': 'stimuli/0-9-7.jpg', 'path': 'stimuli/0-9-7.jpg'},
    {'name': 'stimuli/0-9-8.jpg', 'path': 'stimuli/0-9-8.jpg'},
    {'name': 'stimuli/0-10-1.jpg', 'path': 'stimuli/0-10-1.jpg'},
    {'name': 'stimuli/0-10-2.jpg', 'path': 'stimuli/0-10-2.jpg'},
    {'name': 'stimuli/0-10-3.jpg', 'path': 'stimuli/0-10-3.jpg'},
    {'name': 'stimuli/0-10-4.jpg', 'path': 'stimuli/0-10-4.jpg'},
    {'name': 'stimuli/0-10-5.jpg', 'path': 'stimuli/0-10-5.jpg'},
    {'name': 'stimuli/0-10-6.jpg', 'path': 'stimuli/0-10-6.jpg'},
    {'name': 'stimuli/0-10-7.jpg', 'path': 'stimuli/0-10-7.jpg'},
    {'name': 'stimuli/0-10-8.jpg', 'path': 'stimuli/0-10-8.jpg'},
    {'name': 'stimuli/1-14-1.jpg', 'path': 'stimuli/1-14-1.jpg'},
    {'name': 'stimuli/1-14-2.jpg', 'path': 'stimuli/1-14-2.jpg'},
    {'name': 'stimuli/1-14-3.jpg', 'path': 'stimuli/1-14-3.jpg'},
    {'name': 'stimuli/1-14-4.jpg', 'path': 'stimuli/1-14-4.jpg'},
    {'name': 'stimuli/1-14-5.jpg', 'path': 'stimuli/1-14-5.jpg'},
    {'name': 'stimuli/1-14-6.jpg', 'path': 'stimuli/1-14-6.jpg'},
    {'name': 'stimuli/1-14-7.jpg', 'path': 'stimuli/1-14-7.jpg'},
    {'name': 'stimuli/1-14-8.jpg', 'path': 'stimuli/1-14-8.jpg'},
    {'name': 'stimuli/0-15-1.jpg', 'path': 'stimuli/0-15-1.jpg'},
    {'name': 'stimuli/0-15-2.jpg', 'path': 'stimuli/0-15-2.jpg'},
    {'name': 'stimuli/0-15-3.jpg', 'path': 'stimuli/0-15-3.jpg'},
    {'name': 'stimuli/0-15-4.jpg', 'path': 'stimuli/0-15-4.jpg'},
    {'name': 'stimuli/0-15-5.jpg', 'path': 'stimuli/0-15-5.jpg'},
    {'name': 'stimuli/0-15-6.jpg', 'path': 'stimuli/0-15-6.jpg'},
    {'name': 'stimuli/0-15-7.jpg', 'path': 'stimuli/0-15-7.jpg'},
    {'name': 'stimuli/0-15-8.jpg', 'path': 'stimuli/0-15-8.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var instru_text;
var instru_key_resp;
var fixationClock;
var fixation_text;
var t_trialClock;
var trial_image;
var trial_slider;
var dimension_text;
var cue_text;
var nine_text;
var one_text;
var at_trialClock;
var at_image;
var at_slider;
var at_dimension;
var at_cue;
var at_nine;
var at_one;
var d_trialClock;
var $one;
var $nine;
var $cue;
var $dimension;
var $slider;
var $image;
var ab_trialClock;
var ab_image;
var ab_slider;
var ab_dimension;
var ab_cue;
var ab_nine;
var ab_one;
var endClock;
var end_text;
var end_key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instru_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instru_text',
    text: '按空格键开始',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instru_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_text',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "t_trial"
  t_trialClock = new util.Clock();
  trial_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trial_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  trial_slider = new visual.Slider({
    win: psychoJS.window, name: 'trial_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  dimension_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'dimension_text',
    text: '可信的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  cue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text',
    text: '请根据您的第一印象，判断图中人物是否符合给定的特质。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  nine_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'nine_text',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  one_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_text',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "at_trial"
  at_trialClock = new util.Clock();
  at_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'at_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  at_slider = new visual.Slider({
    win: psychoJS.window, name: 'at_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  at_dimension = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_dimension',
    text: '有吸引力的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  at_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_cue',
    text: '请根据您的第一印象，判断图中人物是否符合给定的特质。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  at_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_nine',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  at_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'at_one',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "d_trial"
  d_trialClock = new util.Clock();
  $one = new visual.TextStim({
    win: psychoJS.window,
    name: '$one',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  $nine = new visual.TextStim({
    win: psychoJS.window,
    name: '$nine',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  $cue = new visual.TextStim({
    win: psychoJS.window,
    name: '$cue',
    text: '请根据您的第一印象，判断图中人物是否符合给定的特质。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  $dimension = new visual.TextStim({
    win: psychoJS.window,
    name: '$dimension',
    text: '有支配性的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  $slider = new visual.Slider({
    win: psychoJS.window, name: '$slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  $image = new visual.ImageStim({
    win : psychoJS.window,
    name : '$image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "ab_trial"
  ab_trialClock = new util.Clock();
  ab_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ab_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ab_slider = new visual.Slider({
    win: psychoJS.window, name: 'ab_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  ab_dimension = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_dimension',
    text: '有能力的',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  ab_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_cue',
    text: '请根据您的第一印象，判断图中人物是否符合给定的特质。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ab_nine = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_nine',
    text: '完全符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  ab_one = new visual.TextStim({
    win: psychoJS.window,
    name: 'ab_one',
    text: '完全不符合',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.35)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '感谢您参与本次实验！请按空格键退出。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instru_key_resp_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instru_key_resp.keys = undefined;
    instru_key_resp.rt = undefined;
    _instru_key_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instru_text);
    instructionComponents.push(instru_key_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru_text* updates
    if (t >= 0.0 && instru_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_text.tStart = t;  // (not accounting for frame time here)
      instru_text.frameNStart = frameN;  // exact frame index
      
      instru_text.setAutoDraw(true);
    }
    
    
    // *instru_key_resp* updates
    if (t >= 0.0 && instru_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_key_resp.tStart = t;  // (not accounting for frame time here)
      instru_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru_key_resp.clearEvents(); });
    }
    
    if (instru_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru_key_resp_allKeys = _instru_key_resp_allKeys.concat(theseKeys);
      if (_instru_key_resp_allKeys.length > 0) {
        instru_key_resp.keys = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].name;  // just the last key pressed
        instru_key_resp.rt = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].rt;
        instru_key_resp.duration = _instru_key_resp_allKeys[_instru_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instru_key_resp.corr, level);
    }
    psychoJS.experiment.addData('instru_key_resp.keys', instru_key_resp.keys);
    if (typeof instru_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instru_key_resp.rt', instru_key_resp.rt);
        psychoJS.experiment.addData('instru_key_resp.duration', instru_key_resp.duration);
        routineTimer.reset();
        }
    
    instru_key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trustworthy;
function trustworthyLoopBegin(trustworthyLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trustworthy = new TrialHandler({
      psychoJS: psychoJS,
      nReps: tReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_80.xlsx',
      seed: undefined, name: 'trustworthy'
    });
    psychoJS.experiment.addLoop(trustworthy); // add the loop to the experiment
    currentLoop = trustworthy;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trustworthy.forEach(function() {
      snapshot = trustworthy.getSnapshot();
    
      trustworthyLoopScheduler.add(importConditions(snapshot));
      trustworthyLoopScheduler.add(fixationRoutineBegin(snapshot));
      trustworthyLoopScheduler.add(fixationRoutineEachFrame());
      trustworthyLoopScheduler.add(fixationRoutineEnd(snapshot));
      trustworthyLoopScheduler.add(t_trialRoutineBegin(snapshot));
      trustworthyLoopScheduler.add(t_trialRoutineEachFrame());
      trustworthyLoopScheduler.add(t_trialRoutineEnd(snapshot));
      trustworthyLoopScheduler.add(trustworthyLoopEndIteration(trustworthyLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trustworthyLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trustworthy);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trustworthyLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var attractiveness;
function attractivenessLoopBegin(attractivenessLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    attractiveness = new TrialHandler({
      psychoJS: psychoJS,
      nReps: atReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_80.xlsx',
      seed: undefined, name: 'attractiveness'
    });
    psychoJS.experiment.addLoop(attractiveness); // add the loop to the experiment
    currentLoop = attractiveness;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    attractiveness.forEach(function() {
      snapshot = attractiveness.getSnapshot();
    
      attractivenessLoopScheduler.add(importConditions(snapshot));
      attractivenessLoopScheduler.add(fixationRoutineBegin(snapshot));
      attractivenessLoopScheduler.add(fixationRoutineEachFrame());
      attractivenessLoopScheduler.add(fixationRoutineEnd(snapshot));
      attractivenessLoopScheduler.add(at_trialRoutineBegin(snapshot));
      attractivenessLoopScheduler.add(at_trialRoutineEachFrame());
      attractivenessLoopScheduler.add(at_trialRoutineEnd(snapshot));
      attractivenessLoopScheduler.add(attractivenessLoopEndIteration(attractivenessLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function attractivenessLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(attractiveness);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function attractivenessLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var dominance;
function dominanceLoopBegin(dominanceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    dominance = new TrialHandler({
      psychoJS: psychoJS,
      nReps: dReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_80.xlsx',
      seed: undefined, name: 'dominance'
    });
    psychoJS.experiment.addLoop(dominance); // add the loop to the experiment
    currentLoop = dominance;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    dominance.forEach(function() {
      snapshot = dominance.getSnapshot();
    
      dominanceLoopScheduler.add(importConditions(snapshot));
      dominanceLoopScheduler.add(fixationRoutineBegin(snapshot));
      dominanceLoopScheduler.add(fixationRoutineEachFrame());
      dominanceLoopScheduler.add(fixationRoutineEnd(snapshot));
      dominanceLoopScheduler.add($trialRoutineBegin(snapshot));
      dominanceLoopScheduler.add($trialRoutineEachFrame());
      dominanceLoopScheduler.add($trialRoutineEnd(snapshot));
      dominanceLoopScheduler.add(dominanceLoopEndIteration(dominanceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function dominanceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(dominance);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function dominanceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ability;
function abilityLoopBegin(abilityLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ability = new TrialHandler({
      psychoJS: psychoJS,
      nReps: abReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_80.xlsx',
      seed: undefined, name: 'ability'
    });
    psychoJS.experiment.addLoop(ability); // add the loop to the experiment
    currentLoop = ability;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    ability.forEach(function() {
      snapshot = ability.getSnapshot();
    
      abilityLoopScheduler.add(importConditions(snapshot));
      abilityLoopScheduler.add(fixationRoutineBegin(snapshot));
      abilityLoopScheduler.add(fixationRoutineEachFrame());
      abilityLoopScheduler.add(fixationRoutineEnd(snapshot));
      abilityLoopScheduler.add(ab_trialRoutineBegin(snapshot));
      abilityLoopScheduler.add(ab_trialRoutineEachFrame());
      abilityLoopScheduler.add(ab_trialRoutineEnd(snapshot));
      abilityLoopScheduler.add(abilityLoopEndIteration(abilityLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function abilityLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ability);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function abilityLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_text);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_text* updates
    if (t >= 0.0 && fixation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_text.tStart = t;  // (not accounting for frame time here)
      fixation_text.frameNStart = frameN;  // exact frame index
      
      fixation_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var t_trialComponents;
function t_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 't_trial' ---
    t = 0;
    t_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('t_trial.started', globalClock.getTime());
    trial_image.setImage(imageFile);
    trial_slider.reset()
    // keep track of which components have finished
    t_trialComponents = [];
    t_trialComponents.push(trial_image);
    t_trialComponents.push(trial_slider);
    t_trialComponents.push(dimension_text);
    t_trialComponents.push(cue_text);
    t_trialComponents.push(nine_text);
    t_trialComponents.push(one_text);
    
    t_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function t_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 't_trial' ---
    // get current time
    t = t_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_image* updates
    if (t >= 0.0 && trial_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_image.tStart = t;  // (not accounting for frame time here)
      trial_image.frameNStart = frameN;  // exact frame index
      
      trial_image.setAutoDraw(true);
    }
    
    
    // *trial_slider* updates
    if (t >= 0.0 && trial_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_slider.tStart = t;  // (not accounting for frame time here)
      trial_slider.frameNStart = frameN;  // exact frame index
      
      trial_slider.setAutoDraw(true);
    }
    
    
    // Check trial_slider for response to end Routine
    if (trial_slider.getRating() !== undefined && trial_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *dimension_text* updates
    if (t >= 0.0 && dimension_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dimension_text.tStart = t;  // (not accounting for frame time here)
      dimension_text.frameNStart = frameN;  // exact frame index
      
      dimension_text.setAutoDraw(true);
    }
    
    
    // *cue_text* updates
    if (t >= 0.0 && cue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text.tStart = t;  // (not accounting for frame time here)
      cue_text.frameNStart = frameN;  // exact frame index
      
      cue_text.setAutoDraw(true);
    }
    
    
    // *nine_text* updates
    if (t >= 0.0 && nine_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nine_text.tStart = t;  // (not accounting for frame time here)
      nine_text.frameNStart = frameN;  // exact frame index
      
      nine_text.setAutoDraw(true);
    }
    
    
    // *one_text* updates
    if (t >= 0.0 && one_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_text.tStart = t;  // (not accounting for frame time here)
      one_text.frameNStart = frameN;  // exact frame index
      
      one_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    t_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function t_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 't_trial' ---
    t_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('t_trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('trial_slider.response', trial_slider.getRating());
    psychoJS.experiment.addData('trial_slider.rt', trial_slider.getRT());
    // the Routine "t_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var at_trialComponents;
function at_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'at_trial' ---
    t = 0;
    at_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('at_trial.started', globalClock.getTime());
    at_image.setImage(imageFile);
    at_slider.reset()
    // keep track of which components have finished
    at_trialComponents = [];
    at_trialComponents.push(at_image);
    at_trialComponents.push(at_slider);
    at_trialComponents.push(at_dimension);
    at_trialComponents.push(at_cue);
    at_trialComponents.push(at_nine);
    at_trialComponents.push(at_one);
    
    at_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function at_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'at_trial' ---
    // get current time
    t = at_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *at_image* updates
    if (t >= 0.0 && at_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_image.tStart = t;  // (not accounting for frame time here)
      at_image.frameNStart = frameN;  // exact frame index
      
      at_image.setAutoDraw(true);
    }
    
    
    // *at_slider* updates
    if (t >= 0.0 && at_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_slider.tStart = t;  // (not accounting for frame time here)
      at_slider.frameNStart = frameN;  // exact frame index
      
      at_slider.setAutoDraw(true);
    }
    
    
    // Check at_slider for response to end Routine
    if (at_slider.getRating() !== undefined && at_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *at_dimension* updates
    if (t >= 0.0 && at_dimension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_dimension.tStart = t;  // (not accounting for frame time here)
      at_dimension.frameNStart = frameN;  // exact frame index
      
      at_dimension.setAutoDraw(true);
    }
    
    
    // *at_cue* updates
    if (t >= 0.0 && at_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_cue.tStart = t;  // (not accounting for frame time here)
      at_cue.frameNStart = frameN;  // exact frame index
      
      at_cue.setAutoDraw(true);
    }
    
    
    // *at_nine* updates
    if (t >= 0.0 && at_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_nine.tStart = t;  // (not accounting for frame time here)
      at_nine.frameNStart = frameN;  // exact frame index
      
      at_nine.setAutoDraw(true);
    }
    
    
    // *at_one* updates
    if (t >= 0.0 && at_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      at_one.tStart = t;  // (not accounting for frame time here)
      at_one.frameNStart = frameN;  // exact frame index
      
      at_one.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    at_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function at_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'at_trial' ---
    at_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('at_trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('at_slider.response', at_slider.getRating());
    psychoJS.experiment.addData('at_slider.rt', at_slider.getRT());
    // the Routine "at_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var $trialComponents;
function $trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine '$trial' ---
    t = 0;
    $trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('$trial.started', globalClock.getTime());
    $slider.reset()
    $image.setImage(imageFile);
    // keep track of which components have finished
    $trialComponents = [];
    d_trialComponents.push($one);
    d_trialComponents.push($nine);
    d_trialComponents.push($cue);
    d_trialComponents.push($dimension);
    d_trialComponents.push($slider);
    d_trialComponents.push($image);
    
    $trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function $trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine '$trial' ---
    // get current time
    t = $trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *$one* updates
    if (t >= 0.0 && $one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $one.tStart = t;  // (not accounting for frame time here)
      $one.frameNStart = frameN;  // exact frame index
      
      $one.setAutoDraw(true);
    }
    
    
    // *$nine* updates
    if (t >= 0.0 && $nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $nine.tStart = t;  // (not accounting for frame time here)
      $nine.frameNStart = frameN;  // exact frame index
      
      $nine.setAutoDraw(true);
    }
    
    
    // *$cue* updates
    if (t >= 0.0 && $cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $cue.tStart = t;  // (not accounting for frame time here)
      $cue.frameNStart = frameN;  // exact frame index
      
      $cue.setAutoDraw(true);
    }
    
    
    // *$dimension* updates
    if (t >= 0.0 && $dimension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $dimension.tStart = t;  // (not accounting for frame time here)
      $dimension.frameNStart = frameN;  // exact frame index
      
      $dimension.setAutoDraw(true);
    }
    
    
    // *$slider* updates
    if (t >= 0.0 && $slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $slider.tStart = t;  // (not accounting for frame time here)
      $slider.frameNStart = frameN;  // exact frame index
      
      $slider.setAutoDraw(true);
    }
    
    
    // Check $slider for response to end Routine
    if ($slider.getRating() !== undefined && $slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *$image* updates
    if (t >= 0.0 && $image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      $image.tStart = t;  // (not accounting for frame time here)
      $image.frameNStart = frameN;  // exact frame index
      
      $image.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    $trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function $trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine '$trial' ---
    $trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('$trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('$slider.response', $slider.getRating());
    psychoJS.experiment.addData('$slider.rt', $slider.getRT());
    // the Routine "d_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ab_trialComponents;
function ab_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ab_trial' ---
    t = 0;
    ab_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ab_trial.started', globalClock.getTime());
    ab_image.setImage(imageFile);
    ab_slider.reset()
    // keep track of which components have finished
    ab_trialComponents = [];
    ab_trialComponents.push(ab_image);
    ab_trialComponents.push(ab_slider);
    ab_trialComponents.push(ab_dimension);
    ab_trialComponents.push(ab_cue);
    ab_trialComponents.push(ab_nine);
    ab_trialComponents.push(ab_one);
    
    ab_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ab_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ab_trial' ---
    // get current time
    t = ab_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ab_image* updates
    if (t >= 0.0 && ab_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_image.tStart = t;  // (not accounting for frame time here)
      ab_image.frameNStart = frameN;  // exact frame index
      
      ab_image.setAutoDraw(true);
    }
    
    
    // *ab_slider* updates
    if (t >= 0.0 && ab_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_slider.tStart = t;  // (not accounting for frame time here)
      ab_slider.frameNStart = frameN;  // exact frame index
      
      ab_slider.setAutoDraw(true);
    }
    
    
    // Check ab_slider for response to end Routine
    if (ab_slider.getRating() !== undefined && ab_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *ab_dimension* updates
    if (t >= 0.0 && ab_dimension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_dimension.tStart = t;  // (not accounting for frame time here)
      ab_dimension.frameNStart = frameN;  // exact frame index
      
      ab_dimension.setAutoDraw(true);
    }
    
    
    // *ab_cue* updates
    if (t >= 0.0 && ab_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_cue.tStart = t;  // (not accounting for frame time here)
      ab_cue.frameNStart = frameN;  // exact frame index
      
      ab_cue.setAutoDraw(true);
    }
    
    
    // *ab_nine* updates
    if (t >= 0.0 && ab_nine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_nine.tStart = t;  // (not accounting for frame time here)
      ab_nine.frameNStart = frameN;  // exact frame index
      
      ab_nine.setAutoDraw(true);
    }
    
    
    // *ab_one* updates
    if (t >= 0.0 && ab_one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ab_one.tStart = t;  // (not accounting for frame time here)
      ab_one.frameNStart = frameN;  // exact frame index
      
      ab_one.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ab_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ab_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ab_trial' ---
    ab_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ab_trial.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ab_slider.response', ab_slider.getRating());
    psychoJS.experiment.addData('ab_slider.rt', ab_slider.getRT());
    // the Routine "ab_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_key_resp_allKeys;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    end_key_resp.keys = undefined;
    end_key_resp.rt = undefined;
    _end_key_resp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    endComponents.push(end_key_resp);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // *end_key_resp* updates
    if (t >= 0.0 && end_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key_resp.tStart = t;  // (not accounting for frame time here)
      end_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key_resp.clearEvents(); });
    }
    
    if (end_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_resp_allKeys = _end_key_resp_allKeys.concat(theseKeys);
      if (_end_key_resp_allKeys.length > 0) {
        end_key_resp.keys = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].name;  // just the last key pressed
        end_key_resp.rt = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].rt;
        end_key_resp.duration = _end_key_resp_allKeys[_end_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_key_resp.corr, level);
    }
    psychoJS.experiment.addData('end_key_resp.keys', end_key_resp.keys);
    if (typeof end_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_key_resp.rt', end_key_resp.rt);
        psychoJS.experiment.addData('end_key_resp.duration', end_key_resp.duration);
        routineTimer.reset();
        }
    
    end_key_resp.stop();
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
