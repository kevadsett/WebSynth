$(document).mousedown(function(event) {
    WebSynth.trigger('mousedown', {x:event.clientX, y:event.clientY});
});

$(document).mousemove(function(event) {
    WebSynth.trigger('mousemove', {x:event.clientX, y:event.clientY});
});

$(document).mouseup(function(event) {
    WebSynth.trigger('mouseup', {x:event.clientX, y:event.clientY});
});

$(document).keydown(function(event) {
    WebSynth.trigger('keydown', event.which);
});