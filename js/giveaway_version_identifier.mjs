import { list_join_underscore } from "./list_join_underscore.mjs";
import { giveaway_identifier_prefix } from "./giveaway_identifier_prefix.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function giveaway_version_identifier(bible_folder) {
  "$plain bible_folder";
  "The name of the archive.org box holding one translation's whole Bible - the copy somebody downloads to read and search with no network.";
  "A whole translation rather than a passage, for two reasons that point the same way. A search over one chapter answers nothing, so the searchable unit is the translation. And credit is owed for most of this shelf, so a box per translation says that translation's credit once instead of repeating every translation's credit inside every passage.";
  "Keyed on the folder name the translation already carries on this disk, which is the name every reader of this shelf already goes through - so nothing new has to be kept in step with it, and a translation added later needs no second naming decision.";
  "The middle word is there so a box of text cannot be mistaken for a box of singing at a glance in a list, and so a third kind of box later has somewhere to say what it is.";
  let prefix = giveaway_identifier_prefix();
  let t = text_frozen("bible");
  let identifier = list_join_underscore([prefix, t, bible_folder]);
  return identifier;
}
