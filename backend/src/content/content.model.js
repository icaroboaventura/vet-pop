import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema(
  {
    logo: {
      type: [{ type: String, required: true }],
      validate: [arrayLimit(val, 1), '{PATH} exceeds the limit of 1'],
    },
    navLinks: {
      type: [{ type: String, required: true }],
      validate: [arrayLimit(val, 6), '{PATH} exceeds the limit of 6'],
    },
    heroImgs: {
      type: [{ type: String, required: true }],
      validate: [arrayLimit(val, 3), '{PATH} exceeds the limit of 3'],
    },
    stats: {
      type: [{ type: String, required: true }],
      validate: [arrayLimit(val, 3), '{PATH} exceeds the limit of 3'],
    },
  },
  { collection: 'content', timestamps: true },
)

function arrayLimit(val, limit) {
  return val.length <= limit
}

export const Content = mongoose.model('Content', contentSchema)
