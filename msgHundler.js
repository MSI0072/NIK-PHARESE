var nik = require("nik-parse-api");

app.get('/api/nik/:nik', function (req, res) {
    const nik = req.params["nik"];
    res.send(nik.nikParse(nik));
  });
  
//ex : https://your-domain/api/nik/3204110609970001  
