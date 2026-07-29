import { function_open_names_reached } from "./function_open_names_reached.mjs";
import { functions_names } from "./functions_names.mjs";
import { guard_denied_dispatcher_names } from "./guard_denied_dispatcher_names.mjs";
export async function permission_grant_context() {
  "the answers the safety check needs that are the same whichever function it is asked about, worked out once and carried along";
  "asked for one function this costs what it always cost. asked for every standing grant it is the difference between reading the repo's function list two hundred times and reading it once, which is what makes the same check affordable to run as a gate.";
  "Which functions put a window on the human's screen is one of those shared answers, and it belongs here for the reason the rest do - it costs a walk of the call graph, and the check asks it once per name. It arrives from the same fn the gate over the written rules reads, so the tool that writes a rule and the gate that judges it cannot disagree about what an opener is.";
  let live = await functions_names();
  let denied = await guard_denied_dispatcher_names();
  let openers = await function_open_names_reached();
  let remembered = {};
  let context = {
    live,
    denied,
    openers,
    remembered,
  };
  return context;
}
