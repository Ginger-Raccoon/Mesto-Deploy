require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose'); // импорт монгус

const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

// eslint-disable-next-line import/no-unresolved
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');

// midlleware
app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signup', createUser);
app.post('/signin', login);

app.use(auth);
app.use('/cards', require('./routes/cards'));
app.use('/users', require('./routes/users'));

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден!' });
});

app.listen(PORT, () => {
// eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
