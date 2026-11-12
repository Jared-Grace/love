import { text_split } from "./text_split.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
export function html_text_hyphen_runs_write(parent, text, write) {
  "writes text into parent so a line never ends inside a run with a hyphen in it. 2026-11-12: a browser ends a line after any hyphen, so for (...; i--) on a phone broke between the two minus signs, as i- then -). So every run of text with a hyphen in it and no space, as i--) or -1 or self-control, is written by write(held, run) into an element that may not break, and the rest by write(parent, part). The text is cut only at spaces, so what stands either side of a run is what stood there before, and a writer that reads a negative number by the character before its minus still sees a space or nothing.";
  let parts = text_split(text, /(\S*-\S*)/);
  for (let part of parts) {
    if (text_empty_is(part)) {
      continue;
    }
    if (text_includes(part, "-")) {
      let held = html_span(parent);
      html_style_white_space(held, "nowrap");
      write(held, part);
    } else {
      write(parent, part);
    }
  }
}
