import { each_index } from "./each_index.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function g_arc_answer_rows(fields) {
  "One level's fields turned back into the objects the answer example shows for that level - a person, a conversation, or the turns inside one.";
  "How many objects come back is read off the EXAMPLES lists rather than passed in, so the count and the values are the same fact. A field showing two example values is a field on a level that shows two rows, and there is no way to ask for a third row and forget to give it one.";
  "Every field of a level is expected to offer the same number of examples, because they are filling the same rows. A shorter list would leave a row missing that name, which is why the value is fetched by index and not guarded - a hole here should be loud.";
  let rows = [];
  let first = fields[0];
  let examples = property_get(first, "examples");
  function row_add(example, index) {
    let row = {};
    function field_set(field) {
      let name = property_get(field, "name");
      let values = property_get(field, "examples");
      let value = values[index];
      property_set(row, name, value);
    }
    each(fields, field_set);
    list_add(rows, row);
  }
  each_index(examples, row_add);
  return rows;
}
