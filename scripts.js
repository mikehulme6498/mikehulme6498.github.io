/*
// Very Hard
var grid =   [[6, 0, 0, 0, 0, 9, 0, 0, 7],
              [5, 4, 0, 0, 0, 7, 1, 0, 0],
              [0, 0, 2, 8, 0, 0, 0, 5, 0],
              [8, 0, 0, 0, 0, 0, 0, 9, 0],
              [0, 0, 0, 0, 7, 0, 0, 0, 0],
              [0, 3, 0, 0, 0, 0, 0, 0, 8],
              [0, 5, 0, 0, 0, 2, 3, 0, 0],
              [3, 0, 4, 5, 0, 0, 0, 2, 0],
              [9, 2, 0, 0, 3, 0, 5, 0, 4]];
*/
// very hard
/*
var grid = [[0, 1, 0, 6, 0, 4, 0, 0, 9],
              [0, 4, 0, 0, 0, 0, 0, 1, 0],
              [9, 0, 0, 0, 2, 1, 5, 4, 0],
              [0, 0, 0, 0, 6, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 2, 0 ,0, 0],
              [7, 0, 0, 0, 0, 0, 0, 2, 0],
              [8, 6, 0, 0, 0, 0, 0, 3, 0],
              [5, 0, 0, 0, 0, 6, 1, 0, 0],
              [2, 0, 1, 0, 0, 3, 7, 6, 0]];
*/
/*
// easy
var grid = [[6, 0, 5, 4, 0, 0, 3, 0, 2],
            [7, 3, 4, 0, 6, 0, 0, 5, 8],
            [0, 1, 0, 5, 3, 0, 0, 0, 0],
            [3, 4, 2, 6, 0, 7, 1, 9, 5],
            [1, 9, 7, 0, 0, 4, 0, 6, 0],
            [0, 0, 0, 0, 1, 3, 0, 0, 7],
            [9, 0, 6, 3, 0, 5, 0, 0, 0],
            [4, 7, 0, 0, 9, 1, 0, 2, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0]];
*/

// medium
// CAN DO THIS ONE
var grid = [[4, 0, 0, 0, 0, 3, 9, 0, 0],
            [3, 2, 6, 4, 5, 0, 0, 7, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 5, 8, 0, 0, 0, 0, 0],
            [7, 0, 2, 9, 0, 4, 5, 0, 8],
            [0, 0, 0, 0, 0, 1, 3, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0],
            [0, 4, 0, 0, 9, 6, 7, 5, 2],
            [0, 0, 7, 1, 0, 0, 0, 0, 9]];



/*
 * var grid = [[0, 0, 0, 0, 0, 8, 0, 4, 9],
            [0, 0, 8, 6, 0, 0, 3, 1, 0],
            [5, 0, 0, 9, 0, 2, 0, 0, 0],
            [0, 4, 6, 0, 0, 0, 2, 0, 0],
            [0, 0, 0, 7, 0, 0, 4, 0, 8],
            [0, 0, 0, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 8, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 8, 7, 0],
            [3, 0, 7, 5, 0, 0, 1, 0, 6]];
            
/*

// very easy
var grid =   [[2, 0, 0, 7, 4, 1, 0, 0, 9],
              [0, 8, 6, 0, 0, 2, 0, 0, 0],
              [0, 0, 1, 0, 0, 0, 0, 0, 0],
              [0, 4, 9, 0, 2, 0, 0, 7, 0],
              [7, 0, 0, 8, 0, 0, 0 ,1, 0],
              [0, 0, 0, 9, 0, 5, 0, 2, 8],
              [0, 0, 0, 0, 0, 6, 0, 3, 0],
              [0, 0, 0, 0, 0, 0, 0, 9, 0],
              [0, 0, 8, 0, 5, 7, 0, 0, 1]];

*/

