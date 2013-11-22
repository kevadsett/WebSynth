var OscModule = BaseModule.extend({
    initialize: function() {
        var context = this.get('context');
        if(context !== undefined) {
            this.set({
                amplitude: context.createGain(),
                /*octaveOffset: new StepModule({context: context, numberOfSteps:5, defaultStep:2}),
                pitchOffset: new StepModule({context: context, numberOfSteps:24, defaultStep:12}),*/
                output: context.createOscillator()
            });
            
            this.get('output').start(0);
            this.connect(this.get('amplitude'));
            this.get('amplitude').connect(context.destination);
        }
    },
    setContext: function(context) {
        this.set('context', context);
        this.get('amplitude').context = context;
        this.get('waveType').context = context;
        this.get('octaveOffset').context = context;
        this.get('pitchOffset').context = context;
        this.get('tuning').context = context;
    },
    
    setWaveType: function(typeIndex) {
        this.get('output').type = typeIndex;
        console.log(this.get('output').type);
    },
    
    startNote: function() {
        this.get('amplitude').gain.value = 1;
    },
    
    setAmplitude: function(value) {
        this.get('amplitude').gain.value = value;
    },
    
    setFrequency: function(frequency) {
        this.get('output').frequency.value = frequency;
        this.set('frequency', frequency);
    },
    
    setTuning: function(tuning) {
        this.get('output').detune.value = tuning;
    },
    
    stop: function() {
        this.get('amplitude').gain.value = 0;
    },
    
    start: function(noteNumber) {
        var finalNoteNumber = noteNumber //+ (12 * this.get('octaveOffset').getValue()) + this.get('pitchOffset').getValue();
        this.setFrequency(WebSynth.NoteConverter.getFrequencyFromNoteNumber(finalNoteNumber));
        this.startNote();
    }
});