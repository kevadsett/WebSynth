var Oscillator = Backbone.Model.extend({
    defaults: {
        polyphonic: true,
        numVoices: 5,
        voices: new OscCollection()
    },
    
    initialize: function() {
        this.listenTo(WebSynth, "webAudio:contextChanged", this.setContext);
        WebSynth.on("mousedown", this.onMouseDown, this);
        //WebSynth.on("mouseup", this.onMouseUp, this);
        WebSynth.on("keydown", this.onKeyDown, this);
    },
    
    setContext: function(context) {
        this.get('voices').callOnChildren("setContext");
    },
    
    onMouseDown: function(data) {
        if(data.button === 1) {
            var noteNumber = Math.round(mapValue(data.position.x, 0, $(document).innerWidth(), WebSynth.bottom, WebSynth.top));
            if(this.get('polyphonic')) {
                if(!this.get('voices').isAlreadyPlayingNote(noteNumber)) {
                    if(this.get('voices').length === this.get('numVoices')) {
                        var deadVoice = this.get('voices').shift();
                        deadVoice.stop();
                    }
                    var voice = this.get('voices').add(new OscModule({context: this.get('context')}));
                    voice.start(noteNumber);
                }
                this.get('voices').each(_.bind(function(voice, index) {
                    console.log(index, 1/this.get('voices').length);
                    voice.setAmplitude(1/this.get('voices').length);
                }, this));
                console.log(this.get('voices').pluck("frequency"));
            } else {
                if(this.get('voices').at(0)) {
                    this.get('voices').at(0).start(noteNumber);
                } else {
                    this.get('voices').add(new OscModule({context: this.get('context')}));
                    this.get('voices').at(0).start(noteNumber);
                }
            }
        }
    },
    
    onMouseUp: function(data) {
        if(data.button === 1) {
            var voice = this.get('voices').pop();
            voice.stop();
        }
    }
});