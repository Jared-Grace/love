import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
export async function app_shared_refresh_screen(context, without) {
  storage_local_set_context(context, "screen", without);
  await app_shared_refresh(context);
}
