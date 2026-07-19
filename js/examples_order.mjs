export function examples_order() {
  // Curriculum order: SIMPLE → COMPLEX (monotonic, no complexity dips) with every
  // PREREQUISITE before what builds on it — a reader going Next → Next meets each
  // concept only after the ones it depends on. Rough complexity climb:
  //   structural rewrite < single slot edit < remove-an-import / one-item invariant
  //   < slot guard < domain guard < add-imports-across-a-file < all-three-at-once
  //   < generate-a-guard + repair-imports < generate-a-whole-fn-from-nothing.
  // Prereq edges honored: if_test (setter working) → slot_set (same setter guarding);
  //   prune + migrate → auto (auto composes remove + add); guards + imports → aea.
  // Files not listed here are appended at the end (a new example still shows up).
  let order = [
    "example_atomize_nested_call", // flatten a nested call — simplest transform
    "example_if_test_set_positive", // set an if-condition — a single slot edit
    "example_prune_unused_import", // remove one unused import — simplest import op
    "example_single_rejects_two", // refuse a 2-item list — a simple invariant guard
    "example_slot_set_rejects_statement", // the slot setter guarding its input (needs if_test)
    "example_frozen_app_refused", // a guard in the deployment domain
    "example_imports_migrate_multi_function", // add missing imports across a file
    "example_auto_imports_all_three", // add + remove + canonicalize at once (needs prune + migrate)
    "example_aea_slot_setter_guard", // generate a guard + repair imports — combines both threads
    "example_ntp_node_type_predicate", // generate a whole fn from an empty file — capstone
  ];
  return order;
}
