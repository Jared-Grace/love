import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { js_prose_statement_nodes } from "./js_prose_statement_nodes.mjs";
import { js_strings_generic } from "./js_strings_generic.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { text_includes } from "./text_includes.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete } from "./property_delete.mjs";
export async function function_string_value_replace(
  f_name,
  text_before,
  text_after,
) {
  "Changes a run of text inside one piece of written-out text the code uses as a value, naming the run rather than where it sits.";
  "The neighbour that changes a line a function says about itself leaves everything the program actually uses alone, and the words a player reads are not an account of anything - they are the thing itself. Both were being changed by the command that replaces text anywhere in the file, which is refused a standing approval because its last argument is source and stays in the file the repo then runs. Neither of these two is source, so both can be approved and neither can do that harm.";
  "Nothing handed in here can arrive as code. The new text is set as the value of a piece of written-out text and the characters somebody originally typed are thrown away, so the printing builds the quoting again from the value - a quote inside the new text is spelled out rather than closing the string and starting a statement.";
  "The run has to name exactly one place. None at all usually means the text has already been changed, or a character differs; more than one means the run is not yet unique, and taking in a little more of the words around it will part them. A change nobody can point at afterwards is the failure worth refusing.";
  "A line the function says about itself is deliberately out of reach here, so the two commands cannot silently do each other's work, and being told the run sits only in one of those is what sends the reader to the right one.";
  "Written with backticks so a name can stand in a gap, it is out of reach too. Such a piece of text is built from parts rather than typed out whole, and setting a value on it would leave the parts standing and be quietly ignored.";
  arguments_assert(arguments, 3);
  function lambda(ast) {
    let prose = js_prose_statement_nodes(ast);
    let accounted = list_map_property(prose, "expression");
    let strings = js_strings_generic(ast);
    function holds(found) {
      let node = property_get(found, "node");
      let plain_is = js_node_type_is(node, "Literal");
      if (plain_is) {
        let accounted_is = list_includes(accounted, node);
        if (accounted_is) {
          return false;
        }
        let value = property_get(found, "value");
        let holds_is = text_includes(value, text_before);
        return holds_is;
      }
      return false;
    }
    let matched = list_filter(strings, holds);
    let places = list_size(matched);
    equal_assert_json(places, 1, {
      f_name,
      text_before,
      places,
      hint: text_combine_multiple([
        "a change to one place asks for text that sits in exactly one of them. If the run is a line the function says about itself rather than something the program uses, ask ",
        fn_name("function_prose_replace"),
        " instead. None at all can also mean the text has already been changed, or a character differs - a stray space, a different kind of quote. More than one means the run is not yet unique, and taking in a little more of the words around it is usually enough to tell the places apart",
      ]),
    });
    let found = list_get(matched, 0);
    let node = property_get(found, "node");
    let value = property_get(found, "value");
    let after = text_replace_once(value, text_before, text_after);
    property_set(node, "value", after);
    property_delete(node, "raw");
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
