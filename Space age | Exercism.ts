export function age(planet: string, seconds: number): number {
2
  // calculate age in years
3
  const ageInYear: number = seconds / (60 * 60 * 24 * 365.25);
4
  // calculate the planet year
5
  const planets: { [key:string]: number } = {
6
    mercury: 0.2408467,
7
    venus: 0.61519726,
8
    earth: 1.0,
9
    mars: 1.8808158,
10
    jupiter: 11.862615,
11
    saturn: 29.447498,
12
    uranus: 84.016846,
13
    neptune: 164.79132,
14
  }
15
  // return the value
16
  return parseFloat((ageInYear / planets[planet]).toFixed(2));
17
}
18
