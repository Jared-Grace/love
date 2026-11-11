import { arguments_assert } from "./arguments_assert.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_reply_rules_private_hidden() {
  arguments_assert(arguments, 0);
  ("Whether the reply rules screen was asked, by ?hide_private before the # in its address, to leave out the messages people really sent.");
  ("★ IT IS FOR A SCREEN READ BY SOMETHING OTHER THAN THE OWNER. A picture of the screen taken for a model to look at is sent off this machine, and the real messages carry the names of the people who wrote them; the made-up cases, the replies to them and the counts are public and stay.");
  ("Asked for in the part before the #, because the # part is the app's own and is rewritten as a person moves between screens.");
  let value = html_query_property_get("hide_private");
  let hidden = null_not_is(value);
  return hidden;
}
