import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    qrLink: Ember.computed('model', 'session.data.authenticated.claims', function () {
        var claims = this.get('session.data.authenticated.claims');
        var user = this.get('model');

        return `otpauth://totp/${user.get('username')}?secret=${user.get('key_2f')}&issuer=${claims.aud}`;

    })
});
