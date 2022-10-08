// Problem Solution
export class DnDCharacter {
  public hitpoints: number = 0;
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    
  }
  public static rollDice(): number[] {
    let arrayOfValues: number[] = [];
    for (let i = 0; i < 4; i++) {
      arrayOfValues.push((Math.floor(Math.random() * 6) + 1))   
    }
    return arrayOfValues;
  }
  public static getSumOfTheLargestNumbers(arr: number[]): number {
    let sortedArray = arr.sort((a, b) => b - a);
    return sortedArray[0] + sortedArray[1] + sortedArray[2]
  }
  
  public static generateAbilityScore(): number {
    return DnDCharacter.getSumOfTheLargestNumbers(DnDCharacter.rollDice());
  }
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
