import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        revoke: function (client) {
            console.log("Revoke", client.id);
            client.set('revoked', true);
            client.save();
        },
        delete: function (client) {
            console.log("Delete", client.id);
            client.destroyRecord();
        }
    }
});
