import { not_equal } from "./not_equal.mjs";
export async function html_scroll_settled(element) {
  let settle = element.scroll_animation_settle;
  let exists = not_equal(settle, undefined);
  if (exists) {
    await settle;
  }
}
