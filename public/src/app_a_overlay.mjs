import { noop } from "../../../love/public/src/noop.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
export function app_a_overlay(a) {
  let o3 = app_a_overlay_keydown(a, noop);
  return o3;
}
