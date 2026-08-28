import { app_sandbox_previews } from "./app_sandbox_previews.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export async function app_sandbox_choose(name) {
  "run the sandbox preview named by the URL hash (e.g. #spinner_preview); if the name matches none, show the list of available previews so you can pick one";
  "the page's root is not wanted here any more. It was only ever handed on to the pick screen, and that screen now draws itself as a panel over the whole viewport - the same panel every dev screen in the game draws itself into - so there is nothing left for a root to be the parent of.";
  "The registry answers with a way to fetch the preview rather than with the preview, so the named one is fetched here and then run. Only the one the address names is ever asked for, which is the whole reason the page is not the size of all of them added together.";
  "THE PICK SCREEN IS FETCHED THE SAME WAY, AND FOR THE SAME REASON. It draws itself as the drill-down directory the game's dev routes are drawn as, so naming it in an import line hands every visitor the whole of that directory - the cards, the tree, the settings, the stored open folders - before it is known whether they wanted it. Almost nobody does: an address that names a preview never reaches this line. Measured, the directory is more than half of what the page weighed, for a screen shown only when the address named nothing.";
  let previews = app_sandbox_previews();
  if (property_exists(previews, name)) {
    let load = property_get(previews, name);
    let preview = await load();
    preview();
    return;
  }
  let m = await import("./app_sandbox_previews_list.mjs");
  let list = m.app_sandbox_previews_list;
  list(previews);
}
