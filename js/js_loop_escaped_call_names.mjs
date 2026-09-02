import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_loop_shelters } from "./js_loop_shelters.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_call_name_or_null } from "./js_call_name_or_null.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_loop_escaped_call_names(loop) {
  "$plain loop";
  "Every call this loop waits on in its own body without catching it, named once each - the calls whose refusal would end the loop where it stood. Read-only, pure.";
  "A call handed to a catcher is not one of these, and that is the whole difference between a walk that reports the item that refused and one that dies on it. The catchers are told apart by the word they start with rather than by a list of them, so a new one written tomorrow is understood on the day it is written.";
  "A call with no name of its own is passed over rather than reported. There would be nothing to write down about it, and a report naming nobody is the fault this reading exists to find, not a thing to commit while finding it.";
  arguments_assert(arguments, 1);
  let awaits = js_list_type_nodes(loop, "AwaitExpression");
  let shelters = js_loop_shelters(loop);
  function shelter_awaits(shelter) {
    let inside = js_list_type_nodes(shelter, "AwaitExpression");
    return inside;
  }
  let sheltered = list_map_concat_multiple(shelters, shelter_awaits);
  function escaped_name_or_null(waiting) {
    let held = list_includes(sheltered, waiting);
    if (held) {
      return null;
    }
    let waited_on = property_get_or_null(waiting, "argument");
    let nothing = null_is(waited_on);
    if (nothing) {
      return null;
    }
    let calling = js_node_type_is(waited_on, "CallExpression");
    if (not(calling)) {
      return null;
    }
    let called = js_call_name_or_null(waited_on);
    let nameless = null_is(called);
    if (nameless) {
      return null;
    }
    let caught = text_starts_with(called, "catch_");
    if (caught) {
      return null;
    }
    return called;
  }
  let named = list_map(awaits, escaped_name_or_null);
  let escaping = list_filter_null_not_is(named);
  let once_each = list_unique(escaping);
  return once_each;
}
