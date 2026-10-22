import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_boxes_whole_path } from "./giveaway_psalms_boxes_whole_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { list_words_missing } from "./list_words_missing.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function giveaway_psalms_boxes_whole_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the written-down answer about the given-away psalm boxes names no box that is short a file, and no box has gone out since that nothing has ever asked about. Throws so the dispatcher seam exits nonzero.");
  ("★ IT READS A WRITTEN-DOWN ANSWER AND ASKS NOTHING ACROSS THE WORLD, WHICH IS THE WHOLE REASON IT CAN LIVE BESIDE THE OTHER GATES. Asking every box what it holds takes about half an hour and needs another machine to be reachable, and the repo-wide run already takes a quarter of an hour. A gate that reached out would double that run and would go red on a bad line as readily as on a fault - and a gate that has once cried wolf is a gate nobody reads. So the asking is its own command, run when something has been sent, and this only judges what that left behind.");
  ("★ A BOX NOTHING HAS EVER ASKED ABOUT IS A FAULT HERE, AND THAT IS WHAT KEEPS A STALE ANSWER FROM READING AS A GOOD ONE. The written-down answer says which boxes it was asked about. Boxes have gone out since are not in it, so they carry no verdict at all, and a short answer listing no faults would otherwise read exactly like every box being whole. Which boxes those are is worked out here rather than judged: it is the list written down as gone out now, less the list the answer says it asked about. So the check can disagree with the answer without anybody inventing how old is too old.");
  ("★ NOTHING HERE DECIDES A NUMBER OF DAYS, ON PURPOSE. Any such number either fails on an ordinary afternoon, when a box has gone out and nobody has asked yet, or never fails at all. The day the asking happened is written down for a person reading the file; what makes this bite is the absence of a verdict, which is a fact about the two lists rather than a threshold somebody chose.");
  ("★ A BOX STILL BEING FILED AND A BOX THE HOST WOULD NOT TALK ABOUT ARE PRINTED AND NOT THROWN ON. Neither is a fault that anybody could repair: the first is the host doing its work, and the second is a question that failed rather than an answer. Throwing on either would make this gate red for reasons outside the repo. But a box stuck in either state for good would otherwise be invisible, so both counts are said out loud on every run, where somebody watching the number will notice it never moving.");
  ("The missing answer is left to throw as it is read, rather than caught and read as nothing wrong. The file is committed, so the only ways to be without it are a checkout that went wrong or a hand that deleted it, and a gate that treated ignorance as a pass would be at its quietest on the machine that knows least.");
  ("Each short box is printed whole before the counts, because the repair is a sending and the person doing it wants the box's name and which files it is short, not only how many there are.");
  let path = giveaway_psalms_boxes_whole_path();
  let found = await file_read_json(path);
  let gone_now = await giveaway_psalms_chapters_uploaded();
  let unaccounted = list_words_missing(gone_now, found.gone);
  for (let one of found.short) {
    console.log(
      one.identifier +
        "  psalm " +
        one.chapter +
        "  holds " +
        one.held +
        " of " +
        one.wanted +
        "  missing " +
        one.missing.length +
        "  wrong size " +
        one.sizes_off.length,
    );
  }
  for (let code of unaccounted) {
    console.log(
      code + "  has gone out and nothing has asked what its box holds",
    );
  }
  console.log(
    "giveaway psalms boxes whole: asked on " +
      found.asked_on +
      "  whole " +
      found.whole_count +
      "  short " +
      found.short_count +
      "  still being filed " +
      found.filing_count +
      "  unanswered " +
      found.unanswered_count +
      "  never asked about " +
      unaccounted.length,
  );
  let short_is = list_empty_not_is(found.short);
  let unaccounted_is = list_empty_not_is(unaccounted);
  if (short_is || unaccounted_is) {
    throw new Error(
      "giveaway psalms boxes whole gate: " +
        found.short.length +
        " given-away boxes are short a file and " +
        unaccounted.length +
        text_combine_multiple([
          " have gone out with nothing ever asked about them - the repair for a short box is ",
          fn_name("giveaway_psalms_boxes_mend"),
          ", which sends only the gap, and the repair for an unasked one is ",
          fn_name("giveaway_psalms_boxes_whole_write"),
        ]),
    );
  }
  let r = {
    short: 0,
    unaccounted: 0,
    whole: found.whole_count,
    filing: found.filing_count,
    unanswered: found.unanswered_count,
  };
  return r;
}
