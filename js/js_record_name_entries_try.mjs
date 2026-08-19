import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_record_name_entries_try(node) {
  arguments_assert(arguments, 1);
  ("The entries of a record written out right here, each read as a fixed name it is filed under and the plain name standing as its value, and nothing at all when even one entry is not that shape.");
  ("Whoever asks this is about to answer a reading of the record by handing back the name behind the entry instead. That only holds when every entry is known ahead of time, so one entry that is worked out while the program runs, one spread of somebody else's record, or one value that is anything other than a bare name makes the whole record unanswerable rather than partly answerable.");
  ("A name used twice is refused for the same reason. The second entry wins at run time, and a reader matching by name has no way to know which of the two it is looking at.");
  let record_is = js_node_type_is(node, "ObjectExpression");
  if (not(record_is)) {
    return null;
  }
  let entries = property_get(node, "properties");
  let rows = [];
  let keys = [];
  let plain_is = true;
  function entry_each(entry) {
    let key = js_property_key_name_try(entry);
    if (null_is(key)) {
      plain_is = false;
      return;
    }
    let value = property_get(entry, "value");
    let name = js_identifier_name_try(value);
    if (null_is(name)) {
      plain_is = false;
      return;
    }
    let twice_is = list_includes(keys, key);
    if (twice_is) {
      plain_is = false;
      return;
    }
    list_add(keys, key);
    list_add(rows, {
      key,
      name,
    });
  }
  each(entries, entry_each);
  if (not(plain_is)) {
    return null;
  }
  return rows;
}
