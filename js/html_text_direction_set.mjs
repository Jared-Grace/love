import { text_rtl_is } from "./text_rtl_is.mjs";
import { html_direction_rtl_set } from "./html_direction_rtl_set.mjs";
export function html_text_direction_set(element, text) {
  "point one piece of the page the way the words inside it are actually read, worked out from the words themselves rather than from anything the page was told beforehand";
  "for a verse and its glosses, where the words arrive already written and the language they are in is exactly what is wanted. its neighbour is for the other case, a piece being told which way to run before anything has been written in it at all.";
  let rtl = text_rtl_is(text);
  html_direction_rtl_set(element, rtl);
}
