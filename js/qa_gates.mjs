import { memory_index_lines_gate_run } from "./memory_index_lines_gate_run.mjs";
import { js_code_literal_key_only_cases_gate_run } from "./js_code_literal_key_only_cases_gate_run.mjs";
import { functions_arity_gate_run } from "./functions_arity_gate_run.mjs";
import { functions_statements_after_return_gate_run } from "./functions_statements_after_return_gate_run.mjs";
import { instructions_notes_gate_run } from "./instructions_notes_gate_run.mjs";
import { claude_md_size_gate_run } from "./claude_md_size_gate_run.mjs";
import { app_shared_imports_gate_run } from "./app_shared_imports_gate_run.mjs";
import { functions_shadowing_function_gate_run } from "./functions_shadowing_function_gate_run.mjs";
import { functions_unreachable_check_gate_run } from "./functions_unreachable_check_gate_run.mjs";
import { literals_frozen_gate_run } from "./literals_frozen_gate_run.mjs";
import { atoms_unexampled_gate_run } from "./atoms_unexampled_gate_run.mjs";
import { functions_shadowing_operator_gate_run } from "./functions_shadowing_operator_gate_run.mjs";
import { js_comment_migratable_cases_gate_run } from "./js_comment_migratable_cases_gate_run.mjs";
import { color_near_miss_gate_run } from "./color_near_miss_gate_run.mjs";
import { functions_selects_unsafe_gate_run } from "./functions_selects_unsafe_gate_run.mjs";
import { examples_comments_none_gate_run } from "./examples_comments_none_gate_run.mjs";
import { examples_registers_gate_run } from "./examples_registers_gate_run.mjs";
import { qa_report_gate_run } from "./qa_report_gate_run.mjs";
import { functions_parallel_marks_gate_run } from "./functions_parallel_marks_gate_run.mjs";
import { functions_duplicate_keys_gate_run } from "./functions_duplicate_keys_gate_run.mjs";
import { examples_data_gate_run } from "./examples_data_gate_run.mjs";
import { markers_gate_run } from "./markers_gate_run.mjs";
import { command_seams_agree_gate_run } from "./command_seams_agree_gate_run.mjs";
import { python_mirrors_assert } from "./python_mirrors_assert.mjs";
import { functions_duplicates_gate_run } from "./functions_duplicates_gate_run.mjs";
import { html_style_literal_gate_run } from "./html_style_literal_gate_run.mjs";
import { js_operator_targets_leaf_gate_run } from "./js_operator_targets_leaf_gate_run.mjs";
import { apps_node_only_gate_run } from "./apps_node_only_gate_run.mjs";
import { js_function_self_call_cases_gate_run } from "./js_function_self_call_cases_gate_run.mjs";
import { functions_self_call_gate_run } from "./functions_self_call_gate_run.mjs";
import { fn_name_literals_gate_run } from "./fn_name_literals_gate_run.mjs";
import { function_top_level_comment_gate_run } from "./function_top_level_comment_gate_run.mjs";
import { memory_symbol_gate_run } from "./memory_symbol_gate_run.mjs";
import { examples_notes_gate_run } from "./examples_notes_gate_run.mjs";
import { claude_md_name_gate_run } from "./claude_md_name_gate_run.mjs";
import { function_open_name_gate_run } from "./function_open_name_gate_run.mjs";
import { memory_fn_reference_tokens_gate_run } from "./memory_fn_reference_tokens_gate_run.mjs";
import { memory_fn_reference_gate_run } from "./memory_fn_reference_gate_run.mjs";
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
import { permission_editor_open_gate_run } from "./permission_editor_open_gate_run.mjs";
import { permission_self_settings_gate_run } from "./permission_self_settings_gate_run.mjs";
import { permission_grants_gate_run } from "./permission_grants_gate_run.mjs";
import { permission_settings_allow_assert } from "./permission_settings_allow_assert.mjs";
import { app_shared_prefixes_invalid_assert } from "./app_shared_prefixes_invalid_assert.mjs";
import { daemons_gate_run } from "./daemons_gate_run.mjs";
import { function_worker_pool_run_try } from "./function_worker_pool_run_try.mjs";
import { function_imports_gate_run } from "./function_imports_gate_run.mjs";
import { functions_shadowing_gate_run } from "./functions_shadowing_gate_run.mjs";
import { functions_unbound_gate_run } from "./functions_unbound_gate_run.mjs";
import { bundle_size_gate_run } from "./bundle_size_gate_run.mjs";
import { ebible_book_divisions_canon_assert } from "./ebible_book_divisions_canon_assert.mjs";
import { examples_orphan_gate_run } from "./examples_orphan_gate_run.mjs";
import { memory_index_size_gate_run } from "./memory_index_size_gate_run.mjs";
import { g_clock_sky_phase_check } from "./g_clock_sky_phase_check.mjs";
import { g_day_sky_phase_check } from "./g_day_sky_phase_check.mjs";
import { app_g_day_fraction_check } from "./app_g_day_fraction_check.mjs";
import { app_g_day_guide_pick_check } from "./app_g_day_guide_pick_check.mjs";
import { app_g_map_pad_check } from "./app_g_map_pad_check.mjs";
import { app_g_day_blocked_check } from "./app_g_day_blocked_check.mjs";
export function qa_gates() {
  let gates = [
    guard_gate_run,
    memory_hook_gate_run,
    memory_pointer_gate_run,
    memory_integrity_gate_run,
    memory_frontmatter_gate_run,
    memory_link_verdict_gate_run,
    memory_link_gate_run,
    memory_fn_reference_tokens_gate_run,
    memory_fn_reference_gate_run,
    memory_symbol_gate_run,
    memory_index_size_gate_run,
    memory_index_lines_gate_run,
    examples_gate_run,
    permission_gate_run,
    permission_editor_open_gate_run,
    function_open_name_gate_run,
    claude_md_name_gate_run,
    permission_reachable_gate_run,
    permission_rule_probe_gate_run,
    permission_rule_file_gate_run,
    permission_self_settings_gate_run,
    permission_grants_gate_run,
    permission_settings_allow_assert,
    app_shared_prefixes_invalid_assert,
    daemons_gate_run,
    python_mirrors_assert,
    function_worker_pool_run_try,
    function_imports_gate_run,
    functions_unbound_gate_run,
    js_function_self_call_cases_gate_run,
    js_comment_migratable_cases_gate_run,
    js_code_literal_key_only_cases_gate_run,
    functions_self_call_gate_run,
    js_operator_targets_leaf_gate_run,
    fn_name_literals_gate_run,
    apps_node_only_gate_run,
    function_top_level_comment_gate_run,
    functions_shadowing_gate_run,
    functions_duplicates_gate_run,
    markers_gate_run,
    command_seams_agree_gate_run,
    bundle_size_gate_run,
    examples_orphan_gate_run,
    examples_notes_gate_run,
    examples_comments_none_gate_run,
    html_style_literal_gate_run,
    ebible_book_divisions_canon_assert,
    examples_data_gate_run,
    functions_duplicate_keys_gate_run,
    g_clock_sky_phase_check,
    g_day_sky_phase_check,
    app_g_day_fraction_check,
    app_g_day_guide_pick_check,
    app_g_map_pad_check,
    app_g_day_blocked_check,
    functions_parallel_marks_gate_run,
    qa_report_gate_run,
    examples_registers_gate_run,
    functions_selects_unsafe_gate_run,
    color_near_miss_gate_run,
    functions_shadowing_operator_gate_run,
    functions_shadowing_function_gate_run,
    atoms_unexampled_gate_run,
    literals_frozen_gate_run,
    functions_unreachable_check_gate_run,
    functions_statements_after_return_gate_run,
    functions_arity_gate_run,
    app_shared_imports_gate_run,
    claude_md_size_gate_run,
    instructions_notes_gate_run,
  ];
  return gates;
}
