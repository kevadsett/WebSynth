var LineModule = BaseModule.extend({
    defaults: {
        range: {
            lo: 0,
            hi: 1
        }
    },
    initialize: function() {
        if(this.get('context') !== undefined) {
            this.set('output', this.get('context').createGain());
            this.get('output').gain.value = 0;
        }
    },
    setToMaxValue: function() {
        this.get('output').gain.value = this.get('range').hi;
    },
    setToMinValue: function() {
        this.get('output').gain.value = this.get('range').lo;
    },
    getValue: function() {
        return mapValue(this.get('output').gain.value, 0, 1, this.get('range').lo, this.get('range').hi);
    },
    setValue: function(newValue) {
        this.get('output').gain.value = normalise(newValue, this.get('range').lo, this.get('range').hi);
    }
});