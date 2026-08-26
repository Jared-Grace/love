import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { text_words_content } from "./text_words_content.mjs";
import { text_word_stem } from "./text_word_stem.mjs";
import { text_words_echo } from "./text_words_echo.mjs";
export function text_words_content_echo_stemmed(first, second) {
  arguments_assert(arguments, 2);
  ("$plain first");
  ("$plain second");
  ("How much of one saying is heard again in another once the endings of words are folded off, so that a word the two use in different grammar still meets itself.");
  ("IT IS THE SECOND OF TWO READINGS AND NOT A REPLACEMENT FOR THE FIRST. Leaving the endings on asks whether two sayings use the same word; taking them off asks whether they say the same thing. Both questions are worth an answer and they disagree: a line singing wash all my sin scores nothing at all against a verse saying he washed us from our sins, which is that verse's whole claim on that line. Two of the twenty two translations quoted on the music page were chosen on this reading and on no other.");
  ("IT IS DELIBERATELY NOT THE ONE A GATE RESTS ON. The reading that leaves endings on is what separates a bible numbering the psalms one behind the rest from the ones numbering them properly, and the gap it separates them by is a single word. Folding endings raises every score, so a gate asked this way could go green while seeing nothing. The reason lives beside the folding itself, where somebody merging the two would be standing.");
  ("The words are dropped to the ones that carry meaning first, in the ordinary way, so a saying does not score for agreeing about the word the before anything is folded.");
  let list = text_words_content(first);
  let first_words = list_map(list, text_word_stem);
  let list2 = text_words_content(second);
  let second_words = list_map(list2, text_word_stem);
  let echo = text_words_echo(first_words, second_words);
  return echo;
}
