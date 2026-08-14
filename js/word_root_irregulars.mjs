import { word_root_irregulars_built } from "./word_root_irregulars_built.mjs";
import { global_function_property_lambda } from "./global_function_property_lambda.mjs";
export function word_root_irregulars() {
  "Every English word whose root cannot be reached by cutting an ending off it, paired with the root it belongs to - built once and kept for the rest of the process.";
  "Keeping it is safe in a way most keeping is not, because what is kept is not an answer about the disk or the clock but a table written in the code beside it. It cannot go stale while the process runs; only an edit to the source can change it, and that starts a new process.";
  "It is kept because it is asked once for EVERY word rooted, and building it turns ninety groups of forms into ninety splits. Measured on 2026-08-14 over twenty thousand words, rooting took 1352 ms and 1219 ms of that was this table being built again - so a whole reading of the New Testament spent nine tenths of itself rebuilding a constant. The rest of the rooting, the endings and the cutting, came to 33 ms together.";
  let irregulars = global_function_property_lambda(
    word_root_irregulars,
    "table",
    word_root_irregulars_built,
  );
  return irregulars;
}
