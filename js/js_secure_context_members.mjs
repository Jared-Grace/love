import { arguments_assert } from "./arguments_assert.mjs";
import { browser_secure_context_names } from "./browser_secure_context_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_member_dotted_or_null } from "./js_member_dotted_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_secure_context_members(ast) {
  "Which of the browser's https-only things this file reaches for, as the object and the word after the dot joined back together.";
  "The pairing is what is asked, never either half. Reading the word after the dot alone would call every object of this repo's own that happens to have a field spelled storage or share, and reading the object alone would call every ordinary use of crypto that is there on any address.";
  "Written inside brackets is left out, and so is an object that is itself a lookup: in both of those the word before the dot is not the browser's global but something this repo built, and what it holds cannot be read from the shape of the line.";
  "Reaching for one is counted here whether or not the file asked first whether it was there - js_secure_context_asked is the other half, and browser_secure_context_all is where the two meet.";
  arguments_assert(arguments, 1);
  let wanted = browser_secure_context_names();
  let members = js_list_type_nodes(ast, "MemberExpression");
  let found = [];
  for (let node of members) {
    let dotted = js_member_dotted_or_null(node);
    if (null_is(dotted)) {
      continue;
    }
    let known = list_includes(wanted, dotted);
    if (not(known)) {
      continue;
    }
    list_add_unique(found, dotted);
  }
  found.sort();
  return found;
}
