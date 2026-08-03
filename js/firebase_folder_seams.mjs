import { fn_name } from "./fn_name.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_calls_named } from "./js_list_calls_named.mjs";
import { js_flo_params_get } from "./js_flo_params_get.mjs";
import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { number_text } from "./number_text.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
export async function firebase_folder_seams() {
  "Every call that takes a folder on the shared bucket, kept beside which of its arguments the folder is - worked out from the one function that builds those addresses rather than written down.";
  "A folder there is a place files are already sitting in, and nothing in this repo can move them. So a word that reaches one of these slots and is written into the source is a word that has escaped, and the only safe home for it is a function the frozen record is watching.";
  "One function builds every address on that bucket, and its first argument is the folder. Everything else that takes a folder is something wrapping it, so the wrappers can be found rather than listed: a function that hands one of its own parameters straight into a folder slot has a folder slot of its own, at wherever that parameter sits.";
  "That is asked again of whatever it finds, because the wrappers are stacked. Two of them pass their parameter into a third, which passes its own into the builder, so a reading that stopped after one step would have found the middle one and left the outer two unwatched - which was true of the list this replaces, and it was written by somebody who had just finished saying a list like it would go stale.";
  "Which argument the folder is differs from one to the next - one of them takes the file first and the folder second - so the position is carried rather than assumed to be the first. That is exactly the difference a reading keyed on the first argument gets silently wrong.";
  "Only a bare parameter counts as passing the folder on. A wrapper that works the word out, or fetches it from somewhere, is not handing its caller's word through - it is the place the word is written, which is the thing being looked for rather than another place to look.";
  let root = fn_name("firebase_deploy_function_destination");
  let identifiers = await data_identifiers_get();
  let seams = [
    {
      builder: root,
      index: 0,
    },
  ];
  let known = [text_combine_multiple([root, " ", number_text(0)])];
  let asked = 0;
  let waiting = greater_than(list_size(seams), asked);
  while (waiting) {
    let seam = list_get_or_null(seams, asked);
    asked = add_1(asked);
    let builder = property_get(seam, "builder");
    let index = property_get(seam, "index");
    let callers = property_or_null(identifiers, builder);
    let uncalled = null_is(callers);
    if (uncalled) {
      waiting = greater_than(list_size(seams), asked);
      continue;
    }
    for (let caller of callers) {
      let itself = equal(caller, builder);
      if (itself) {
        continue;
      }
      let tree = await function_ast(caller);
      let calls = js_list_calls_named(tree, builder);
      let params = js_flo_params_get(tree);
      let params_names = list_map_property(params, "name");
      for (let call of calls) {
        let args = property_get(call, "args");
        let folder = list_get_or_null(args, index);
        let unwritten = null_is(folder);
        if (unwritten) {
          continue;
        }
        let passed_on = js_node_name_text_try(folder);
        let position = list_index_of(params_names, passed_on);
        let own = greater_than(position, -1);
        if (not(own)) {
          continue;
        }
        let word = text_combine_multiple([
          caller,
          " ",
          number_text(position),
        ]);
        let already = list_includes(known, word);
        if (already) {
          continue;
        }
        list_add(known, word);
        let found = {
          builder: caller,
          index: position,
        };
        list_add(seams, found);
      }
    }
    waiting = greater_than(list_size(seams), asked);
  }
  return seams;
}
