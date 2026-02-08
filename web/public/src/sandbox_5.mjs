import { curry } from "../../../love/public/src/curry.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function sandbox_5() {
  let r = curry(text_combine);
  let r2 = r("a");
  let r3 = r2("b");
  return r3;
}
