import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';
// import '@babel/polyfill';

import propertyRoute from './routes/property';
import userRoute from './routes/user';
// import user from './server/model/userDB';

dotenv.config();
const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
	res.status(200).send('Welcome to the Property Pro API');
});

const port = process.env.PORT || 8080;
// LOAD ROUTES HERE
app.use('/api/v1', propertyRoute);
app.use('/api/v1', userRoute);
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});

export default app;
