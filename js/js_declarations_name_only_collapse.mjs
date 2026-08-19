import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_declarations_single_rows } from "./js_declarations_single_rows.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_name_single_binding_is } from "./js_name_single_binding_is.mjs";
import { js_rebound_names } from "./js_rebound_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_remove } from "./list_remove.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_declarations_name_only_collapse(ast) {
  arguments_assert(arguments, 1);
  ("Take out every line that gives a second name to something already named, and point everything that read the second name at the first.");
  ("A line of this shape says nothing. It is what a piece moved out and then put back leaves behind - the piece hands its answer back, the line receiving it binds a name, and the name the piece itself used is still standing beside it. Two names for one value, and a reader has to hold both to follow either.");
  ("Three things are asked before a line goes, and each one is a way this could be silently wrong. Neither name may ever be pointed somewhere else, or the two would stop meaning the same thing partway down. Each name must mean one thing everywhere the file spells it, because the change is made wherever the word appears and a word spelled in two scopes is two words. And the two must not already be the same word, which is a line nothing can be learned from.");
  ("The name kept is the one the value already had, not the one the line was giving it. That one is older, so every mention of it is untouched and the change lands only on the mentions of the name going away.");
  ("The list is asked again after each line goes, because taking one out can make the next one askable - a name that meant two things while both lines stood may mean one thing once the first has gone. It stops when a whole pass moves nothing.");
  let collapsed = [];
  let going = true;
  while (going) {
    going = false;
    let rows = js_declarations_single_rows(ast);
    let rebound = js_rebound_names(ast);
    for (let row of rows) {
      let init = property_get(row, "init");
      let name_to = js_identifier_name_try(init);
      let plain_not_is = null_is(name_to);
      if (plain_not_is) {
        continue;
      }
      let name = property_get(row, "name");
      let same_is = equal(name, name_to);
      if (same_is) {
        continue;
      }
      let written_is = list_includes(rebound, name);
      if (written_is) {
        continue;
      }
      let written_to_is = list_includes(rebound, name_to);
      if (written_to_is) {
        continue;
      }
      let single_is = js_name_single_binding_is(ast, name);
      if (not(single_is)) {
        continue;
      }
      let single_to_is = js_name_single_binding_is(ast, name_to);
      if (not(single_to_is)) {
        continue;
      }
      js_identifier_rename(ast, name, name_to);
      let list = property_get(row, "list");
      let declaration = property_get(row, "declaration");
      list_remove(list, declaration);
      list_add(collapsed, name);
      going = true;
      break;
    }
  }
  return collapsed;
}
