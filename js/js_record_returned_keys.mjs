import { js_find_return_try } from "./js_find_return_try.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_record_name_entries_try } from "./js_record_name_entries_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_record_returned_keys(ast) {
  arguments_assert(arguments, 1);
  ("The names a file's own function hands back a record under, in the order they are written, and nothing at all when what it hands back is not a record written out of plain names.");
  ("What it is for is deciding whether handing a record over whole is the same thing as writing its names out again somewhere else. That turns on which names the record holds and in what order, and both are questions about the one record that actually leaves.");
  ("It used to take the biggest record the file gathered anywhere, on the reasoning that a function gathering several is gathering the small ones into the big one. That was a guess, it was admitted to be a guess, and it was why nothing was allowed to act on the answer. The one place a value is handed back from is knowable rather than guessable, so it is asked instead.");
  ("A file handing a value back in more than one place answers nothing, and so does one handing back something that was never set here, or set from something other than a record. Each of those is a reading this cannot do rather than a record with no names in it, and telling the two apart is the caller's whole reason for asking.");
  ("An entry filed under one name and holding another is refused, and refused for the whole record rather than for that entry. Handing the record over whole would file the value under the name it was filed under here, and where the two differ that is a different record - so a reading that answered the names anyway would be answering a question nobody asked.");
  let node = js_find_return_try(ast);
  if (null_is(node)) {
    return null;
  }
  let returned = js_return_argument_get(node);
  let name = js_identifier_name_try(returned);
  if (null_is(name)) {
    return null;
  }
  let source = js_name_set_from_node_try(ast, name);
  if (null_is(source)) {
    return null;
  }
  let entries = js_record_name_entries_try(source);
  if (null_is(entries)) {
    return null;
  }
  let keys = [];
  for (let entry of entries) {
    let key = property_get(entry, "key");
    let held = property_get(entry, "name");
    let plain_is = equal(key, held);
    if (not(plain_is)) {
      return null;
    }
    list_add(keys, key);
  }
  return keys;
}
