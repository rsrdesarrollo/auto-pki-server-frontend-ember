import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    session: Ember.inject.service(),

    actions:{
        logout: function () {
            this.get('session').invalidate();
        },
        error: function(error, transition) {
            console.log(error, transition);
            let errorController = this.controllerFor("error");
            errorController.set("lastErrors", error.errors);
            this.transitionTo("error");
        }

    }
});
