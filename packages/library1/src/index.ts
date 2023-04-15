export const add =
  <Str1 extends string>(str1: Str1) =>
  <Str2 extends string>(str2: Str2) =>
    `${str1}${str2}` as const

export const addNumber = (num1: number) => (num2: number) => num1 + num2
