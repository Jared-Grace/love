import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted_unbuilt_linked } from "./qa_promoted_unbuilt_linked.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function qa_promoted_unbuilt_linked_gate_run() {
  "Gate: nothing in the folder that gets sent may point at an app that has nothing built under its name.";
  "The sending asks every app to account for where its pieces came from, and lets one off when every piece under its name is empty. The reason written beside that letting-off is that a page with no bytes in it puts nothing on the internet that anything links to. This is that reason, asked of the folder instead of assumed.";
  "Written because it had already happened and nothing had noticed for six days. The front page was advertising a game, the page behind the link had no bytes in it, and the address answered every request with a success and an empty screen. No gate was red. The sending was content. The only thing the emptiness did was buy the app a pass on the one question that would have caught it.";
  "Measured against nothing rather than against a ratchet, because the one app it named was fixed rather than grandfathered.";
  arguments_assert(arguments, 0);
  let found = await qa_promoted_unbuilt_linked();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let hint =
    "nothing has been built under this app's name - every piece waiting for it in the folder that gets sent is empty - and something else in that same folder still names it, so sending the folder publishes a link to a page with no bytes in it. Either build the app and put a note beside it saying which commit the pieces came out of, or take the naming of it out of whatever still points at it";
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
