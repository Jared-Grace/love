import { window_open_google_define } from "./window_open_google_define.mjs";
export function window_open_google_define_later(item) {
  let r = function lambda() {
    window_open_google_define(item);
  };
  return r;
}
