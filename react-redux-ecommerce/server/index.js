import express from 'express';
import cors from 'cors';
import methodOverride from 'method-override';
import fs from 'fs';

const app = express();

app.use(methodOverride());
app.use(cors());

app.get('/', (req, res) =>
  fs.readFile(`${__dirname}/data.json`, (err, content) => {
    res.write(content);
    res.end();
  })
);

app.listen(3000);
