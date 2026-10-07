import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_proper_name_numbers_cache } from "./bible_glyph_proper_name_numbers_cache.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_roots_hebrew } from "./bible_glyph_roots_hebrew.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_roots_root_lookup } from "./bible_glyph_roots_root_lookup.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { property_exists } from "./property_exists.mjs";
import { strongs_hebrew_definition } from "./strongs_hebrew_definition.mjs";
import { strongs_greek_definition } from "./strongs_greek_definition.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function bible_glyph_names_root_candidates(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own, spelled the way the book divisions spell it. It names a stretch of text to read and nothing that runs.");
  ("Every proper name one testament uses that no glyph seats yet, commonest first, each with what Strong's says it comes from and, for every number that derivation names, the picture that number is already drawn by.");
  ("IT PROPOSES NOTHING. A name is drawn as its root picture and the name tag, and which part of a root's picture carries the name, or whether a derivation names the root at all rather than a guess, is a reading, so this hands back the evidence and leaves the seat to whoever writes the table.");
  ("A REFERENCE IS LOOKED UP IN ITS OWN LANGUAGE'S TABLE. A Greek name of Hebrew origin points at a Hebrew number, and that number means a Hebrew word, so it is asked of the Hebrew table; that is also what keeps a name's picture the same in both testaments.");
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
  let hebrew = bible_glyph_roots_hebrew();
  let greek = bible_glyph_roots();
  let tables = {
    H: {
      drawn: bible_glyph_roots_drawn_lookup(hebrew),
      filed: bible_glyph_roots_root_lookup(hebrew),
    },
    G: {
      drawn: bible_glyph_roots_drawn_lookup(greek),
      filed: bible_glyph_roots_root_lookup(greek),
    },
  };
  let right = ebible_testament_old_name();
  let older = equal(testament_name, right);
  let candidates = [];
  for (let strong of told.numbers) {
    if (property_exists(drawn, strong)) {
      continue;
    }
    let count = property_get_or_null(totals, strong) ?? 0;
    let entry = older
      ? await strongs_hebrew_definition(strong)
      : await strongs_greek_definition(strong);
    let derivation = entry?.derivation ?? "";
    let definition = entry?.strongs_def ?? "";
    let references = [];
    for (let found of (derivation + " " + definition).matchAll(
      /([HG])(\d+)/g,
    )) {
      let language = found[1];
      let number = found[2];
      let table = property_get(tables, language);
      list_add(references, {
        reference: language + number,
        glyph: property_get_or_null(table.drawn, number),
        root: property_get_or_null(table.filed, number),
      });
    }
    list_add(candidates, {
      strong,
      count,
      word: entry?.xlit ?? entry?.translit ?? null,
      derivation,
      definition,
      references,
    });
  }
  function lambda(row) {
    let r = row.count;
    return r;
  }
  list_sort_number_mapper_reverse(candidates, lambda);
  return candidates;
}
