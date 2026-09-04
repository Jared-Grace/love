import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_body_or_null } from "./html_scroll_body_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_footer_parent(root) {
  "Where the foot of an app's page is added, so that it ends the reading on either of the two kinds of page these apps are built on.";
  "THE FOOT BELONGS AT THE END OF WHAT THE READER IS READING, never in sight the whole time. Two buttons that stay on the screen take a strip of a phone away from the passage for as long as the passage is open, and they offer to leave the app at every moment of it - which is the opposite of what a way out is for. A reader reaches the end of the reading and finds them there.";
  "ON A PAGE THAT SCROLLS ITSELF THE END OF THE READING IS THE END OF THE PAGE, and adding the foot to the page is already right. On a page held to exactly one window, with the reading scrolling inside a box, the end of the page is a strip below that box which never moves - so the foot goes inside the box instead, and scrolls away with everything else.";
  "WHICH KIND OF PAGE IT IS, IS ASKED OF THE PAGE. The frame marks the box it scrolls as it builds it, so the answer is made and unmade with the screen it describes and no screen has to remember to say which kind it is.";
  arguments_assert(arguments, 1);
  let body = html_scroll_body_or_null(root);
  let scrolls_itself = null_is(body);
  if (scrolls_itself) {
    return root;
  }
  return body;
}
