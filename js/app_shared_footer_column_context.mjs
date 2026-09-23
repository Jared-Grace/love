import { not_equal } from "./not_equal.mjs";
import { app_shared_footer_context } from "./app_shared_footer_context.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_footer_parent } from "./app_shared_footer_parent.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_shared_content_column_align } from "./app_shared_content_column_align.mjs";
export function app_shared_footer_column_context(context) {
  "the same after-render footer as the plain one next door, lined up with the reading column the screen above it uses: its left and right edges end where the verse text and the bar end, instead of running to the window edge. Hand this to a context as its after-render hook wherever the screens sit in that column.";
  "IT LINES THE FOOT UP ONLY WHERE THE FOOT IS NOT ALREADY LINED UP. Lining up is holding a length out of each side and narrowing the width to match, and it is written for a foot added to the page itself, outside the padded body, where nothing above it has placed it. A foot that went inside that body, or inside a held foot the frame already padded, is already in the column, and doing it a second time would stand it visibly narrower than every line it follows.";
  "Which of the two happened is asked of the page rather than remembered, by asking the very question the foot asked to decide where to go - so the two cannot fall out of step, because they are reading the same answer.";
  let footer = app_shared_footer_context(context);
  let root = property_get(context, "root");
  let placed = app_shared_footer_parent(root);
  let inside_column = not_equal(placed, root);
  if (inside_column) {
    return footer;
  }
  ("the box the foot of the page sits in is laid out as a block before its side margins are set, because a margin on either side of an inline-block is ignored");
  html_display_block(footer);
  app_shared_content_column_align(footer);
  return footer;
}
