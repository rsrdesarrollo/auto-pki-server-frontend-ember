import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    cn: attr('string'),
    fprint: attr('string'),
    reg_ip: attr('string'),
    reg_date: attr('date'),
    is_approved: attr('boolean'),
    short_fprint: function() {
        var fprint = this.get('fprint');

        var oct = fprint.split(":");

        var ret = oct[0];

        for(var i=1; i < 3; i++){
            ret = ret + ":" + oct[i];
        }

        ret = ret + ":...";

        for(i=oct.length-3; i < oct.length; i++){
            ret = ret + ":" + oct[i];
        }

        return ret;
    }.property('fprint')
});
