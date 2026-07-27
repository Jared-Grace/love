import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { memory_index_size_gate_run } from "./memory_index_size_gate_run.mjs";
import { function_imports_gate_run } from "./function_imports_gate_run.mjs";
import { example_command_lambda } from "./example_command_lambda.mjs";
import { example_select_apply_named } from "./example_select_apply_named.mjs";
import { functions_shadowing_gate_run } from "./functions_shadowing_gate_run.mjs";
import { html_style_literal_gate_run } from "./html_style_literal_gate_run.mjs";
import { app_g_day_guide_highlight } from "./app_g_day_guide_highlight.mjs";
import { functions_html_style_literals_migrate } from "./functions_html_style_literals_migrate.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
export function qa_report_cases() {
  "What the run's own report must read back out of what a gate run printed. Every one of these is a shape seen in a real run, and two of them are faults that were live in the repo and reported nothing at the time";
  "This is the one piece of the repo-wide gate with nothing checking it, and it is the piece whose failure is invisible. A gate that breaks says so; a reader of gates that breaks makes the run say LESS while still exiting nonzero, so the output looks ordinary and the missing half is never missed. Both faults found here were found by planting a red on purpose, never by a gate";
  "Pure text in, pure answer out - no history, no frozen copy, no processes - so this runs in milliseconds and cannot go quiet because something in the environment was absent";
  let separator = newline();
  let two_reds = list_join(
    [
      text_combine_multiple(["=== ", memory_index_size_gate_run.name, " ==="]),
      "memory index size gate: the index is 24062 bytes and may be 24000",
      text_combine_multiple([
        "GATE FAILED  ",
        memory_index_size_gate_run.name,
        ": memory index size gate: the index is 24062 bytes and may be 24000",
      ]),
      "",
      text_combine_multiple(["=== ", function_imports_gate_run.name, " ==="]),
      text_combine_multiple([
        "MISSING IMPORT  ",
        example_command_lambda.name,
        "  -> ",
        example_select_apply_named.name,
      ]),
      "",
      "offenders 1",
      text_combine_multiple([
        "GATE FAILED  ",
        function_imports_gate_run.name,
        ": imports gate: 1 functions reference an unimported repo function",
      ]),
    ],
    separator,
  );
  let quiet_again = list_join(
    [
      text_combine_multiple([
        "=== ",
        functions_shadowing_gate_run.name,
        " ===",
      ]),
      text_combine_multiple([
        "QUIET ON THE SECOND ASK  ",
        functions_shadowing_gate_run.name,
        ": it complained while the others were running and had nothing to say when asked on its own",
      ]),
    ],
    separator,
  );
  let colon_inside = list_join(
    [
      text_combine_multiple(["=== ", html_style_literal_gate_run.name, " ==="]),
      text_combine_multiple([
        "GATE FAILED  ",
        html_style_literal_gate_run.name,
        ': {"list":["',
        app_g_day_guide_highlight.name,
        '"],"json":{"hint":"',
        functions_html_style_literals_migrate.name,
        '"}}',
      ]),
    ],
    separator,
  );
  let cases = [
    {
      label: "every red gate is reported, not only the first",
      output: two_reds,
      names: [memory_index_size_gate_run.name, function_imports_gate_run.name],
      sections: 2,
      includes: "",
      excludes: "",
    },
    {
      label: "a count-only complaint still carries the names printed above it",
      output: two_reds,
      names: [memory_index_size_gate_run.name, function_imports_gate_run.name],
      sections: 2,
      includes: text_combine_multiple([
        "MISSING IMPORT  ",
        example_command_lambda.name,
      ]),
      excludes: "",
    },
    {
      label: "the complaining gate does not name itself as one of the faults",
      output: two_reds,
      names: [memory_index_size_gate_run.name, function_imports_gate_run.name],
      sections: 2,
      includes: "",
      excludes: function_imports_gate_run.name,
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
      names: [html_style_literal_gate_run.name],
      sections: 1,
      includes: text_combine_multiple([
        '{"list":["',
        app_g_day_guide_highlight.name,
        '"]',
      ]),
      excludes: "",
    },
  ];
  return cases;
}
