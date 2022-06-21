
const http = require('http');
const tableMaker = require("./modules/tableModule.js");

// Séléction de livres incontournables
const books = [
    {
        title: "The Fellowship of the Ring",
        language: "English",
        country: "United Kingdom",
        author: "J.R.R. Tolkien",
        date: "1954-07-29"
    },
    {
        title: "Prelude to foundation",
        language: "English",
        country: "United States",
        author: "Isaac Asimov",
        date: "1988-11-08"
    },
    {
        title: "Voyage au centre de la terre",
        language: "Français",
        country: "France",
        author: "Jules Verne",
        date: "1864-11-25"
    },
    {
        title: "La nuit des temps",
        language: "Français",
        country: "France",
        author: "René Barjavel",
        date: "1968-05-20"
    },
    {
        title: "Carrion Comfort",
        language: "English",
        country: "United States",
        author: "Dan Simmons",
        date: "1989-02-15"
    }
];

// Création de notre serveur
const server = http.createServer((req, res) => {


    if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        return; 
    }


    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // On écrit l'entête de notre page html
    res.write(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>`);

   
    const table = tableMaker.getTable(books);
    res.write(table);

  
    res.write('</body></html>');

    // On à fini d'envoyer nos informations au client
    res.end();
});


server.listen(3000);
