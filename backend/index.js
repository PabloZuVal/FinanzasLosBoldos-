import express from 'express';
import morgan from 'morgan';
import cors from 'cors';    
import path from 'path';
// import db from './database';

const app = express();
require('./database');
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});