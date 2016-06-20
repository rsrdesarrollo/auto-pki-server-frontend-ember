import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api/v1',
    updateRecord(store, type, snapshot) {
        var data = {};
        var serializer = store.serializerFor(type.modelName);

        serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

        var id = snapshot.id;
        var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

        
        return this.ajax(url, 'PATCH', { data: data });
    }
});
