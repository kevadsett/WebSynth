var NoteConverter = Backbone.Model.extend({
    getNoteNumberFromName: function(noteName) {
        var octaveNumber = parseInt(noteName.match(/\d+/g)),
            noteNum = _.indexOf(WebSynth.NOTE_NAMES, noteName.match(/[^\d+]/g).join(""));
        return noteNum + (12 * octaveNumber);
    },
    
    getNoteNameFromNumber: function(noteNumber) {
        var noteName = WebSynth.NOTE_NAMES[noteNumber % 12]
        noteName += Math.floor(noteNumber / 12);
        return noteName;
    },
    
    getFrequencyFromNoteName: function(noteName) {
        return this.getFrequencyFromNoteNumber(this.getNoteNumberFromNoteName(noteName));
    },
    
    getFrequencyFromNoteNumber: function(noteNumber) {
        return Math.pow(2, noteNumber/12) * WebSynth.BOTTOM_C_FREQ;
    },
});