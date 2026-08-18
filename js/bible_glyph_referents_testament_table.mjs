import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_referents } from "./bible_glyph_referents.mjs";
export function bible_glyph_referents_testament_table(testament_name) {
  "The referent rules written for one testament - the places where one word is drawn by more than one glyph because it stands for more than one thing.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names which rules to hand back and nothing that runs.";
  "A referent rule is KEYED ON A STRONG'S NUMBER, and a Strong's number is a testament's own, so these rules are per testament for exactly the reason the seed tables are. Reading the Greek rules against Hebrew words is not an error that announces itself: the Old Testament survey reported that Iesous and anthropos had been found in it, which is two Greek rules landing on whatever Hebrew words happened to share their numbers.";
  "THE OLD TESTAMENT'S LIST IS EMPTY ON PURPOSE, and empty is the honest answer rather than an unfinished one. A referent rule is an EXCEPTION - it exists only where a survey has found one word standing for two different beings - so an empty list says no exception has been found yet, which is a true statement and the correct state for a table nobody has surveyed for exceptions. That is the opposite of an empty SEED table, which would report nought per cent of the text drawn and read as work left to do.";
  let old_name = ebible_testament_old_name();
  let older = equal(testament_name, old_name);
  if (older) {
    let none = [];
    return none;
  }
  let new_name = ebible_testament_new_name();
  let newer = equal(testament_name, new_name);
  assert_json(newer, {
    testament_name,
    old_name,
    new_name,
    hint: "the referent rules are written one testament at a time and this name matches neither of them, so there is no list to hand back - spell the testament the way the book divisions spell it",
  });
  let greek = bible_glyph_referents();
  return greek;
}
