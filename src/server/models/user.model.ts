import { Schema, model, models } from 'mongoose';

const user_schema = new Schema<User>(
  {
    personal: {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      clerk_id: { type: String, required: true, unique: true },
      password_enabled: Boolean,
      profile_image: String,
      role: {
        type: String,
        enum: ['user', 'creator', 'admin', 'super-admin'],
        default: 'user',
      },
      contact: {
        email: { type: [String], required: false, unique: true },
        phone: { type: [String], required: false },
        prefered: { type: String, enum: ['phone', 'email'], default: 'email' },
      },
    },

    activity: {
      stars: { type: Number, default: 0 },
      church: { type: String, default: 'None' },
      saves: {
        rotas: { type: Schema.Types.ObjectId, ref: 'rotas' },
        events: { type: Schema.Types.ObjectId, ref: 'events' },
        stories: { type: Schema.Types.ObjectId, ref: 'stories' },
      },
    },

    student: {
      is_student: { type: Boolean, default: false },
      school: { type: String, default: 'None' },
    },
  },
  { collection: 'users', timestamps: true }
);

const user_model = models.users || model<User>('users', user_schema);

export { user_model };
