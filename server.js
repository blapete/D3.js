const express = require('express');
const app = express();
const port = '3000';

app.use(express.static('fund/5-enter-selection'));

app.listen(port, () =>
    console.log(`app served on port http://127.0.0.1:3000/`),
);
