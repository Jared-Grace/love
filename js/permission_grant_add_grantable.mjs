import { arguments_assert } from "./arguments_assert.mjs";
import { permission_replay_reading } from "./permission_replay_reading.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { permission_grant_add_multiple } from "./permission_grant_add_multiple.mjs";
export async function permission_grant_add_grantable() {
  "Grants every function the daily prompt record says could stop asking today, so the human takes the whole day's chance with one short line instead of a long one.";
  "★ IT ASKS THE RECORD FOR ITS OWN SET RATHER THAN TAKING A LIST. The names were already worked out to say the sentence at the start of a session, so spelling them again into the command is a copy that can only go stale between the reading and the running - and it is the copy that made the line long.";
  "★ A HANDED LINE THAT IS LONG IS A LINE THAT ARRIVES BROKEN. Nine names comma-joined is a line long enough that pasting it into a terminal can land a real newline in the middle of it, which runs half a command; the fault has already been met and it is a fault of length alone, so the fix is a command with nothing in it to be long.";
  "It is not allow-listed and must not become so, for the same reason the single-name adder is not: a command that writes allow rules is exactly the command a human should see and approve by hand. What this removes is the typing, never the approving - and the sentence at the start of the session still names every function before the human runs anything.";
  "The refusal check is not repeated here. It runs per name inside the adder, before anything is written, so a name that must never hold a standing approval stops the whole batch there rather than being let through by a caller that thought it had already asked.";
  arguments_assert(arguments, 0);
  let reading = await permission_replay_reading();
  let written = property_get(reading, "written");
  let missing = not(written);
  if (missing) {
    let unwritten = {
      written: false,
      granted: [],
    };
    return unwritten;
  }
  let grantable = property_get(reading, "grantable");
  let none = list_empty_is(grantable);
  if (none) {
    let nothing = {
      written: true,
      granted: [],
    };
    return nothing;
  }
  let names_comma = list_join_comma(grantable);
  let added = await permission_grant_add_multiple(names_comma);
  return added;
}
