// servidorcito de prueba

const express = require('express');


const app = express();


app.get('/', (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error
        
    ) {
        res.status(400).json({error:error.messege})
    }
    
}
);



app.listen(3000, () => {

    console.log('Example app listening on port 3000!');

}
);





