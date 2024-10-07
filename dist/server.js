"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const server = app_1.default;
server.get('/', function (req, res) {
    res.send('Hello World!');
});
server.post('/', function (req, res) {
    res.send({ status: 'Success', message: 'Hello World' });
});
server.listen(3000, function () {
    console.log('Listening on port 3000!');
});
