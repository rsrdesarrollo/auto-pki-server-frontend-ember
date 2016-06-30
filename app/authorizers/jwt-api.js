import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
    session: Ember.inject.service(),

    authorize(session, block) {
        var accessToken = session.token;
        if (!Ember.isEmpty(accessToken)) {
            block('Authorization', 'Bearer ' + accessToken);
        }
    }
});
