import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function functions_gate_run_unwired_exempt() {
  "The gates the whole-repo gate is not expected to list, each named with the reason it is not one of its members.";
  "Named one at a time rather than spotted by shape, because a rule guessing which gate is allowed to sit outside the list would go wrong in the one direction that matters - quietly excusing the next gate somebody wrote and forgot to wire in.";
  let f_name = fn_name("app_replace");
  let f_name2 = fn_name("app_g_dev_routes_phone_gate_run");
  let f_name3 = fn_name("app_original_bible_gloss_misaligned_gate_run");
  let f_name4 = fn_name("apps_prod_chunks_missing_gate_run");
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
      name: fn_name("apps_prod_chunks_unreachable_gate_run"),
      why: text_combine_multiple([
        "it asks the live site whether every piece of every app that is already being served can actually be got, so all of it is network and none of it is about the files. measured at sixty-seven seconds over twenty-seven apps, and the fault it looks for can only arrive when something is sent out - so it is asked at a sending rather than at every commit, where it would be paid for constantly and could tell nobody anything new. its twin ",
        f_name4,
        " reads the folder an app is about to be sent out of and is in the list, and the two answer different questions: that one catches the fault before it goes out, this one says whether it went out already",
      ]),
    },
    {
      name: fn_name("app_ceb_bible_gloss_misaligned_gate_run"),
      why: text_combine_multiple([
        "the store it reads is red today and the fault is in the stored content rather than in any code. it was 156 chapters of 196; the ones whose fault was an entry of its own for a full stop have been repaired, and counted on 2026-08-13 there are 23 chapters carrying 39 passages left, in three kinds. fifteen of them are not a fault in the store at all: the passage writes a word with its linker joined on and the explanations take it apart, siya and ng under siyang, sila and g under silag, and joining the two explanations back up spells the written word exactly. seven leave whole runs of words with no explanation. the other seventeen have drifted onto different words altogether, and exactly one of those is a word misspelled, nagluksu for naglukso. so only the last kind wants authoring, and the first kind wants somebody deciding whether a word taken apart into its pieces is what a reader should be shown - which is why it is named here rather than given a list of what is wrong to measure against, since writing that down as expected is how it would stop being noticed. an earlier note here called the first fifteen misspellings and a repair was written for them on that reading; taking the passage's spelling back would have put siyang over the pronoun and left the linker's own explanation standing under nothing, so the reading was wrong and the repair is deleted. the ",
        f_name3,
        " twin over the same code is in the list and green",
      ]),
    },
  ];
  return exempt;
}
