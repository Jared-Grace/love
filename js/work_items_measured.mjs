import { less_than } from "./less_than.mjs";
import { memory_orphans } from "./memory_orphans.mjs";
import { literal_duplicates } from "./literal_duplicates.mjs";
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
  let duplicates = await literal_duplicates();
  found(
    duplicates.length,
    "Duplicated constants",
    "A constant with a getter that other files still spell literally has one name and many copies, so changing it changes only some of them.",
    "Take the widest one, route every literal site through its getter, and check that no site was missed.",
  );
  return items;
}
