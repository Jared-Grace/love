import { noop } from "./noop.mjs";
import { app_a_overlay_keydown } from "./app_a_overlay_keydown.mjs";
export function app_a_overlay(a) {
  let o = app_a_overlay_keydown(a, noop);
  return o;
}
