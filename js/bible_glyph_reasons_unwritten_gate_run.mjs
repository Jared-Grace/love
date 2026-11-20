import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_reasons_unwritten } from "./bible_glyph_reasons_unwritten.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function bible_glyph_reasons_unwritten_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every picture an authored picture Bible chapter draws has a reason written for why it was chosen. Throws so the dispatcher seam exits nonzero.");
  ("IT RATCHETS AGAINST NOTHING. Measured 2026-11-20, every one of the six hundred and eighty seven pictures drawn had its reason, asked for by the human so that a new chapter bringing a new picture cannot leave it unexplained.");
  let r = bible_glyph_reasons_unwritten();
  let walked = property_get(r, "walked");
  let found = property_get(r, "found");
  let hint = text_combine_multiple([
    "these pictures are drawn in a chapter with no reason written for why they were chosen, so a reader tapping the word sees not explained yet - write each one in ",
    fn_name("bible_glyph_reasons"),
  ]);
  let result = list_empty_is_assert_walked_generic(walked, found, hint);
  return result;
}
