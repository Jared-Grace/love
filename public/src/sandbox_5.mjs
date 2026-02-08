import { string_combine } from "../../../love/public/src/string_combine.mjs";
import { curry_2 } from "../../../love/public/src/curry_2.mjs";
export async function sandbox_5() {
  let r = curry_2(string_combine);
  return r("a")("b");
}
