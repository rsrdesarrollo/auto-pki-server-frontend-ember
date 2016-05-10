import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(jqXHR) {
      var accessToken = this.get('session.content.secure.token');
      if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
          jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      }
  }
});
