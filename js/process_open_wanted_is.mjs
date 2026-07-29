import { argument_alias_group_show } from "./argument_alias_group_show.mjs";
import { argument_unalias } from "./argument_unalias.mjs";
import { process_env_or_null } from "./process_env_or_null.mjs";
import { process_ai_seam_is } from "./process_ai_seam_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function process_open_wanted_is() {
  "Whether this invocation wants the file it produced put on the human's screen, rather than printed.";
  "Showing a result is one bit that differs between a pair of fns twenty-five times over, which is a dimension wearing a name. A dimension belongs in a value passed in, so it is asked once here and every fn keeps the signature it already had.";
  "The seam supplies the default, because the seam already knows the answer: the human at the keyboard asked for this by typing it, and Claude never wants a window opened on somebody else's screen. So nothing changes for the human, and the fn a Claude reaches for stops refusing.";
  "An explicit value wins over the default in either direction, which is what lets a human ask for quiet and keeps the choice from being welded to which dispatcher was run.";
  let asked = process_env_or_null("love_show");
  let explicit = null_not_is(asked);
  if (explicit) {
    let group_name = argument_alias_group_show();
    let show = argument_unalias(group_name, asked);
    let wanted = equal(show, "open");
    return wanted;
  }
  let seam = process_ai_seam_is();
  let human = not(seam);
  return human;
}
