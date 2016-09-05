import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('users', function(){
      this.route('edit', {path: '/edit/:user_id'});
  });
  this.route('csrs');
  this.route('about');
  this.route('otp', function() {
    this.route('activate');
    this.route('deactivate');
    this.route('validate');
  });
});

export default Router;
