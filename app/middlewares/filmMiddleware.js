const filmMiddleware = (req, res, next) => {
    let today = new Date();
    console.log(`Time: ${today.getDate()}`);
    console.log("Method:" + req.method);
    console.log("URL: " + req.url);
    next();
}

module.exports = filmMiddleware;