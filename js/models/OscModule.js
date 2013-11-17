var OscModule = BaseModule.extend({
    defaults: {
        polyphonic: true
    },
    
    initialize: function() {
        this.listenTo(WebSynth, "webAudio:contextChanged", this.setContext);
        var context = this.get('context');
        if(context !== undefined) {
            this.set({
                amplitude: new LineModule({context: context}),
                octaveOffset: new StepModule({context: context, numberOfSteps:5, defaultStep:2}),
                pitchOffset: new StepModule({context: context, numberOfSteps:24, defaultStep:12}),
                output: context.createOscillator()
            });
            
            this.get('output').start(0);
            
            this.connect(this.get('amplitude').get('output'));
            this.get('amplitude').connect(context.destination);
            
            WebSynth.on("mousedown", this.onMouseDown, this);
            WebSynth.on("mouseup", this.onMouseUp, this);
            WebSynth.on("keydown", this.onKeyDown, this);
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
    
    onKeyDown: function(key) {
        if(!_.isNaN(parseInt(String.fromCharCode(key)))) {
            this.setWaveType(parseInt(String.fromCharCode(key)));
        }
    },
    
    onMouseDown: function(position) {
        console.log(position);
        this.playFromPosition(position);
        WebSynth.on('mousemove', this.playFromPosition, this);
    },
    
    onMouseUp: function() {
        WebSynth.off('mousemove', this.playFromPosition, this);
        this.stop();
    },
    
    start: function() {
        this.get('amplitude').setToMaxValue();
    },
    
    setFrequency: function(frequency) {
        this.get('output').frequency.value = frequency;
    },
    
    setTuning: function(tuning) {
        this.get('output').detune.value = tuning;
    },
    
    stop: function() {
        this.get('amplitude').setToMinValue();
    },
    
    playFromPosition:function(position) {
        this.setTuning(mapValue(position.y, 0, $(document).innerHeight(), -50, 50));
        this.play(Math.round(mapValue(position.x, 0, $(document).innerWidth(), 60, 61)));
    },
    
    play: function(noteNumber) {
        var finalNoteNumber = noteNumber + (12 * this.get('octaveOffset').getValue()) + this.get('pitchOffset').getValue();
        this.setFrequency(WebSynth.NoteConverter.getFrequencyFromNoteNumber(finalNoteNumber));
        this.start();
    }
});