import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_compare_text_number } from "./js_compare_text_number.mjs";
export async function functions_compare_text_number() {
  "Every function holding a cut of text against a number under an exact comparison, with the offending lines named.";
  "This is a type check nobody declared, and it fails by matching nothing. A chapter cut out of a file is writing; a chapter handed in by a picker or carried in an address is a number; the comparison between them is exact, so it is never true. What the caller receives is not an error but an empty answer, and an empty answer is what a passage with nothing in it looks like. One of these cost a morning: a whole psalm read as a passage of no lines, and every reader above it faithfully repeated that in its own words.";
  "The set was empty when this was written, which is why the gate over it ratchets against zero rather than against a list. What it watches for is the shape arriving again.";
  "A file the parser cannot read is passed over. That is a different complaint with a gate of its own, and the sweep below is what passes over it, counting what it skipped out loud so a run that read nothing cannot pass for a clean repo.";
  let offenders = await functions_ast_offenders_generic(
    js_compare_text_number,
    "found",
  );
  return offenders;
}
