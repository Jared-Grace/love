import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function examples_notes() {
  "One line for each example saying what it is there to show - why it sits at the rung it sits at, rather than what it does. The reading order and the grouping live next door; this is the reason each entry earns its place.";
  "These were written beside the names they describe, as comments on the same line. Normalizing a file parses it and writes the tree back out, and a comment lives nowhere in a tree, so all thirty-four were deleted in one pass. They are data now because they always were data - curriculum text, not a note to whoever is reading the source.";
  let notes = {
    example_atomize_nested_call: "flatten a nested call — simplest transform",
    example_if_test_set_positive: "set an if-condition — a single slot edit",
    example_return_argument_set_positive:
      "set a return's argument — same setter shape, another node",
    example_ir_identifier_replace:
      "replace an identifier with an expression, at every site",
    example_prune_unused_import:
      "remove one unused import — one localized edit",
    example_imports_paths_canonicalize:
      "rewrite one import to its canonical path",
    example_block_add_if_first:
      "add a statement at the start of a then-block — a localized insert",
    example_block_add_else_last:
      "add a statement at the end of an else-block — the sibling insert",
    example_wrap_call_in_if:
      "select a call, then wrap it in an if — the selector+transform seam",
    example_if_return_add_selected:
      "the same selector, a different transform — the pair that builds a guard clause",
    example_return_argument_set_selected:
      "a second selector through the same seam — one that takes no arguments",
    example_call_add_after_selected:
      "call an existing function beside a selected statement — the call writes its own arguments",
    example_call_add_before_selected:
      "the same gap named from the other neighbour — the sibling verb",
    example_declaration_replace_code:
      "address a line by the name it binds, and change it — the third thing that can happen to a line",
    example_declaration_delete:
      "the same address, the deleting verb — a function that fit the transform shape before the shape had a name",
    example_call_argument_named_set:
      "reach inside a call and change one argument, addressed by the name the callee knows it by",
    example_statement_move_after:
      "two addresses through the seam at once — and the only verb here that changes the order of lines",
    example_statement_last_address:
      "an address that takes no argument — the last line, which no neighbour can name",
    example_statement_after_address:
      "address a line by its neighbour — the first relative address, and the first tool built with no hand editing",
    example_argument_identifier_set:
      "point a generated call's argument at a local — two names, no code, so the command can be approved once",
    example_object_shorthand_add:
      "add one entry to a register — the commonest hand edit left, and the one whose workaround destroyed forty-five entries",
    example_array_text_add:
      "add one word to an ordered register — the pair to it",
    example_return_identifier_add:
      "hand back a local by name — the last piece of writing a whole function from names alone",
    example_prose_address:
      "address a line by the sentence written above it — comments are real nodes here, so they are bookmarks",
    example_wrap_for_of:
      "wrap one line in a loop over a list — the first example to name its address and its verb separately",
    example_unwrap_for_of:
      "the previous example undone, character for character — which is how the inverse is checked",
    example_move_refused_binding:
      "the guard inside the move, asked on its own — reordering is the edit that breaks a function without changing a line",
    example_single_rejects_two:
      "refuse a 2-item list — a simple invariant guard",
    example_slot_set_rejects_statement: "the slot setter guarding its input",
    example_frozen_app_refused: "a guard in the deployment domain",
    example_fold_refused_escape:
      "refuse to fold when an internal local escapes the block",
    example_fold_refused_gap:
      "refuse to fold across a gap between the matched statements",
    example_imports_migrate_multi_function: "add missing imports across a file",
    example_auto_imports_all_three: "add + remove + canonicalize at once",
    example_imports_property_names_are_not_references:
      "a property key matching a fn name is NOT a reference — no import",
    example_imports_shorthand_and_computed_are_references:
      "shorthand + computed keys ARE references — keep the import",
    example_fn_name_reference_strip: text_combine_multiple([
      "drop a name-only dependency (fn.name -> ",
      fn_name.name,
      '("fn")) for web bundling',
    ]),
    example_fold_wrap_index:
      "fold hand-written wrap logic into a call to the pure fn",
    example_fold_all_two: "fold every occurrence, not just the first",
    example_fold_auto_discover:
      "discover and fold the matching fn without naming which",
    example_aea_slot_setter_guard: "generate a guard + repair imports",
    example_ntp_node_type_predicate:
      "generate a whole fn from an empty file — capstone",
    example_rename_across_files: "rename a fn across every file that uses it",
    example_prefix_rename_across_files:
      '...and rename a whole name-prefix family at once (same "rename" family)',
    example_delete_unused_across_files:
      "delete a fn only after proving nothing uses it",
    example_delete_unused_refused:
      "...but refuse when a file still uses it (the guard)",
    example_copy_adds_file: "copy a fn to a new name — adds a file",
    example_wrap_adds_delegating_file:
      "wrap a fn — adds a file that delegates to it",
    example_param_new_across_files:
      "add a parameter — every caller gets the default",
    example_param_delete_across_files:
      "delete a parameter — every caller's arg is stripped",
    example_nested_record_add:
      "reach a list two names deep - the first address past the top of a function",
    example_nested_record_remove: "the undo - a register is not only added to",
    example_statement_duplicate:
      "copy a line below itself — the third thing that can happen to an addressed line and the only one that has to rename what it binds",
    example_block_call_add:
      "write a call from a function name alone — the callee's own parameters become the arguments and a clashing one is renamed rather than silently repointed",
    example_type_find_address:
      "address a line by its node type — the address left for a line that calls nothing and binds nothing — and the one that refuses as soon as a second node of that type appears",
    example_call_name_includes_address:
      "address a call by a fragment of its name — shorter than the whole name and exact only while one call matches",
    example_function_node_named_address:
      "name an inner function and the whole of it answers — the address a let-binding finder looks straight past",
    example_array_identifier_add:
      "add a name to a register of functions — the twin that writes a word looks identical afterwards and runs nothing",
    example_expand_call_inline:
      "put a called function's body where the call was — the only verb that reads a second function to do its work",
    example_call_callee_set:
      "point one call at a different function — the commonest hand edit a verb could have made, chosen by reading the history rather than guessing",
    example_array_text_remove:
      "take a word back out of an ordered register — the undoing that moving an entry needs since adding can only append",
    example_object_shorthand_remove:
      "take an entry back out of a register — the other end of a unit's life and the last one still done by hand",
    example_array_text_add_after:
      "put a word at a chosen place rather than at the end — the commonest hand edit left until this",
    example_array_text_add_before:
      "the sibling for the head of a list — nothing sits above the first entry to name",
    example_nested_record_add_after:
      "the same chosen place two names deep — the shape every curriculum group is",
    example_nested_record_add_before:
      "the head of a list two names deep — where a new simplest example keeps arriving",
    example_selects_functionize_local:
      "extract a span into a function of its own - the verb that needs two addresses at once",
  };
  return notes;
}
