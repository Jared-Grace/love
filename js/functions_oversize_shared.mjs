import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { functions_inside_duplicates_size } from "./functions_inside_duplicates_size.mjs";
import { functions_inside_duplicates } from "./functions_inside_duplicates.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function functions_oversize_shared() {
  "Every function that is both too big to read and holds a run of work some other function also holds, beside who it shares with.";
  "The two readings answer each other and neither answers alone. A size says a function is hard to read and says nothing about what to do with it; a shared run says a helper is waiting to be written and says nothing about whether writing it matters. Where they meet, one collapse pays twice - the run gets its name and the function that was too big gets smaller by exactly the lines that were never its own work.";
  "So this is the list to work from. A big function holding no shared run is a judgment about how to break it up, which is the reader's; a big function sharing four lines with three others is not a judgment at all.";
  "The first run of it, on 2026-08-03, answered the question it was built to ask and answered it no. Of the 130 functions standing over the ceiling, 22 held any shared run at all and 17 of those held exactly one - four lines. So collapsing every duplicate run in the repo would take about four lines off a sixth of the oversize functions and nothing at all off the other 108. Size and duplication are very nearly disjoint here, which means the way down from a 250-line function is naming the steps it does once, not finding the steps it does twice.";
  let over = await functions_work_oversize_names();
  let run_size = functions_inside_duplicates_size();
  let groups = await functions_inside_duplicates(run_size);
  let rows = [];
  for (let f_name of over) {
    let partners = [];
    let runs = 0;
    for (let group of groups) {
      let group_names = property_get(group, "names");
      let holds = list_includes(group_names, f_name);
      if (holds) {
        runs = runs + 1;
        for (let other of group_names) {
          let same = equal(other, f_name);
          if (not(same)) {
            list_add_unique(partners, other);
          }
        }
      }
    }
    let shared_is = list_empty_not_is(partners);
    if (shared_is) {
      let row = {
        name: f_name,
        runs,
        partners: list_size(partners),
        with: partners,
      };
      list_add(rows, row);
    }
  }
  return rows;
}
