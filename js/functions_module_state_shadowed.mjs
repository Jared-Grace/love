import { js_module_state_shadowed } from "./js_module_state_shadowed.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_module_state_shadowed() {
  "Every file whose own top-level state is hidden by a binding inside one of its functions.";
  "This is the sharp corner of hiding, not another shade of it. A variable at the top of a file is there because more than one call has to see it, and a cache is nearly always why. So a function that binds the same word again fills its own copy, throws the copy away at the closing brace, and every line reading the shared one still gets whatever it was started with - usually null, forever.";
  "The gate on hiding in general ratchets against a baseline of what the repo already carried, so a member of this set can sit inside that baseline and never be looked at again. This asks for the subset separately because the general answer is a tidiness complaint and this one is a function that does not work.";
  "The step that adds the word let wrote some of these itself: it could not see a top-level binding, so it declared a fresh one over an assignment meant for the shared name. That was fixed 2026-08-03, which stops the set growing and leaves what had already landed standing.";
  "A file the parser cannot read is passed over. That is a different complaint with a gate of its own, and the sweep below is what passes over it, counting what it skipped out loud so a run that read nothing cannot pass for a clean repo.";
  let offenders = await functions_ast_offenders_generic(
    js_module_state_shadowed,
    "hidden",
  );
  return offenders;
}
