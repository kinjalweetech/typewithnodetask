"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const port = process.env.SERVER_PORT || 8000;
App_1.default.listen(port, () => {
    console.log(`Server is running on Port${port}`);
});
