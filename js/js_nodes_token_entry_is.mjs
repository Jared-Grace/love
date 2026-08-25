import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_nodes_token_any_is } from "./js_nodes_token_any_is.mjs";
import { js_properties_shorthand_token_any_is } from "./js_properties_shorthand_token_any_is.mjs";
export function js_nodes_token_entry_is(nodes, token) {
  "$plain token";
  "Whether the given word stands anywhere in the gathered code as an entry of a written-out list or as a part of a record written under its own name - which is to say, as a value rather than as program.";
  "IT IS ONE HALF OF SETTLING A DOUBT NO SINGLE LINE CAN SETTLE. A line holding one word and a comma is written exactly the same way whether it is an entry of a list, a part of a record, or an argument of a call broken over several lines. The line carries no mark that separates them and the file does, so the file is asked - here for the two ways the word would be a value, and beside this for the one way it would be program.";
  "A PART OF A RECORD COUNTS ONLY WHERE IT IS WRITTEN UNDER ITS OWN NAME, because a part written with a name and a colon is already settled by the line it stands on and never reaches this question.";
  arguments_assert(arguments, 2);
  for (let node of nodes) {
    let entries_is = js_node_type_is(node, "ArrayExpression");
    if (entries_is) {
      let elements = property_get(node, "elements");
      let held = js_nodes_token_any_is(elements, token);
      if (held) {
        return true;
      }
    }
    let record_is = js_node_type_is(node, "ObjectExpression");
    if (record_is) {
      let properties = property_get(node, "properties");
      let held2 = js_properties_shorthand_token_any_is(properties, token);
      if (held2) {
        return true;
      }
    }
  }
  return false;
}
