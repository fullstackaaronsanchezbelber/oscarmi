const fs = require('fs');

function logRequest(message) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const fileName = `${year}-${month}-${day}.txt`;
    const logMessage = `${message}\n`;

    fs.appendFile(fileName, logMessage, (err) => {
        if (err) {
            console.error('Error al registrar el mensaje', err);
        } else {
            console.log(`Mensaje registrado en el archivo ${fileName}`);
        }
    });
}

module.exports = {
    logRequest
}
