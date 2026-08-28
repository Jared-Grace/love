import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { equal } from "./equal.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_property_key_set } from "./js_property_key_set.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_property_key_rename(ast, name_before, name_after) {
  "$plain name_before";
  "$plain name_after";
  "Files every entry of every record in one file under a different name, leaving what each entry holds exactly as it was.";
  "It is the safe half of a rename. A name written into a record the short way is one word doing two jobs - a local, and the name the entry is filed under - so renaming the local rewrites the filing name too and every reader asking for the old one is answered with nothing. This moves only the filing name, and the verb it leans on spells the short form out as it goes, so the local keeps the name it had and the readers keep the name they ask for.";
  "It says how many it moved rather than answering with the file, because the caller already holds the file and the only thing it cannot see for itself is whether anything matched at all - and nothing matching is the answer worth reading, since it means the name was spelled some other way and the work was not done.";
  arguments_assert(arguments, 3);
  let properties = js_list_type_nodes(ast, "Property");
  let moved = [];
  for (let p of properties) {
    let name = js_property_key_name_try(p);
    let hit = equal(name, name_before);
    if (hit) {
      let key = js_parse_expression(name_after);
      js_property_key_set(p, key);
      list_add(moved, name_after);
    }
  }
  let r = {
    moved: moved.length,
  };
  return r;
}
