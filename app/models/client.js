import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    cn: attr('string'),
    cert: attr('string'),
    last_beacon: attr('date'),
    revoked: attr('boolean')
});
