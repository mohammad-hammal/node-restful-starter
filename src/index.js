import mongoose from 'mongoose';
import envVariables from 'dotenv';
import app from './app';

// Enviroment variables
envVariables.config({ path: '.env' });

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
	console.error(`The error message ${err.message}`);
});


// Start the app!
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});
