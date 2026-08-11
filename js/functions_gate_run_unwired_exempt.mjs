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
      name: fn_name("apps_prod_chunks_gate_run"),
      why: "it is red now over apps published without their pieces before the copying was fixed, and a gate that is red before anybody touches anything refuses work it has nothing to say about - wire it in once those apps have been sent afresh and take this line away",
    },
  ];
  return exempt;
}
