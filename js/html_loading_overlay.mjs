import { html_loading_backdrop_style } from "./html_loading_backdrop_style.mjs";
import { html_loading_message_style } from "./html_loading_message_style.mjs";
import { html_loading_splash_take } from "./html_loading_splash_take.mjs";
import { html_loading_message_text } from "./html_loading_message_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_loading_spinner } from "./html_loading_spinner.mjs";
export async function html_loading_overlay() {
  "attach to <html>, not <body>: a screen re-render clears <body>, which would delete this overlay and flash white; <html> survives that clear so the spinner stays visible the whole time";
  let html = html_document_root();
  let div = html_div(html);
  let backdrop = html_loading_backdrop_style();
  html_style_assign(div, backdrop);
  let fade = {
    opacity: "0",
    transition: "opacity 0.15s ease",
  };
  html_style_assign(div, fade);
  await html_loading_spinner(div);
  let text = html_loading_message_text();
  let message = html_p_text(div, text);
  let message_style = html_loading_message_style();
  html_style_assign(message, message_style);
  ("hand over from the static boot splash, which shows this very spinner: two covers at once double the dim and show a second, fainter spinner through it");
  let handed_over = html_loading_splash_take();
  if (handed_over) {
    ("the screen is already dark, so appear at once: skipping the reflow means the browser never sees the see-through state, so no fade runs and nothing half-painted shows through");
    html_style_opacity(div, "1");
    return div;
  }
  html_reflow_force(div);
  html_style_opacity(div, "1");
  return div;
}
