import { g_arc_written_files_or_null } from "./g_arc_written_files_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { g_openers_arc } from "./g_openers_arc.mjs";
import { list_size } from "./list_size.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { multiply } from "./multiply.mjs";
import { g_arcs_shared_steps } from "./g_arcs_shared_steps.mjs";
import { add_1 } from "./add_1.mjs";
import { greater_than } from "./greater_than.mjs";
import { g_arc_written_turns_count } from "./g_arc_written_turns_count.mjs";
import { run_chance_ceiling } from "./run_chance_ceiling.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function g_arc_shared_steps_gate_run() {
  "QA gate: prove no two people written for the same chapter were walked through the same stretch of arc - the same openers answered by the same passages, back to back, for longer than chance accounts for.";
  "THE PROMPT FORBIDS THIS AND HAD NO WAY TO CHECK IT. Each person is written by a call told the others exist and told not to write another version of one of them, and every one of those calls sees the same chapter, the same passages and the same openers. So the obvious scene gets written twice, both copies read correctly on their own, and only somebody holding two whole arcs in mind at once ever notices.";
  "IT ASKS ABOUT SHAPE AND NEVER ABOUT WORDS, so no writer is ever told how to say anything. Two people may sound nothing like each other and still have been taken through the same three moves; that is the repeat this is for, and it survives being said in two different voices.";
  "THE LENGTH ALLOWED IS WORKED OUT FROM THE CHAPTER RATHER THAN TYPED IN, because how much agreement is ordinary depends on how many turns each person has and how many passages and openers there were to pick from. A chapter offering three passages will repeat itself far more than one offering fifteen, and a number that suits either one is wrong about the other while still reading as a working check.";
  "COUNTS THE LOOKING AND HANDS THE COUNT BACK. Arcs live in storage and storage is not in the repo, so a machine that has written none is not broken and must not fail - which means passing says nothing until you can see how many pairs it compared. Zero pairs on a fresh machine is right; zero pairs where arcs are written is the answer to look at.";
  "A CHAPTER THAT WILL NOT ANSWER IS A FAULT OF ITS OWN AND NEVER THE END OF THE WALK. The set walked here is written by the game as it is played, so it grows on its own and nobody reviews it: a half-written file, a chapter code no passages were ever gathered for, a folder moved under the reading. Waited on plainly, the first of those carries somebody else's complaint out of this gate in place of the gate's own, every chapter after it goes uncompared, and the count handed back says a smaller number without saying why - which is the one thing the paragraph above promises this gate would never do. Caught, it is one chapter at fault beside all the ones that were still compared.";
  let files = await g_arc_written_files_or_null();
  let none = null_is(files);
  let empty = {
    chapters: 0,
    pairs: 0,
    longest: 0,
  };
  if (none) {
    return empty;
  }
  let openers = g_openers_arc();
  let opener_count = list_size(openers);
  let chapters = 0;
  let pairs_compared = 0;
  let longest_seen = 0;
  let faults = [];
  for (let file of files) {
    async function chapter_read() {
      let got = await file_read_json(file);
      return got;
    }
    let answered = await catch_message_async(chapter_read);
    let arrived = property_get(answered, "ok");
    if (not(arrived)) {
      list_add(faults, {
        file,
        refused: property_get(answered, "message"),
      });
      continue;
    }
    let chapter = property_get(answered, "value");
    let chapter_code = property_get(chapter, "chapter_code");
    async function passages_read() {
      let got = await g_sermon_chapter_passages_chaptered(chapter_code);
      return got;
    }
    let told = await catch_message_async(passages_read);
    let gathered = property_get(told, "ok");
    if (not(gathered)) {
      list_add(faults, {
        chapter_code,
        refused: property_get(told, "message"),
      });
      continue;
    }
    let passages = property_get(told, "value");
    let right = list_size(passages);
    let choices = multiply(opener_count, right);
    let written = property_get(chapter, "arcs");
    let pairs = g_arcs_shared_steps(written);
    chapters = add_1(chapters);
    for (let pair of pairs) {
      let turns = property_get(pair, "turns");
      pairs_compared = add_1(pairs_compared);
      let record = greater_than(turns, longest_seen);
      if (record) {
        longest_seen = turns;
      }
      let index_a = property_get(pair, "index_a");
      let index_b = property_get(pair, "index_b");
      let turns_a = g_arc_written_turns_count(written, index_a);
      let turns_b = g_arc_written_turns_count(written, index_b);
      let positions = multiply(turns_a, turns_b);
      let ceiling = run_chance_ceiling(positions, choices);
      let over = greater_than(turns, ceiling);
      if (over) {
        list_add(faults, {
          chapter_code,
          index_a,
          index_b,
          turns,
          ceiling,
          steps: property_get(pair, "steps"),
        });
      }
    }
  }
  let clean = list_empty_is(faults);
  assert_json(clean, {
    faults,
    hint: "two people written for the same chapter were taken through the same openers answered by the same passages, back to back, for longer than chance explains - one of them is a second version of the other and wants rewriting, not rewording; or a chapter refused to read in or to gather its passages at all, which is written down beside the words it refused with",
  });
  let r = {
    chapters,
    pairs: pairs_compared,
    longest: longest_seen,
  };
  return r;
}
