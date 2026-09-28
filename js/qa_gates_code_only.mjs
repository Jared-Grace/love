import { fn_name } from "./fn_name.mjs";
export function qa_gates_code_only() {
  "The gates whose finding can never change what a person using an app sees or does - they judge how the code is written, not what it does - and so do not hold an app back from the folder people are sent.";
  "★ WHAT HOLDS AN APP BACK IS THE PERSON'S EXPERIENCE. The human, 2026-09-28: what matters is user experience, not refactors that have logical equivalence. A duplicate, a shadowed name, a statement nothing reaches, an oversize body, a style written out instead of through its helper - fixing any of these leaves the app doing exactly what it did, so waiting on them delays the people and buys them nothing.";
  "A GATE NOT NAMED HERE STILL HOLDS AN APP BACK. Being left off is the safe default, so a new gate blocks until somebody has judged it; the mistake this list can make is being too short, never letting a broken app through.";
  ("REJECTED, and why, so the next reader does not add them unexamined: ",
    fn_name("functions_arity_gate_run"),
    " - a call handed too few arguments hands the rest in as nothing, which a person can meet as a wrong screen. ",
    fn_name("functions_calls_walk_unwaited_gate_run"),
    " - a promise nobody waits for can finish after the screen it was for is gone. ",
    fn_name("functions_regions_blanked_over_wait_gate_run"),
    " - blanking across a wait is something a person watches. ",
    fn_name("color_palette_outside_gate_run"),
    " - a colour is seen. ",
    fn_name("bundle_size_gate_run"),
    " - size is load time. ",
    fn_name("functions_duplicate_elements_gate_run"),
    " and ",
    fn_name("functions_parameters_gate_run"),
    " - not judged yet, so they stay blocking.");
  (fn_name("functions_cross_app_imports_gate_run"),
    " is here because what a stray import costs a person is download size, and ",
    fn_name("bundle_size_gate_run"),
    " already holds an app back for that. ",
    fn_name("public_chunks_orphaned_gate_run"),
    " is here because an orphaned piece is one no page asks for, so nobody ever receives it.");
  let names = [
    fn_name("functions_fold_gate_run"),
    fn_name("functions_head_duplicates_gate_run"),
    fn_name("functions_inside_duplicates_gate_run"),
    fn_name("functions_tail_duplicates_gate_run"),
    fn_name("literal_duplicates_gate_run"),
    fn_name("functions_locals_unread_gate_run"),
    fn_name("functions_parallel_marks_gate_run"),
    fn_name("functions_prose_silent_oversize_gate_run"),
    fn_name("functions_work_size_gate_run"),
    fn_name("functions_shadowing_gate_run"),
    fn_name("functions_shadowing_function_gate_run"),
    fn_name("functions_unreachable_statements_gate_run"),
    fn_name("functions_statements_after_return_gate_run"),
    fn_name("functions_granted_silent_gate_run"),
    fn_name("functions_cross_app_imports_gate_run"),
    fn_name("public_chunks_orphaned_gate_run"),
    fn_name("html_style_literal_gate_run"),
  ];
  return names;
}
