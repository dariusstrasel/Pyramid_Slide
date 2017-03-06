
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */

function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // figure out the height the user typed (replace the "5" below)
    var userHeight = document.getElementById("height").value;

    // Update height label
    updateHeightLabel();

    heightStr = userHeight;

    // here we convert the string to an int
    height = parseInt(heightStr);
    // TODO 2
    // draw the pyramid with the given height
    drawPyramid(height, getSymbol());
}

function updateHeightLabel(height) {
    if (height === undefined) {
        var height_value = document.getElementById("height").value;
    }
    else {
        var height_value = height;
    }
    var label = document.getElementById("label_height");
    return label.textContent = height_value;
}

// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
var symbolSelector_element = document.getElementById("symbol_selector");
var eventHandler = symbolSelector_element.addEventListener("change", determineHeightAndThenDrawPyramid);
/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */

function getSymbol() {
    var symbol_element = document.getElementById("symbol_selector");
    var symbolOptions_collection = symbol_element.options;
    var selected_element = symbolOptions_collection.selectedIndex;
    return symbolOptions_collection[selected_element].value;
}

 function drawPyramid(height, symbol) {

     // TODO 4
     // before drawing, clear the old content
    var clearOldContent = function() {
        var parentDiv = document.getElementById("pyramid");
        parentDiv.innerHTML = ""
    };

    clearOldContent();
     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

    // Add function and event listener for drawing pyramid oninput change
var slider_element = document.getElementById("height");
var slider_eventListener = slider_element.addEventListener("input", determineHeightAndThenDrawPyramid);

    //TODO: Add function for modifying slider label.