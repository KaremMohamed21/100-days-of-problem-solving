// Problem Solutions
export function toRna(input: string): string {
  // save the rna segments into object
  const rnaDictionary: {[key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }
  
 // turn string to array
  let dna: string[] = input.split("");
  
 // loop throw the array and turn each char into its RNA form
  let rna: string[] = dna.map((el) => {
    if (el in rnaDictionary == false) {
      throw new Error("Invalid input DNA.")
    }
    return rnaDictionary[el];
  });
  
  // Join RNA and return the result
  return rna.join("");
}
