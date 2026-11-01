import { html_div_text_links } from "./html_div_text_links.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function app_shared_text_quiet_links(parent, text) {
  "One line of text in the quieter voice, with every web address in it a link, handed back so the caller may keep writing to it.";
  let div = html_div_text_links(parent, text);
  app_shared_text_deemphasized(div);
  return div;
}
