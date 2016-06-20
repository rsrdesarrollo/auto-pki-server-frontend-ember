import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
    serialize (snapshot) {

        let json = this._super(...arguments),
            changedAttributes = snapshot.changedAttributes(),
            attributes = {};

        Object.keys(changedAttributes).forEach(key => {
            attributes[this.keyForAttribute(key)] = changedAttributes[key][1];
        });

        json["data"]["attributes"] = attributes;

        return json;
    }
});
