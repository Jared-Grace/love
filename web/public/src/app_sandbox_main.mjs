import { html_checkboxes } from "../../../love/public/src/html_checkboxes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_sandbox_main() {
  marker("1");
  html_checkboxes(
    context,
    button_back,
    top_text,
    value_previous_get,
    checkbox_name,
    choices,
    on_next,
    button_next,
  );
}
