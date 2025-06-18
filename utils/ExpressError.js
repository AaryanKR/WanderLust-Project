//we will not use it shows unknown error
// D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:73
//             throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
//             ^

// TypeError: Missing parameter name at 1: https://git.new/pathToRegexpError
//     at name (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:73:19)
//     at lexer (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:91:27)
//     at lexer.next (<anonymous>)
//     at Iter.peek (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:106:38)
//     at Iter.tryConsume (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:112:28)
//     at Iter.text (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:128:30)
//     at consume (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:152:29)
//     at parse (D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:183:20)
//     at D:\prac-webdev\MajorProject\airbnb\node_modules\router\node_modules\path-to-regexp\dist\index.js:294:74
//     at Array.map (<anonymous>)

// Node.js v22.14.0
// [nodemon] app crashed - waiting for file changes before starting...


class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;
