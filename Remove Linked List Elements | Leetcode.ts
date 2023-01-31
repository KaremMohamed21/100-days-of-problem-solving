function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(!head) return head;
    const result = new ListNode();
    let cursor = result;

    while(head){
        if(head.val === val){
            head = head.next;   // need to move to the next node before skipping the loop
            continue;
        }else{
            cursor.next = new ListNode(head.val);
            cursor = cursor.next;
        }

        head = head.next;
    }

    return result.next;
};
