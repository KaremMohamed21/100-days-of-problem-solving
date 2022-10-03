// Probelm solution
export function isLeap(input: number) {
  if (input % 4 == 0 && input % 100 == 0) 
    return input % 400 == 0;
  if (input % 4 == 0) return true;
  return false;
  
}
