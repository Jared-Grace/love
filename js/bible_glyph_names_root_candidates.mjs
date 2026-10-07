import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_reference_tables } from "./bible_glyph_reference_tables.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { strongs_hebrew_dictionary } from "./strongs_hebrew_dictionary.mjs";
import { property_exists } from "./property_exists.mjs";
import { bible_glyph_strong_evidence } from "./bible_glyph_strong_evidence.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function bible_glyph_names_root_candidates(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own, spelled the way the book divisions spell it. It names a stretch of text to read and nothing that runs.");
  ("Every proper name one testament uses that no glyph seats yet, commonest first, each with what Strong's says it comes from and, for every number that derivation names, the picture that number is already drawn by.");
  ("IT PROPOSES NOTHING. A name is drawn as its root picture and the name tag, and which part of a root's picture carries the name, or whether a derivation names the root at all rather than a guess, is a reading, so this hands back the evidence and leaves the seat to whoever writes the table.");
  let told = await bible_glyph_proper_name_numbers_cache(testament_name);
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let tallies = await bible_strong_chapter_tallies_cache();
  let totals = {};
  for (let chapter_code of object_property_names(tallies)) {
    let side = bible_chapter_testament_name(chapter_code);
    if (not_equal(side, testament_name)) {
      continue;
    }
    let tally = property_get(tallies, chapter_code);
    for (let strong of object_property_names(tally)) {
      let before = property_get_or_null(totals, strong) ?? 0;
      property_set(totals, strong, before + property_get(tally, strong));
    }
  }
  let tables = bible_glyph_reference_tables();
  let right = ebible_testament_old_name();
  let older = equal(testament_name, right);
  let hebrew_dictionary = older ? await strongs_hebrew_dictionary() : null;
  let candidates = [];
  for (let strong of told.numbers) {
    if (property_exists(drawn, strong)) {
      continue;
    }
    let count = property_get_or_null(totals, strong) ?? 0;
    let evidence = await bible_glyph_strong_evidence(
      strong,
      hebrew_dictionary,
      tables,
    );
    list_add(candidates, {
      strong,
      count,
      ...evidence,
    });
  }
  function lambda(row) {
    let r = row.count;
    return r;
  }
  list_sort_number_mapper_reverse(candidates, lambda);
  return candidates;
}
