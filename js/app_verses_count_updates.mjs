import { arguments_assert } from "./arguments_assert.mjs";
import { app_verses_counts } from "./app_verses_counts.mjs";
import { property_get } from "./property_get.mjs";
export async function app_verses_count_updates(initialized, hash) {
  "Everything the verses page needs before it can be drawn, read out of the page it was started from and the link it was opened by.";
  "THE STARTING UP IS HANDED IN RATHER THAN DONE HERE, and that is a boundary and not a taste. Beginning a page is the reply app's work, and this app is allowed to lean on it only at its own front door - done here, every part of the reply app would be carried by anything that ever reached for a count, and the gate that watches one app reaching into another would refuse it.";
  arguments_assert(arguments, 2);
  let r = await app_verses_counts(initialized, hash);
  let counts = property_get(r, "counts");
  let card = property_get(r, "card");
  let content = property_get(r, "content");
  let order = property_get(r, "order");
  let chosen_references = property_get(r, "chosen_references");
  let apply_seq = property_get(r, "apply_seq");
  let offline_notified = property_get(r, "offline_notified");
  let verse_count = property_get(r, "verse_count");
  let verse_groups = property_get(r, "verse_groups");
  let languages_chosen = property_get(r, "languages_chosen");
  let count_updates = [];
  let r2 = {
    counts,
    card,
    content,
    order,
    chosen_references,
    apply_seq,
    offline_notified,
    verse_count,
    verse_groups,
    languages_chosen,
    count_updates,
  };
  return r2;
}
