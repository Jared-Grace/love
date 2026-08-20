import { app_shared_button_wide_shape } from "./app_shared_button_wide_shape.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_button_wide(parent, text, lambda) {
  "filling the line, and the room a stack of them needs, is asked for rather than written out - for the same reason the face is: a link that leads somewhere has to stay an anchor and wants the same shape";
  let b = app_shared_button(parent, text, lambda);
  app_shared_button_wide_shape(b);
  return b;
}
