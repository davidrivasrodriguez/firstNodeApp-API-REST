// (async () => {
//     const response = await fetch('http://127.0.0.1:3000');
//     const data = await response.json();

//     const baseDiv = document.getElementById('main');

//     data.forEach(element => {
//         const newDiv = baseDiv.cloneNode(true);
//         newDiv.removeAttribute('id');
//         newDiv.textContent = element.message;

//         document.getElementById('main').appendChild(newDiv);
//     });
// })();


(async () => {
    await fetch('http://127.0.0.1:3000')
        .then(async (response) => {
            await response.json().then((data) => {
                console.log(data.message);
                let father = document.getElementById('list');
                let templateDiv = father.cloneNode(true);
                
                data.forEach(element => {
                    let newDiv = templateDiv.cloneNode(true);
                    newDiv.removeAttribute('id');
                    newDiv.textContent = element.message;
                    father.appendChild(newDiv);
                });
                father.firstElementChild.remove();
            }, () => {
                console.log('Error parsing JSON');
            })
        }, (data) => {
            console.log(data);
        })
})();