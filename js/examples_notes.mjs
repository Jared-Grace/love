import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function examples_notes() {
  "One line for each example saying what it is there to show - why it sits at the rung it sits at, rather than what it does. The reading order and the grouping live next door; this is the reason each entry earns its place.";
  "These were written beside the names they describe, as comments on the same line. Normalizing a file parses it and writes the tree back out, and a comment lives nowhere in a tree, so all thirty-four were deleted in one pass. They are data now because they always were data - curriculum text, not a note to whoever is reading the source.";
  let f_name = fn_name("fn_name");
  let f_name2 = fn_name("fn_name");
  let notes = {
    example_atomize_nested_call: "flatten a nested call — simplest transform",
    example_atomize_loop_header_left:
      "the one place the same flattening is not the same code — a loop header, asked again every time round",
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
    example_functionize_refused_outer_assign:
      "the second guard inside the cut — a run that moves a mark bound above it cannot leave, and asking only what the run brings into being never sees that",
    example_single_rejects_two:
      "refuse a 2-item list — a simple invariant guard",
    example_slot_set_rejects_statement: "the slot setter guarding its input",
    example_frozen_app_refused: "a guard in the deployment domain",
    example_fold_refused_escape:
      "refuse to fold when an internal local escapes the block",
    example_fold_refused_gap:
      "refuse to fold across a gap between the matched statements",
    example_no_function_named_refused:
      "the guard on the seam every command passes through — refusing before anything is written down",
    example_imports_migrate_multi_function: "add missing imports across a file",
    example_auto_imports_all_three: "add + remove + canonicalize at once",
    example_imports_property_names_are_not_references:
      "a property key matching a fn name is NOT a reference — no import",
    example_imports_shorthand_and_computed_are_references:
      "shorthand + computed keys ARE references — keep the import",
    example_fn_name_reference_strip: text_combine_multiple([
      "drop a name-only dependency (fn.name -> ",
      f_name,
      '("fn")) for web bundling',
    ]),
    example_prose_name_spelled_not_imported: text_combine_multiple([
      "a function named in a docstring is spelled with ",
      f_name2,
      " rather than imported to be asked its name, so prose adds no road",
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
    example_rename_refuses_a_taken_name:
      "the same verb aimed at a name something else already answers to - the move at the end writes one file over another, so a rename onto a taken name destroys a function rather than sharing a word",
    example_prefix_rename_refuses_a_taken_name:
      "the family verb stopped by one member having nowhere free to land - a migration that gives up part way leaves the family split across two prefixes, which is worse than not starting",
    example_prefix_rename_across_files:
      '...and rename a whole name-prefix family at once (same "rename" family)',
    example_delete_unused_across_files:
      "delete a fn only after proving nothing uses it",
    example_delete_unused_refused:
      "...but refuse when a file still uses it (the guard)",
    example_copy_adds_file: "copy a fn to a new name — adds a file",
    example_copy_refuses_a_taken_name:
      "the same verb aimed at a name that already has a file - writing a file that is already there replaces it, so the copy would wear a name whose own function it had just destroyed",
    example_wrap_adds_delegating_file:
      "wrap a fn — adds a file that delegates to it",
    example_wrap_refuses_a_taken_name:
      "the same verb given a name that already has a file - the wrapper has nowhere to be written that is not already somebody's home",
    example_param_new_across_files:
      "add a parameter — every caller gets the default",
    example_param_new_refuses_an_unknown_function:
      "the same verb aimed at a name nothing answers to - every part of the work matches nothing, so without a refusal it succeeds silently and the typo is found much later",
    example_param_delete_across_files:
      "delete a parameter — every caller's arg is stripped",
    example_param_delete_refuses_a_missing_name:
      "the same verb given a name the function never binds - it used to take the LAST parameter instead, because not-found came back as a position of minus one",
    example_params_delete_refuses_before_any:
      "the list-taking verb given one good name and one bad one - refusing has to mean the good one never moved either",
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
    example_shadowing_rename_shorthand:
      "why ending a hiding keeps the key when a record names its value in shorthand",
    example_span_move_after:
      "three addresses through the same seam - the count of names is the count of nodes",
    example_argument_getter_set:
      "the same argument set through the name that holds its value rather than spelled out",
    example_property_getter_set:
      "the same routing one level in - a setting held inside a record",
    example_call_named_index_address:
      "the address for one of several calls to the same name",
    example_statement_call_named_index:
      "the same numbered address at the line rather than the call",
    example_statement_wrap_guard:
      "a pairing so close that running the halves apart leaves a state nobody wants",
    example_block_prose_add:
      "the step that used to force a hand edit at the end of an otherwise command-only path",
    example_declaration_call_set:
      "the line a constant sits on when it sits in no call for the other verb to reach",
    example_object_text_add:
      "adding one labelled sentence without touching the entries beside it",
    example_block_local_number_add: "the line a tally opens with",
    example_block_local_text_add: "binding a name to one written word",
    example_block_local_record_add: "opening an empty record to gather into",
    example_block_local_list_add:
      "opening an empty list the register verbs can then fill",
    example_array_identifier_remove:
      "the missing half that left the list of gates able only to grow",
    example_array_identifier_move:
      "reordering a register of functions without it ever being short an entry",
    example_array_identifier_add_after:
      "naming the neighbour rather than counting to it",
    example_array_text_move:
      "the same move on the word side sharing the moving itself",
    example_array_text_call_set:
      "the third thing a register entry can be made of",
    example_argument_call_set:
      "the commonest safe repair in the repo taken off the path that always prompts",
    example_argument_property_set:
      "one field of a record in scope which is the shape a loop needs most",
    example_object_field_add:
      "carrying one more field of a record through into a new one",
    example_call_index_argument_address:
      "reaching a record written straight into a call so that no name addresses it",
    example_functionize_adds_file:
      "extracting a span into a function that gets its own file",
    example_functionize_refuses_a_taken_name:
      "the same extraction into a folder where that name is already somebody's file - publishing writes the file, so without the check the extraction succeeds by deleting a function nobody named",
    example_argument_text_set:
      "point one argument of a call at a written word - the shape the rest of the setter family could not reach",
    example_prose_add_after_selected:
      "explain one step beside the step - an account anywhere but the top of a block",
    example_prose_add_before_selected:
      "the same account written above the line it is about",
    example_arguments_same_names_set:
      "finish a generated call in one command - the loop that ran after every one of them",
    example_shadowing_rename_in:
      "naming the holder supplies the one judgment the plain shadowing rename refuses to make",
    example_shadowing_assign:
      "the other way to end a hiding — write the outer binding instead of renaming the inner one, for when the hiding was itself the bug",
    example_let_add_module_binding:
      "the same hiding seen from the writing end — a name bound at the top of the file is bound, so no let is added over the line that fills it",
    example_builtin_calls_rewrite:
      "the operator pass one step further out - a method after a dot is the language saying what the repo says with a name",
    example_functionize_inside_a_loop:
      "the same cut addressed by the line a word is really written on - on a function whose size is all inside a loop, climbing to the top of the body first can only ever move the loop",
    example_functionize_loop_name_stays_put:
      "what a cut really hands back - only the names the span binds at its own level escape it, and a loop head opened inside it binds none of them, however alike the word below looks",
    example_function_lift_out_of_closure:
      "the third shape a long function comes in, and the one a span cannot reach at all - to a span a whole closure is one statement, so what the closure reached out for has to become what it receives",
    example_param_rename_carries_plain_marker:
      "moving every mention of a parameter is not the whole rename - the marker written out beside them names it too, and that one decides whether the function may be auto-approved",
    example_param_rename_refuses_a_local:
      "the refusal is what the command is for - a rename that quietly moved a local instead would come back reading exactly like one that found the parameter",
    example_snapshot_keeps_a_copy:
      "the first transform whose subject is not source but what is already out on the internet - and the copy has to be pointed at itself, or the next build writes over the very thing that was kept",
    example_snapshot_refuses_a_taken_label:
      "the one thing on this climb that cannot be made again - every other transform can be run a second time, so this is where refusing rather than overwriting is the whole answer",
    example_snapshot_refuses_a_split_build:
      "a refusal about what the copy could not follow rather than about what it was asked for - the failure it prevents is a page that loads and shows something else",
  };
  return notes;
}
