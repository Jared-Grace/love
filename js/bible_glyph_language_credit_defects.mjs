import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_language_credit_prefixes } from "./bible_glyph_language_credit_prefixes.mjs";
import { bible_glyph_language_credit_attributed_is } from "./bible_glyph_language_credit_attributed_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { ebible_licence_words_unread } from "./ebible_licence_words_unread.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_glyph_language_credit_changes_defect_or_null } from "./bible_glyph_language_credit_changes_defect_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_glyph_language_credit_defects(lines) {
  arguments_assert(arguments, 1);
  ("Everything wrong with the credit block of one generated reveal file, read off the lines the file says about itself, in words a person can act on.");
  ("THE LICENCE THESE FILES CARRY ASKS FOR MORE THAN ONE THING AT ONCE, and the half that is present is what stops anybody looking for the half that is not. Both of these files carried a publisher's name, a copyright line and the name of the terms while holding text this app had altered and saying nothing about it, and the block read as finished from every angle. So each condition is asked separately here and none of them is inferred from another.");
  ("THE NOTICE OF ALTERATIONS IS ASKED NEXT DOOR, of ",
    fn_name("bible_glyph_language_credit_changes_defect_or_null"),
    ", because it is the one condition whose answer depends on which bible the file names rather than on the lines alone - and it is the only one that can be wrong in two opposite directions at once. It comes back as a single fault or as nothing, so it joins this list the same way the others do.");
  ("WHO OWNS THE WORDS IS ASKED NEXT DOOR TOO, because it is the one condition with no sentence to look for - a publisher's own name and copyright line are different words in every file, so the question is whether that part of the block is empty rather than what it says.");
  ("A FILE WITH NO EDITION LINE STOPS THE READING HERE, because every question left after that one is a question about which bible this is, and there is nothing to answer it from. Guessing the edition off the web address beside it would answer wrongly in silence for two of the three catalogues this app fetches from.");
  ("NOTHING IS THROWN HERE. A gate wants every file's faults at once rather than the first file's first fault, and a caller that has to catch a complaint to carry on is a caller that will stop at one.");
  let prefixes = bible_glyph_language_credit_prefixes();
  let defects = [];
  let attributed = bible_glyph_language_credit_attributed_is(lines);
  if (not(attributed)) {
    list_add(
      defects,
      "nobody is named as the owner of these words, which is the whole of what an attribution licence asks for",
    );
  }
  let terms_prefix = property_get(prefixes, "terms");
  let terms = list_filter_starts_with(lines, terms_prefix);
  let terms_one = list_size_equal(terms, 1);
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
  let source_one = list_size_equal(sources, 1);
  if (not(source_one)) {
    list_add(defects, "no single line saying where this text came from");
  }
  let edition_prefix = property_get(prefixes, "edition");
  let editions = list_filter_starts_with(lines, edition_prefix);
  let edition_one = list_size_equal(editions, 1);
  if (not(edition_one)) {
    list_add(
      defects,
      "no single line naming which edition was read, so whether this app altered it cannot be told from the file",
    );
    return defects;
  }
  let changes_defect =
    bible_glyph_language_credit_changes_defect_or_null(lines);
  let changes_faulty = not_equal(changes_defect, null);
  if (changes_faulty) {
    list_add(defects, changes_defect);
  }
  return defects;
}
