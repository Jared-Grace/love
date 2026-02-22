import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { app_index_main } from "../../../love/public/src/app_index_main.mjs";
export async function app_index_main_sb() {
  await app_context_initialize(fn);
  app_index_main(context);
}
