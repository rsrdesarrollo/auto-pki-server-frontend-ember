import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        sign: function(csr){
            console.log("Sign", csr.id);
            csr.set('is_approved', true);
            csr.save();
        },
        delete: function (csr) {
            console.log("Delete", csr.id);
            csr.destroyRecord();
        }
    }
});
