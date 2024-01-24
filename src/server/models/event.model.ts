import { Schema, model, models } from 'mongoose';

const event_schema = new Schema<EventType>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: {
      start: { type: String, default: Date.now().toLocaleString() },
      end: { type: String, default: Date.now().toLocaleString() },
    },
    image_url: {
      type: String,
      required: true,
      default:
        'https://images.pexels.com/photos/4585617/pexels-photo-4585617.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    notes: String,
    status: {
      type: String,
      enum: ['open', 'closed', 'pending'],
      default: 'pending',
    },
    volunteers_needed: { type: Boolean, required: true, default: false },
    host: {
      name: String,
      contact: {
        email: String,
        phone: String,
        preferred: {
          type: String,
          enum: ['email', 'phone'],
          required: true,
          default: 'email',
        },
      },
    },
    stars: { type: Number, required: true, default: 0 },
    shares: { type: Number, required: true, default: 0 },
    saves: { type: Number, required: true, default: 0 },
    interested: [{ type: Schema.Types.ObjectId, ref: 'users', default: [] }],
  },
  { collection: 'events', timestamps: true }
);

const event_model = models.events || model<EventType>('events', event_schema);

export { event_model };
