"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLTree_1 = __importDefault(require("./AVLTree"));
let avlObj = new AVLTree_1.default();
avlObj.insert(25);
avlObj.insert(15);
avlObj.insert(15);
avlObj.insert(65);
avlObj.insert(-5);
console.log("inorder traversal");
avlObj.inOrderTraversal(avlObj.root);
