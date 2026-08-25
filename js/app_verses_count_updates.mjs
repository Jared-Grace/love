import { object_copy_assign } from "./object_copy_assign.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_verses_counts } from "./app_verses_counts.mjs";
export async function app_verses_count_updates(initialized, hash) {
  "Everything the verses page needs before it can be drawn, read out of the page it was started from and the link it was opened by.";
  "THE STARTING UP IS HANDED IN RATHER THAN DONE HERE, and that is a boundary and not a taste. Beginning a page is the reply app's work, and this app is allowed to lean on it only at its own front door - done here, every part of the reply app would be carried by anything that ever reached for a count, and the gate that watches one app reaching into another would refuse it.";
  "THE RECORD IS CARRIED THROUGH RATHER THAN TAKEN APART AND BUILT AGAIN. Naming each part on the way past looked like a description of what a verses page holds, but it was a copy of one, and a part added next door would have been dropped here in silence while every gate stayed green. Copied and added to, the one new thing this step is for is the only thing written down.";
  arguments_assert(arguments, 2);
  let r = await app_verses_counts(initialized, hash);
  let count_updates = [];
  let added = {
    count_updates,
  };
  let r2 = object_copy_assign(r, added);
  return r2;
}