function gridInformation(name, startX, startY) {
    this.name = name;
    this.startX = startX;
    this.startY = startY;
    this.currentNums = [];
    this.missingNums = [];
    this.cell = {
        one:   { value: 0, row: 0, col: 0, potentialNumbers: [] },
        two:   { value: 0, row: 0, col: 0, potentialNumbers: [] },
        three: { value: 0, row: 0, col: 0, potentialNumbers: [] },
        four:  { value: 0, row: 0, col: 0, potentialNumbers: [] },
        five:  { value: 0, row: 0, col: 0, potentialNumbers: [] },
        six:   { value: 0, row: 0, col: 0, potentialNumbers: [] },
        seven: { value: 0, row: 0, col: 0, potentialNumbers: [] },
        eight: { value: 0, row: 0, col: 0, potentialNumbers: [] },
        nine:  { value: 0, row: 0, col: 0, potentialNumbers: [] }
    }

    this.getGridCellPositions();
    this.fillCellsWithValues();
    this.fillCurrentNumsArray();
    this.fillMissingNumsArray();
    this.getPotentialNumbers();
}

gridInformation.prototype.getGridCellPositions = function () {
    let y = this.startY;
    let x = this.startX;

    for (let cellNum in this.cell) {
        this.cell[cellNum].row = x;
        this.cell[cellNum].col = y;

        if (y >= this.startY + 2) {
            y = this.startY;
            x++;
        } else {
            y++;
        }
        
    }
}

gridInformation.prototype.fillCellsWithValues = function(){
    
    let row = this.startX;
    let col = this.startY;

    for (let cellNum in this.cell) {
        this.cell[cellNum].value = grid[row][col];
        
        if (col === this.startY + 2) {
                col = this.startY;
                row++;
            } else {
            col++;
            
            } 
    }
}


gridInformation.prototype.fillCurrentNumsArray = function () {
    this.currentNums = getGrid(this.startX, this.startY);
}

gridInformation.prototype.fillMissingNumsArray = function () {
   this.missingNums = findMissingNums(this.currentNums);
}

gridInformation.prototype.getPotentialNumbers = function () {
     
    
        for (let currentCell in this.cell) {

            this.cell[currentCell].potentialNumbers = [];

            if (this.cell[currentCell].value > 0) {
                continue;
            }

            for (let i = 0; i < this.missingNums.length; i++) {
                let inCol = false;
                let inRow = false;
                let col = getColumn(this.cell[currentCell].col);
                let row = grid[this.cell[currentCell].row];

                if (col.indexOf(this.missingNums[i]) >= 0 ) {
                    inCol = true;
                }

                if (row.indexOf(this.missingNums[i]) >= 0) {
                    inRow = true;
                }

                if (inRow === false && inCol == false) {
                    this.cell[currentCell].potentialNumbers.push(this.missingNums[i]);
                }

            }
            
            
        }
  

    
}




var grids = {
    grid1 : new gridInformation("grid1", 0, 0),
    grid2 : new gridInformation("grid2", 0, 3),
    grid3 : new gridInformation("grid3", 0, 6),
    grid4 : new gridInformation("grid4", 3, 0),
    grid5 : new gridInformation("grid5", 3, 3),
    grid6 : new gridInformation("grid6", 3, 6),
    grid7 : new gridInformation("grid7", 6, 0),
    grid8 : new gridInformation("grid8", 6, 3),
    grid9 : new gridInformation("grid9", 6, 6)
} 


var cols = {
    col1: getColumn(0),
    col2: getColumn(1),
    col3: getColumn(2),
    col4: getColumn(3),
    col5: getColumn(4),
    col6: getColumn(5),
    col7: getColumn(6),
    col8: getColumn(7),
    col9: getColumn(8),
}

var rows = {
    row1: grid[0],
    row2: grid[1],
    row3: grid[2],
    row4: grid[3],
    row5: grid[4],
    row6: grid[5],
    row7: grid[6],
    row8: grid[7],
    row9: grid[8],
    
}


function getGrid(startX, startY) {
//Returns an array of numbers in corrisponding 3x3 grid    
let gridNums = []; 
 
for (let i = startX; i < startX+3; i++){
      for (let j = startY; j < startY+3; j++){
             
            if(grid[i][j]!==0){
                gridNums.push(grid[i][j]);
            }
    }
}
return gridNums;
}


function getColumn(col) {
    //returns numbers in column
    let column = []; 
        for (let j = 0; j < 9; j++){
            column.push(grid[j][col]);
        }
    return column;
}

