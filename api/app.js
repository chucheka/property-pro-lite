import express from 'express';
import propertyRoute from './server/routes/property';
import userRoute from './server/routes/user';
const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1', propertyRoute);
app.use('/api/v1', userRoute);
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});

export default app;
