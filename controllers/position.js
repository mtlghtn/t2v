/* structure of input:
 *
 * wordList = [
 *  {
 *      action: 'up',
 *      imgPath: '../public/images',
 *      imgX: 100,
 *      imgY: 200,
 *  }
 * ]
 *
 * canvas = {
 *  x: 800,
 *  y: 600
 * }
 */

// Testing data:
/*
wordList = [
    {
        action: 'up',
        imgPath: '../public/images',
        imgX: 100,
        imgY: 200
    },
    {
        action: 'left',
        imgPath: '../public/images',
        imgX: 200,
        imgY: 300
    }
];
canvas = {
    x:800,
    y: 600
}
*/

const calculatePositions = function (wordList, canvas) {
    var wordA = {
        img: {
            path: wordList[0].imgPath,
            x: wordList[0].imgX,
            y: wordList[0].imgY
        },
        action: wordList[0].action,
        x: 0,
        y: 0
    };
    var wordB = {
        img: {
            path: wordList[1].imgPath,
            x: wordList[1].imgX,
            y: wordList[1].imgY
        },
        action: wordList[1].action,
        x: 0,
        y: 0
    };

    if(wordA.action == 'center') {
        // A in B
        wordA.x = canvas.x/2 - wordA.img.x/2;
        wordB.x = canvas.x/2 - wordB.img.x/2;
        wordA.y = canvas.y - wordA.img.y;
        wordB.y = canvas.y - wordB.img.y;
    } else if (wordA.action == 'left') {
        // A to the left, B to the right
        wordA.x = canvas.x/4 - wordA.img.x/2;
        wordB.x = canvas.x - canvas.x/4 - wordB.img.x/2;
        wordA.y = canvas.y - wordA.img.y;
        wordB.y - canvas.y - wordB.img.y;
    } else if (wordA.action == 'up') {
        // A over B
        wordA.x = canvas.x/2 - wordA.img.x/2;
        wordB.x = canvas.x/2 - wordB.img.x/2;
        wordB.y = canvas.y - wordB.img.y;
        wordA.y = canvas.y - wordB.img.y - wordA.img.y;
    } else if (wordA.action == 'down') {
        // A under B
        wordA.x = canvas.x/2 - wordA.img.x/2;
        wordB.x = canvas.x/2 - wordB.img.x/2;
        wordA.y = canvas.y - wordA.img.y;
        wordB.y = canvas.y - wordA.img.y - wordB.img.y;
    }
    console.log(wordA);
    console.log(wordB);
    return {wordA: wordA, wordB: wordB};
}

// calculatePositions(wordList, canvas);

module.exports = {
    calculatePositions: calculatePositions
};
