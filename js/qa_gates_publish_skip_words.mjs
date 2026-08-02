import { fn_name } from "./fn_name.mjs";
export function qa_gates_publish_skip_words() {
  "the words that mark a gate as having nothing to say about a bundle - a gate whose name holds any of them is watching a file that never reaches a browser: my notes, the bash guard's rules, the examples corpus, the repo's own instructions, the state of this machine, the command line, or a fixed fixture that tests the transform tooling rather than an app";
  "named by word rather than by listing the gates themselves, so that a gate added later is INCLUDED unless somebody names it out. a publish gate set that had to be added to would silently stop watching each new thing, and the failure would be a page shipped broken rather than a red gate";
  let words = [
    "memory_",
    "permission_",
    "guard_",
    "examples_",
    "claude_md_",
    "daemons_",
    "processes_",
    "dispatcher_",
    "_cases_gate_run",
    fn_name("cases_gate_run_generic"),
    "command_seams",
    fn_name("python_mirrors"),
    "function_open_name",
    "instructions_notes",
    fn_name("atoms_unexampled"),
    "qa_report",
    "worker_pool",
    "file_stamps_copied",
    "names_in_text",
    "parallel_marks",
    fn_name("markers_gate_run"),
  ];
  return words;
}
