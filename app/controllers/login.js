import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    actions: {
        authenticate(){
            let {identification, password} = this.getProperties('identification', 'password');

            this.get('session').authenticate('authenticator:jwt-api', identification, password)
                .then(() =>{
                    this.get('session').set('data.user', identification);
                })
                .catch((reason) => {
                    this.set('errorMsg', reason);
                });
        }
    }
});
