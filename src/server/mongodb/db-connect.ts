import mongoose from 'mongoose';

const db_url: string = process.env.DATABASE_URL as string;

class Database {
  client_url: string;

  constructor() {
    this.client_url = process.env.DATABASE_URL as string;
  }

  async connect() {
    await mongoose
      .connect(this.client_url)
      .then(() => console.log('Database connection Created.'))
      .catch((error) => console.log(error));
  }
  async close() {
    await mongoose.connection
      .close()
      .then(() => console.log('Database connection Closed.'))
      .catch((error) => console.log(error));
  }
}

// const connect_db = async () => {
//   await mongoose.connect(db_url);
// };

export default new Database();
