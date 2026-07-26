import { html_loading_spinner_breath_animation } from "./html_loading_spinner_breath_animation.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_loading_spinner_markup() {
  "the loading spinner as a self-contained html string (inline styles only; the keyframes come from the shared keyframes css): a breathing outer ring that spins and glows, a counter-spinning inner ring, and a pulsing core. the single source of the spinner LOOK - rendered as live dom at runtime and baked into the page at build time, so the instant splash and the runtime overlay show the exact same spinner. it pins itself to the exact middle of the viewport rather than sitting in its parent's flow, so the message under it can never nudge it off center, and two covers showing at once land on the same pixels instead of half a line apart";
  let breath = html_loading_spinner_breath_animation();
  let spinner_open =
    '<div style="position:fixed;top:50%;left:50%;width:16rem;height:16rem;transform:translate(-50%,-50%)">';
  let pulse_open = text_combine_multiple([
    '<div style="position:absolute;inset:0;animation:',
    breath,
    '">',
  ]);
  let outer =
    '<div style="position:absolute;inset:0;border:1rem solid rgba(140,180,255,0.2);border-top-color:#bcd6ff;border-radius:50%;box-shadow:0 0 1rem rgba(140,180,255,0.6);animation:html_loading_spin 2s ease-in-out infinite, html_loading_glow 2s ease-in-out infinite"></div>';
  let pulse_close = "</div>";
  let inner =
    '<div style="position:absolute;inset:4rem;border:0.6rem solid rgba(140,180,255,0.15);border-bottom-color:#bcd6ff;border-radius:50%;animation:html_loading_spin_reverse 1.4s linear infinite"></div>';
  let core =
    '<div style="position:absolute;top:50%;left:50%;width:2.8rem;height:2.8rem;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,#bcd6ff 0%,#4a90e2 70%);box-shadow:0 0 1rem rgba(140,180,255,0.9);animation:html_loading_core 2s ease-in-out infinite"></div>';
  let spinner_close = "</div>";
  let v = text_combine_multiple([
    spinner_open,
    pulse_open,
    outer,
    pulse_close,
    inner,
    core,
    spinner_close,
  ]);
  return v;
}
