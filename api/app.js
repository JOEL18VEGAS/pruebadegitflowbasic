// servidorcito de prueba

const express = require('express');


const app = express();
//hola xd

app.get('/', (req, res) => {
    try {
        res.status(200).send('Hello World!');
    } catch (error
        
    ) {
        res.status(400).json({error:error.messege})
    }
    
}
);


app.get("/saludo", (req, res) => {
    try {
        res.status(200).send("Hola Buenas");
    } catch (error) {
        res.status(400).json({
            "Error": error.message
        })
    }
});



app.listen(3000, () => {

    console.log('Example app listening on port 3000!');

}
);





