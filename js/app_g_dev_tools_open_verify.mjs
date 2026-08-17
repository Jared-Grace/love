import { app_g_dev_tools_open_verify_page } from "./app_g_dev_tools_open_verify_page.mjs";
import { app_g_dev_tools_open_verify_told } from "./app_g_dev_tools_open_verify_told.mjs";
import { app_g_dev_tools_open_verify_lines } from "./app_g_dev_tools_open_verify_lines.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_g_dev_tools_open_verify() {
  arguments_assert(arguments, 0);
  ("walk the reported path in a real headless Firefox: boot the game, tap your own character, press the dev-tools button in the menu that opens, and hand back what the page showed at each of those three moments together with every console line and uncaught error along the way");
  ("It walks the path rather than loading the destination directly because loading the destination directly already worked - so the fault, if there is one, is in the CROSSING: a hash written from a click, a reload triggered by that hash, and a boot that has to read the hash back. Only a run that makes the click can see any of that.");
  ("NOT a member of the repo-wide gate: it needs the dev server up and a browser engine on disk, so a red run would mean 'the server is down' as often as 'the app is broken', and a gate that cries wolf is read as noise. Run it by name when the dev surface is in question.");
  let r = await app_g_dev_tools_open_verify_lines();
  let r3 = app_g_dev_tools_open_verify_told(r);
  let told = await app_g_dev_tools_open_verify_page(r3);
  return told;
}
