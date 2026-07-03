import { random } from "../../../love/public/src/random.mjs";
export function boolean_random() {
  let rnd = random();
  let r = rnd > 1 / 2;
  return r;
}
