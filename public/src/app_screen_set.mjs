import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_refresh } from "../../../love/public/src/app_refresh.mjs";
export function app_screen_set(context, value) {
  storage_local_set_context(context, "screen", value);
  app_refresh(context);
}
