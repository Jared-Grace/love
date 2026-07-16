import { app_shared_name_text_to_identifier } from "../../love/js/app_shared_name_text_to_identifier.mjs";
import { null_is } from "../../love/js/null_is.mjs";
import { app_shared_name_expression_find } from "../../love/js/app_shared_name_expression_find.mjs";
export function app_shared_name_expression_value(e, prefix) {
  let name = app_shared_name_expression_find(e);
  if (null_is(name)) {
    return name;
  }
  let name_new = app_shared_name_text_to_identifier(prefix, name);
  return name_new;
}
