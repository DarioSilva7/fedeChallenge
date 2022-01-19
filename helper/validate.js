const {body, validationResult} = require('express-validator')

const expressValidator = require('express-validator');

exports.validate= (req,res, next)=>{
    expressValidator({ 
        customValidators: {
            isImage: function(value, filename) {
                var extension = (path.extname(filename)).toLowerCase();
                switch (extension) {
                    case '.jpg':
                        return '.jpg';
                    case '.jpeg':
                        return '.jpeg';
                    case  '.png':
                        return '.png';
                    default:
                        return false;
                }
            }
        }
    });
    restLogo = typeof req.files['rest_logo'] !== "undefined" ? req.files['rest_logo'][0].filename : '';

    body('titulo', "Debe ingresar un titulo").exists()
    body('contenido', "Debe ingresar un contenido").exists()
    body('imagen', "Debe ingresar una imagen").exists().isImage(restLogo)
    body('fecha_creacion', 'Debe ingresar una fecha valida').exists().isDate('fecha_creacion', [ 'DD/MM/YYYY', true, ['/','-']]).isBefore('fecha_creacion', [''])
}