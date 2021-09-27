/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

	getAllVals() {
		if (!this.root) return [];

		const toVisitQueue = [this.root];
		const allVals = [];
		while (toVisitQueue.length) {
			const curNode = toVisitQueue.shift();

			allVals.push(curNode.val);
			if (curNode.left) toVisitQueue.push(curNode.left);
			if (curNode.right) toVisitQueue.push(curNode.right);
		}
		return allVals;
	}

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
		if (!this.root) return 0;
		const toVisitQueue = [this.root];
		let depth = 1;
		while (toVisitQueue.length) {
			const curNode = toVisitQueue.shift();

			if (!(curNode.left || curNode.right)) return depth;

			depth++;
			if (curNode.left) toVisitQueue.push(curNode.left)
			if (curNode.right) toVisitQueue.push(curNode.right)
		}
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
		if (!this.root) return 0;
		
		function depthComp (curNode) {
			let leftMaxD = curNode.left ? depthComp(curNode.left) : 0;
			let rightMaxD = curNode.right ? depthComp(curNode.right) : 0;
			return Math.max(leftMaxD, rightMaxD) + 1;
		}

		return depthComp(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
		if (!this.root) return 0;
		let max = 0;
		
		function maxSumComp (curNode) {
			let leftMaxS = curNode.left ? maxSumComp(curNode.left) : 0;
			let rightMaxS = curNode.right ? maxSumComp(curNode.right) : 0;
			max = Math.max(max, curNode.val + leftMaxS + rightMaxS);
			return Math.max(0, leftMaxS + curNode.val, rightMaxS + curNode.val);
		}

		maxSumComp(this.root);
		return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
		const allVals = this.getAllVals();
		return allVals.reduce((a,b) => {
			if (b > lowerBound && (a === null || b < a)) a = b;
			return a;
		}, null)
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
		
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
