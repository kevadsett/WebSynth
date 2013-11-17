var EnumModule = StepModule.extend({
    initialize: function() {
        StepModule.prototype.initialize.apply(this);
        this.set('numberOfSteps', this.get('enum').length);
    },
    getIndexOf: function(str) {
        return _.indexOf(this.get('enum'), str);
    },
    getEnum: function(index) {
        return this.get('enum')[index];
    }
});