import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_articled } from "./text_articled.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_parsing_head_clause(head_entries, head_text) {
  arguments_assert(arguments, 2);
  let head_glosses = [];
  for (let entry of head_entries) {
    let gloss = property_get(entry, "gloss");
    if (gloss) {
      list_add(head_glosses, gloss);
    }
  }
  let articled = text_articled(head_text);
  let head_clause_parts = [articled];
  let head_gloss_text = list_join_comma_space(head_glosses);
  if (head_gloss_text) {
    list_add_multiple(head_clause_parts, [", ", head_gloss_text]);
  }
  let item = text_combine_multiple(head_clause_parts);
  return item;
}
