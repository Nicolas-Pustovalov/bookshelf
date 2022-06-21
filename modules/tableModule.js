
const dayjs = require('dayjs') // je l'ai installé via 'npm install dayjs'
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);


const tableMaker = {
    getTable: (books) => {

        let table = '';
        table += `<table border="1" cellspacing="0" cellpadding="5">`;
        table += `<thead>
                    <tr>
                        <th>Title</th>
                        <th>Language</th>
                        <th>Country</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>`;

    
        for (const currentBook of books) {

            const formatedDate = dayjs(currentBook.date).format('dddd, MMMM Do YYYY'); 
            

            table += `<tr>
                <td>${currentBook.title}</td>
                <td>${currentBook.language}</td>
                <td>${currentBook.country}</td>
                <td>${currentBook.author}</td>
                <td>${formatedDate}</td>
            </tr>`;
        }
        
        const date = dayjs('2019-01-25').format('dddd DD-MM/YYYY') 
        console.log(date);

        table += `</tbody></table>`;
        // la fonction retourne le tableau créé
        return table;
    }
}

module.exports = tableMaker;