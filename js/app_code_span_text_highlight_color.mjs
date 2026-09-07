import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_code_unfonted } from "./html_style_code_unfonted.mjs";
export function app_code_span_text_highlight_color(parent, text, background) {
  arguments_assert(arguments, 3);
  ("an ordinary English word given the same coloured tile a piece of code gets, in a colour handed in, so that the word and the code can be seen to be about each other");
  ("Shaped like a code chip and deliberately not written like one: same background, same rounding, same padding, but the reading font rather than the code font. A word in code font would be read as code, and this word is not code - it is the English saying where in the code to look.");
  ("THE COLOUR IS HANDED IN because a screen pointing at two different pieces of code at once needs two of these tiles and they must not match. Where only one thing is pointed at, ",
    fn_name("app_code_span_text_highlight"),
    " asks for the app's one pointing colour and no caller has to choose.");
  let span = html_span(parent);
  html_text_set(span, text);
  let font = "white";
  html_style_code_unfonted(span, background, font);
  return span;
}
