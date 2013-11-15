var NoteController = {
    getNoteNumberFromName: function(noteName) {
        var octaveNumber = parseInt(noteName.match(/\d+/g)),
            noteNum = _.indexOf(NOTE_NAMES, noteName.match(/[^\d+]/g).join(""));
        return noteNum + (12 * octaveNumber);
    },
    
    getNoteNameFromNumber: function(noteNumber) {
        var noteName = NOTE_NAMES[noteNumber % 12]
        noteName += Math.floor(noteNumber / 12);
        return noteName;
    },
    
    getFrequencyFromNoteName: function(noteName) {
        return this.getFrequencyFromNoteNumber(this.getNoteNumberFromNoteName(noteName));
    },
    
    getFrequencyFromNoteNumber: function(noteNumber) {
        var bottomC = 8.1757989156;
        return Math.pow(2, noteNumber/12) * bottomC;
    },
    
};