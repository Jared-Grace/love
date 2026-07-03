import { random } from "../../../love/public/src/random.mjs";
export function boolean_random() {
  let rnd = random();
  let rb = rnd > 1 / 2;
  return rb;
}
