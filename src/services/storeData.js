const { Firestore } = require('@google-cloud/firestore');
const projectId = 'serta-mulia-443512';

async function storeData(id, data) {
    const db = new Firestore();

    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
}

module.exports = storeData;