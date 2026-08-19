import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bar_content_root_sticky_padded(root) {
  "A bar that stays at the top and a body that scrolls under it, both already holding the shared reading column, handed back for the page to fill.";
  "Every screen that asks for the pair goes on to pad both of them, in that order, before writing anything into either - so the padding is done here and the two are handed over ready. A screen that forgot one of the two ended up with a bar the width of the phone over a column the width of a page, and nothing would have gone red.";
  "Both halves are padded rather than the root, and the reason is written where the padding is done.";
  arguments_assert(arguments, 1);
  let frame = app_shared_bar_content_root_sticky(root);
  let bar = property_get(frame, "bar");
  let content = property_get(frame, "content");
  app_shared_content_column_pad(bar);
  app_shared_content_column_pad(content);
  return frame;
}
