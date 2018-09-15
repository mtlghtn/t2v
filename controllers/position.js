/* structure of input:
 *
 * objs = [
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

const calculatePositions = function (objs, action, canvas) {
    var wordA = {
        img: {
            path: objs[0].imgPath,
            width: objs[0].imgX,
            height: objs[0].imgY
        },
        x: 0,
        y: 0
    };
    var wordB = {
        img: {
            path: objs[1].imgPath,
            width: objs[1].imgX,
            height: objs[1].imgY
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
      objectA: wordB
    };
}

module.exports = {
    calculatePositions: calculatePositions
};
