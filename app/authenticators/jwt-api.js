import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
    tokenEndpoint: '/api/v1/auth/authenticate',
    restore(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate(identification, password) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: this.tokenEndpoint,
                type: 'POST',
                data: JSON.stringify({
                    username: identification,
                    password: password
                }),
                contentType: 'application/vnd.api+json;charset=utf-8',
                dataType: 'json'
            }).then(function(response) {
                Ember.run(function() {
                    if(response.success){
                        resolve({
                            token: response.result.id_token
                        });
                    }else{
                        reject(response.error);
                    }
                });

            }, function(xhr) {
                console.log("Error authenticate", xhr);
                var response = xhr.responseText;
                try{
                    response = JSON.parse(response);
                }catch (ex){
                    response = {error:response};
                }
                Ember.run(function() {
                    reject(response.error);
                });
            });
        });
    },

    invalidate(data) {
        console.log('invalidate...', data);
        return Ember.RSVP.resolve();
    }
});
