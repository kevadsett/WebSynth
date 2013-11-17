var WebAudioController = Backbone.Model.extend({
    initialize: function() {
        this.on('change:context', this.onContextChange);
        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.set('context', new AudioContext());
        }
            catch(e) {
            alert('Web Audio API is not supported in this browser');
            throw e;
        }
    },
    onContextChange: function() {
        WebSynth.trigger('webAudio:contextChanged', this.get('context'));
    }
});