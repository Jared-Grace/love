import { functions_command_seams } from "./functions_command_seams.mjs";
import { functions_dispatch_seams } from "./functions_dispatch_seams.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function functions_dispatcher_denied() {
  "Every function name the bash guard refuses outright in the third word of a dispatcher command, from both of the reasons there are to refuse one: it runs whatever command its arguments hold, or it runs whatever repo function its arguments name.";
  "One list at the floor and two behind it, because the floor asks a single question - is this name safe to type here - while the reachability check asks a different one that only the first half answers. Joining them here rather than in the guard keeps the python side a mirror of one name instead of a rule about two.";
  let seams = functions_command_seams();
  let dispatch = functions_dispatch_seams();
  let names = [];
  list_add_multiple(names, seams);
  list_add_multiple(names, dispatch);
  return names;
}
