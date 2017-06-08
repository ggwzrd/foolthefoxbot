export const sleep = (time: number) =>
  new Promise<boolean>(resolve => setTimeout(() => {resolve(true)}, time))
