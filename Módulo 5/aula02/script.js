let table = document.querySelector('table');

//arrow function na prática

window.addEventListener("load", _ => {
    if (localStorage.hasOwnProperty("lista-pessoas")) {
        const values = JSON.parse(localStorage.getItem("lista-pessoas"))
        for(var x = 0; x < values.length;x++){
            let newElement = document.createElement('tr');

            let th = [
                document.createElement('td'),
                document.createElement('td'),
                document.createElement('td')
            ];

            th[0].innerText = `${values[x].companyName}`;
            th[1].innerText = `${values[x].contactName}`;
            th[2].innerText = `${values[x].countryName}`;

            th.forEach((x) => {
                newElement.appendChild(x)
            })


            table.appendChild(newElement)
            
        }

                

    }
    if (localStorage.hasOwnProperty("lista-paises")) {
        const countryNameField = document.getElementById('country')
        const contriesValue = JSON.parse(localStorage.getItem("lista-paises"))
        
        contriesValue.sort()
        contriesValue.forEach((x) => {
            const newCountry = document.createElement('option')
            newCountry.value = x
            newCountry.innerText = x
            countryNameField.appendChild(newCountry)
            
        })

    }
  })

let insertItem = (companyName, contactName, countryName) => {
    let newElement = document.createElement('tr');

    let th = [
        document.createElement('td'),
        document.createElement('td'),
        document.createElement('td')
    ];

    th[0].innerText = `${companyName}`;
    th[1].innerText = `${contactName}`;
    th[2].innerText = `${countryName}`;

    for(var x = 0; x < 3;x++){
        newElement.appendChild(th[x])
    }

    table.appendChild(newElement)
}
function addNewValues(){
    const companyNameField = document.getElementById('companyName')
    const contactNameField = document.getElementById('contactName')
    const countryNameField = document.getElementById('country')


    let companyNameValue = companyNameField.value
    let contactNameValue = contactNameField.value
    let countryNameValue = countryNameField.value


    var listPeople = JSON.parse(localStorage.getItem('lista-pessoas') || '[]');
    
    
    // Adiciona pessoa ao cadastro
    listPeople.push({
        companyName: companyNameValue,
        contactName: contactNameValue,
        countryName: countryNameValue
    });


    localStorage.setItem("lista-pessoas", JSON.stringify(listPeople));


    insertItem(companyNameValue,contactNameValue,countryNameValue)


    companyNameField.value = ""
    contactNameField.value = ""
    countryNameField.value = ""
}
function addNewCountry(){
    const countryNameField = document.getElementById('country')

    const newCountry = document.createElement('option')

    var listCountries = JSON.parse(localStorage.getItem('lista-paises') || '[]');
    let newCountryValue = prompt("Type the name of your country:")


    if(newCountryValue){
        if (localStorage.hasOwnProperty("lista-paises")) {
            for(var x = 0; x < listCountries.length;x++){
                if(newCountryValue == listCountries[x]){
                    alert('This country has already on the list.')
                    return
                }
            }


        }
        newCountry.value = newCountryValue
        newCountry.innerText = newCountryValue
        countryNameField.appendChild(newCountry)
        listCountries.push(newCountryValue);
        localStorage.setItem("lista-paises", JSON.stringify(listCountries));
    }
    
}
