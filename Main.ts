import AVLTree from "./AVLTree";

let avlObj = new AVLTree();
 avlObj.insert(25);
 avlObj.insert(15);
 avlObj.insert(15);
 avlObj.insert(65);
 avlObj.insert(-5);

 console.log("inorder traversal");
 avlObj.inOrderTraversal(avlObj.root);

