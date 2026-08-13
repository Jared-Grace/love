import { list_join_space } from "./list_join_space.mjs";
import { text_and_empty_not_is_assert_json } from "./text_and_empty_not_is_assert_json.mjs";
import { number_is } from "./number_is.mjs";
import { object_is } from "./object_is.mjs";
import { boolean_is } from "./boolean_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
export function g_arc_prompt_arguments_assert(
  chapter_code,
  verses_text,
  turn_target,
  profile,
  leader,
) {
  "Every argument the arc prompt is handed, checked before a word of the prompt is written.";
  "A PROMPT NEVER FAILS, which is the whole reason this exists. All five arguments are dropped into the text unchecked, so a missing one leaves a hole that still reads as finished prose - `The player is answering from .`, and a heading saying here is JSON about the person with nothing under it. The writing call then answers something anyway, and nothing anywhere goes red.";
  "That is not hypothetical. It was found by a person reading a rendered prompt and noticing the JSON was absent, which is the most expensive way this repo has to find anything.";
  "LEADER is asked for its TYPE rather than its truth, and that is the one that was actually wrong rather than merely unchecked. It arrives as text at a command line, where the word false is a nonempty string and so is TRUTHY - so asking for the ordinary convert's prompt by name printed the ELDER's, and the two are different enough to read and still similar enough to believe.";
  text_and_empty_not_is_assert_json(chapter_code, {
    chapter_code,
    hint: "the chapter the player answers from, and it is written into the prompt as a sentence - empty leaves that sentence naming nothing",
  });
  text_and_empty_not_is_assert_json(verses_text, {
    verses_text,
    hint: "the only Scripture the arc may answer from - empty leaves the prompt asking for passages it never showed",
  });
  let ni = number_is(turn_target);
  assert_json(ni, {
    turn_target,
    hint: "how many turns this person is worth, drawn for them by the pool - a number, never the text of one",
  });
  let oi = object_is(profile);
  assert_json(oi, {
    profile,
    hint: "the settled facts about the person, printed as the JSON the prompt says is there",
  });
  let bi = boolean_is(leader);
  let f_name = fn_name("g_arc_prompt_chapter");
  let f_name2 = fn_name("g_arc_prompt_chapter_leader");
  let hint = list_join_space([
    "whether this person is the elder the plant is left with - a real boolean, because the word false read off a command line is truthy. Call",
    f_name,
    "or",
    f_name2,
    "instead, which name the answer rather than passing it",
  ]);
  assert_json(bi, {
    leader,
    hint,
  });
}
