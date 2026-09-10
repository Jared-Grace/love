import { arguments_assert } from "./arguments_assert.mjs";
export function text_digit_group_comma_removed(t) {
  "One piece of text with the commas that group a number's digits taken out, so that 22,000 becomes 22000 and stays one number rather than becoming two.";
  "★ IT RUNS BEFORE A READER THAT CUTS WORDS APART AT PUNCTUATION, AND THAT IS THE ONLY REASON IT EXISTS. Such a reader is right about every other comma - a comma standing between two words is a place to cut, and taking it out of the middle instead welds them into a word nobody wrote. A comma between two digits is the one comma that is not a place to cut: cutting there turns 144,000 into 144 and 000, and the second of those is not a number anybody said. Measured over the English bible, cutting at every comma shattered 322 numbers this way and produced fragments like 000 and 017 as words to be recorded and spoken aloud.";
  "★ THE RULE IS THAT THE COMMA IS FOLLOWED BY EXACTLY THREE DIGITS, WHICH IS WHAT A GROUPING COMMA IS RATHER THAN A GUESS ABOUT THIS TEXT. Written English groups a number's digits in threes from the right, so the mark is recognisable from its own shape rather than from a survey of where it happens to turn up - which is what keeps this from rotting the way a list of the numbers one bible happens to spell would. Every one of the 322 in the English bible has exactly three digits after it, and that is a check on the rule rather than the source of it.";
  "It looks at what stands either side without eating it, so a number written with several of them - 1,100,000 - loses both commas rather than only the first.";
  "$plain t";
  arguments_assert(arguments, 1);
  let grouped = /(?<=\p{N}),(?=\p{N}{3}(?!\p{N}))/gu;
  let joined = t.replace(grouped, "");
  return joined;
}
