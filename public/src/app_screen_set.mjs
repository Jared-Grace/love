import { app_refresh } from "./app_refresh.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_screen_set(context, value) {
  const key = "screen";
  let { app_fn } = context;
  storage_local_set(app_fn, key, value);
  app_refresh(context);
}
