(function () {
    "use strict";
    // to display list of coffees
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];

    function renderCoffee(coffee) {
        var html = '<div>';
        html += '<div class="col-6 float-left"><span class="coffeeName1"><h1>' + coffee.name + '</h1></span>';
        html += '<span class="coffee_roast">'+ coffee.roast + '</span></div>';
        html += '</div>';

        return html;
    }
// to display from ID #1 to 14
    function renderCoffees(coffees) {
        var html = '';
        for (var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

    function updateCoffees(roast) {
        event.preventDefault(); // don't submit the form, we just want to update the data

        var filteredCoffees = [];

        coffees.forEach(function(coffee) {
            if (coffee.roast === roast || coffee.name.toUpperCase().includes(roast)) {
                filteredCoffees.push(coffee);
            }
            else if(coffee.name.indexOf(roast) >= 0){
                filteredCoffees.push(coffee);
            }
            var lowercaseCoffees = coffee.name.toLowerCase();
            var input = document.querySelector(".search");
            // var lowercaseInput = input.toLowerCase();

        });
        // put the coffees on the page
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }


    var roastSelection = document.querySelector(".roastSelect");
    roastSelection.addEventListener("change", function (e) {
        var roast = e.target.value;
        updateCoffees(roast);
    });
    var nameChange = document.querySelector("#userCoffee1");
    // console.log(nameChange);
    nameChange.addEventListener("input", function (e) {
        console.log("hello");
        var name = e.target.value;
        updateCoffees(name);
    });

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide



    function searchCoffees () {
        var roast = document.getElementById('userRoast');
        var roastValue = roast.value;
        var input = document.getElementById('userCoffee');
        var inputValue = input.value;
        //console.log(roastValue);
        //console.log(inputValue);
        event.preventDefault();
        var objId = coffees.length + 1;
        //console.log(objId);
        var obj = {id: objId, name: inputValue, roast: roastValue};
        console.log("hello")
        console.log(obj);
        coffees.push(obj);

        tbody.innerHTML = renderCoffees(coffees);
        // return inputValue;
    }

    var tbody = document.querySelector(".coffees");
    var submitButton2 = document.querySelector(".submit2");


    tbody.innerHTML = renderCoffees(coffees);

    // submitButton.addEventListener('click', updateCoffees);
    submitButton2.addEventListener('click', searchCoffees);

}) ();