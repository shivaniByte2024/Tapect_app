
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anushaka:q1wjRtM1otXSkB6b@tapcet.twuqng1.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
