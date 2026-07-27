import { html_loading_spinner_color_glow } from "./html_loading_spinner_color_glow.mjs";
import { html_loading_spinner_breath_keyframes } from "./html_loading_spinner_breath_keyframes.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function html_loading_spinner_keyframes_css() {
  "all the keyframes the loading spinner needs, as ONE css string - the single source shared by the runtime head-injector and the build-time static splash, so the instant splash and the runtime overlay can never drift apart";
  let spin =
    "@keyframes html_loading_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}";
  let blue = html_loading_spinner_color_glow();
  let glow = `@keyframes html_loading_glow {\n  0% { box-shadow: 0 0 0.75rem ${blue}66; }\n  50% { box-shadow: 0 0 2rem ${blue}e6; }\n  100% { box-shadow: 0 0 0.75rem ${blue}66; }\n}`;
  let spin_reverse =
    "@keyframes html_loading_spin_reverse {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(-360deg); }\n}";
  let breath = html_loading_spinner_breath_keyframes();
  let core =
    "@keyframes html_loading_core {\n  0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.85; }\n  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }\n  100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.85; }\n}";
  let all = [spin, glow, spin_reverse, breath, core];
  let css = list_join_newline(all);
  return css;
}
