import { html_style_set } from "./html_style_set.mjs";
export function html_style_overflow_wrap(component, value) {
  "Whether a word too long for its line may be broken across two lines rather than pushing the page sideways.";
  "'anywhere' is the setting that lets it break; a run of letters with no space in it - a pasted address, a name and a phone number typed together - otherwise widens the whole page and carries every button off the side of the screen with it.";
  html_style_set(component, "overflow-wrap", value);
}
