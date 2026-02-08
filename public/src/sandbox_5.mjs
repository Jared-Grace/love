import { curry } from "../../../love/public/src/curry.mjs";
import { string_combine } from "../../../love/public/src/string_combine.mjs";
export async function sandbox_5() {
  let r = curry(string_combine);
  let r2 = r("a");
  let r3 = r2("b");
  return r3;
}
