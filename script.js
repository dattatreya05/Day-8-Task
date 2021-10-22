// set up for our HTTP request
var xhr = new XMLHttpRequest();
//create and send some request to API server
// we required one is request type and another is url type
xhr.open("GET", "https://restcountries.com/v3.1/all");
// we will send a instruction by applying on load
xhr.onload = function () {
  var t = JSON.parse(this.response);
  console.log(
    "1 (a) Get all the countries from Asia continent /region using Filter function"
  );
  // first filtering the asia content by region next doing map on that and printing the output.
  console.log("\n");
  t.filter((x) => x.region === "Asia").map((x) => console.log(x.name.common));
  
  console.log("\n");
  console.log(
    "1 (b) Get all the countries with a population of less than 2 lakhs using Filter function"
  );
  // first filtering the population who are less than 2 lakh and next by doing mapping printing the country name
  console.log("\n");
  t.filter((x) => x.population < 200000).map((y) => console.log(y.name.common));
  
  console.log("\n");
  console.log(
    "1 (c) Print the following details name, capital, flag using forEach function"
  );
  console.log("\n");
  //by using for each loop we are printing the name and capital anf flag in png format
  t.forEach((element) => {
    console.log("\n", element.name.common, element.capital, element.flags.png);
  });
  
  console.log("\n");
  console.log(
    "1 (d) Printing the total population of countries using reduce function"
  );
  console.log("\n");
  // first doing the mapping which countries having the population and after using reduce function doing the sum of total population.
  console.log(t.map((x) => x.population).reduce((num1, num2) => num1 + num2));
  
  console.log("\n");
  console.log(
    "1 (e) Printing the countries which uses US Dollars as currency."
  );
  console.log("\n");
  //byusing filter first doing the currencies.
  t.filter((y) => {
    // by using for in loop printing return true if i is equal to USD 
    for (let i in y.currencies) {
      if (i === "USD") {
        return true;
      }
    }
    // by using mapping printing the countries names.
  }).map((y) => console.log(y.name.common));  
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
