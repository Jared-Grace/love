import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_all } from "./list_all.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_intersect_multiple(list) {
  "What every one of several lists holds, in the order the first of them holds it.";
  "NO LISTS AT ALL IS REFUSED BY NAME RATHER THAN DISCOVERED FURTHER IN. What all of no lists hold is everything there is, which is not a list anybody can be handed, so there is no answer to give and refusing is right. The refusal was already happening and it was saying the wrong thing: with nothing to take a first from, the walk further down was handed nothing and complained that it wanted a list to walk, naming itself and not this. A caller reading that went looking for a lost list at the wrong depth.";
  "ONE EMPTY LIST IS A PERFECTLY GOOD QUESTION AND ANSWERS EMPTY, which is the distinction worth keeping: nothing in common is an answer, no lists to compare is not. Only the second is refused here.";
  "IT IS GUARDED BY ITS CALLERS AND THAT IS NOT THE SAME AS BEING SAFE. The search page reaches this through a caller that answers nothing when a language read none of the query's words, so no reader meets the refusal today; a page that once did simply stopped responding, because the throw landed before anything on screen was touched. The guard lives in one caller, so the next caller written would have to know to repeat it, and nothing would have told them.";
  list_empty_not_is_assert_json(list, {
    hint: "what all of no lists hold is everything there is, so there is nothing to answer with - the caller has to decide what no lists at all means before asking",
  });
  let fr = list_first_remaining(list);
  let first = property_get(fr, "first");
  let remaining = property_get(fr, "remaining");
  let e = null_is(remaining);
  if (e) {
    let copy = list_copy(first);
    return copy;
  }
  let uniques = list_map(remaining, list_unique_set);
  function lambda2(la) {
    function lambda(l) {
      function lambda3(set) {
        let v = set_includes(set, l);
        return v;
      }
      let a = list_all(uniques, lambda3);
      if (a) {
        la(l);
      }
    }
    each(first, lambda);
  }
  let i = list_adder(lambda2);
  return i;
}
