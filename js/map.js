function makeArray(size){
    
    // The size of the table.
    var iMaxNum = size;
    // Loop counters.
    var i, j;

    // Set the length of the array to iMaxNum + 1. 
    // The first array index is zero, not 1.
    var MultiplicationTable = new Array(iMaxNum);

    // Loop for each major number (each row in the table)
    for (i = 0; i <= iMaxNum; i++)
    {
        // Create the columns in the table
        MultiplicationTable[i] = new Array(iMaxNum);

        // Fill the row with the results of the multiplication
        for (j = 0; j <= iMaxNum; j++)
        {
            MultiplicationTable[i][j] = 1;
        }
    }

    return MultiplicationTable;
}

function makeMap(gameBoard){

    var htmlResult = '';

    var arrayMap = makeArray(30);

    console.log(arrayMap);
        
    /*
        COLORS

        - blue
        - green
        - red

    */
    
    arrayMap[0][0] = 'white';
    arrayMap[0][1] = 'white';
    arrayMap[0][2] = 'white';
    arrayMap[0][3] = 'white';
    arrayMap[0][4] = 'white';
    arrayMap[0][5] = 'white';
    arrayMap[0][6] = 'white';
    arrayMap[0][7] = 'white';
    arrayMap[0][8] = 'white';
    arrayMap[0][9] = 'white';
    arrayMap[0][10] = 'white';
    arrayMap[0][11] = 'saddlebrown';
    arrayMap[0][12] = 'saddlebrown';
    arrayMap[0][13] = 'saddlebrown';
    arrayMap[0][14] = 'saddlebrown';
    arrayMap[0][15] = 'saddlebrown';
    arrayMap[0][16] = 'white';
    arrayMap[0][17] = 'white';
    arrayMap[0][18] = 'white';
    arrayMap[0][19] = 'white';
    arrayMap[0][20] = 'white';
    arrayMap[0][21] = 'white';
    arrayMap[0][22] = 'white';
    arrayMap[0][23] = 'white';
    arrayMap[0][24] = 'white';
    arrayMap[0][25] = 'white';
    arrayMap[0][26] = 'white';
    arrayMap[0][27] = 'white';
    arrayMap[0][28] = 'white';

    arrayMap[1][0] = 'white';
    arrayMap[1][1] = 'white';
    arrayMap[1][2] = 'white';
    arrayMap[1][3] = 'white';
    arrayMap[1][4] = 'white';
    arrayMap[1][5] = 'white';
    arrayMap[1][6] = 'white';
    arrayMap[1][7] = 'white';
    arrayMap[1][8] = 'white';
    arrayMap[1][9] = 'white';
    arrayMap[1][10] = 'white';
    arrayMap[1][11] = 'saddlebrown';
    arrayMap[1][12] = 'saddlebrown';
    arrayMap[1][13] = 'saddlebrown';
    arrayMap[1][14] = 'saddlebrown';
    arrayMap[1][15] = 'saddlebrown';
    arrayMap[1][16] = 'white';
    arrayMap[1][17] = 'white';
    arrayMap[1][18] = 'white';
    arrayMap[1][19] = 'white';
    arrayMap[1][20] = 'white';
    arrayMap[1][21] = 'white';
    arrayMap[1][22] = 'white';
    arrayMap[1][23] = 'white';
    arrayMap[1][24] = 'white';
    arrayMap[1][25] = 'white';
    arrayMap[1][26] = 'white';
    arrayMap[1][27] = 'white';
    arrayMap[1][28] = 'white';

    arrayMap[2][0] = 'white';
    arrayMap[2][1] = 'white';
    arrayMap[2][2] = 'white';
    arrayMap[2][3] = 'white';
    arrayMap[2][4] = 'white';
    arrayMap[2][5] = 'white';
    arrayMap[2][6] = 'white';
    arrayMap[2][7] = 'white';
    arrayMap[2][8] = 'white';
    arrayMap[2][9] = 'white';
    arrayMap[2][10] = 'white';
    arrayMap[2][11] = 'saddlebrown';
    arrayMap[2][12] = 'saddlebrown';
    arrayMap[2][13] = 'saddlebrown';
    arrayMap[2][14] = 'saddlebrown';
    arrayMap[2][15] = 'saddlebrown';
    arrayMap[2][16] = 'white';
    arrayMap[2][17] = 'white';
    arrayMap[2][18] = 'white';
    arrayMap[2][19] = 'white';
    arrayMap[2][20] = 'white';
    arrayMap[2][21] = 'white';
    arrayMap[2][22] = 'white';
    arrayMap[2][23] = 'white';
    arrayMap[2][24] = 'white';
    arrayMap[2][25] = 'white';
    arrayMap[2][26] = 'white';
    arrayMap[2][27] = 'white';
    arrayMap[2][28] = 'white';

    arrayMap[3][0] = 'white';
    arrayMap[3][1] = 'white';
    arrayMap[3][2] = 'white';
    arrayMap[3][3] = 'white';
    arrayMap[3][4] = 'white';
    arrayMap[3][5] = 'white';
    arrayMap[3][6] = 'white';
    arrayMap[3][7] = 'white';
    arrayMap[3][8] = 'white';
    arrayMap[3][9] = 'white';
    arrayMap[3][10] = 'white';
    arrayMap[3][11] = 'saddlebrown';
    arrayMap[3][12] = 'saddlebrown';
    arrayMap[3][13] = 'saddlebrown';
    arrayMap[3][14] = 'saddlebrown';
    arrayMap[3][15] = 'saddlebrown';
    arrayMap[3][16] = 'white';
    arrayMap[3][17] = 'white';
    arrayMap[3][18] = 'white';
    arrayMap[3][19] = 'white';
    arrayMap[3][20] = 'white';
    arrayMap[3][21] = 'white';
    arrayMap[3][22] = 'white';
    arrayMap[3][23] = 'white';
    arrayMap[3][24] = 'white';
    arrayMap[3][25] = 'white';
    arrayMap[3][26] = 'white';
    arrayMap[3][27] = 'white';
    arrayMap[3][28] = 'white';

    arrayMap[4][0] = 'white';
    arrayMap[4][1] = 'white';
    arrayMap[4][2] = 'white';
    arrayMap[4][3] = 'white';
    arrayMap[4][4] = 'white';
    arrayMap[4][5] = 'white';
    arrayMap[4][6] = 'white';
    arrayMap[4][7] = 'white';
    arrayMap[4][8] = 'white';
    arrayMap[4][9] = 'white';
    arrayMap[4][10] = 'saddlebrown';
    arrayMap[4][11] = 'saddlebrown';
    arrayMap[4][12] = 'saddlebrown';
    arrayMap[4][13] = 'gold';
    arrayMap[4][14] = 'saddlebrown';
    arrayMap[4][15] = 'saddlebrown';
    arrayMap[4][16] = 'saddlebrown';
    arrayMap[4][17] = 'white';
    arrayMap[4][18] = 'white';
    arrayMap[4][19] = 'white';
    arrayMap[4][20] = 'white';
    arrayMap[4][21] = 'white';
    arrayMap[4][22] = 'white';
    arrayMap[4][23] = 'white';
    arrayMap[4][24] = 'white';
    arrayMap[4][25] = 'white';
    arrayMap[4][26] = 'white';
    arrayMap[4][27] = 'white';
    arrayMap[4][28] = 'white';

    console.log(arrayMap);

    for (var index1 = 0; index1 < 5; index1++) {
        htmlResult = htmlResult + '<tr>'
        for (var index2 = 0; index2 < 28; index2++) {
            htmlResult = htmlResult + '<td class="' + arrayMap[index1][index2] + ' map_pos_' + index1 + '_' + index2 + '" data-x="' + index1 + '" data-y="' + index2 + '" data-position="map_pos_' + index1 + '_' + index2 + '"></td>';
        }
        htmlResult = htmlResult + '</tr>'
    }

    gameBoard.innerHTML = htmlResult;
}