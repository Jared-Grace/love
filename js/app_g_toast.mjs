import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_toast(text, dismiss_ms) {
  "a small NON-blocking toast pill near the top of the screen: fades in, holds, then fades out and removes itself after dismiss_ms. pointer-events off so it never intercepts a tap underneath. used by the #day_conversation demo to announce the time of day each time a step advances the sky";
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "1.2rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(0, 0, 0, 0.72)",
    color: "white",
    padding: "0.4rem 0.9rem",
    "border-radius": "0.6rem",
    "font-size": "1rem",
    "z-index": "1100",
    "pointer-events": "none",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });
  let p = html_p_text(div, text);
  html_style_assign(p, {
    margin: "0",
  });
  html_reflow_force(div);
  html_style_opacity(div, "1");
  function fade_out() {
    html_style_opacity(div, "0");
    function remove() {
      html_remove(div);
    }
    setTimeout(remove, 300);
  }
  setTimeout(fade_out, dismiss_ms);
  return div;
}
