export function memory_pointer_cases() {
  "Which index lines name a memory file, and which only look like they do. The sweep built on this reads the real index, where every pointer resolves today and should always resolve, so a sweep that finds nothing tells you nothing about whether the reading is right. These lines are written down rather than found, which is what lets a wrong answer show up as a failure instead of as silence.";
  "The four that must come back empty carry the weight. A reader that says yes to everything passes a corpus of pointers alone, and the shapes it would wrongly claim are all here: a double-bracket link, which is the neighbouring check's job, a web address, and a bare file name sitting in prose.";
  let cases = [
    {
      text: "- [Infer vs verify](feedback_inference_vs_verification.md) — infer vs index; retract if wrong",
      targets: ["feedback_inference_vs_verification.md"],
      why: "an ordinary index line, which is the shape nearly every pointer takes",
    },
    {
      text: "- [Accommodate: give price](project_correctness_serves_goals.md#accommodate) — here's the price",
      targets: ["project_correctness_serves_goals.md"],
      why: "an anchored pointer aims at one heading inside an entry, and the file is still what has to exist, so the anchor comes off",
    },
    {
      text: "- [Sermon logs](project_sermon_writing_goal.md) — 1JN3; [[project_sermon_log_heb]]; [[project_sermon_log_1pe]]",
      targets: ["project_sermon_writing_goal.md"],
      why: "a hook can carry double-bracket links beside its pointer, and only the pointer names a file this check is responsible for",
    },
    {
      text: "- [Two apps](project_first_app.md) and also [second](project_second_app.md) — both",
      targets: ["project_first_app.md", "project_second_app.md"],
      why: "one line can carry more than one pointer, and the hub lines in the real index do",
    },
    {
      text: "- [Once](project_repeated_entry.md) — hook\n- [Again](project_repeated_entry.md) — same target twice",
      targets: ["project_repeated_entry.md"],
      why: "a file named twice is one file to check, so the reading is de-duplicated rather than reported twice",
    },
    {
      text: "- [Guard rules](reference_guard_check_tester.md) — [[reference_permission_rule_inert_until_restart]] new rule INERT",
      targets: ["reference_guard_check_tester.md"],
      why: "the same mixed shape again, kept because the real index is mostly hub lines and a reader that mishandles them fails on most of the file",
    },
    {
      text: "See [[project_design_philosophy_map]] and [[feedback_edit_implies_rule]] for the reading order",
      targets: [],
      why: "double-bracket links are not pointers, and claiming them here would report the neighbouring check's findings in the wrong words",
    },
    {
      text: "- [Claude Code docs](https://docs.claude.com/en/docs/claude-code) — the official reference",
      targets: [],
      why: "a link that names a web address names no file on disk, so there is nothing here that can go missing",
    },
    {
      text: "The lesson lives in project_reasoning_first_qa.md, which is worth re-reading",
      targets: [],
      why: "a file name mentioned in prose is not a pointer, and treating it as one would make the index harder to write than it needs to be",
    },
  ];
  return cases;
}
