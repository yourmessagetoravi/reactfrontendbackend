const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const dbName = 'user_groups';

async function handleMongoOperation(operation, ...args) {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db(dbName);

    const result = await operation(db, ...args);

    console.log(result.message);
    return result;
  } catch (error) {
    console.error('Error during database operation:', error);
    throw error;
  } finally {
    await client.close();
  }
}

async function addUser(db, name, password) {
  const collection = db.collection('users');
  await collection.insertOne({ name, password });
  return { message: 'User created successfully' };
}

async function deleteUser(db, userId) {
  const collection = db.collection('users');
  await collection.deleteOne({ _id: ObjectId(userId) });
  return { message: 'User deleted successfully' };
}

async function updateUser(db, userId, name, password) {
  const collection = db.collection('users');
  await collection.updateOne({ _id: ObjectId(userId) }, { $set: { name, password } });
  return { message: 'User updated successfully' };
}

async function login(db, name, password) {
  const collection = db.collection('users');
  const user = await collection.findOne({ name, password });

  if (!user) {
    return { message: 'Login failed, user not found' };
  }

  return { message: 'Login success', userId: user._id };
}

// Example usage:
await handleMongoOperation(addUser, 'John Doe', 'password123');
await handleMongoOperation(deleteUser, '61b5f54a1154a554354a354a');
await handleMongoOperation(updateUser, '61b5f54a1154a554354a354b', 'Jane Doe', 'newpassword');
await handleMongoOperation(login, 'Jane Doe', 'newpassword');