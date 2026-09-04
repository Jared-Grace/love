import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_language_written_mark } from "./bible_glyph_language_written_mark.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { bible_glyph_language_credit_prefixes } from "./bible_glyph_language_credit_prefixes.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export function bible_glyph_language_credit_attributed_is(lines) {
  arguments_assert(arguments, 1);
  ("Whether one generated reveal file names anybody at all as the owner of the words it holds.");
  ("IT IS THE CONDITION THE WHOLE BLOCK EXISTS FOR and the only one that cannot be checked by looking for a sentence. What a publisher calls their bible and who holds the copyright in it are their words, different for every translation, so there is nothing to search for - the check is that the block is not empty where they belong.");
  ("WHERE THEY BELONG IS BETWEEN THE GENERATED-FILE NOTICE AND THE TERMS, which is the one thing about the layout this relies on. That is the writer's own order and it is checked rather than assumed: a file laid out some other way answers no here and is looked at by a person, which is the right outcome for a credit block nobody recognises.");
  ("A FILE MISSING EITHER LANDMARK ANSWERS NO rather than throwing, because the caller is collecting every fault in every file and a missing landmark is one of the faults it is collecting.");
  let mark = bible_glyph_language_written_mark();
  let marked = list_includes(lines, mark);
  if (not(marked)) {
    return false;
  }
  let prefixes = bible_glyph_language_credit_prefixes();
  let terms_prefix = property_get(prefixes, "terms");
  let terms = list_filter_starts_with(lines, terms_prefix);
  let terms_one = list_size_equal(terms, 1);
  if (not(terms_one)) {
    return false;
  }
  let terms_line = list_first(terms);
  let mark_at = list_index_of(lines, mark);
  let terms_at = list_index_of(lines, terms_line);
  let between = subtract(terms_at, mark_at);
  let credited = greater_than(between, 1);
  return credited;
}
