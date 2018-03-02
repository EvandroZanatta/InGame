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
        Fields type

        - empty (transparent)
        - road (saddlebrown)
        - nexux (gold)

    */
    
    arrayMap[0][0] = 'empty';
    arrayMap[0][1] = 'empty';
    arrayMap[0][2] = 'empty';
    arrayMap[0][3] = 'empty';
    arrayMap[0][4] = 'empty';
    arrayMap[0][5] = 'empty';
    arrayMap[0][6] = 'empty';
    arrayMap[0][7] = 'empty';
    arrayMap[0][8] = 'empty';
    arrayMap[0][9] = 'empty';
    arrayMap[0][10] = 'empty';
    arrayMap[0][11] = 'road';
    arrayMap[0][12] = 'road';
    arrayMap[0][13] = 'road';
    arrayMap[0][14] = 'road';
    arrayMap[0][15] = 'road';
    arrayMap[0][16] = 'empty';
    arrayMap[0][17] = 'empty';
    arrayMap[0][18] = 'empty';
    arrayMap[0][19] = 'empty';
    arrayMap[0][20] = 'empty';
    arrayMap[0][21] = 'empty';
    arrayMap[0][22] = 'empty';
    arrayMap[0][23] = 'empty';
    arrayMap[0][24] = 'empty';
    arrayMap[0][25] = 'empty';
    arrayMap[0][26] = 'empty';
    arrayMap[0][27] = 'empty';
    arrayMap[0][28] = 'empty';

    arrayMap[1][0] = 'empty';
    arrayMap[1][1] = 'empty';
    arrayMap[1][2] = 'empty';
    arrayMap[1][3] = 'empty';
    arrayMap[1][4] = 'empty';
    arrayMap[1][5] = 'empty';
    arrayMap[1][6] = 'empty';
    arrayMap[1][7] = 'empty';
    arrayMap[1][8] = 'empty';
    arrayMap[1][9] = 'empty';
    arrayMap[1][10] = 'empty';
    arrayMap[1][11] = 'road';
    arrayMap[1][12] = 'road';
    arrayMap[1][13] = 'road';
    arrayMap[1][14] = 'road';
    arrayMap[1][15] = 'road';
    arrayMap[1][16] = 'empty';
    arrayMap[1][17] = 'empty';
    arrayMap[1][18] = 'empty';
    arrayMap[1][19] = 'empty';
    arrayMap[1][20] = 'empty';
    arrayMap[1][21] = 'empty';
    arrayMap[1][22] = 'empty';
    arrayMap[1][23] = 'empty';
    arrayMap[1][24] = 'empty';
    arrayMap[1][25] = 'empty';
    arrayMap[1][26] = 'empty';
    arrayMap[1][27] = 'empty';
    arrayMap[1][28] = 'empty';

    arrayMap[2][0] = 'empty';
    arrayMap[2][1] = 'empty';
    arrayMap[2][2] = 'empty';
    arrayMap[2][3] = 'empty';
    arrayMap[2][4] = 'empty';
    arrayMap[2][5] = 'empty';
    arrayMap[2][6] = 'empty';
    arrayMap[2][7] = 'empty';
    arrayMap[2][8] = 'empty';
    arrayMap[2][9] = 'empty';
    arrayMap[2][10] = 'empty';
    arrayMap[2][11] = 'road';
    arrayMap[2][12] = 'road';
    arrayMap[2][13] = 'road';
    arrayMap[2][14] = 'road';
    arrayMap[2][15] = 'road';
    arrayMap[2][16] = 'empty';
    arrayMap[2][17] = 'empty';
    arrayMap[2][18] = 'empty';
    arrayMap[2][19] = 'empty';
    arrayMap[2][20] = 'empty';
    arrayMap[2][21] = 'empty';
    arrayMap[2][22] = 'empty';
    arrayMap[2][23] = 'empty';
    arrayMap[2][24] = 'empty';
    arrayMap[2][25] = 'empty';
    arrayMap[2][26] = 'empty';
    arrayMap[2][27] = 'empty';
    arrayMap[2][28] = 'empty';

    arrayMap[3][0] = 'empty';
    arrayMap[3][1] = 'empty';
    arrayMap[3][2] = 'empty';
    arrayMap[3][3] = 'empty';
    arrayMap[3][4] = 'empty';
    arrayMap[3][5] = 'empty';
    arrayMap[3][6] = 'empty';
    arrayMap[3][7] = 'empty';
    arrayMap[3][8] = 'empty';
    arrayMap[3][9] = 'empty';
    arrayMap[3][10] = 'empty';
    arrayMap[3][11] = 'road';
    arrayMap[3][12] = 'road';
    arrayMap[3][13] = 'road';
    arrayMap[3][14] = 'road';
    arrayMap[3][15] = 'road';
    arrayMap[3][16] = 'empty';
    arrayMap[3][17] = 'empty';
    arrayMap[3][18] = 'empty';
    arrayMap[3][19] = 'empty';
    arrayMap[3][20] = 'empty';
    arrayMap[3][21] = 'empty';
    arrayMap[3][22] = 'empty';
    arrayMap[3][23] = 'empty';
    arrayMap[3][24] = 'empty';
    arrayMap[3][25] = 'empty';
    arrayMap[3][26] = 'empty';
    arrayMap[3][27] = 'empty';
    arrayMap[3][28] = 'empty';

    arrayMap[4][0] = 'empty';
    arrayMap[4][1] = 'empty';
    arrayMap[4][2] = 'empty';
    arrayMap[4][3] = 'empty';
    arrayMap[4][4] = 'empty';
    arrayMap[4][5] = 'empty';
    arrayMap[4][6] = 'empty';
    arrayMap[4][7] = 'empty';
    arrayMap[4][8] = 'empty';
    arrayMap[4][9] = 'empty';
    arrayMap[4][10] = 'road';
    arrayMap[4][11] = 'road';
    arrayMap[4][12] = 'road';
    arrayMap[4][13] = 'nexus';
    arrayMap[4][14] = 'road';
    arrayMap[4][15] = 'road';
    arrayMap[4][16] = 'road';
    arrayMap[4][17] = 'empty';
    arrayMap[4][18] = 'empty';
    arrayMap[4][19] = 'empty';
    arrayMap[4][20] = 'empty';
    arrayMap[4][21] = 'empty';
    arrayMap[4][22] = 'empty';
    arrayMap[4][23] = 'empty';
    arrayMap[4][24] = 'empty';
    arrayMap[4][25] = 'empty';
    arrayMap[4][26] = 'empty';
    arrayMap[4][27] = 'empty';
    arrayMap[4][28] = 'empty';

    console.log(arrayMap);

    for (var index1 = 0; index1 < 5; index1++) {
        htmlResult = htmlResult + '<tr>'
        for (var index2 = 0; index2 < 28; index2++) {
            htmlResult = htmlResult + '<td class="' + arrayMap[index1][index2] + ' map_pos_' + index1 + '_' + index2 + '" data-x="' + index1 + '" data-y="' + index2 + '" data-position="map_pos_' + index1 + '_' + index2 + '" data-type="' + arrayMap[index1][index2] + '"></td>';
        }
        htmlResult = htmlResult + '</tr>'
    }

    gameBoard.innerHTML = htmlResult;
}