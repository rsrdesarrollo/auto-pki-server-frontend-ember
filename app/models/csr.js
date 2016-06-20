import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    cn: attr('string'),
    fprint: attr('string'),
    reg_ip: attr('string'),
    reg_date: attr('date'),
    is_approved: attr('boolean'),
    is_removed: attr('boolean')
});
