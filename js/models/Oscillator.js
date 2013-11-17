var Oscillator = Backbone.Model.extend({
    defaults: {
        polyphonic: true,
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
            if(!this.get('voices').isAlreadyPlayingNote(noteNumber)) {
            var voice = this.get('voices').add(new OscModule({context: this.get('context')}));
                voice.start(noteNumber);
            }
            console.log(this.get('voices').pluck("frequency"));
        }
    },
    
    onMouseUp: function(data) {
        if(data.button === 1) {
            var voice = this.get('voices').pop();
            voice.stop();
        }
    }
});