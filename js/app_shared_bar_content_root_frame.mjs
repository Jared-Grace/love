import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bar_content_root_frame(bc, root) {
  arguments_assert(arguments, 2);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  let frame = {
    root,
    bar,
    content,
  };
  return frame;
}
