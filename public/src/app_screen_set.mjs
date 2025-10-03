import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_refresh } from "../../../love/public/src/app_refresh.mjs";
export async function app_screen_set(context, value) {
  storage_local_set_context(context, "screen", value);
  await app_refresh(context);
}
