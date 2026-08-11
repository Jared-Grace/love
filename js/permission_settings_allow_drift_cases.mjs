import { text_frozen } from "./text_frozen.mjs";
export function permission_settings_allow_drift_cases() {
  "Written-out differences between the allow rules on disk and the ones the JS list generates, pinning which verdict each one earns";
  "This decides whether a gate repairs itself or stops and asks a human, so a reader that drifted toward repairing everything would hand out grants nobody gave, and one that drifted toward refusing everything would take the standing approvals off renaming. The cases fail in both directions on purpose.";
  "The names are frozen text: they are ordinary repo names, and the pass that turns a mentioned name into a reference would rewrite them into something the case no longer tests.";
  let t = text_frozen("Bash(node scripts/ai.mjs old_name:*)");
  let t2 = text_frozen("old_name");
  let t3 = text_frozen("Bash(node scripts/ai.mjs after_name:*)");
  let t4 = text_frozen("Bash(node scripts/ai.mjs before_name:*)");
  let t5 = text_frozen("after_name");
  let t6 = text_frozen("before_name");
  let t7 = text_frozen("Bash(node scripts/ai.mjs b_one:*)");
  let t8 = text_frozen("Bash(node scripts/ai.mjs b_two:*)");
  let t9 = text_frozen("Bash(node scripts/ai.mjs a_one:*)");
  let t10 = text_frozen("Bash(node scripts/ai.mjs a_two:*)");
  let t11 = text_frozen("b_one");
  let t12 = text_frozen("b_two");
  let t13 = text_frozen("a_one");
  let t14 = text_frozen("a_two");
  let t15 = text_frozen("Bash(node scripts/ai.mjs new_name:*)");
  let t16 = text_frozen("new_name");
  let t18 = text_frozen("Bash(node scripts/ai.mjs extra_name:*)");
  let t21 = text_frozen("extra_name");
  let t23 = text_frozen("Bash(ls:*)");
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
      extra: [t],
      arrived: [],
      departed: [t2],
      verdict: text_frozen("shrink"),
    },
    {
      name: "one name left and one arrived, which is a grant following its function",
      missing: [t3],
      extra: [t4],
      arrived: [t5],
      departed: [t6],
      verdict: text_frozen("rename"),
    },
    {
      name: "a whole prefix migration, every arrival paid for by a departure",
      missing: [t7, t8],
      extra: [t9, t10],
      arrived: [t11, t12],
      departed: [t13, t14],
      verdict: text_frozen("rename"),
    },
    {
      name: "a name arrived and nothing left, so somebody granted something",
      missing: [t15],
      extra: [],
      arrived: [t16],
      departed: [],
      verdict: text_frozen("addition"),
    },
    {
      name: "two arrived against one departure, so a rename is being used to carry an extra grant in",
      missing: [t3, t18],
      extra: [t4],
      arrived: [t5, t21],
      departed: [t6],
      verdict: text_frozen("addition"),
    },
    {
      name: "a rule would be added that names no dispatcher function, so no name can pay for it",
      missing: [t23],
      extra: [],
      arrived: [],
      departed: [],
      verdict: text_frozen("addition"),
    },
    {
      name: "a hand-written rule departs, which only narrows and needs no name",
      missing: [],
      extra: [t23],
      arrived: [],
      departed: [],
      verdict: text_frozen("shrink"),
    },
  ];
  return cases;
}
