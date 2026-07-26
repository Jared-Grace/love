import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_call_argument_names(node_call) {
  "The names of a call's arguments, when every one of them is a plain name. Anything computed - a sum, a literal, a call - answers nothing at all rather than a partial list.";
  "Nothing is the honest answer because the question this serves is whether a call hands on exactly what it was given. A computed argument is by construction not that, and a list with a gap in it would let a caller compare the parts that happen to line up and conclude the whole matched.";
  let args = js_call_arguments_get(node_call);
  let names = [];
  for (let arg of args) {
    let plain = js_identifier_is(arg);
    if (not(plain)) {
      let none = null;
      return none;
    }
    let name = property_get_name(arg);
    list_add(names, name);
  }
  return names;
}
