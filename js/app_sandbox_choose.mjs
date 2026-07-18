import { app_sandbox_previews } from "./app_sandbox_previews.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { app_sandbox_previews_list } from "./app_sandbox_previews_list.mjs";
export function app_sandbox_choose(root, name) {
  "run the sandbox preview named by the URL hash (e.g. #spinner_preview); if the name matches none, show the list of available previews so you can pick one";
  let previews = app_sandbox_previews();
  if (property_exists(previews, name)) {
    let preview = property_get(previews, name);
    preview();
    return;
  }
  app_sandbox_previews_list(root, previews);
}
