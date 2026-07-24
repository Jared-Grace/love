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
      ],
    },
    {
      name: "Guards",
      examples: [
        "example_single_rejects_two", // refuse a 2-item list — a simple invariant guard
        "example_slot_set_rejects_statement", // the slot setter guarding its input
        "example_frozen_app_refused", // a guard in the deployment domain
      ],
    },
    {
      name: "Whole-file changes",
      examples: [
        "example_imports_migrate_multi_function", // add missing imports across a file
        "example_auto_imports_all_three", // add + remove + canonicalize at once
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
        "example_delete_unused_across_files", // delete a fn only after proving nothing uses it
      ],
    },
  ];
  return groups;
}
