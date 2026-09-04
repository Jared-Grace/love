import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_language_credit_prefixes } from "./bible_glyph_language_credit_prefixes.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_licence_words_unread } from "./ebible_licence_words_unread.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { ebible_bible_folders_repaired } from "./ebible_bible_folders_repaired.mjs";
import { list_map } from "./list_map.mjs";
import { list_any } from "./list_any.mjs";
export function bible_glyph_language_credit_defects(lines) {
  arguments_assert(arguments, 1);
  ("Everything wrong with the credit block of one generated reveal file, read off the lines the file says about itself, in words a person can act on.");
  ("THE LICENCE THESE FILES CARRY ASKS FOR MORE THAN ONE THING AT ONCE, and the half that is present is what stops anybody looking for the half that is not. Both of these files carried a publisher's name, a copyright line and the name of the terms while holding text this app had altered and saying nothing about it, and the block read as finished from every angle. So each condition is asked separately here and none of them is inferred from another.");
  ("THE CHANGE NOTICE IS CHECKED IN BOTH DIRECTIONS. A repaired bible with no notice is text passed off as the publisher's own; an untouched bible carrying one is a false statement about somebody else's scripture. Neither is visible by reading the file, because a credit block is believed rather than checked.");
  ("WHICH BIBLE THIS IS COMES OFF THE FILE'S OWN EDITION LINE and is never worked out from the web address beside it. The three catalogues this app fetches from write that address three ways, and a reading that happens to hold for one of them would answer wrongly for the others in silence - saying a bible is untouched is the answer that passes.");
  ("NOTHING IS THROWN HERE. A gate wants every file's faults at once rather than the first file's first fault, and a caller that has to catch a complaint to carry on is a caller that will stop at one.");
  let prefixes = bible_glyph_language_credit_prefixes();
  let defects = [];
  let terms_prefix = property_get(prefixes, "terms");
  let terms = list_filter_starts_with(lines, terms_prefix);
  let left = list_size(terms);
  let terms_one = equal(left, 1);
  if (not(terms_one)) {
    list_add(
      defects,
      "no single line naming the terms this translation is offered on",
    );
  }
  let unread = ebible_licence_words_unread();
  let unread_line = text_combine_multiple([terms_prefix, unread, "."]);
  let unread_written = list_includes(lines, unread_line);
  if (unread_written) {
    list_add(
      defects,
      "the terms were not recognised when this file was written, so the line naming them names nothing",
    );
  }
  let source_prefix = property_get(prefixes, "source");
  let sources = list_filter_starts_with(lines, source_prefix);
  let left2 = list_size(sources);
  let source_one = equal(left2, 1);
  if (not(source_one)) {
    list_add(defects, "no single line saying where this text came from");
  }
  let edition_prefix = property_get(prefixes, "edition");
  let editions = list_filter_starts_with(lines, edition_prefix);
  let left3 = list_size(editions);
  let edition_one = equal(left3, 1);
  if (not(edition_one)) {
    list_add(
      defects,
      "no single line naming which edition was read, so whether this app altered it cannot be told from the file",
    );
    return defects;
  }
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
    if (not(changes_one)) {
      list_add(
        defects,
        "this app alters the edition named here and no line says so, which is the second thing an attribution licence asks for besides the credit",
      );
    }
    return defects;
  }
  let changes_none = equal(changes_written, 0);
  if (not(changes_none)) {
    list_add(
      defects,
      "this file carries a notice of alterations under an edition this app does not alter, which is a false statement about somebody else's scripture",
    );
  }
  return defects;
}
