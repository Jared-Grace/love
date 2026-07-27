import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
export function qa_report_cases() {
  "What the run's own report must read back out of what a gate run printed. Every one of these is a shape seen in a real run, and two of them are faults that were live in the repo and reported nothing at the time";
  "This is the one piece of the repo-wide gate with nothing checking it, and it is the piece whose failure is invisible. A gate that breaks says so; a reader of gates that breaks makes the run say LESS while still exiting nonzero, so the output looks ordinary and the missing half is never missed. Both faults found here were found by planting a red on purpose, never by a gate";
  "Pure text in, pure answer out - no history, no frozen copy, no processes - so this runs in milliseconds and cannot go quiet because something in the environment was absent";
  let separator = newline();
  let two_reds = list_join(
    [
      "=== memory_index_size_gate_run ===",
      "memory index size gate: the index is 24062 bytes and may be 24000",
      "GATE FAILED  memory_index_size_gate_run: memory index size gate: the index is 24062 bytes and may be 24000",
      "",
      "=== function_imports_gate_run ===",
      "MISSING IMPORT  example_command_lambda  -> example_select_apply_named",
      "",
      "offenders 1",
      "GATE FAILED  function_imports_gate_run: imports gate: 1 functions reference an unimported repo function",
    ],
    separator,
  );
  let quiet_again = list_join(
    [
      "=== functions_shadowing_gate_run ===",
      "QUIET ON THE SECOND ASK  functions_shadowing_gate_run: it complained while the others were running and had nothing to say when asked on its own",
    ],
    separator,
  );
  let colon_inside = list_join(
    [
      "=== html_style_literal_gate_run ===",
      'GATE FAILED  html_style_literal_gate_run: {"list":["app_g_day_guide_highlight"],"json":{"hint":"functions_html_style_literals_migrate"}}',
    ],
    separator,
  );
  let cases = [
    {
      label: "every red gate is reported, not only the first",
      output: two_reds,
      names: ["memory_index_size_gate_run", "function_imports_gate_run"],
      sections: 2,
      includes: "",
      excludes: "",
    },
    {
      label: "a count-only complaint still carries the names printed above it",
      output: two_reds,
      names: ["memory_index_size_gate_run", "function_imports_gate_run"],
      sections: 2,
      includes: "MISSING IMPORT  example_command_lambda",
      excludes: "",
    },
    {
      label: "the complaining gate does not name itself as one of the faults",
      output: two_reds,
      names: ["memory_index_size_gate_run", "function_imports_gate_run"],
      sections: 2,
      includes: "",
      excludes: "function_imports_gate_run",
    },
    {
      label: "a gate that was quiet the second time is not a failure",
      output: quiet_again,
      names: [],
      sections: 0,
      includes: "",
      excludes: "",
    },
    {
      label: "a colon inside the complaint is kept, not cut at the first one",
      output: colon_inside,
      names: ["html_style_literal_gate_run"],
      sections: 1,
      includes: '{"list":["app_g_day_guide_highlight"]',
      excludes: "",
    },
  ];
  return cases;
}
