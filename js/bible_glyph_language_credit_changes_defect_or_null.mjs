import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_language_credit_prefixes } from "./bible_glyph_language_credit_prefixes.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_bible_folders_repaired } from "./ebible_bible_folders_repaired.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_any } from "./list_any.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_language_credit_changes_defect_or_null(lines) {
  arguments_assert(arguments, 1);
  ("What is wrong with one generated reveal file's notice of alterations, in words a person can act on - null when the notice says exactly what the edition named in the same file calls for.");
  ("IT IS ASKED IN BOTH DIRECTIONS AND THAT IS WHY IT IS ONE QUESTION. A repaired bible with no notice is text passed off as the publisher's own; an untouched bible carrying one is a false statement about somebody else's scripture. The two faults are opposite readings of the same two lines, so a caller that asked only the first would let the second through in silence, and neither is visible by reading the file - a credit block is believed rather than checked.");
  ("WHICH BIBLE THIS IS COMES OFF THE FILE'S OWN EDITION LINE and is never worked out from the web address beside it. The three catalogues this app fetches from write that address three ways, and a reading that happens to hold for one of them would answer wrongly for the others in silence - saying a bible is untouched is the answer that passes.");
  ("AT MOST ONE FAULT CAN COME BACK FROM HERE, because the edition either is one this app repairs or is not, and each side has exactly one thing it can get wrong. That is why a single fault or nothing is the whole answer, rather than a list a caller would have to join onto its own.");
  ("NOTHING IS THROWN HERE, for the reason ",
    fn_name("bible_glyph_language_credit_defects"),
    " throws nothing: a gate wants every file's faults at once rather than the first file's first fault.");
  let prefixes = bible_glyph_language_credit_prefixes();
  let edition_prefix = property_get(prefixes, "edition");
  let folders = ebible_bible_folders_repaired();
  function edition_line_of(folder) {
    let line = text_combine_multiple([edition_prefix, folder, "."]);
    return line;
  }
  let repaired_lines = list_map(folders, edition_line_of);
  function written_is(line) {
    let written = list_includes(lines, line);
    return written;
  }
  let repaired = list_any(repaired_lines, written_is);
  let changes_prefix = property_get(prefixes, "changes");
  let changes = list_filter_starts_with(lines, changes_prefix);
  let changes_written = list_size(changes);
  if (repaired) {
    let changes_one = equal(changes_written, 1);
    if (changes_one) {
      return null;
    }
    let r =
      "this app alters the edition named here and no line says so, which is the second thing an attribution licence asks for besides the credit";
    return r;
  }
  let changes_none = equal(changes_written, 0);
  if (changes_none) {
    return null;
  }
  let r2 =
    "this file carries a notice of alterations under an edition this app does not alter, which is a false statement about somebody else's scripture";
  return r2;
}
