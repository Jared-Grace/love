import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
export function bible_glyph_roots_testament_table(testament_name) {
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names which table to hand back and nothing that runs.";
  "The seed glyph table written for one testament.";
  "A Strong's number is a TESTAMENT'S OWN, so there is one table per testament and this is the one place that says which is which. Every reader of a table asks here rather than naming one, so a reader cannot pick the wrong one up.";
  "AN UNKNOWN TESTAMENT IS REFUSED rather than answered with an empty table. An empty table surveys perfectly happily and reports that nought per cent of the text is drawn, which is indistinguishable from a testament nobody has started - so the mistake would look like honest work left to do.";
  "This replaced a GUARD, and what it replaced is worth remembering. Every reader used to name the Greek table itself and then a check further down asked whether the table and the testament agreed, refusing if they did not. The check existed because reading the Greek table against Hebrew words did not fail - it quietly reported that one and a half per cent of the Old Testament was already drawn, which was sixty-three Greek roots landing on whatever Hebrew words happened to share their numbers. Choosing the table BY the testament makes that mistake unconstructible instead of caught, which is the better of the two every time it is available.";
  let old_name = ebible_testament_old_name();
  let older = equal(testament_name, old_name);
  if (older) {
    let hebrew = bible_glyph_roots_hebrew();
    return hebrew;
  }
  let new_name = ebible_testament_new_name();
  let newer = equal(testament_name, new_name);
  assert_json(newer, {
    testament_name,
    old_name,
    new_name,
    hint: "the glyph tables are written one per testament and this name matches neither of them, so there is no table to hand back - spell the testament the way the book divisions spell it",
  });
  let greek = bible_glyph_roots();
  return greek;
}
