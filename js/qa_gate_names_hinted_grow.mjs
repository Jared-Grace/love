import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
export function qa_gate_names_hinted_grow(hinted, declarators, calls) {
  "Grow a set of names backwards through the lines that filled them, until nothing new arrives. Changes the list it is handed.";
  "A name known to reach a hint was filled by some line, and every name that line read reaches the hint too - that is the whole step, and repeating it is what makes a name three lines away from the hint as findable as one written in it.";
  "It goes round again after every addition rather than once down the list, because the lines are in the order somebody wrote them and a value can be built from a value declared below where the hint is written.";
  "A LINE THAT FILLS SOMETHING IS NOT ALWAYS A LINE THAT DECLARES IT. A sentence is often gathered rather than assigned - put into a list a few lines above, which is then joined and written at the hint - and a value that arrives that way was reaching the hint just as surely while being read here as never reaching it at all. That is how a gate handing its repair command to a shared runner came to be named for accusing it: the runner does put the name under a hint, by adding it to the list the hint is joined from.";
  "The calls it is handed are only the ones made for what they change rather than for what they give back, and that is what keeps this from swallowing the whole body. A call whose answer is kept is already read by the line that keeps it, so following it here as well would say that everything handed to anything reaches wherever its first argument reaches - which, gone round enough times, calls every name in the function safe and leaves nothing to catch.";
  "The thing being filled is looked for as the first thing handed over, because that is where every changing call in this repo puts it - a list added to, an object merged into, a value set on something. Whatever else the same call reads is then reaching wherever the first thing reaches. That is a fact about how this repo words such a call rather than a rule of the language, and it is the part of this most likely to stop being true.";
  "Only a plain name counts as the thing being filled. Most calls hand over something else first - a piece of text, a number, a reaching-in - and asking one of those for a name it was never going to have stops the reading altogether rather than answering no.";
  "This can only ever call a name safe that was being called a leak, never the other way about, so a step it gets wrong loses a complaint and cannot invent one.";
  arguments_assert(arguments, 3);
  let growing = true;
  while (growing) {
    growing = false;
    for (let declarator of declarators) {
      let id = property_get(declarator, "id");
      let bound_hinted_is = property_in_list(id, "name", hinted);
      if (not(bound_hinted_is)) {
        continue;
      }
      let init = property_get(declarator, "init");
      if (equal(init, null)) {
        continue;
      }
      let identifiers = js_list_type_nodes(init, "Identifier");
      for (let identifier of identifiers) {
        let named = property_get(identifier, "name");
        let known_is = list_includes(hinted, named);
        if (known_is) {
          continue;
        }
        list_add(hinted, named);
        growing = true;
      }
    }
    for (let call of calls) {
      let args = property_get(call, "arguments");
      let filled = list_first_try(args);
      if (equal(filled, null)) {
        continue;
      }
      let filled_type = property_get(filled, "type");
      if (not_equal(filled_type, "Identifier")) {
        continue;
      }
      let filled_hinted_is = property_in_list(filled, "name", hinted);
      if (not(filled_hinted_is)) {
        continue;
      }
      let remaining = list_skip_1(args);
      for (let argument of remaining) {
        let identifiers2 = js_list_type_nodes(argument, "Identifier");
        for (let identifier2 of identifiers2) {
          let named2 = property_get(identifier2, "name");
          let known2_is = list_includes(hinted, named2);
          if (known2_is) {
            continue;
          }
          list_add(hinted, named2);
          growing = true;
        }
      }
    }
  }
}
