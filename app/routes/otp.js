import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service(),

    model(){
        var id = this.get('session.data.authenticated.claims.sub');
        return this.store.findRecord('user', id);
    }
});
