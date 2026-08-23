import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
export function js_ast_identifier_object_uses(ast) {
  "Two sets of nodes read off one tree - the mentions of a name that are asking it for a property, and the mentions that are not really mentions of it at all.";
  "IT HANDS BACK NODES RATHER THAN NAMES, and the nodes are the point. Two different things in one function can be spelled with the same word - a parameter and the key of an object literal, say - so an answer given as names would fold them together and every later question about either would be answered about both. Comparing the nodes themselves is exact and costs nothing, because the tree is already in hand.";
  "A KEY IS NOT A MENTION. In a dot access and in an object written out in full, the word after the dot and the word before the colon are labels of a place, not readings of anything - the same word may be a parameter three lines up and have nothing to do with it. Counting them would make almost every name look as though it were used in ways it is not, which is the direction that quietly turns a check into a rubber stamp.";
  "ASKING FOR A PROPERTY IS EITHER SPELLING. A dot access asks directly; a call to one of the property atoms asks by name, and its first argument is the thing being asked. This repository writes the second far more often than the first, so a reading that knew only about dots would see almost nothing.";
  arguments_assert(arguments, 1);
  let ignored = [];
  let object_uses = [];
  let members = js_list_type_nodes(ast, "MemberExpression");
  for (let member of members) {
    let computed = property_get(member, "computed");
    if (not(computed)) {
      list_add(ignored, property_get(member, "property"));
    }
    let object = property_get(member, "object");
    let named = property_equals(object, "type", "Identifier");
    if (named) {
      list_add(object_uses, object);
    }
  }
  let properties = js_list_type_nodes(ast, "Property");
  for (let property of properties) {
    let computed = property_get(property, "computed");
    if (not(computed)) {
      list_add(ignored, property_get(property, "key"));
    }
  }
  let calls = js_list_type_nodes(ast, "CallExpression");
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let named = property_equals(callee, "type", "Identifier");
    if (not(named)) {
      continue;
    }
    let asking = text_starts_with(property_get(callee, "name"), "property_");
    if (not(asking)) {
      continue;
    }
    let args = property_get(call, "arguments");
    let none = list_empty_is(args);
    if (none) {
      continue;
    }
    let asked = list_first(args);
    let asked_named = property_equals(asked, "type", "Identifier");
    if (asked_named) {
      list_add(object_uses, asked);
    }
  }
  let r = { ignored, object_uses };
  return r;
}
