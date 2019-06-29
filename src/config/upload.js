const multer = require('multer');
const path = require('path');

//DEFINE O CAMINHO E O NOME QUE A IMAGEM SERÁ SALVA
module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    })
}