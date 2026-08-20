import { list_add } from "./list_add.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_literal_value_deep_try(node) {
  "The value a written thing holds, going on into a record that is itself written out in full, and nothing at all when any part of it is worked out rather than written.";
  "It goes in rather than stopping at the top because what is asked about here is a saying, and a saying that has something dropped into the middle of it is written as a record of two written words rather than as one. Stopping at the top would answer nothing for exactly the sayings that need answering for.";
  "Nothing rather than a refusal, because this is asked of whatever happens to be standing somewhere and most of what stands anywhere is not written out in full. A refusal would make the ordinary case the loud one.";
  "So nothing is also the answer for a written word whose value really is nothing. The two cannot be told apart here, and neither can they by anybody who would ask - a saying is words, and a saying that turned out to be nothing would be the same fault either way.";
  "A run of things written one after another is read the same way as a record, and for the same reason. A saying long enough to need several lines is written as a run of lines, and a language needing a different number of them is the ordinary case rather than the odd one - so a thing that could not read a run would be blind to exactly the sayings that most need saying whole.";
  let written = js_literal_is(node);
  if (written) {
    let written_value = js_literal_value_get(node);
    return written_value;
  }
  let run = js_node_type_is(node, "ArrayExpression");
  if (run) {
    let run_value = [];
    let elements = property_get(node, "elements");
    for (let element of elements) {
      let one = js_literal_value_deep_try(element);
      let missing = null_is(one);
      if (missing) {
        return null;
      }
      list_add(run_value, one);
    }
    return run_value;
  }
  let record = js_node_type_is(node, "ObjectExpression");
  if (not(record)) {
    return null;
  }
  let record_value = {};
  let properties = property_get(node, "properties");
  for (let property of properties) {
    let name = js_property_key_name_try(property);
    let nameless = null_is(name);
    if (nameless) {
      return null;
    }
    let inner = property_get(property, "value");
    let held = js_literal_value_deep_try(inner);
    let unreadable = null_is(held);
    if (unreadable) {
      return null;
    }
    property_set(record_value, name, held);
  }
  return record_value;
}
