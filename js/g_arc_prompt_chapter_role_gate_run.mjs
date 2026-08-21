import { g_sermon_chapters_written } from "./g_sermon_chapters_written.mjs";
import { list_get } from "./list_get.mjs";
import { g_arc_prompt_chapter_role } from "./g_arc_prompt_chapter_role.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { add_1 } from "./add_1.mjs";
import { text_size } from "./text_size.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function g_arc_prompt_chapter_role_gate_run() {
  "QA gate: prove the arc prompt still renders for both roles, and that the number it is asked for still reaches the person it names.";
  "NOTHING RAN THIS BEFORE. It is the one call that gathers every argument the prompt needs, so its shape changes whenever any of them does - and its arity changed twice with nothing calling it but a human at a terminal. A wrong count throws on the first call, which means it was found by whoever next asked for a prompt rather than by the commit that broke it.";
  "IT ASKS FOR A WHOLE RENDER RATHER THAN CHECKING A PIECE. Every property read, every count of arguments and every store read along the way happens in the one call, so a render that comes back at all has exercised the lot. Checking the pieces would restate the code instead, and a check that restates the code is red exactly when the code is edited rather than when it is wrong.";
  "THE NUMBER USED TO BE IGNORED and every convert prompt was for the same person. That reads as a prompt that works, because one person is all it was ever asked to show - so this asks for several numbers and requires that they do not all render the same person. It is not asked which person each number should land on: that is the deal's business, and saying it here would only copy the deal down and call the copy a check.";
  "COUNTS THE LOOKING AND HANDS THE COUNT BACK, so a green answer says how many numbers were compared rather than only that nothing was wrong.";
  let chapters = await g_sermon_chapters_written();
  let chapter = list_get(chapters, 0);
  let convert = await g_arc_prompt_chapter_role(chapter, false, 0);
  let leader = await g_arc_prompt_chapter_role(chapter, true, 0);
  let convert_written = text_empty_not_is(convert);
  assert_json(convert_written, {
    chapter,
    hint: "the arc prompt for a convert rendered as nothing at all",
  });
  let leader_written = text_empty_not_is(leader);
  assert_json(leader_written, {
    chapter,
    hint: "the arc prompt for a leader rendered as nothing at all",
  });
  let roles_apart = not_equal(convert, leader);
  assert_json(roles_apart, {
    chapter,
    hint: "a leader and a convert were handed the same prompt - a leader is meant to be dealt from its own deck, given its turns by the plan, and stood on every chapter up to this one",
  });
  let tried = 8;
  let differing = 0;
  for (let index = 1; less_than(index, tried); index++) {
    let other = await g_arc_prompt_chapter_role(chapter, false, index);
    let same = equal(other, convert);
    let apart = not(same);
    if (apart) {
      differing = add_1(differing);
    }
  }
  let any = greater_than(differing, 0);
  assert_json(any, {
    chapter,
    tried,
    hint: "every number asked for rendered the same convert prompt, so the number is not reaching the person - the pool and the deal are both meant to be read at it",
  });
  let r = {
    chapter,
    tried,
    differing,
    characters: text_size(convert),
  };
  return r;
}
