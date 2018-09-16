/* structure of input:
 *
 * objs = [
 *  {
 *      action: 'up',
 *      path: '../public/images',
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

const calculatePositions = function (objs, action, canvas) {
    var wordA = {
        img: {
            path: objs[0].path,
            width: objs[0].width,
            height: objs[0].height
        },
        x: 0,
        y: 0
    };
    var wordB = {
        img: {
            path: objs[1].path,
            width: objs[1].width,
            height: objs[1].height
        },
        x: 0,
        y: 0
    };

    if(action == 'center') {
        // A in B
        wordA.x = canvas.width/2 - wordA.img.width/2;
        wordB.x = canvas.width/2 - wordB.img.width/2;
        wordA.y = canvas.height - wordA.img.height;
        wordB.y = canvas.height - wordB.img.height;
    } else if (action == 'left') {
        // A to the left, B to the right
        wordA.x = canvas.width/4 - wordA.img.width/2;
        wordB.x = canvas.width - canvas.width/4 - wordB.img.width/2;
        wordA.y = canvas.height - wordA.img.height;
        wordB.y - canvas.height - wordB.img.height;
    } else if (action == 'up') {
        // A over B
        wordA.x = canvas.width/2 - wordA.img.width/2;
        wordB.x = canvas.width/2 - wordB.img.width/2;
        wordB.y = canvas.height - wordB.img.height;
        wordA.y = canvas.height - wordB.img.height - wordA.img.height;
    } else if (action == 'down') {
        // A under B
        wordA.x = canvas.width/2 - wordA.img.width/2;
        wordB.x = canvas.width/2 - wordB.img.width/2;
        wordA.y = canvas.height - wordA.img.height;
        wordB.y = canvas.height - wordA.img.height - wordB.img.height;
    }
    return {
      objectA: wordA,
      objectB: wordB
    };
}

// calculatePositions(wordList, canvas);

module.exports = {
    calculatePositions: calculatePositions
};
