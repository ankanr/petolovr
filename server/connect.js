const { MongoClient } = require('mongodb');

const url =
  'mongodb+srv://ankanr:ankanr@petolovr-cluster.kvr77.mongodb.net/users?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
