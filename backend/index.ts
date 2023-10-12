import app from './app';


const PORT = process.env.MYSQL_PASSWORD;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;