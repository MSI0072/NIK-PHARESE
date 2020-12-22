var kontol = require("nik-parse-api");

app.get('/api/nik/:cok', function (req, res) {
    const nik = req.params["cok"];
    res.send(kontol.nikParse(nik));
  });
  
//ex : https://your-domain/api/nik/3204110609970001 
