import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { schema } from './schema';

const app = express();

app.use(morgan('dev'));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`listen http://localhost:${PORT}`)
});
