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

