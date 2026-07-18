import { html_loading_state } from "./html_loading_state.mjs";
import { html_style_head } from "./html_style_head.mjs";
export function html_loading_spinner_style() {
  let state = html_loading_state();
  if (state.styled) {
    return;
  }
  state.styled = true;
  html_style_head(
    "@keyframes html_loading_spin {\n  0% { transform: rotate(0deg) scale(1); }\n  50% { transform: rotate(180deg) scale(1.15); }\n  100% { transform: rotate(360deg) scale(1); }\n}",
  );
}
