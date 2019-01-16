import mongoose from 'mongoose';
import envVariables from 'dotenv';
// FIX run time generator error
import 'babel-polyfill';
import app from './app';

// Environment variables
envVariables.config({ path: '.env' });

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
	console.error(`MongoDb Connection Error: ${err.message}`);
});


// Start the app!
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});
