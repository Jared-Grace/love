import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function bible_speech_colon_attribution(text) {
  "Whether a run of narration ends in a colon, which in English is itself an announcement that what follows is being said by whoever the sentence was about.";
  "★ THE COLON IS NOT A WEAKER SIGNAL THAN A VERB, IT IS A DIFFERENT AND SOMETIMES STRONGER ONE. Listen, O heavens, for the LORD has spoken: introduces divine speech with no verb at all in the position a verb search looks at, and A man will seize his brother within his father's house: attributes an entire outburst with punctuation alone. English reserves the colon for exactly this; a full stop in the same place would mean something else.";
  "★ IT WAS FOUND BY LOOKING AT WHAT THE MEASUREMENT MISSED RATHER THAN BY THINKING ABOUT ENGLISH, AND THAT IS WHY IT IS HERE AND NOT IN THE VERB LIST. Isaiah and the Psalms were expected to need one special rule each, being the two books with the most unattributed speech. Reading the misses showed one cause under both of them and under nothing else in particular. A rule guessed per book would have been two rules, both narrower than the text needed and neither of them this one.";
  "★ NOTHING ELSE IN A BIBLE ENDS A SENTENCE THIS WAY BEFORE A QUOTATION, WHICH IS WHAT MAKES IT SAFE. A colon does introduce a list, but a list is not wrapped in quotation marks, so the case cannot arise where this is asked.";
  arguments_assert(arguments, 1);
  let trimmed = text.trim();
  let is = text_ends_with(trimmed, ":");
  return is;
}
