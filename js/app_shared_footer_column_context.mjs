import { app_shared_footer_context } from "./app_shared_footer_context.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_shared_content_column_align } from "./app_shared_content_column_align.mjs";
export function app_shared_footer_column_context(context) {
  "the same after-render footer as the plain one next door, lined up with the reading column the screen above it uses: its left and right edges end where the verse text and the bar end, instead of running to the window edge. Hand this to a context as its after-render hook wherever the screens sit in that column.";
  let footer = app_shared_footer_context(context);
  ("the box the foot of the page sits in is laid out as a block before its side margins are set, because a margin on either side of an inline-block is ignored");
  html_display_block(footer);
  app_shared_content_column_align(footer);
  return footer;
}
