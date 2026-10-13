import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_unsent_all } from "./app_shared_unsent_all.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_text_set } from "./html_text_set.mjs";
export async function app_chapter_group_status_show(status, path) {
  "$plain status";
  "$plain path";
  "Says on the page whether this chapter's division has been sent, or is still only on this device waiting for the internet.";
  arguments_assert(arguments, 2);
  let unsent = await app_shared_unsent_all();
  let waiting = list_map_property(unsent, "key");
  if (list_includes(waiting, path)) {
    html_text_set(
      status,
      "⏳ Kept on this device - it will send when there is internet, or press Save",
    );
    return;
  }
  html_text_set(status, "✅ Saved");
}
