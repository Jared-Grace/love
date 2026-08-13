import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_back_to_text } from "./app_shared_button_back_to_text.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_shared_button_back_to(container, destination, lambda) {
  ("A way out that names where it leads, drawn the same way as the plain one beside it - the twin of ",
    fn_name("app_shared_button_back"),
    " for the screens that know their destination.");
  arguments_assert(arguments, 3);
  let text = app_shared_button_back_to_text(destination);
  let button = app_shared_button_uncolored(container, text, lambda);
  return button;
}
