var BaseModule = Backbone.Model.extend({
    connect: function(destination) {
        this.get('output').connect(destination);
    }
});