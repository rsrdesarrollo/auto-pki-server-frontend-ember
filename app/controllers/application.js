import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    _setup : function(){
        // TODO: Use websockets to refresh model only when changes on back-end.
        
        let self = this;

        let cb = function(){
            self.get('target.router').refresh();
            Ember.run.later(cb, 1000);
        };

        Ember.run.later(cb, 1000);

    }.on('init'),

    actions:{
        logout: function () {
            this.get('session').invalidate();
        }
    }
});
