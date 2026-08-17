import { arguments_assert } from "./arguments_assert.mjs";
export function random_seed_modulus() {
  "the number a seeded run of random numbers wraps around at, and the number each of its answers is divided by to land between zero and one";
  "one number in one place because the wrapping and the dividing have to agree: divide by anything else and the answers stop covering the whole of nought to one evenly, which is the one promise a random number makes";
  arguments_assert(arguments, 0);
  let modulus = 2147483647;
  return modulus;
}
