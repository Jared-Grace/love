export function examples_order() {
  // Curriculum order — a reader going Next → Next from the top should get an easy
  // learning curve: simplest self-contained transform first, then the guard idea
  // (a positive slot edit, then the same setter REFUSING, then more guards), then
  // the import operations smallest-first building to the all-in-one, then the
  // advanced combinations, then code-generation-from-nothing as the capstone.
  // Files not listed here are appended at the end (a new example still shows up).
  let order = [
    "example_atomize_nested_call", // simplest transform: flatten a nested call
    "example_if_test_set_positive", // simple slot edit: set an if-condition
    "example_slot_set_rejects_statement", // same setter, now guarding its input
    "example_single_rejects_two", // a general invariant guard
    "example_frozen_app_refused", // a guard in the deployment domain
    "example_prune_unused_import", // imports: remove one unused
    "example_imports_migrate_multi_function", // imports: add missing across a file
    "example_auto_imports_all_three", // imports: add + remove + canonicalize at once
    "example_aea_slot_setter_guard", // advanced: generate a guard + repair imports
    "example_ntp_node_type_predicate", // capstone: generate a whole fn from scratch
  ];
  return order;
}
