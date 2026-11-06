import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { property_get } from "./property_get.mjs";
export function app_reply_rules_cases_wrong_show(root, wrong) {
  arguments_assert(arguments, 2);
  ("The tests of a change whose answer, as shown, is not what the rules would really answer with the change in - each message with its real answer, in red. With none it draws nothing.");
  ("★ THE ANSWERS ABOVE ARE WRITTEN BY HAND AND THESE ARE WORKED OUT. A yes to an answer the rules would never give is a yes to something that does not happen, and before this nothing on the screen could say so: three changes in a row promised a reply to a name on its own, and the first place the missing reply showed was a real person's message.");
  let none = list_empty_is(wrong);
  if (none) {
    return;
  }
  let red = app_shared_color_red();
  let warned = html_p_text(
    root,
    "With this change in, the rules would really answer these differently from what is shown above:",
  );
  html_style_margin_top(warned, "1.5em");
  html_style_font_size(warned, "0.9em");
  html_font_color_set(warned, red);
  for (let one of wrong) {
    let message = property_get(one, "message");
    let said = html_p_text(root, message);
    html_style_margin_top(said, "1em");
    html_style_font_size(said, "0.9em");
    let broke = property_get(one, "broke");
    if (broke) {
      let line = html_p_text(root, "The rules broke on this message.");
      html_font_color_set(line, red);
      continue;
    }
    let outputs = property_get(one, "outputs");
    let silent = list_empty_is(outputs);
    if (silent) {
      let line = html_p_text(root, "No reply.");
      html_font_color_set(line, red);
      continue;
    }
    for (let output of outputs) {
      let line = html_p_text(root, output);
      html_font_color_set(line, red);
    }
  }
}
