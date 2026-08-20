import { property_not } from "./property_not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function qa_snapshot_shards_combined(results) {
  "What several runs of the frozen copy said, read back as one answer";
  "A share that complained makes the whole answer a complaint, because the shares are only a way of dividing the work and no reader cares which of them held the unhappy gate";
  "Everything printed is kept, all of it, since that is what says why - and the names of the complaining gates are gathered across the shares so one list covers them all";
  "One share that could not answer makes the whole answer no answer, and that is a stronger rule than the one above it. A share that complained still asked every question it was given; a share that stopped never asked most of them, so what the others found is a report on part of the repo wearing the name of the whole of it. Filed, it would say a commit is red about exactly these gates while a third of the gates were never put to it";
  let green = true;
  let answered = true;
  let failed = [];
  let sayings = [];
  for (let result of results) {
    let complained = property_not(result, "green");
    if (complained) {
      green = false;
    }
    let silent = property_not(result, "answered");
    if (silent) {
      answered = false;
    }
    let names = property_get(result, "failed");
    list_add_multiple(failed, names);
    let printed = property_get(result, "printed");
    list_add(sayings, printed);
  }
  let said = list_join_newline(sayings);
  let r = {
    green: green,
    failed: failed,
    printed: said,
    answered: answered,
  };
  return r;
}
