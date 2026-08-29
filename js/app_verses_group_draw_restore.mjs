import { arguments_assert } from "./arguments_assert.mjs";
import { app_verses_draw_get } from "./app_verses_draw_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_verses_counts_refresh } from "./app_verses_counts_refresh.mjs";
export async function app_verses_group_draw_restore(
  verse_count_held,
  count_updates,
  count_update_invoke,
  references_show,
) {
  "Bringing back the verses a person was last given, so reopening the app - or changing language, which reloads the page - shows them again rather than an empty screen.";
  "THE VERSES ARE DRAWN AGAIN RATHER THAN KEPT AS THEY LOOKED, which is what lets a change of language show the same verses in the new one.";
  "THE COUNT COMES BACK BEFORE THE VERSES DO, so the button saying how many is already right when they appear.";
  "NOTHING AT ALL HAPPENS IF THERE IS NOTHING SAVED, which is a first-ever opening rather than a fault, so New verses is simply what the person taps next.";
  arguments_assert(arguments, 4);
  let saved = app_verses_draw_get();
  let missing = null_is(saved);
  if (missing) {
    return;
  }
  let count = property_get(saved, "count");
  property_set(verse_count_held, "verse_count", count);
  app_verses_counts_refresh(count_updates, count_update_invoke);
  let saved_references = property_get(saved, "references");
  await references_show(saved_references, false);
}
