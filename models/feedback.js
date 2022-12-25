import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		eventId: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		stars: {
			type: Number,
			required: true,
		},
		comments: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
