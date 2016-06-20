import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(){
        return Ember.RSVP.hash({
            users: this.store.findAll('user'),
            groups: this.store.findAll('group')
        });
    }
});
