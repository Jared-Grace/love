import { arguments_assert } from "./arguments_assert.mjs";
import { js_member_key_nodes } from "./js_member_key_nodes.mjs";
import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_names_blank(node, personal) {
  arguments_assert(arguments, 2);
  ("Rewrite the given names to numbered blanks, in place, so that two pieces of");
  ("code spelled differently but doing the same thing land on the same text.");
  ("Order of first appearance is what numbers the blanks, so the numbering is a");
  ("property of the work rather than of the order somebody happened to declare");
  ("things in. That is also why the numbering belongs to the piece being compared:");
  ("blanking a whole function and blanking a run of statements out of one must");
  ("start counting afresh, or the same tail would number differently depending on");
  ("how much stood above it.");
  ("The word after a dot is left alone even when it reads exactly like a private");
  ("name, and it often does - a function that asks a list whether it includes");
  ("something calls the answer includes.");
  ("This changes the tree it is given, so hand it a parse nothing else is holding.");
  let keys = js_member_key_nodes(node);
  let blanks = {};
  let taken = [];
  function blanked(identifier) {
    let key_is = list_includes(keys, identifier);
    if (key_is) {
      return;
    }
    let name = property_get_name(identifier);
    let personal_is = list_includes(personal, name);
    if (personal_is) {
      let known = property_exists(blanks, name);
      if (known) {
        let already = property_get(blanks, name);
        property_set(identifier, "name", already);
        return;
      }
      let blank = "_" + taken.length;
      list_add(taken, name);
      blanks[name] = blank;
      property_set(identifier, "name", blank);
    }
  }
  js_visit_identifiers_nodes(node, blanked);
}
