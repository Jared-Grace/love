import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
export async function app_replace_font_size(context) {
  let value2 = storage_local_initialize_context(context, "font_size", 20);
  return value2;
}
