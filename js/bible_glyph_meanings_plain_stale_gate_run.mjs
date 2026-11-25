import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_meanings_plain_stale } from "./bible_glyph_meanings_plain_stale.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function bible_glyph_meanings_plain_stale_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every meaning the plain-words table rewrites is still a meaning some root carries, so no plain rewrite has quietly stopped reaching the card. Throws so the dispatcher seam exits nonzero.");
  ("IT RATCHETS AGAINST NOTHING. Measured 2026-11-25 when the table was written, every one of its entries matched a root's meaning, asked for by the human so that rewording a root cannot bring the hard words back unseen.");
  let r = bible_glyph_meanings_plain_stale();
  let walked = property_get(r, "walked");
  let found = property_get(r, "found");
  let hint = text_combine_multiple([
    "these plain rewrites name a meaning no root carries any more, so the card shows the root's new words instead - rekey each one to the root's new meaning, or delete it, in ",
    fn_name("bible_glyph_meanings_plain"),
  ]);
  let result = list_empty_is_assert_walked_generic(walked, found, hint);
  return result;
}
