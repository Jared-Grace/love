import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { list_find_property } from "./list_find_property.mjs";
export function app_shared_refresh(context) {
  let screens = object_property_get(context, "screens");
  let app_fn = object_property_get(context, "app_fn");
  let body = html_document_body();
  html_clear(body);
  let value = object_property_get(app_fn, "name");
  let combined = function_name_combine(value, "home");
  let screen_name = storage_local_initialize_context(
    context,
    "screen",
    combined,
  );
  let screen = list_find_property(screens, "name", screen_name);
  screen(context);
}
