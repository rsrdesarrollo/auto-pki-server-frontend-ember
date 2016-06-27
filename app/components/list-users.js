import Ember from 'ember';

export default Ember.Component.extend({
    didReceiveAttrs(){
        this._super(...arguments);

        var groups = this.get('groups');

        groups = groups.map(obj => obj.get('groupname'));

        this.set('groups', groups);
    },

    actions: {
        save: function(user){
            user.save();
        }
    }
});
