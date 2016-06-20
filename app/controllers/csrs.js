import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteAll(model){
            alert("Delete All", model);
        },
        approveAll(model){
            alert("Approve All", model);
        },
        save(model){
            model.forEach(it => it.save());
        }
    }
});
