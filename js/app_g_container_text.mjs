import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_container } from "./app_g_container.mjs";
export function app_g_container_text(overlay, text) {
  let choices = app_g_container(overlay);
  app_g_p_text(choices, text);
  return choices;
}
