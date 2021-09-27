/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
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
			toVisitQueue.push(...curNode.children)
		}
		return allVals;
	}
	
  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const allVals = this.getAllVals();
		return allVals.reduce((a,b) => a+b, 0)
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
		const allVals = this.getAllVals();
		return allVals.reduce((a,b) => {
			if(b % 2 === 0) a++;
			return a;
		}, 0)
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
		const allVals = this.getAllVals();
		return allVals.reduce((a,b) => {
			if(b > lowerBound) a++;
			return a;
		}, 0)
  }
}

module.exports = { Tree, TreeNode };
