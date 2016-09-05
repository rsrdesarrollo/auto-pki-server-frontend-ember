import Ember from 'ember';

export default Ember.Component.extend({
    selected: null,

    actions: {
        sign: function(csr){
            console.log("Sign", csr.id);
            csr.set('is_approved', true);
            csr.save();
        },
        delete: function (csr) {
            console.log("Delete", csr.id);
            csr.destroyRecord();
        },

        show_fprint: function (csr) {

            this.set('selected', csr);

            Ember.$('#fprint_qrcode').empty();
            Ember.run.schedule('actions', this, function() {
                console.log(csr);
                Ember.$('#fprint_qrcode').qrcode(csr.get('fprint'));
            });
        }
    }
});
