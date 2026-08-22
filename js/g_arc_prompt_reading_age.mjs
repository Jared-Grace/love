import { arguments_assert } from "./arguments_assert.mjs";
import { g_openers_lines } from "./g_openers_lines.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function g_arc_prompt_reading_age(
  list,
  chapter_code,
  turn_target,
  unbeliever_lines,
) {
  arguments_assert(arguments, 4);
  let disciple_lines = g_openers_lines(list);
  let s = g_generation_settings();
  let turns_low = property_get(s, "conversation_turns_low");
  let turns_mean = property_get(s, "conversation_turns_mean");
  let turns_high = property_get(s, "conversation_turns_high");
  let chapter_named = ebible_chapter_code_label(chapter_code);
  let preaching = list_join_space([
    "The player is answering from",
    chapter_named,
  ]);
  let joined = list_join_empty([preaching, "."]);
  ("The chapter named here is the one the plant is STANDING IN, and a leader is handed more than it. The passages say which chapter each of them is from, so the line stays true as written - it says where the player is, not what the whole list is drawn from.");
  let joined9 = list_join_space(["Aim for", turn_target, "turns."]);
  let unbeliever_block = list_join_newline(unbeliever_lines);
  let joined6 = list_join_newline([
    "openers for somebody who does not yet believe, one of:",
    unbeliever_block,
  ]);
  let disciple_block = list_join_newline(disciple_lines);
  let joined7 = list_join_newline([
    "openers for somebody who already believes, one of:",
    disciple_block,
  ]);
  let joined8 = list_join_space([
    "A conversation holds about",
    turns_mean,
    "turns. The fewest is",
    turns_low,
    "and the most is",
    turns_high,
    "turns.",
  ]);
  ("THE VOCABULARY IS ASKED FOR AND THE VOICE IS NOT, and the line is worded to keep those apart. A rare word carries none of what makes a person sound like themselves - the rhythm, what they notice, what they will not say - so a smaller vocabulary takes nothing away from a writer, while telling one how to phrase a sentence takes the sentence away from them.");
  ("It also asks for nothing new. The fit rule above already wants a reader able to point at what in the person's line the passage answers, and the plainest word is nearly always the most concrete one - so a line that names a category rather than a thing was already failing that test, and this says out loud why.");
  ("The age is READ rather than written here, because a gate over what has been written has to measure against the same number the writing was asked for.");
  ("IT COVERS THE UNSPOKEN FIELDS TOO, and that was added rather than assumed. It first asked only for the words the person SAYS, which is the only text a child ever meets - and the occupation, the trouble and the summary looked like they were nobody's business, being written for the next call rather than for a player. They are not, for two reasons. The four fields are written in ONE answer by one writer, so a register let loose in three of them is the register the fourth is written beside; the dyer's summary said she had practised her household religion, and her spoken lines said rites three times. And the summary alone is handed to the prompt that writes the NEXT person, so a hard word there is not sitting still - it is the example the following arc is written from.");
  ("THE WORDS ARE NAMED BECAUSE THE RULE ALONE DOES NOT WORK, and that is measured rather than supposed. The sentence above has always been in this prompt, and the two arcs written under it reached past a child's vocabulary on fifty of a hundred and ten lines - one of them for SINCE five times. The writer was not breaking the rule; it cannot tell that SINCE is hard, because nothing in the word says so and no amount of care recovers a fact about a reader from the word itself. So the rule is kept and the answer is written down beside it.");
  ("The plain twin is given rather than the fault alone. Told only what not to write, a writer works around the word and the sentence comes out bent; handed what to write instead, there is nothing left to decide.");
  let reading_age = property_get(s, "reading_age");
  let r = {
    joined,
    joined9,
    joined6,
    joined7,
    joined8,
    reading_age,
  };
  return r;
}
