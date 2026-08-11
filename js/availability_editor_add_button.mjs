import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { list_add } from "./list_add.mjs";
export function availability_editor_add_button(
  kind,
  text,
  choose,
  panel,
  button_records,
) {
  arguments_assert(arguments, 5);
  function on_click() {
    choose(kind);
  }
  let element = app_shared_button(panel, text, on_click);
  list_add(button_records, {
    kind: kind,
    element: element,
  });
}
