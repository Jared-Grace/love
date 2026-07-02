import { random } from "../../../love/public/src/random.mjs";
export function boolean_random() {
  let r = random();
  let r2 = r > 1 / 2;
  return r2;
}
