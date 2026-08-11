import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function functions_gate_run_unwired_exempt() {
  "The gates the whole-repo gate is not expected to list, each named with the reason it is not one of its members.";
  "Named one at a time rather than spotted by shape, because a rule guessing which gate is allowed to sit outside the list would go wrong in the one direction that matters - quietly excusing the next gate somebody wrote and forgot to wire in.";
  let exempt = [
    {
      name: fn_name("qa_gate_run"),
      why: "this is the whole-repo gate itself - it asks the list, so it cannot be in it",
    },
    {
      name: fn_name("app_g_dev_routes_phone_gate_run"),
      why: text_combine_multiple([
        "it opens every screen of the game in a real browser at the size of a phone, so it needs the local server running and a browser to drive - it is slower than everything in the list and it goes red for want of a server rather than for anything wrong with the code. run on its own after touching the game's screens, the same way the ",
        fn_name("app_replace"),
        " end-to-end tests are",
      ]),
    },
  ];
  return exempt;
}
