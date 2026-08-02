import { js_codes } from "./js_codes.mjs";
import { literal_duplicates_generic } from "./literal_duplicates_generic.mjs";
export async function literal_duplicates() {
  "Every getter in this repo whose written value some other file here still spells";
  "out. Reading the source is the whole of what this adds - the judgment about what";
  "counts as a repeat lives below, where a written-down set of files can ask it the";
  "same questions.";
  let codes = await js_codes();
  let found = literal_duplicates_generic(codes);
  return found;
}
