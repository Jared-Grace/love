import { js_shorthand_properties_names_expand } from "./js_shorthand_properties_names_expand.mjs";
import { js_identifiers_naming_nodes } from "./js_identifiers_naming_nodes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  ("A word used as the key of an entry in an object is left alone for the same reason, and this is the same lesson one step over rather than a second one. It is text the object is spelled with, and two objects that spell their entries differently are not two ways of writing one thing - collapsing them would change what each one hands back. So a piece returning `{ alpha: 1 }` and a piece returning `{ beta: 1 }` must not land on the same text, and they did.");
  ("A short entry is the same word doing both jobs at once, so it cannot be left alone and blanked at the same time. It is written out in full first, and only for the words being blanked, after which the key is an ordinary key and is left alone while the value is blanked like any other reading.");
  ("This changes the tree it is given, so hand it a parse nothing else is holding.");
  js_shorthand_properties_names_expand(node, personal);
  let keys = js_identifiers_naming_nodes(node);
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
