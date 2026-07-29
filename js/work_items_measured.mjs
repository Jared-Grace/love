import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { literal_duplicates_unambiguous } from "./literal_duplicates_unambiguous.mjs";
import { less_than } from "./less_than.mjs";
import { memory_orphans } from "./memory_orphans.mjs";
import { list_add } from "./list_add.mjs";
export async function work_items_measured() {
  "Work a read-only check has already proved is there, each entry carrying the count that proves it. A count is evidence offered to the caller's judgement, not a claim to go first: it says the item is real today and has a finish line, which a standing direction never has, and says nothing about whether clearing it is worth the budget.";
  "Left in source order on purpose, not sorted by count. The counts measure different kinds of thing, so ordering by them would rank a large pile of small items over a small pile of large ones and call that a priority.";
  let items = [];
  function found(count, title, why, how) {
    if (less_than(count, 1)) {
      return;
    }
    let item = {
      count,
      title,
      why,
      how,
    };
    list_add(items, item);
  }
  let orphans = await memory_orphans();
  found(
    orphans.length,
    "Memory orphans",
    "A memory file no pointer reaches is never loaded into a session, so the fact in it is written but not remembered.",
    "Add a one-line pointer to the memory index for each orphan, grouped under an existing entry where one fits.",
  );
  let duplicates = await literal_duplicates_unambiguous();
  found(
    duplicates.length,
    "Duplicated constants",
    "A constant with a getter that other files still spell literally has one name and many copies, so changing it changes only some of them.",
    text_combine_multiple([
      "Merge them, and do not stop first to judge whether the two files mean the same thing by it. That cannot be known yet: two spellings look like a coincidence or a convergence only once something forces them apart, and the forcing is the answer rather than the guess made months before it. The means field beside each file says what the spelling is being used for, which is worth reading to understand the code, not to decide whether to merge. When a site does later need a different value, never change the value in the function it shares: rename that function if a clearer name helps, write a second one holding the new value, and move the sites over one at a time. The old function keeps its old value, so nothing already written moves and the split costs nothing. The single exception is a value that has already left this repo - a key in somebody's browser storage, a word in a bookmarked address - which cannot be split after the fact because the data is on disks nobody here can reach; those are named in ",
      fn_name("literals_frozen_names"),
      " and a gate refuses an in-place change to one.",
    ]),
  );
  return items;
}
