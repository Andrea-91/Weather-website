const path = require("path");

const Dotenv = require('dotenv-webpack');
module.exports={
    mode:"development",
    entry: "./src/index.js",

    plugins: [
        new Dotenv(
            {
                path: './.env'
            }
        )
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },


}
