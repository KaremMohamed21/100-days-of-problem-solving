// set two pointers fast and slow
// itereate the linkedlist tell they met
function hasCycle(head: ListNode | null): boolean {
    let fast: ListNode = head,
        slow: ListNode = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) {
            return true
        }
    }
    
    return false;
};
