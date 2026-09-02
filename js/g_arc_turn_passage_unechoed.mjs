import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { not } from "./not.mjs";
import { text_words_content_echo_stemmed } from "./text_words_content_echo_stemmed.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function g_arc_turn_passage_unechoed(after, scripture) {
  "Whether a written answer picks up nothing at all from the verse it is answering - no word that carries a meaning of its own, once the endings are folded off.";
  "$plain after";
  "$plain scripture";
  "the answer and the verse are both ordinary English. They are read as words and nothing that runs.";
  "IT ASKS ABOUT ZERO AND NOT ABOUT A LOW NUMBER, and that is the whole of why it can be trusted. A line sharing two words with its verse may be thin or may be the best line in the arc, and no count tells the two apart - so any threshold above zero would be a judgement wearing a number's clothes, and a reviewer would have to check every one of them by hand anyway. Sharing nothing is different in kind: whatever the line is doing, it is not answering out of the passage it cites, and that is a plain fact about the two texts.";
  "THE ENDINGS ARE FOLDED OFF BECAUSE THE QUESTION IS THE MEANING AND NOT THE GRAMMAR. An answer saying she has sinned against a verse saying we have no sin is answering out of that verse, and left unfolded the two would share nothing and the line would be called out wrongly. Folding raises every score, which is the wrong way round for a gate and the right way round here: it can only ever make this quieter, so a line it does call out shares nothing under the most generous reading there is.";
  "IT SAYS A LINE IS WORTH LOOKING AT AND NEVER THAT IT IS WRONG. An answer may rightly say what the verse implies in words the verse never used - so a reviewer, not this, decides. What it removes is the finding, not the judging: a line that quotes nothing of its own passage was found four times by hand in one chapter, and each time the reading cost was the whole arc.";
  "AN ANSWER THAT WAS NEVER WRITTEN IS NOT ONE OF THESE. Some turns carry no answer at all, and an empty line shares no word with anything - so left unguarded this would call out every one of them and bury the lines it exists to find.";
  arguments_assert(arguments, 2);
  let reacted = text_empty_not_is(after);
  let unreacted = not(reacted);
  if (unreacted) {
    let answered_nothing = false;
    return answered_nothing;
  }
  let echo = text_words_content_echo_stemmed(after, scripture);
  let shared = property_get(echo, "shared");
  let none = equal(shared, 0);
  return none;
}
