import { app_shared_footer_context } from "./app_shared_footer_context.mjs";
import { property_get } from "./property_get.mjs";
import { html_scroll_body_or_null } from "./html_scroll_body_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_shared_content_column_align } from "./app_shared_content_column_align.mjs";
export function app_shared_footer_column_context(context) {
  "the same after-render footer as the plain one next door, lined up with the reading column the screen above it uses: its left and right edges end where the verse text and the bar end, instead of running to the window edge. Hand this to a context as its after-render hook wherever the screens sit in that column.";
  "IT LINES THE FOOT UP ONLY WHERE THE FOOT IS NOT ALREADY LINED UP. Lining up is holding a length out of each side and narrowing the width to match, and it is written for a foot added to the page itself, outside the padded body, where nothing above it has placed it. A foot that went inside that body is already in the column, and doing it a second time would stand it visibly narrower than every line it follows.";
  "Which of the two happened is asked of the page rather than remembered, the same way the foot decided where to go in the first place - so the two cannot fall out of step, because they are reading the same answer.";
  let footer = app_shared_footer_context(context);
  let root = property_get(context, "root");
  let body = html_scroll_body_or_null(root);
  let inside_body = null_not_is(body);
  if (inside_body) {
    return footer;
  }
  ("the box the foot of the page sits in is laid out as a block before its side margins are set, because a margin on either side of an inline-block is ignored");
  html_display_block(footer);
  app_shared_content_column_align(footer);
  return footer;
}