function identifyGrid(rowNum, colNum) {
    
    for (gridName in grids) {
        
        for (cellName in grids[gridName].cell) {
                        
            if (grids[gridName].cell[cellName].row == rowNum && grids[gridName].cell[cellName].col == colNum) {
                console.log(gridName + "Cell" + cellName);
                return gridName + "Cell" + cellName;
            }
        }
    }
}

function solveRow(rowNum){
    
    let index = grid[rowNum].indexOf(0,0);
    let missingNums = findMissingNums(grid[rowNum]);
    let gridStartPos = getGridStartPosition(rowNum,index);
    let gridNums = getGrid(gridStartPos[0],gridStartPos[1]);
    let columnNums = getColumn(index);
    let potentialCols = [];
    //console.log("grid : " + JSON.stringify(gridNums));
    
    for (let i=0; i<missingNums.length; i++){ // Loops through each missing number from row
        index = grid[rowNum].indexOf(0,0);
        potentialCols = [];
        
        
        for (let j=0; j<missingNums.length; j++){
               columnNums = getColumn(index); // returens an array with numbers from column
               gridStartPos = getGridStartPosition(rowNum,index); // returns grid stat position
               gridNums = getGrid(gridStartPos[0],gridStartPos[1]); // returns an array with numbers from grid
               if (gridNums.indexOf(missingNums[i])!==-1){ // checks if current number exits in correspoding grid
                   index = grid[rowNum].indexOf(0,index+1);
                   continue;
               }
               
              // insert grid check
            
               if (columnNums.indexOf(missingNums[i])===-1){
                   potentialCols.push(index);
                   
               }
               index = grid[rowNum].indexOf(0,index+1);
        }      
               
                
        if (potentialCols.length === 1) {
            console.log("potential" + potentialCols[0]);
                   grid[rowNum][potentialCols[0]] = missingNums[i];
                   let cellName = identifyGrid(rowNum, potentialCols[0]);
                   console.log("Row : " + rowNum + " col : " + potentialCols[i] + " " + "cellName" + cellName);
                   let gridToUpdate = cellName.slice(0, cellName.indexOf("C"));
                   let cellToUpdate = cellName.slice(cellName.indexOf("ll") + 2);
                   updateCellValue(gridToUpdate, cellToUpdate, missingNums[i]);
                   updateSteps("Row Entry The only option for " + gridToUpdate + "Cell " + cellToUpdate + " is : " + missingNums[i]);
            updateAllGrids();
            console.log("cell name : " + gridToUpdate + " " + cellToUpdate);
                   updatePuzzle(cellName, missingNums[i]);
                   console.log(JSON.stringify(missingNums));
                   console.log(missingNums[i] + " added to the grid at pos " + grid[rowNum][potentialCols[i]]);
                   
               }
        }
}



function checkForNakedCells(gridName){
   
    for (let cellNum in gridName.cell) {
        if (gridName.cell[cellNum].potentialNumbers.length === 1) {
            let cellName = gridName.name + "Cell" + cellNum;
            updatePuzzle(cellName, gridName.cell[cellNum].potentialNumbers[0]);
            updateSteps("Naked Cell - The only option for " + cellName + " was " + gridName.cell[cellNum].potentialNumbers[0])
            gridName.cell[cellNum].value = gridName.cell[cellNum].potentialNumbers[0];
            grid[gridName.cell[cellNum].row][gridName.cell[cellNum].col] = gridName.cell[cellNum].potentialNumbers[0];
            gridName.cell[cellNum].potentialNumbers = [];
        }
        gridName.fillCurrentNumsArray();
        gridName.fillMissingNumsArray();
        gridName.getPotentialNumbers();
        }
}

function updateAllGrids() {
    for (let gridName in grids) {
        grids[gridName].fillCurrentNumsArray();
        grids[gridName].fillMissingNumsArray();
        grids[gridName].getPotentialNumbers();
    }
}

function updateSteps(string) {
    let node = document.createElement("li");
    let textNode = document.createTextNode(string);
    let steps = document.getElementById("stepsOl");
    node.appendChild(textNode);
    steps.appendChild(node);
}

function updateCellValue(grid, cell, value) {
    for (let gridName in grids) {

        if (gridName === grid) {
            for (let cellName in grids[gridName].cell) {
                if (cellName === cell) {
                    grids[gridName].cell[cellName].value = value;
                    console.log(grids[gridName].cell[cellName].value);
                    console.log("grid " + gridName + " cell : " + cellName + " found");
                }
            }
        }
    }
}

