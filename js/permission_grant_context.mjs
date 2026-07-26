import { functions_names } from "./functions_names.mjs";
import { guard_denied_dispatcher_names } from "./guard_denied_dispatcher_names.mjs";
export async function permission_grant_context() {
  "the answers the safety check needs that are the same whichever function it is asked about, worked out once and carried along";
  "asked for one function this costs what it always cost. asked for every standing grant it is the difference between reading the repo's function list two hundred times and reading it once, which is what makes the same check affordable to run as a gate.";
  let live = await functions_names();
  let denied = await guard_denied_dispatcher_names();
  let remembered = {};
  let context = {
    live,
    denied,
    remembered,
  };
  return context;
}
