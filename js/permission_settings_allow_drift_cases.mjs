import { text_frozen } from "./text_frozen.mjs";
export function permission_settings_allow_drift_cases() {
  "Written-out differences between the allow rules on disk and the ones the JS list generates, pinning which verdict each one earns";
  "This decides whether a gate repairs itself or stops and asks a human, so a reader that drifted toward repairing everything would hand out grants nobody gave, and one that drifted toward refusing everything would take the standing approvals off renaming. The cases fail in both directions on purpose.";
  "The names are frozen text: they are ordinary repo names, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let cases = [
    {
      name: "nothing differs at all",
      missing: [],
      extra: [],
      arrived: [],
      departed: [],
      verdict: text_frozen("clean"),
    },
    {
      name: "a grant was taken away and none added, so authority only narrows",
      missing: [],
      extra: [text_frozen("Bash(node scripts/ai.mjs old_name:*)")],
      arrived: [],
      departed: [text_frozen("old_name")],
      verdict: text_frozen("shrink"),
    },
    {
      name: "one name left and one arrived, which is a grant following its function",
      missing: [text_frozen("Bash(node scripts/ai.mjs after_name:*)")],
      extra: [text_frozen("Bash(node scripts/ai.mjs before_name:*)")],
      arrived: [text_frozen("after_name")],
      departed: [text_frozen("before_name")],
      verdict: text_frozen("rename"),
    },
    {
      name: "a whole prefix migration, every arrival paid for by a departure",
      missing: [
        text_frozen("Bash(node scripts/ai.mjs b_one:*)"),
        text_frozen("Bash(node scripts/ai.mjs b_two:*)"),
      ],
      extra: [
        text_frozen("Bash(node scripts/ai.mjs a_one:*)"),
        text_frozen("Bash(node scripts/ai.mjs a_two:*)"),
      ],
      arrived: [text_frozen("b_one"), text_frozen("b_two")],
      departed: [text_frozen("a_one"), text_frozen("a_two")],
      verdict: text_frozen("rename"),
    },
    {
      name: "a name arrived and nothing left, so somebody granted something",
      missing: [text_frozen("Bash(node scripts/ai.mjs new_name:*)")],
      extra: [],
      arrived: [text_frozen("new_name")],
      departed: [],
      verdict: text_frozen("addition"),
    },
    {
      name: "two arrived against one departure, so a rename is being used to carry an extra grant in",
      missing: [
        text_frozen("Bash(node scripts/ai.mjs after_name:*)"),
        text_frozen("Bash(node scripts/ai.mjs extra_name:*)"),
      ],
      extra: [text_frozen("Bash(node scripts/ai.mjs before_name:*)")],
      arrived: [text_frozen("after_name"), text_frozen("extra_name")],
      departed: [text_frozen("before_name")],
      verdict: text_frozen("addition"),
    },
    {
      name: "a rule would be added that names no dispatcher function, so no name can pay for it",
      missing: [text_frozen("Bash(ls:*)")],
      extra: [],
      arrived: [],
      departed: [],
      verdict: text_frozen("addition"),
    },
    {
      name: "a hand-written rule departs, which only narrows and needs no name",
      missing: [],
      extra: [text_frozen("Bash(ls:*)")],
      arrived: [],
      departed: [],
      verdict: text_frozen("shrink"),
    },
  ];
  return cases;
}
