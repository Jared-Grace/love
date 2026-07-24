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
  html_style_head(
    "@keyframes html_loading_glow {\n  0% { box-shadow: 0 0 0.75rem rgba(140, 180, 255, 0.4); }\n  50% { box-shadow: 0 0 2rem rgba(140, 180, 255, 0.9); }\n  100% { box-shadow: 0 0 0.75rem rgba(140, 180, 255, 0.4); }\n}",
  );
  html_style_head(
    "@keyframes html_loading_spin_reverse {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(-360deg); }\n}",
  );
  html_style_head(
    "@keyframes html_loading_core {\n  0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.85; }\n  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }\n  100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.85; }\n}",
  );
}
