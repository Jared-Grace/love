import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_content_center_padding } from "./app_shared_content_center_padding.mjs";
export function app_shared_content_column_pad(content) {
  arguments_assert(arguments, 1);
  ("centre a screen's body in the one reading column these apps share");
  ("the scroll area stays full width, so the scrollbar sits at the window edge, and the padding goes on its content instead - which is what keeps verses and a full-width bar lined up, and gives a wide desktop a comfortable measure rather than edge-to-edge text.");
  ("the element padded has to be one made fresh for this screen. The page root outlives navigation - emptying it clears its children and leaves its styles - so padding the root once leaves that padding on every screen after it. Five screens each carried their own copy of that warning and the copies had already stopped saying the same thing.");
  let column = app_shared_column_max_width();
  app_shared_content_center_padding(content, column);
  return column;
}
