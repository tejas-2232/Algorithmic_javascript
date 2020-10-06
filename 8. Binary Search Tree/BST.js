/*
This code explains, how can Javascript be used to implement Binary Search Trees.
In this program I have written code to add elements to a binary search tree, run in-order,
pre-order, post-order traversals and find elements in a BST.
*/
class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
        this.count = 1
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    create(val){
        var newnode = new Node(val)
        return newnode
    }

    add(val){
        var newnode = this.create(val)
        if (!this.root){
            this.root = newnode
            return
        }

        else{
            var prev = null
            var temp = this.root
            while(temp){
                prev = temp

                if (val == temp.val){
                    temp.count += 1
                    return
                }
                else if (val < temp.val){
                    temp = temp.left
                }
                else{
                    temp = temp.right
                }
            }

            if (val > prev.val){
                prev.right = newnode
            }

            else {
                prev.left = newnode
            }

            return
        }
    }

    inorder(temp){
        if(!temp){
            return
        }

        else{
            this.inorder(temp.left)

            for (let index = 0; index < temp.count; index++) {
                console.log(temp.val + " ")
            }

            this.inorder(temp.right)
            return
        }
    }

    inorder_traversal(){
        this.inorder(this.root)
    }

    postorder(temp){
        if(!temp){
            return
        }

        else{
            this.postorder(temp.left)
    
            this.postorder(temp.right)

            for (let index = 0; index < temp.count; index++) {
                console.log(temp.val + " ")
            }

            return
        }
    }

    postorder_traversal(){
        this.postorder(this.root)
    }

    preorder(temp){
        if(!temp){
            return
        }

        else{

            for (let index = 0; index < temp.count; index++) {
                console.log(temp.val + " ")
            }
            
            this.preorder(temp.left)

            this.preorder(temp.right)
            return
        }
    }

    preorder_traversal(){
        this.preorder(this.root)
    }

    find_val(val, temp){
        if(!temp){
            return -1
        }

        else{
            if(val == temp.val){
                return temp.count
            }
            else if (val < temp.val){
                return this.find_val(val, temp.left)
            }
            else{
                return this.find_val(val, temp.right)
            }
        }
    }

    find(val){
        return this.find_val(val, this.root)
    }

}


var tree = new BinarySearchTree()

tree.add(1)
tree.add(5)
tree.add(2)
tree.add(4)
tree.add(2)
tree.add(3)
console.log("# Inorder Traversal")
tree.inorder_traversal()
console.log("# Pre-order Traversal")
tree.preorder_traversal()
console.log("# Post-order Traversal")
tree.postorder_traversal()
console.log("# Finding 10")
console.log(tree.find(10))
console.log("# Finding 2")
console.log(tree.find(2))
console.log("# Finding 5")
console.log(tree.find(5))

/*
OUTPUT

# Inorder Traversal
1
2
2
3
4
5
# Pre-order Traversal
1
5
2
2
4
3
# Post-order Traversal
3
4
2
2
5
1
# Finding 10
-1
# Finding 2
2
# Finding 5
1
*/
