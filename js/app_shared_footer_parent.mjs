import { arguments_assert } from "./arguments_assert.mjs";
import { html_foot_tail_attribute_name } from "./html_foot_tail_attribute_name.mjs";
import { html_marked_or_null } from "./html_marked_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_scroll_body_or_null } from "./html_scroll_body_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_footer_parent(root) {
  "Where the foot of an app's page is added, so that it ends the reading on either of the two kinds of page these apps are built on.";
  "THE FOOT ENDS THE READING, AND ON A SHORT PAGE IT IS AT THE BOTTOM OF THE SCREEN (decided 2026-09-23). It is not held in sight the whole time - that was tried the same day and asked back: a reader meets the ways out at the end, and a page too short to reach the bottom of the screen does not leave them floating partway up it.";
  "A PAGE WHOSE FRAME KEEPS A PLACE for the ways out gets them there - after the reading and above the foot a bible chapter holds its arrows in, so the ways out neither cover that foot nor get carried down the page with it.";
  "ON A PAGE THAT SCROLLS ITSELF the foot is added to the page. On a page held to exactly one window, with the reading scrolling inside a box, the foot goes inside the box, so it is what the reader meets at the end of that box.";
  "WHICH KIND OF PAGE IT IS, IS ASKED OF THE PAGE. The frame marks the place it keeps and the box it scrolls as it builds them, so the answer is made and unmade with the screen it describes and no screen has to remember to say which kind it is.";
  arguments_assert(arguments, 1);
  let name = html_foot_tail_attribute_name();
  let tail = html_marked_or_null(root, name);
  let keeps_place = null_not_is(tail);
  if (keeps_place) {
    return tail;
  }
  let body = html_scroll_body_or_null(root);
  let scrolls_itself = null_is(body);
  if (scrolls_itself) {
    return root;
  }
  return body;
}
