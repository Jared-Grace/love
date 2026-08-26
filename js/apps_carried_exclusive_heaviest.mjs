import { arguments_assert } from "./arguments_assert.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { app_carried_exclusive_weights } from "./app_carried_exclusive_weights.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { functions_names_weights } from "./functions_names_weights.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function apps_carried_exclusive_heaviest() {
  "Every app entry point there is, ranked by the heaviest single branch it carries and by nothing else - the one name whose going would take the most of that page with it.";
  "★ IT FINDS ITS OWN SET, so the reading is a ranking rather than thirty-one answers to compare by eye. Which app to open first is the whole question a reader has here, and one app at a time cannot answer it.";
  "A share is given beside the bytes because the bytes alone say how big the app is. A branch holding two thirds of a small page is worth more reading than one holding a twentieth of a large one, and only the share tells them apart.";
  "The entry point's own always-drawn content ranks here too, and it is not a fault - a page that draws one thing has one heavy branch by construction. What makes a row worth opening is a heavy branch the page enters only sometimes, and that is a question about people which nothing here can ask.";
  "An entry point that reaches nothing but itself is answered with no branch at all rather than left out, so the set of rows is the set of apps and a missing name means a missing app.";
  arguments_assert(arguments, 0);
  let mains = await apps_all_main_fns();
  list_empty_not_is_assert_json(mains, {
    hint: "no app entry points were found at all, so nothing was weighed - the finding is what to look at, not the empty answer",
  });
  async function main_lambda(a_main) {
    let ranked = await app_carried_exclusive_weights(a_main);
    let carried = await functions_reachable_carried([a_main]);
    let weights = await functions_names_weights(carried);
    let sizes = list_map_property(weights, "size");
    let bytes_all = list_sum(sizes);
    let alone = list_empty_is(ranked);
    if (alone) {
      let lone = {
        a_main,
        bytes_all,
        branch: null,
        bytes: 0,
        functions: 0,
        share: 0,
      };
      return lone;
    }
    let heaviest = list_first(ranked);
    let f_name = property_get(heaviest, "f_name");
    let bytes = property_get(heaviest, "bytes");
    let functions = property_get(heaviest, "functions");
    let hundredths = multiply_divide(bytes, 100, bytes_all);
    let share = number_round_places(hundredths, 1);
    let row = {
      a_main,
      bytes_all,
      branch: f_name,
      bytes,
      functions,
      share,
    };
    return row;
  }
  let rows = await list_map_unordered_async(mains, main_lambda);
  function share_of(row) {
    let share = property_get(row, "share");
    return share;
  }
  let sorted = list_sort_number_mapper_reverse(rows, share_of);
  return sorted;
}
