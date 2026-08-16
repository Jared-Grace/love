import { arguments_assert } from "./arguments_assert.mjs";
import { html_copy_fly_rect_changed } from "./html_copy_fly_rect_changed.mjs";
import { noop } from "./noop.mjs";
export async function html_copy_fly_rect(component, rect_to, duration) {
  arguments_assert(arguments, 3);
  ("send a copy of a thing across to a given place on the screen and let it go once it arrives, leaving the thing itself untouched where it stands");
  ("The same travelling as a copy that becomes something else on the way, with nothing named for it to become - so a copy that only travels and a copy that travels and changes cannot drift apart from one another.");
  await html_copy_fly_rect_changed(component, rect_to, duration, noop);
}
