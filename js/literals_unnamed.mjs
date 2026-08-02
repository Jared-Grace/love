import { js_codes } from "./js_codes.mjs";
import { literals_unnamed_generic } from "./literals_unnamed_generic.mjs";
export async function literals_unnamed() {
  "Every value this repo writes out in two or more files that no getter here names, commonest first.";
  "Reading the source is the whole of what this adds - the judgment about what counts lives below, where a written-down set of files can ask it the same questions.";
  let codes = await js_codes();
  let found = literals_unnamed_generic(codes);
  return found;
}
