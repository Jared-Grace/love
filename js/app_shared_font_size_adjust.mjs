import { app_shared_font_size_key } from "./app_shared_font_size_key.mjs";
import { app_shared_font_size_refresh } from "./app_shared_font_size_refresh.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_shared_font_size } from "./app_shared_font_size.mjs";
export async function app_shared_font_size_adjust(context, value_get) {
  let value = await app_shared_font_size(context);
  value = value_get(value);
  let key = app_shared_font_size_key();
  storage_local_set_context(context, key, value);
  app_shared_font_size_refresh(context);
}
