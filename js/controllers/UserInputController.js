$(document).mousedown(function(event) {
    WebSynth.trigger('mousedown', {position: {x:event.clientX, y:event.clientY}, button: event.which});
});

$(document).mousemove(function(event) {
    WebSynth.trigger('mousemove', {position: {x:event.clientX, y:event.clientY}});
});

$(document).mouseup(function(event) {
    WebSynth.trigger('mouseup', {position:{x:event.clientX, y:event.clientY}, button: event.which});
});

$(document).keydown(function(event) {
    WebSynth.trigger('keydown', event.which);
});