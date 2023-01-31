function reverseList(head: ListNode | null): ListNode | null {
    let current = head,
        next = null,
        pre = null
    while (current) {
        next = current.next;
        current.next = pre;
        pre = current;
        current = next
    }
    
    return pre
};
