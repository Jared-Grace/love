import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
export async function app_shared_contact_overlay_open() {
  "Open the contact screen, fetching it at the moment the button is pressed rather than carrying it in the page from the start.";
  "★ THE OVERLAY IS THE HEAVIEST THING TWENTY PAGES CARRY, AND ALMOST NOBODY PRESSES IT. Under it sit the message thread, the writing box, the loading screen and the whole firebase upload road, and a plain import at the top of the button's file is followed by the bundler whether the button is ever pressed or not. Measured 2026-08-26, that was 105 KB of the 165 KB the privacy page is made of - a page of standing text, most of it a screen for writing to the developer. Asked for by name instead, the tree is not in the page at all.";
  "The wait is one fetch of one small file, on the same address the page came from, and it happens while a thumb is still travelling to a screen that was not there a moment ago. Nothing is waited for before the press, which is the whole of what changes.";
  "The button keeps its own plain handler and calls this, so the press stays the ordinary thing a button does and the fetching lives here under a name that says it.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("app_shared_contact_overlay");
  let fn = await function_import_relative(f_name);
  await fn();
}
