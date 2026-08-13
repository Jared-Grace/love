import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function functions_gate_run_unwired_exempt() {
  "The gates the whole-repo gate is not expected to list, each named with the reason it is not one of its members.";
  "Named one at a time rather than spotted by shape, because a rule guessing which gate is allowed to sit outside the list would go wrong in the one direction that matters - quietly excusing the next gate somebody wrote and forgot to wire in.";
  let f_name = fn_name("app_replace");
  let f_name2 = fn_name("app_g_dev_routes_phone_gate_run");
  let f_name3 = fn_name("app_original_bible_gloss_misaligned_gate_run");
  let exempt = [
    {
      name: fn_name("qa_gate_run"),
      why: "this is the whole-repo gate itself - it asks the list, so it cannot be in it",
    },
    {
      name: fn_name("app_g_dev_routes_phone_gate_run"),
      why: text_combine_multiple([
        "it opens every screen of the game in a real browser at the size of a phone, so it needs the local server running and a browser to drive - it is slower than everything in the list and it goes red for want of a server rather than for anything wrong with the code. run on its own after touching the game's screens, the same way the ",
        f_name,
        " end-to-end tests are",
      ]),
    },
    {
      name: fn_name("apps_boot_cold_gate_run"),
      why: text_combine_multiple([
        "it opens every app in a real browser the way a stranger opens it - nothing after the address, nothing remembered - so it needs the local server running and a fresh browser for each one, and it goes red for want of a server rather than for anything wrong with the code. it is also the slowest thing here by a long way, because a browser is built and thrown away per app on purpose: they all share one origin, so reusing a browser would let each app read what the app before it had written and the arrival being tested would no longer be the first one. run it on its own after touching anything an app does while it opens, the same way the ",
        f_name2,
        " sweep above is",
      ]),
    },
    {
      name: fn_name("app_ceb_bible_gloss_misaligned_gate_run"),
      why: text_combine_multiple([
        "the store it reads is red today and the fault is in the stored content rather than in any code. it was 156 chapters of 196; the ones whose fault was an entry of its own for a full stop have been repaired and 32 are left, and what is wrong with those cannot be swept: fifteen passages name a word misspelled where the explanation is otherwise standing in the right place, and the rest leave whole runs of words with no explanation at all, so they want authoring rather than a transform. named here rather than given a list of what is wrong to measure against, because writing 32 chapters of misalignment down as expected is how it would stop being noticed. the ",
        f_name3,
        " twin over the same code is in the list and green",
      ]),
    },
  ];
  return exempt;
}
