import Ember from 'ember';
import { jwt_decode } from 'ember-cli-jwt-decode';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    setSessionClaims: Ember.observer('session.data.authenticated.token', function() {
        if(this.get('session.data.authenticated.token')) {
            let claims = jwt_decode(this.get('session.data.authenticated.token'));
            this.get('session').set('data.authenticated.claims', claims);
        }
    }).on('init'),

    actions:{
        logout: function () {
            this.get('session').invalidate();
        }
    }
});
