import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { app_index_main } from "../../../love/public/src/app_index_main.mjs";
  if (browser_is()) {
app_index_main_sb()
  }
export async function app_index_main_sb() {
  await app_context_initialize(app_index_main);
}
