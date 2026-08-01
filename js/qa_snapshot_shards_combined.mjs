import { property_not } from "./property_not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function qa_snapshot_shards_combined(results) {
  "What several runs of the frozen copy said, read back as one answer";
  "A share that complained makes the whole answer a complaint, because the shares are only a way of dividing the work and no reader cares which of them held the unhappy gate";
  "Everything printed is kept, all of it, since that is what says why - and the names of the complaining gates are gathered across the shares so one list covers them all";
  let green = true;
  let failed = [];
  let sayings = [];
  for (let result of results) {
    let complained = property_not(result, "green");
    if (complained) {
      green = false;
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
  };
  return r;
}
