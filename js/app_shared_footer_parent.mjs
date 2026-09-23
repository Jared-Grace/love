import { arguments_assert } from "./arguments_assert.mjs";
import { html_foot_tail_attribute_name } from "./html_foot_tail_attribute_name.mjs";
import { html_marked_or_null } from "./html_marked_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_scroll_body_or_null } from "./html_scroll_body_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_footer_parent(root) {
  "Where the foot of an app's page is added, so that it ends the reading on either of the two kinds of page these apps are built on.";
  "THE FOOT STAYS IN SIGHT against the bottom of the screen (decided 2026-09-23, reversing the earlier rule that it only ended the reading): a reader wanting out should not have to scroll to the end of a long page to find the way.";
  "A PAGE WHOSE FRAME ALREADY HOLDS A FOOT against the bottom gets the two ways out inside that foot. Two things each held against the same edge would lie one on top of the other, so the ways out join the row already there - under the arrows of a bible chapter - rather than cover it.";
  "ON A PAGE THAT SCROLLS ITSELF the foot is added to the page, and it holds itself at the bottom of the screen for as long as the page reaches past it. On a page held to exactly one window, with the reading scrolling inside a box, the foot goes inside the box, so what it holds itself against is the bottom of that box - which is the bottom of the screen.";
  "WHICH KIND OF PAGE IT IS, IS ASKED OF THE PAGE. The frame marks the foot it holds and the box it scrolls as it builds them, so the answer is made and unmade with the screen it describes and no screen has to remember to say which kind it is.";
  arguments_assert(arguments, 1);
  let name = html_foot_tail_attribute_name();
  let held = html_marked_or_null(root, name);
  let holds_foot = null_not_is(held);
  if (holds_foot) {
    return held;
  }
  let body = html_scroll_body_or_null(root);
  let scrolls_itself = null_is(body);
  if (scrolls_itself) {
    return root;
  }
  return body;
}
