import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fullName(firstName: string, lastName: string): string {
  const fullName = `${firstName} ${lastName}`.trim()
  return `${capitalizeSentence(fullName)}`
}

export function initials(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase()
  const lastInitial = lastName.charAt(0).toUpperCase()
  return `${firstInitial}${lastInitial}`
}

export function capitalizeSentence(sentence: string): string {
  return sentence
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');
}

function capitalizeFirstLetter(input: string): string {
  let firstLetter = input.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let remainder = input.slice(1);
  return firstLetter + remainder;
}

