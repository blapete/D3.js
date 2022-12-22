const express = require('express');
const app = express();
app.use(express.static('fund/4-join-data'));
const port = process.env.PORT || '3000';

app.listen(port, () =>
    console.log(`app served on port http://127.0.0.1:3000/`),
);
