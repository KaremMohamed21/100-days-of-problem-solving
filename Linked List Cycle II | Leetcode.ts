function detectCycle(head: ListNode | null): ListNode | null {
    let fast: ListNode = head,
        slow: ListNode = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) break;
    } 
    
    if (!fast || !fast.next) return null;
    
    while (slow.next) {
        if (slow == head) return slow
        slow = slow.next;
        head = head.next;
    }
};
