var StepModule = LineModule.extend({
    getValue: function() {
        return Math.round(mapValue(this.get('output').gain.value, 0, 1, this.get('range').lo, this.get('range').hi));
    }
});