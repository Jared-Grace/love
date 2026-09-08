import { arguments_assert } from "./arguments_assert.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_color_yellow_tint } from "./app_shared_color_yellow_tint.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { app_shared_color_red_tint } from "./app_shared_color_red_tint.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { app_shared_color_green_tint } from "./app_shared_color_green_tint.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { html_text_decoration } from "./html_text_decoration.mjs";
import { each } from "./each.mjs";
export function app_reply_rules_diff_line_changed(block, segments) {
  "$plain segments";
  "One line a change reworded rather than replaced, drawn once instead of twice, with the characters that go out struck through where they stand and the characters that come in marked where they arrive.";
  "★ ONE LINE IS DRAWN AND NOT TWO BECAUSE THE TWO WOULD BE VERY NEARLY THE SAME LINE. A removal set above its replacement leaves the reader to run along both of them character by character to find the few that differ - and a line of code is long, so that is real work done once per changed line, to reach a fact the page already knows and could have pointed at.";
  "★ THE LINE AS IT STANDS AND THE LINE AS IT WOULD STAND ARE BOTH STILL READABLE OFF THE DRAWING. Take away everything marked as arriving and what is left is the line in the file; take away everything struck through and what is left is the line the change would put there. Nothing has been summarised - a single row here says exactly what the pair of rows said, which is the only thing that makes it safe to draw one row.";
  "THE SIGN IS NEITHER OF THE TWO SIGNS, because the text after it is neither wording alone. A row wearing a plus or a minus would be saying that the characters beside it can be found, exactly as written, in the change or in the file, and here they cannot: they are two wordings shown in the one place.";
  "THE STRIKE THROUGH IS DRAWN AS WELL AS THE COLOUR RATHER THAN INSTEAD OF IT, and it is what carries the meaning where the two colours cannot be told apart. Both marked stretches sit inside one line here, so a reader who cannot separate red from green has no signs at the left to fall back on the way the whole-line rows give them.";
  "THE WHOLE ROW IS WASHED IN A THIRD COLOUR SO THAT IT CAN BE FOUND FROM ACROSS THE PAGE. Lines that wholly go and lines that wholly come are already blocks of colour, and without a wash of its own a reworded line is the one kind of change that looks exactly like the hundred untouched lines around it - findable only by reading them.";
  "THE MARKS INSIDE IT KEEP THEIR OWN COLOURS AND ARE NOT RESTATED IN THE WASH. The wash answers where, and the marks answer what: a reader crossing the page sees that something happened on this line, and reading it sees which characters. One colour asked to do both would have to be either too faint to find or too strong to read through.";
  arguments_assert(arguments, 2);
  let line = html_pre_text(block, "~");
  html_style_margin(line, "0");
  let gray = app_shared_color_gray_dark();
  html_font_color_set(line, gray);
  let yellow_tint = app_shared_color_yellow_tint();
  html_style_background_color_set(line, yellow_tint);
  let red = app_shared_color_red();
  let red_tint = app_shared_color_red_tint();
  let green = app_shared_color_green_deep();
  let green_tint = app_shared_color_green_tint();
  function each_segment(segment) {
    let shared = property_get(segment, "shared");
    let before_text = property_get(segment, "before_text");
    let after_text = property_get(segment, "after_text");
    if (shared) {
      html_span_text(line, before_text);
      return;
    }
    let went = text_empty_not_is(before_text);
    if (went) {
      let out = html_span_text(line, before_text);
      html_font_color_set(out, red);
      html_style_background_color_set(out, red_tint);
      html_text_decoration(out, "line-through");
    }
    let came = text_empty_not_is(after_text);
    if (came) {
      let into = html_span_text(line, after_text);
      html_font_color_set(into, green);
      html_style_background_color_set(into, green_tint);
    }
  }
  each(segments, each_segment);
  return line;
}
