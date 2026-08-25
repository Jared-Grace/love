import { fn_name } from "./fn_name.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { host_local_network_is } from "./host_local_network_is.mjs";
export async function app_index_dev_links_show(root) {
  "The working links at the very top of the index page, shown only when the page came from a machine on this same network.";
  "The test is asked here rather than by the page that calls this, so there is one answer to keep right instead of one per caller. A caller asks to show the links and gets nothing where nothing should be shown.";
  "★ WHAT IS DRAWN IS ASKED FOR BY NAME AND NOT IMPORTED, and that is about weight rather than about tidiness. The test below decides who SEES these links and settles nothing about who DOWNLOADS them - a bundler follows a plain import whether the branch is walked or not, so every reader of the public index was fetching the list of half-finished things to look at, and every sentence describing them, in order never to be shown any of it. A name joined into a path at the moment it is wanted is something a bundler cannot see through.";
  "That is what makes this the one place the test may be asked. Were a caller to ask it instead, the caller would hold the import and the weight would come straight back.";
  let wanted = host_local_network_is();
  if (wanted) {
    let f_name = fn_name("app_index_dev_links_draw");
    let fn = await function_import_relative(f_name);
    await fn(root);
  }
}
