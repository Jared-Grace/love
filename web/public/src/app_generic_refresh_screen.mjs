import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
export function app_generic_refresh_screen(context, without) {
  storage_local_set_context(context, "screen", without);
  app_generic_refresh(context);
}
