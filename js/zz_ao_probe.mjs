import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export function zz_ao_probe(value) {
  let missing = null_is(value);
  let present = not(missing);
  return present;
}
