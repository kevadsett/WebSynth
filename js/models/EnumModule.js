var EnumModule = StepModule.extend({
    initialize: function() {
        StepModule.prototype.initialize.apply(this);
        this.set('numberOfSteps', this.get('enum').length);
    }
});