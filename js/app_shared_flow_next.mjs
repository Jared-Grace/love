import { add } from "./add.mjs";
import { app_shared_flow } from "./app_shared_flow.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
export async function app_shared_flow_next(context, screens) {
  let before_or_after = function lambda(screens_given, index) {
    let skip_count = add(index, 1);
    let skipped = list_skip(screens_given, skip_count);
    return skipped;
  };
  let find = list_first;
  await app_shared_flow(context, screens, before_or_after, find);
}
