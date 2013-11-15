var StepModule = BaseModule.extend({
    defaults: {
        numberOfSteps: 3,
        defaultStep: 1
    },
    initialize: function() {
        this.set('currentStep', this.get('defaultStep'));
    }
});