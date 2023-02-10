// map to get the tail
// save the tail
// map on the list till you get the tail
// push the even indecies in order to the tail and remove it from its place
// move with two pointers
function oddEvenList(head: ListNode | null): ListNode | null {
    if (head == null) return null;
    
    let tail: ListNode = head, length = 1;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    
    if (length < 3) return head; 
    if (length % 2 === 0) length += 1;
    
    let current = head, pre = null, index = 1;
    while (index < length) {
        if (index % 2 === 0) {
            pre.next = current.next;
            current.next = null;
            tail.next = current;
            tail = current;
            current = pre.next
        } else {
            pre = current
            current = current.next  
        }
        index++;
    }
    
    return head;
};
