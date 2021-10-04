let xmlContent = '';
let tableBooks = document.getElementById('projects');
fetch('project.xml').then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let books = xmlDOM.querySelectorAll('project');


        books.forEach(bookXmlNode => {

            let row = document.createElement('tr');

            //semester
            let td = document.createElement('td');
            td.innerText = bookXmlNode.children[0].innerHTML;
            row.appendChild(td);

            //project
            td = document.createElement('td');
            td.innerText = bookXmlNode.children[1].innerHTML;
            row.appendChild(td);

            //date
            td = document.createElement('td');
            td.innerText = bookXmlNode.children[3].innerHTML;
            row.appendChild(td);

            //description
            td = document.createElement('td');
            td.innerText = bookXmlNode.children[4].innerHTML;
            row.appendChild(td);

            //image
            img = document.createElement('img');
            img.setAttribute('src', bookXmlNode.children[5].innerHTML);
            img.innerText = bookXmlNode.children[5].innerHTML;
            row.appendChild(img);


            row.appendChild[td];

            tableBooks.children[1].appendChild(row);

        });

    });
});