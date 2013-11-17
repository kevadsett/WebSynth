WebSynth.NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
WebSynth.BOTTOM_C_FREQ = 8.1757989156; // hertz
WebSynth.WebAudio = new WebAudioController();
WebSynth.NoteConverter = new NoteConverter();
WebSynth.bottom = WebSynth.NoteConverter.getNoteNumberFromName("C3");
WebSynth.top = WebSynth.NoteConverter.getNoteNumberFromName("B6");

$(document).on('ready', function() {
    window.osc = new Oscillator({context: WebSynth.WebAudio.get('context')});
    console.log(osc);
});