function checkRowByGrid(startRow, num) {
    
    
    let potentialRows = [];
    let eliminateCols = [];
    let eliminateGrids = [];
    let gridColNum;
    let availableCols =[];
    let exactCol= [];

    switch (startRow) {
        case 0:
        case 1:
        case 2: startRow = 0;
            break;
        case 3:
        case 4:
        case 5: startRow = 3;
            break;
        case 6:
        case 7:
        case 8: startRow = 6; 
        default: return;
    }
    

    for (let i = startRow; i<=startRow+2; i++){
        // This loop looks at the current row and the index of the number, passes it into getGridStartPosition to get the
        // top left corner cell of the corrisponding grid.

        console.log("Looking for " + num + " in grid " + getGridStartPosition(startRow, grid[i].indexOf(num)));

        if(grid[i].indexOf(num) >= 0 ){
            eliminateGrids.push(getGridStartPosition(startRow,grid[i].indexOf(num)));
            console.log("Elim Grids" + JSON.stringify(eliminateGrids));
            //eliminateCols.push(grid[i].indexOf(num));
        } 

        if (grid[i].indexOf(num) === -1) {
            potentialRows.push(i);        
        } 
    
    }
    
    if (potentialRows.length>1 || potentialRows.length===0){
        return;
    }
    
    let count = 0;
    
    if(eliminateGrids.length===2){
           
        for(let j = 0; j<eliminateGrids.length; j++){
           count += eliminateGrids[j][1];
        }
        
        switch (count){
                
            case 3 : gridColNum = 6;
            break;
                
            case 6 : gridColNum = 3;
            break;
                
            case 9 : gridColNum = 0;
            break;
        }
    }
    
    console.log(num + " will be on row : " + JSON.stringify(potentialRows));
    console.log(num + " cannot be in grid : " + JSON.stringify(eliminateGrids));
    console.log("must be grid : " + startRow + "," + gridColNum);
        
    //find available spots in only possible row and grid
    let index = gridColNum;
    
    for(let k =0; k<2; k++){
        availableCols.push(grid[potentialRows[0]].indexOf(0,index));
        index++;
    }
    console.log(num + " must be in cols : " + JSON.stringify(availableCols));
    // check cols +3 from gridcolumn num
    
    
    for (let k = 0; k<availableCols.length; k++){
    
    if(getColumn(availableCols[k]).indexOf(num)>=0){
            console.log(k + "continue");
            continue;
       } else{
           console.log(getColumn(availableCols[k]) + "else");
           exactCol.push(availableCols[k]);
       }
    }
    
    console.log("column has to be " + JSON.stringify(exactCol)); 
        
    if(exactCol.length===1){
        grid[potentialRows[0]][exactCol] = num
        console.log("Added " + num); 
    } else{
        console.log("nothing added from grid search")
        return;
    }
    
}

function solveCol(colNum){
    //3
    console.log("col " + colNum);
    
    
    //let rowNums = grid[0];
    let columnNums = getColumn(colNum);
    //let missingNums = findMissingNums(columnNums);
    let missingNums = findMissingNums(columnNums);
    let index = columnNums.indexOf(0,0);
    let potentialRows = [];
    let gridStartPos = getGridStartPosition(colNum,index);
    let gridNums = getGrid(gridStartPos[1],gridStartPos[0]);
    
    console.log("grid : " + JSON.stringify(missingNums) + " " + JSON.stringify(gridNums));
    
    for (let i=0; i<missingNums.length; i++){ // Loops through each missing number from row
        index = columnNums.indexOf(0,0);
        potentialRows = [];
        
        
        for (let j=0; j<missingNums.length; j++){
               
               gridStartPos = getGridStartPosition(colNum,index);
               gridNums = getGrid(gridStartPos[1],gridStartPos[0]);
               
               if (gridNums.indexOf(missingNums[i])!==-1){ // checks if current number exits in correspoding grid
                   index = columnNums.indexOf(0,index+1);
                   continue;
               }
               
               if (grid[index].indexOf(missingNums[i])===-1){
                   potentialRows.push(index);
                   
               }
               index = columnNums.indexOf(0,index+1);
        }      
               
               if (potentialRows.length === 1){
                   
                   console.log(potentialRows[i] + " " + colNum);
                   grid[potentialRows[0]][colNum] = missingNums[i];

                   let cellName = identifyGrid(potentialRows[0], colNum);
                   let gridToUpdate = cellName.slice(0, cellName.indexOf("C"));
                   let cellToUpdate = cellName.slice(cellName.indexOf("ll")+2);
                   updateCellValue(gridToUpdate, cellToUpdate, missingNums[i]);
                   updateSteps("Column Entry The only option for " + gridToUpdate + "Cell " + cellToUpdate + " is : " + missingNums[i]);
                   console.log("grid : " + gridToUpdate + " cell : " + cellToUpdate); 
                   updateAllGrids();
                   updatePuzzle(cellName, missingNums[i]);
                   
                   console.log(missingNums[i] + " added to the grid at row " + potentialRows[i]);
                   printGrid();
               }
        }
}


