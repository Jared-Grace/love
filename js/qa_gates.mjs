import { function_open_name_gate_run } from "./function_open_name_gate_run.mjs";
import { memory_link_verdict_gate_run } from "./memory_link_verdict_gate_run.mjs";
import { memory_link_gate_run } from "./memory_link_gate_run.mjs";
import { memory_frontmatter_gate_run } from "./memory_frontmatter_gate_run.mjs";
import { permission_rule_file_gate_run } from "./permission_rule_file_gate_run.mjs";
import { permission_rule_probe_gate_run } from "./permission_rule_probe_gate_run.mjs";
import { memory_hook_gate_run } from "./memory_hook_gate_run.mjs";
import { memory_pointer_gate_run } from "./memory_pointer_gate_run.mjs";
import { memory_integrity_gate_run } from "./memory_integrity_gate_run.mjs";
import { permission_reachable_gate_run } from "./permission_reachable_gate_run.mjs";
import { guard_gate_run } from "./guard_gate_run.mjs";
import { examples_gate_run } from "./examples_gate_run.mjs";
import { permission_gate_run } from "./permission_gate_run.mjs";
import { permission_open_suffix_gate_run } from "./permission_open_suffix_gate_run.mjs";
import { permission_self_settings_gate_run } from "./permission_self_settings_gate_run.mjs";
import { app_shared_prefixes_invalid_assert } from "./app_shared_prefixes_invalid_assert.mjs";
import { daemons_gate_run } from "./daemons_gate_run.mjs";
import { dispatcher_scripts_python_assert } from "./dispatcher_scripts_python_assert.mjs";
import { function_worker_pool_run_try } from "./function_worker_pool_run_try.mjs";
import { function_imports_gate_run } from "./function_imports_gate_run.mjs";
import { bundle_size_gate_run } from "./bundle_size_gate_run.mjs";
import { ebible_book_divisions_canon_assert } from "./ebible_book_divisions_canon_assert.mjs";
import { examples_orphan_gate_run } from "./examples_orphan_gate_run.mjs";
export function qa_gates() {
  let gates = [
    guard_gate_run,
    memory_hook_gate_run,
    memory_pointer_gate_run,
    memory_integrity_gate_run,
    memory_frontmatter_gate_run,
    memory_link_verdict_gate_run,
    memory_link_gate_run,
    examples_gate_run,
    permission_gate_run,
    permission_open_suffix_gate_run,
    function_open_name_gate_run,
    permission_reachable_gate_run,
    permission_rule_probe_gate_run,
    permission_rule_file_gate_run,
    permission_self_settings_gate_run,
    app_shared_prefixes_invalid_assert,
    daemons_gate_run,
    dispatcher_scripts_python_assert,
    function_worker_pool_run_try,
    function_imports_gate_run,
    bundle_size_gate_run,
    examples_orphan_gate_run,
    ebible_book_divisions_canon_assert,
  ];
  return gates;
}
