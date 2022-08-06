// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// D3 is a javascript library that produces highly sophisticated and highly dynamic graphics in an html
// webpage. It is often used to create dashboards or collections of visual data for presentation
var tbody = d3.select("tbody");
// in this code, we declared a new variable tbody and used 'd3.select' to tell javascript to look for
// the <tbody> tags in the html

function buildTable(data) {
    tbody.html("");
    // this line clears the table data. 'tbody.html' references the table, pointing JS directly to the
    // table we're about to build. The '("")' signifies empty string

    // the outside loop will iterate through each element in 'dataRow' and append a row and cells for 
    // each entry in the array. the inner loop will iterate through each entry in the array and fill
    // the appended cells with the data from the array
    data.forEach((dataRow) => {
    // creates 'for' loop that iterates through array, 'data' references the import data, 'dataRow' is
    // a parameter that will be used as a value when the function is called. Note the "fat arrow"
        let row = tbody.append("tr");
        // we use 'let' instead of 'var' because we don't want the variable 'row' to be available 
        // globally. 'tbody' tells JS to find the '<tbody>' html tag and to add a table row ("tr"). 
        // Remember, the data for each row in our table will be wrapped in "<tr>" tags
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            // creates a variable 'cell' to append the table with data
            cell.text(val);
            // assigns the text values from the data to the 'cell' function/variable to fill the cell
            }
        );
    });
  }

  // the next function will filter the html table data upon mouseclick
  function handleClick() {
    let date = d3.select("#datetime").property("value");
    // the 'select' function will select the first element that matches our selector string '#datetime'
    // for example, 'd3.select(#datetime)' tells d3 to look for the #datetime id in the html tags. We
    // have not yet created our html, but we know the date value will be nested between 'datetime' tags
    // by chaining 'property("value")' to the d3.select() function, we are telling d3 to not only look
    // for where the date values are stored, but also to store that information in the 'date' variable
    let filteredData = tableData;
    // here, we use our raw data variable as the filter for our date search. If no date has been entered
    // as a filter, the search will basically return all the data

    // now we want to introduce an if statement, to indicate when a date is entered into the filter
    if (date) {
    // if a date is entered,
        filteredData = filteredData.filter(row => row.datetime === date);
        // filter the raw data to show only the date entered
    };
    
    //now we can call our 'buildTable' function on the filtered data
    buildTable(filteredData);
  }

  d3.selectAll("#filter-btn").on("click", handleClick);
  // when we construct the html, we will assign a unique identifier to the '#filter-btn' element. So 
  // we include it here to link our code directly to the button. Also, by adding 'on(...)', we're telling
  // d3 to execute the 'handleClick' function when the button of id '#filter-btn' is clicked

  buildTable(tableData);
  // before constructing the html, we will call the 'buildTable' function again using the originally 
  // imported data. This will allow users to view the initial table before making a date inquiry
