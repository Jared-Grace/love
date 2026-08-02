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
      name: fn_name("qa_commit_gate_run"),
      why: "asks the whole-repo gate about one commit rather than about the folder, so it stands above the list for the same reason",
    },
    {
      name: fn_name("firebase_function_folders_orphaned_gate_run"),
      why: "asks the network rather than the folder, and an unreachable bucket leaves it only two answers, both bad in the list - failing reddens every run for anybody offline, and reporting nothing is a check that passes hardest exactly when it can see least. Run on purpose until somebody decides which",
    },
  ];
  return exempt;
}
