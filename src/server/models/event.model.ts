import { Schema, model, models } from 'mongoose';

const event_schema = new Schema<EventType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: String,
    date: String,
    notes: String,
    volunteers_needed: { type: Boolean, required: true, default: false },
    host: {
      name: String,
      contact: {
        email: String,
        phone: String,
        preferred: String,
      },
    },
    stars: Number,
    shares: Number,
    saves: Number,
    interested: [String],
  },
  { collection: 'events', timestamps: true }
);

const event_model = models.events || model<EventType>('events', event_schema);

export { event_model };
