// make fast and slow pointers
// make the slow delayed by n 
// start iteration for the fast and check if the count reaches n
// if it reaches n start slow pointer
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {  
  let fast = head,
      slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
};
