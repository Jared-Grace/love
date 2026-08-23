import { arguments_assert } from "./arguments_assert.mjs";
import { js_ast_identifier_object_uses } from "./js_ast_identifier_object_uses.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_add } from "./list_add.mjs";
import { or } from "./or.mjs";
import { property_set } from "./property_set.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_params_object_only(ast, params) {
  "The parameters of a tree that are only ever asked for a property - never counted, never compared, never handed on - so nothing but an object can be put in them.";
  "IT IS A READING ABOUT WHAT CAN BE PUT IN, not about what usually is. A command line hands over words, and a word has no properties worth asking for, so a parameter used this way cannot be filled from one at all. That is a fact about the function rather than a guess about its callers, which is why it can be leaned on.";
  "SILENCE IS NOT EVIDENCE. A parameter mentioned nowhere in the body is not answered here, because nothing was seen either way, and an unused parameter is its own separate thing to say. Only a parameter with at least one mention, every one of which is asking it for a property, is named.";
  "A PARAMETER HANDED TO ANOTHER FUNCTION IS LET GO. What that function does with it is the answer, and following it there is a different and much larger reading. So this stays deliberately short-sighted and misses those, which is the safe direction to miss in: a name that is not returned may still hold an object, while a name that is returned certainly cannot hold a word.";
  "THE DECLARATIONS THEMSELVES ARE PUT ASIDE FIRST. A parameter is written into the tree where it is declared as well as everywhere it is used, and counting the declaration as a use would make every parameter look as though it were used in some other way and would answer nothing, ever.";
  arguments_assert(arguments, 2);
  let uses = js_ast_identifier_object_uses(ast);
  let ignored = property_get(uses, "ignored");
  let object_uses = property_get(uses, "object_uses");
  let asked = [];
  for (let param of params) {
    let named = property_equals(param, "type", "Identifier");
    if (named) {
      let item = property_get(param, "name");
      list_add(asked, item);
    }
  }
  let object_only = {};
  let identifiers = js_list_type_nodes(ast, "Identifier");
  for (let identifier of identifiers) {
    let declared = list_includes(params, identifier);
    let a_key = list_includes(ignored, identifier);
    let aside = or(declared, a_key);
    if (aside) {
      continue;
    }
    let name = property_get(identifier, "name");
    let a_param = list_includes(asked, name);
    if (not(a_param)) {
      continue;
    }
    let object_use = list_includes(object_uses, identifier);
    if (not(object_use)) {
      property_set(object_only, name, false);
      continue;
    }
    let seen = property_get_or_null(object_only, name);
    let unset = equal(seen, null);
    if (unset) {
      property_set(object_only, name, true);
    }
  }
  let names = [];
  for (let name of asked) {
    let only = property_get_or_null(object_only, name);
    if (only) {
      list_add(names, name);
    }
  }
  return names;
}
