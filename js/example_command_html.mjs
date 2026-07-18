import { property_get } from "./property_get.mjs";
import { html_escape } from "./html_escape.mjs";
import { html_code_element } from "./html_code_element.mjs";
import { example_command_text } from "./example_command_text.mjs";
import { text_empty } from "./text_empty.mjs";
// The typeable command chip, built from the derived alias + args. A fn with no
// alias has no shorthand to type, so it shows no command (the function name chip
// already names it).
export function example_command_html(example) {
  let alias = property_get(example, "alias");
  if (alias === null) {
    return text_empty();
  }
  let args = property_get(example, "args");
  let command = example_command_text(alias, args);
  let code = html_code_element("code", {}, html_escape(command));
  let r = html_code_element("div", { class: "command" }, code);
  return r;
}
