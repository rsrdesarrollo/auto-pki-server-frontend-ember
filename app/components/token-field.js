import Ember from 'ember';

export default Ember.Component.extend({
    valid_values: [],
    values: [],

    didInsertElement(){
        this._super(...arguments);

        var valid = this.get('valid_values');
        var values = this.get('values');

        var tf = Ember.$('#'+this.elementId+' .tokenfield-input');

        Ember.run.schedule('afterRender', function(){
            tf.tokenfield({
                autocomplete: {
                    source: valid,
                    delay: 100
                },
                showAutocompleteOnFocus: true
            });

            tf.tokenfield('setTokens', values);

            tf.on('tokenfield:createtoken', function (e) {
                var newTok = e.attrs.value;
                if(valid.indexOf(newTok) !== -1){
                    values.pushObject(e.attrs.value);
                    console.log(values);
                    return true;
                }else{
                    return false;
                }
            });

            tf.on('tokenfield:edittoken', function () {
                return false;
            });

            tf.on('tokenfield:removedtoken', function (e) {
                values.popObject(e.attrs.value);
                console.log(values);
                return true;
            });
        });
    }
});
