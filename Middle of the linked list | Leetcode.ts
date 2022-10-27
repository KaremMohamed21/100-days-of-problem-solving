/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// loop throw the linked list to get the lenth of it
// if the length is even, get the second to the middle element
// if the length is odd, get the ceil of the middle element
// traverse to the middle element
function middleNode(head: ListNode | null): ListNode | null {
    let count = 1, halfNode = 0;
    let current = head, result = head;

    while (current.next) {
        current = current.next;
        count++
    }

    halfNode = count % 2 === 0 ? (count / 2) + 1 : Math.ceil(count / 2);
    for (let i = 1; i < halfNode; i++) {
        result = result.next;
    }

    return result;
}
