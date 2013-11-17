WebSynth.NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
WebSynth.BOTTOM_C_FREQ = 8.1757989156; // hertz
WebSynth.WebAudio = new WebAudioController();
WebSynth.NoteConverter = new NoteConverter();

$(document).on('ready', function() {
    window.osc = new OscModule({context: WebSynth.WebAudio.get('context')});
    console.log(osc);
});