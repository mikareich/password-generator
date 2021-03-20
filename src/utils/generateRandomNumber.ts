/**
 * Generates random number between to given values
 * @param min Smallest value that the number can reach
 * @param max Highest value that the number can reach
 * @returns Random number between given values
 */
export default function generateRandomNumber(
  min: number = 0,
  max: number = 1
): number {
  const delta = max - min;
  const randomNumber = min + Math.round(Math.random() * delta);

  return randomNumber;
}
