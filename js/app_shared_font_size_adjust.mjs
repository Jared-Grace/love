import { app_shared_font_size_refresh } from "../../love/js/app_shared_font_size_refresh.mjs";
import { storage_local_set_context } from "../../love/js/storage_local_set_context.mjs";
import { app_shared_font_size } from "../../love/js/app_shared_font_size.mjs";
export async function app_shared_font_size_adjust(context, value_get) {
  let value = await app_shared_font_size(context);
  value = value_get(value);
  storage_local_set_context(context, "font_size", value);
  app_shared_font_size_refresh(context);
}
