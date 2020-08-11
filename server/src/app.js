"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const PORT = 5000;
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log("server started at http://localhost:" + PORT);
});
//# sourceMappingURL=app.js.map