function findMissingNums(array){
    
    let missingNums = [];
   
    for (let i = 1; i <= 9; i++){
        if (array.indexOf(i) === -1){
            missingNums.push(i);
        }
    }
    //console.log("original : " + JSON.stringify(array));
    //console.log("missing  : " + JSON.stringify(missingNums));
    return missingNums;
}

function checkIfAllRowsAreComplete(){
    for (let i = 0; i<grid.length; i++){
        let tempArray = grid[i].reduce((total, num) => total + num);
        console.log(tempArray);
    }
}

function getGridStartPosition(x,y){
    
    if (x <= 2 && y <= 2){
        return [0,0];
    } else if (x <= 2 && y >2 && y <= 5){
        return [0,3];
    } else if (x <= 2 && y >5 && y <= 8){
        return [0,6];
    } else if (x > 2 && x <=5 && y <= 2){
        return [3,0];
    } else if (x > 2 && x <=5 && y > 2 && y <= 5){
        return [3,3];
    } else if (x > 2 && x <=5 && y > 5 && y <= 8){
        return [3,6];
    } else if (x > 5 && x <=8 && y <= 2){
        return [6,0];
    } else if (x > 5 && x <=8 && y > 2 && y <= 5){
        return [6,3];
    } else if (x > 5 && x <=8 && y > 5 && y <= 8){
        return [6,6];
    }
    
}

function drawPuzzle() {


    for (let gridNum in grids) {
        let gridElement = document.getElementById(gridNum);
        //console.log(gridNum);
        for (let cells in grids[gridNum].cell) {
            let newValue = document.createElement("div");
            newValue.id = grids[gridNum].name + "Cell" + cells;
            newValue.classList.add("cell");
            newValue.addEventListener("click", colourCell);
            //console.log(gridNum + " " + cells + " : " + grids[gridNum].cell[cells].value);
                if (grids[gridNum].cell[cells].value === 0) {
                    newValue.innerHTML = "";
                    
                } else {
                    
                    newValue.innerHTML = "<p>"+grids[gridNum].cell[cells].value+"</P>"
                }
            
            gridElement.appendChild(newValue);
            //console.log(newValue);

        }
    }
} 

function colourCell() {
    this.classList.add("cellChanged");
}

function updatePuzzle(whichCell, value) {

    for (let grid in grids) {
        

        let children = document.getElementById(grid).children;

        for (div of children) {
            if (div.id == whichCell) {
                div.innerHTML = "<p>" + value + "</p>";
                div.click();
            }
            
        }

    }
    
}



 //findMostSolvedRow();
 //findMostSolvedCol();
 //findMostSolvedGrid();
 //findMissingNums(boardStatus.mostSolvedRow.numbers);
 
 
function fillNakedCells() {

    checkForNakedCells(grids.grid1);
   for (gridNum in grids) {
        checkForNakedCells(grids[gridNum]);
        console.log(gridNum);
    }
    
}


function fillRowCol() {
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 9; j++) {
            solveRow(j);
            solveCol(j);
        }
    }
  
}


function check3Rows() { 
     for (let row=0; row<=6; row+=3){
        
             checkRowByGrid(row);
      
    }
    updateBoardStatus();
   
 }
 


 

drawPuzzle();





//checkIfAllRowsAreComplete()
