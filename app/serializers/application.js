import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

var underscore = Ember.String.underscore;

export default JSONAPISerializer.extend({
    serialize: function (snapshot) {

        let json = this._super(...arguments),
            changedAttributes = snapshot.changedAttributes(),
            attributes = {};

        Object.keys(changedAttributes).forEach(key => {
            attributes[this.keyForAttribute(key)] = changedAttributes[key][1];
        });

        json["data"]["attributes"] = attributes;

        return json;
    },

    keyForAttribute: function(attr) {
        return underscore(attr);
    },

    keyForRelationship: function(rawKey) {
        return underscore(rawKey);
    }
});
