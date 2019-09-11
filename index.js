/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
 */
var addTwoNumbers = function(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  const result = {};
  let currentNode = result;
  while(curr1 || curr2) {
    const sum = (curr1 && curr1.val || 0) + (curr2 && curr2.val || 0);
    currentNode.val = currentNode.val ? currentNode.val + sum : sum;
    if (currentNode.val > 9) {
      let carry = true;
      if (!currentNode.next) {
        currentNode.next = { val: 0 };
      }
      let carryingOn = currentNode;
      let nextNode = carryingOn.next;
      while(carry) {
        carryingOn.val = carryingOn.val - 10;
        nextNode.val = nextNode.val + 1;
        carry = nextNode.val > 9;
        if (carry) {
          carryingOn = nextNode;
          if (!nextNode.next) {
            nextNode.next = {};
          }
          nextNode = nextNode.next;
        }
      }
    }
    curr1 = curr1 && curr1.next;
    curr2 = curr2 && curr2.next;
    if (currentNode.next) {
      currentNode = currentNode.next;
    } else if (!curr1 && !curr2) {
      currentNode.next = null;
    } else {
      currentNode.next = {};
      currentNode = currentNode.next;
    }
  }
  return result;
};

module.exports = addTwoNumbers;