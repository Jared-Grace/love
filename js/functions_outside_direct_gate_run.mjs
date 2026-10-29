import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_outside_direct_unlisted } from "./functions_outside_direct_unlisted.mjs";
import { functions_outside_direct } from "./functions_outside_direct.mjs";
import { functions_outside_direct_harmless } from "./functions_outside_direct_harmless.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_outside_direct_gate_run() {
  "Gate: every function that goes outside directly - a browser, a request, a network module, a program it starts, a function run by name - is either refused by the self-grant check or has been read and marked harmless.";
  "The check walks calls, and a walk only refuses what it can see named on a list. A new sender that reaches none of those names reads as clean and would be granted without anyone looking, which is the one way the self-grant fails silently. This is what makes that loud: the sender turns this red the day it is written.";
  "It ratchets against zero. When it was written every direct sender had been read and either refused or marked, so there is nothing to grandfather.";
  "It fails the other way too: a name marked harmless that no longer goes outside directly is a mark on nothing, and a stale mark is where a later sender of the same name would hide.";
  arguments_assert(arguments, 0);
  let unlisted = await functions_outside_direct_unlisted();
  let direct = await functions_outside_direct();
  let harmless = functions_outside_direct_harmless();
  let stale = list_difference(harmless, direct);
  let offenders = list_concat(unlisted, stale);
  let any = list_empty_not_is(offenders);
  if (any) {
    throw new Error(
      "outside direct gate: undecided " +
        list_join_comma(unlisted) +
        " ; marked harmless but no longer going outside " +
        list_join_comma(stale) +
        text_combine_multiple([
          " - read each undecided one: if it can send, delete, deploy or publish, put it on ",
          fn_name("functions_outside_irreversible_seams"),
          " (the human applies that, then re-pins); if it cannot, add it to ",
          fn_name("functions_outside_direct_harmless"),
          ". Take a stale mark off.",
        ]),
    );
  }
  let r = {
    direct: list_size(direct),
    harmless: list_size(harmless),
  };
  return r;
}
