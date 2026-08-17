import { arguments_assert } from "./arguments_assert.mjs";
import { busy_item_build } from "./busy_item_build.mjs";
import { busy_item_label } from "./busy_item_label.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
export function availability_editor_line(span, chosen, preview) {
  arguments_assert(arguments, 3);
  let item = busy_item_build(chosen, span);
  let text = busy_item_label(item);
  app_shared_text_body(preview, text);
}
