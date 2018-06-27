(function () {
    "use strict";
    // to display list of coffees
    function renderCoffee(coffee) {
        var html = '<tr class="coffee">';
        html += '<div>' + '<span>' + '<h1>' + coffee.name + coffee.roast + '</h1>' + '</span>' + '</div>';
        html += '<div>' + '<p>' + coffee.name + coffee.roast + '</p>' + '</div>';
        html += '</tr>';

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
            if (coffee.roast === roast) {
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
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

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


    var tbody = document.querySelector(".coffees");
    var submitButton = document.querySelector(".submit");


    tbody.innerHTML = renderCoffees(coffees);


    submitButton.addEventListener('click', updateCoffees);
}) ();