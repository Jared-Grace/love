import { app_a_overlay_close_text } from "../../../love/public/src/app_a_overlay_close_text.mjs";
export function app_a_choice_close(overlay_close) {
  let v = {
    shortcut: "x",
    text: app_a_overlay_close_text(),
    fn: overlay_close,
  };
  return v;
}
