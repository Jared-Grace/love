import { html_attribute_data_prefix } from "./html_attribute_data_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_scroll_body_attribute_name() {
  "The mark a frame writes on the one box that does its scrolling, so anything added to the page afterwards can find it.";
  "IT IS WRITTEN ON THE PAGE RATHER THAN CARRIED IN A VARIABLE, because whoever needs it is not who made it: a frame is built at the start of a screen and the foot of the page is added at the end of one, through a hook that is handed the page and nothing else. Passed along instead, it would have to be threaded through every screen of every app, and a screen that forgot to pass it would leave the foot in the wrong place with nothing to say so.";
  "IT CANNOT GO STALE. The mark is made when the box is made and disappears when the page is cleared, so what is found is always the frame that is actually on screen - where a remembered box is the one from whichever screen last happened to set it.";
  let prefix = html_attribute_data_prefix();
  let name = text_combine(prefix, "scroll-body");
  return name;
}
