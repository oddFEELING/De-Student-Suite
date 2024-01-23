import { Schema, model, models } from 'mongoose';

const rota_schema = new Schema<Rota>(
  {
    rota_name: { type: String, unique: true, required: true },
    rota_description: String,
    icon_url: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ['open', 'closed'],
      default: 'open',
    },
    dates: [
      {
        date: Date,
        shifts: [String],
        need_count: Number,
        available: { type: Boolean, required: true, default: true },
        people: {
          pending: [String],
          approved: [String],
          declined: [String],
        },
      },
    ],
    activity_feed: [
      {
        date: String,
        agent: String,
        target: String,
        type: {
          type: String,
          enum: ['info', 'success', 'error', 'warn'],
          default: 'info',
        },
        event: {
          type: String,
          enum: [
            'showed interest in',
            'denied interest for',
            'is now on shift for',
            'is filled at this time',
          ],
        },
      },
    ],
  },
  { collection: 'rotas', timestamps: true }
);

const rota_model = models.rotas || model<Rota>('rotas', rota_schema);

export { rota_model };
