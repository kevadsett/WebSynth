var OscCollection = Backbone.Collection.extend({
    model: "OscModule",
    setOnChildren: function(key, value) {
        this.each(function(oscModule) {
            oscModule.key = value;
        });
    },
    callOnChildren: function(functionName, args) {
        this.each(function(oscModule) {
            oscModule.functionName.apply(this, args);
        });
    },
    isAlreadyPlayingNote: function(noteNumber) {
        return this.findWhere({frequency: WebSynth.NoteConverter.getFrequencyFromNoteNumber(noteNumber)}) !== undefined;
    }
});