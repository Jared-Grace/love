import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_search_all } from "./functions_search_all.mjs";
import { properties_get } from "./properties_get.mjs";
import { functions_search_shown_count } from "./functions_search_shown_count.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { object_pick } from "./object_pick.mjs";
export async function functions_search(search) {
  "Every function whose name holds all of the words handed in, shown a screenful at a time, and always said alongside how many there were in all.";
  "The count is the whole safety of this. A search that found four hundred and shows thirty says four hundred, on every single answer, so a shortened list can never be mistaken for the whole of one. Cutting the answer down was already what everybody did - fourteen days of commands ran this two thousand six hundred times and most of them ended in a pipe into head - and a cut made out there says nothing about what it dropped.";
  ("Reach for ",
    fn_name("functions_search_all"),
    " when the whole map is wanted, which is what every function calling this from inside the repo does. This one is shaped for somebody reading it.");
  arguments_assert(arguments, 1);
  let all = await functions_search_all(search);
  let names = properties_get(all);
  let found = names.length;
  let count = functions_search_shown_count();
  let shown_names = list_slice_count(names, 0, count);
  let shown = object_pick(all, shown_names);
  let r = {
    found,
    shown,
  };
  return r;
}
