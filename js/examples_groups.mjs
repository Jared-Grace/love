import { fn_name } from "./fn_name.mjs";
export function examples_groups() {
  "The single ordered source for the curriculum. Groups run SIMPLE → COMPLEX and";
  "are CONTIGUOUS in the reading order, so a group header marks a rung on the";
  let f_name = fn_name("examples_order");
  `complexity climb (not a topic — imports, say, span several rungs). ${f_name}`;
  ("is just these flattened; the menu draws a header before each group's examples.");
  let groups = [
    {
      name: "Single edits",
      examples: [
        "example_atomize_nested_call",
        "example_if_test_set_positive",
        "example_return_argument_set_positive",
        "example_ir_identifier_replace",
        "example_prune_unused_import",
        "example_imports_paths_canonicalize",
        "example_block_add_if_first",
        "example_block_add_else_last",
        "example_wrap_call_in_if",
        "example_if_return_add_selected",
        "example_return_argument_set_selected",
        "example_call_add_after_selected",
        "example_call_add_before_selected",
        "example_declaration_replace_code",
        "example_declaration_delete",
        "example_call_argument_named_set",
      ],
    },
    {
      name: "Guards",
      examples: [
        "example_single_rejects_two",
        "example_slot_set_rejects_statement",
        "example_frozen_app_refused",
        "example_fold_refused_escape",
        "example_fold_refused_gap",
      ],
    },
    {
      name: "Whole-file changes",
      examples: [
        "example_imports_migrate_multi_function",
        "example_auto_imports_all_three",
        "example_imports_property_names_are_not_references",
        "example_imports_shorthand_and_computed_are_references",
        "example_fn_name_reference_strip",
        "example_fold_wrap_index",
        "example_fold_all_two",
        "example_fold_auto_discover",
      ],
    },
    {
      name: "Generate from scratch",
      examples: [
        "example_aea_slot_setter_guard",
        "example_ntp_node_type_predicate",
      ],
    },
    {
      name: "Whole-repo changes",
      examples: [
        "example_rename_across_files",
        "example_prefix_rename_across_files",
        "example_delete_unused_across_files",
        "example_delete_unused_refused",
        "example_copy_adds_file",
        "example_wrap_adds_delegating_file",
        "example_param_new_across_files",
        "example_param_delete_across_files",
      ],
    },
  ];
  return groups;
}
