export function examples_groups() {
  // The single ordered source for the curriculum. Groups run SIMPLE → COMPLEX and
  // are CONTIGUOUS in the reading order, so a group header marks a rung on the
  // complexity climb (not a topic — imports, say, span several rungs). examples_order
  // is just these flattened; the menu draws a header before each group's examples.
  let groups = [
    {
      name: "Single edits",
      examples: [
        "example_atomize_nested_call", // flatten a nested call — simplest transform
        "example_if_test_set_positive", // set an if-condition — a single slot edit
        "example_return_argument_set_positive", // set a return's argument — same setter shape, another node
        "example_ir_identifier_replace", // replace an identifier with an expression, at every site
        "example_prune_unused_import", // remove one unused import — one localized edit
        "example_imports_paths_canonicalize", // rewrite one import to its canonical path
        "example_block_add_if_first", // add a statement at the start of a then-block — a localized insert
        "example_block_add_else_last", // add a statement at the end of an else-block — the sibling insert
        "example_wrap_call_in_if", // select a call, then wrap it in an if — the selector+transform seam
        "example_if_return_add_selected", // the same selector, a different transform — the pair that builds a guard clause
        "example_return_argument_set_selected", // a second selector through the same seam — one that takes no arguments
      ],
    },
    {
      name: "Guards",
      examples: [
        "example_single_rejects_two", // refuse a 2-item list — a simple invariant guard
        "example_slot_set_rejects_statement", // the slot setter guarding its input
        "example_frozen_app_refused", // a guard in the deployment domain
        "example_fold_refused_escape", // refuse to fold when an internal local escapes the block
        "example_fold_refused_gap", // refuse to fold across a gap between the matched statements
      ],
    },
    {
      name: "Whole-file changes",
      examples: [
        "example_imports_migrate_multi_function", // add missing imports across a file
        "example_auto_imports_all_three", // add + remove + canonicalize at once
        "example_imports_property_names_are_not_references", // a property key matching a fn name is NOT a reference — no import
        "example_imports_shorthand_and_computed_are_references", // shorthand + computed keys ARE references — keep the import
        "example_fn_name_reference_strip", // drop a name-only dependency (fn.name -> fn_name("fn")) for web bundling
        "example_fold_wrap_index", // fold hand-written wrap logic into a call to the pure fn
        "example_fold_all_two", // fold every occurrence, not just the first
        "example_fold_auto_discover", // discover and fold the matching fn without naming which
      ],
    },
    {
      name: "Generate from scratch",
      examples: [
        "example_aea_slot_setter_guard", // generate a guard + repair imports
        "example_ntp_node_type_predicate", // generate a whole fn from an empty file — capstone
      ],
    },
    {
      name: "Whole-repo changes",
      examples: [
        "example_rename_across_files", // rename a fn across every file that uses it
        "example_prefix_rename_across_files", // ...and rename a whole name-prefix family at once (same "rename" family)
        "example_delete_unused_across_files", // delete a fn only after proving nothing uses it
        "example_delete_unused_refused", // ...but refuse when a file still uses it (the guard)
        "example_copy_adds_file", // copy a fn to a new name — adds a file
        "example_wrap_adds_delegating_file", // wrap a fn — adds a file that delegates to it
        "example_param_new_across_files", // add a parameter — every caller gets the default
        "example_param_delete_across_files", // delete a parameter — every caller's arg is stripped
      ],
    },
  ];
  return groups;
}
