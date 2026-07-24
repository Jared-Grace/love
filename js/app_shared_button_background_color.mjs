import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
export function app_shared_button_background_color() {
  "a light gray fill, so the black button text has real contrast; the border (see app_shared_button_style) is a darker gray";
  let c = app_shared_color_gray_light();
  return c;
}
