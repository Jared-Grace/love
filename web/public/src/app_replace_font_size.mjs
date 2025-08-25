import {storage_local_initialize_context} from "./storage_local_initialize_context.mjs";
export function app_replace_font_size(context) {
  let value2 = storage_local_initialize_context(context, "font_size", 20);
  return value2;
}
