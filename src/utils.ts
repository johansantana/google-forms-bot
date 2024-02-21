/* eslint-disable @typescript-eslint/return-await */
export const generateNumber = (range: number, number: number, probability: number): number => {
  if (range <= 0 || probability < 0 || probability > 1) {
    throw new Error('Invalid input parameters')
  }

  const randomValue = Math.random() // Generate a random number between 0 and 1

  if (randomValue < probability) {
    // If the random value is less than the specified probability, return the desired number
    return number
  } else {
    // Otherwise, generate a random number within the given range
    return Math.floor(Math.random() * (range + 1))
  }
}

// Sleep function
export const sleep = async (ms: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
