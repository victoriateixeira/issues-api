import express from 'express';
import issueRoutes from './routes/issueRoutes'

const app = express();

app.use(express.json());

app.use('/issues', issueRoutes);

export default app;