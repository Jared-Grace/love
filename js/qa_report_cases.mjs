import { qa_gate_failed_prefix } from "./qa_gate_failed_prefix.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
export function qa_report_cases() {
  "What the run's own report must read back out of what a gate run printed. Every one of these is a shape seen in a real run, and two of them are faults that were live in the repo and reported nothing at the time";
  "This is the one piece of the repo-wide gate with nothing checking it, and it is the piece whose failure is invisible. A gate that breaks says so; a reader of gates that breaks makes the run say LESS while still exiting nonzero, so the output looks ordinary and the missing half is never missed. Both faults found here were found by planting a red on purpose, never by a gate";
  "Pure text in, pure answer out - no history, no frozen copy, no processes - so this runs in milliseconds and cannot go quiet because something in the environment was absent";
  let separator = newline();
  let f_name = fn_name("memory_index_size_gate_run");
  let combined = text_combine_multiple(["=== ", f_name, " ==="]);
  let v = qa_gate_failed_prefix();
  let f_name2 = fn_name("memory_index_size_gate_run");
  let combined2 = text_combine_multiple([
    v,
    f_name2,
    ": memory index size gate: the index is 24062 bytes and may be 24000",
  ]);
  let f_name3 = fn_name("function_imports_gate_run");
  let combined3 = text_combine_multiple(["=== ", f_name3, " ==="]);
  let f_name4 = fn_name("example_command_lambda");
  let f_name5 = fn_name("example_select_apply_named");
  let combined4 = text_combine_multiple([
    "MISSING IMPORT  ",
    f_name4,
    "  -> ",
    f_name5,
  ]);
  let v2 = qa_gate_failed_prefix();
  let f_name6 = fn_name("function_imports_gate_run");
  let combined5 = text_combine_multiple([
    v2,
    f_name6,
    ": imports gate: 1 functions reference an unimported repo function",
  ]);
  let two_reds = list_join(
    [
      combined,
      "memory index size gate: the index is 24062 bytes and may be 24000",
      combined2,
      "",
      combined3,
      combined4,
      "",
      "offenders 1",
      combined5,
    ],
    separator,
  );
  let f_name7 = fn_name("functions_shadowing_gate_run");
  let combined6 = text_combine_multiple(["=== ", f_name7, " ==="]);
  let f_name8 = fn_name("functions_shadowing_gate_run");
  let combined7 = text_combine_multiple([
    "QUIET ON THE SECOND ASK  ",
    f_name8,
    ": it complained while the others were running and had nothing to say when asked on its own",
  ]);
  let quiet_again = list_join([combined6, combined7], separator);
  let f_name9 = fn_name("html_style_literal_gate_run");
  let combined8 = text_combine_multiple(["=== ", f_name9, " ==="]);
  let v3 = qa_gate_failed_prefix();
  let f_name10 = fn_name("html_style_literal_gate_run");
  let f_name11 = fn_name("app_g_day_guide_highlight");
  let f_name12 = fn_name("functions_html_style_literals_migrate");
  let combined9 = text_combine_multiple([
    v3,
    f_name10,
    ': {"list":["',
    f_name11,
    '"],"json":{"hint":"',
    f_name12,
    '"}}',
  ]);
  let colon_inside = list_join([combined8, combined9], separator);
  let f_name13 = fn_name("memory_index_size_gate_run");
  let f_name14 = fn_name("function_imports_gate_run");
  let f_name15 = fn_name("memory_index_size_gate_run");
  let f_name16 = fn_name("function_imports_gate_run");
  let f_name17 = fn_name("example_command_lambda");
  let f_name18 = fn_name("memory_index_size_gate_run");
  let f_name19 = fn_name("function_imports_gate_run");
  let f_name20 = fn_name("html_style_literal_gate_run");
  let f_name21 = fn_name("app_g_day_guide_highlight");
  let cases = [
    {
      label: "every red gate is reported, not only the first",
      output: two_reds,
      names: [f_name13, f_name14],
      sections: 2,
      includes: "",
      excludes: "",
    },
    {
      label: "a count-only complaint still carries the names printed above it",
      output: two_reds,
      names: [f_name15, f_name16],
      sections: 2,
      includes: text_combine_multiple(["MISSING IMPORT  ", f_name17]),
      excludes: "",
    },
    {
      label: "the complaining gate does not name itself as one of the faults",
      output: two_reds,
      names: [f_name18, f_name19],
      sections: 2,
      includes: "",
      excludes: fn_name("function_imports_gate_run"),
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
      names: [f_name20],
      sections: 1,
      includes: text_combine_multiple(['{"list":["', f_name21, '"]']),
      excludes: "",
    },
  ];
  return cases;
}
