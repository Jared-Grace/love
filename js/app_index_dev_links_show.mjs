import { host_local_network_is } from "./host_local_network_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_index_dev_links_show(root) {
  "The working links at the very top of the index page, shown only when the page came from a machine on this same network.";
  "The test is asked here rather than by the page that calls this, so there is one answer to keep right instead of one per caller. A caller asks to show the links and gets nothing where nothing should be shown.";
  "★ WHAT IS DRAWN IS FETCHED WHEN IT IS WANTED AND NOT BEFORE, and that is about weight rather than about tidiness. The test below decides who SEES these links and settles nothing about who DOWNLOADS them - a plain import is followed whether the branch is walked or not, so every reader of the public index was fetching the list of half-finished things to look at, and every sentence describing them, in order never to be shown any of it.";
  "That is what makes this the one place the test may be asked. Were a caller to ask it instead, the caller would hold the import and the weight would come straight back.";
  "★ THE ADDRESS IS WRITTEN OUT RATHER THAN BUILT, and here that is the whole difference between working and not. The other way of leaving a bundle - joining a name into a path so the bundler cannot see through it - is for a half that only ever runs in NODE, where the file it names is genuinely sitting next to this one on a disk. This branch runs in a BROWSER, where the only thing beside the page is whatever the build put there: an address the build never saw is an address nothing was ever written to, so the fetch reached for a file that does not exist and the page died before it drew a line. Written out, the build sees it, keeps it out of the page all the same, and puts it somewhere the fetch can find.";
  let wanted = host_local_network_is();
  if (wanted) {
    let module = await import("./app_index_dev_links_draw.mjs");
    let fn = property_get(module, "app_index_dev_links_draw");
    await fn(root);
  }
}
