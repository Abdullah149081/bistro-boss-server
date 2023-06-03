/* 
===============
server site
===============

1. yarn add jsonwebtoken
2.const jwt = require("jsonwebtoken");
3.require('crypto').randomBytes(64).toString('hex')
4.env file (ACCESS_TOKEN_SECRET)

5.  app.post("/jwt", (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
    res.send({ token });
});

6.
const verifyJwt = (req, res, next) => {
const authorization = req.headers.authorization;

if (!authorization) {
return res.status(401).send({ err: true, message: "unauthorized access" });
}
const token = authorization.split(" ")[1]; // must space (because Bearer)

jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
if (err) {
    return res.status(401).send({ err: true, message: "unauthorized access" });
}
req.decoded = decoded;
next();
});
};

----------------
client site 
----------------

AuthProviders onAuth

  // get and set jwt toke

    if (currentUser) {
    axios
        .post("http://localhost:5000/jwt", {
        email: currentUser.email,
        })
        .then((data) => {
        localStorage.setItem("token", data.data.token); // important
        });
    } else {
    localStorage.removeItem("token"); // important
    } 








*/
