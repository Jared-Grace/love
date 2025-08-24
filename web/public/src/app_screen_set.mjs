import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_refresh } from "./app_refresh.mjs";
export function app_screen_set(context, value) {
  const key = "screen";
  storage_local_set_context(context, key, value);
  app_refresh(context);
}
