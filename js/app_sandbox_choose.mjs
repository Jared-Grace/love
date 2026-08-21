import { app_sandbox_previews } from "./app_sandbox_previews.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { app_sandbox_previews_list } from "./app_sandbox_previews_list.mjs";
export async function app_sandbox_choose(root, name) {
  "run the sandbox preview named by the URL hash (e.g. #spinner_preview); if the name matches none, show the list of available previews so you can pick one";
  "The registry answers with a way to fetch the preview rather than with the preview, so the named one is fetched here and then run. Only the one the address names is ever asked for, which is the whole reason the page is not the size of all of them added together.";
  let previews = app_sandbox_previews();
  if (property_exists(previews, name)) {
    let load = property_get(previews, name);
    let preview = await load();
    preview();
    return;
  }
  app_sandbox_previews_list(root, previews);
}
