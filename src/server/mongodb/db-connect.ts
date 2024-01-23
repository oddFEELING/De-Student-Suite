import mongoose from 'mongoose';

const db_url: string = process.env.DATABASE_URL as string;

class Database {
  client_url: string;

  constructor() {
    this.client_url = process.env.DATABASE_URL as string;
  }

  async connect(user_id: string) {
    await mongoose
      .connect(this.client_url)
      .then(() =>
        console.log(
          `DB Agent: ${user_id} - {open-conn} - ${Date().toLocaleLowerCase()}`
        )
      )
      .catch((error) => console.log(error));
  }
  async close(user_id: string) {
    await mongoose.connection
      .close()
      .then(() =>
        console.log(
          `DB Agent: ${user_id} - {close-conn} - ${Date().toLocaleLowerCase()}`
        )
      )
      .catch((error) => console.log(error));
  }
}

// const connect_db = async () => {
//   await mongoose.connect(db_url);
// };

export default new Database();
