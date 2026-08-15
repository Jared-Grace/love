import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { equal } from "./equal.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_parsing_dimension_clauses_add(entries, clauses) {
  arguments_assert(arguments, 2);
  let dimensions = ["tense", "mood", "voice", "case", "degree"];
  for (let dimension of dimensions) {
    let found = list_filter_property(entries, "dimension", dimension);
    let named = list_map_property(found, "phrase");
    let count = list_size(named);
    if (not(count)) {
      continue;
    }
    let glosses = [];
    for (let entry of found) {
      let gloss = property_get(entry, "gloss");
      if (gloss) {
        list_add(glosses, gloss);
      }
    }
    let name_text = list_join(named, " or ");
    let gloss_text = list_join_comma_space(glosses);
    let undecided = equal(count, 2);
    if (undecided) {
      name_text = list_join(named, " or the ");
      gloss_text = "which the parsing does not decide between";
    }
    let clause_parts = ["in the ", name_text];
    if (gloss_text) {
      list_add_multiple(clause_parts, [", ", gloss_text]);
    }
    let item = text_combine_multiple(clause_parts);
    list_add(clauses, item);
  }
}
