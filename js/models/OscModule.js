var OscModule = BaseModule.extend({
    defaults: {
        waveType: new EnumModule({enum:["sine", "square"], defaultStep:0}),
        amplitude: new LineModule(),
        octaveOffset: new StepModule({numberOfSteps:5, defaultStep:2}),
        pitchOffset: new StepModule({numberOfSteps:24, defaultStep:12}),
        tuning: new LineModule({range: {lo:-1, hi:1}})
    },
    
    initialize: function() {
    },
    
    play: function(noteNumber) {
        console.log(NoteController.getNoteNameFromNumber(noteNumber));
    }
});