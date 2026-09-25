import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
export function text_apostrophe_quoted_runs(value) {
  "Everything one piece of text puts inside a pair of apostrophes, in the order it was written.";
  "A SENTENCE THAT QUOTES A WORD IS POINTING AT THAT WORD RATHER THAN USING IT, and a reading that cannot see the quotes cannot tell the two apart. The Urdu glosses say the word for verse, a number, and then the word that verse holds, quoted in its own letters - and until the quotes were read, every one of those was taken as a claim about the word the sentence was explaining instead.";
  "AN APOSTROPHE STANDING INSIDE A WORD IS NOT A QUOTE OPENING, AND THAT IS THE WHOLE OF WHY THIS IS NOT A PLAIN SEARCH FOR TWO APOSTROPHES. English writes don't and God's with the same character, so a reading that took any apostrophe as an opening would pair the one in don't with the one in God's and hand back a run made of the words between two unrelated words. So an opening one may not have a letter or a number in front of it, and a closing one may not have one behind it. A store written in a script with no apostrophes is unaffected either way, and a store written in English is the reason this is here.";
  "Where the pattern resumes is not this reading's business to reset, because the reading it hands the pattern to does that itself before it starts. The pattern is built fresh here anyway, which is the belt beside that brace.";
  "$plain value";
  "it is a piece of text somebody wrote, and it names nothing that runs.";
  arguments_assert(arguments, 1);
  let pattern = /(?<![\p{L}\p{N}])'([^']+)'(?![\p{L}\p{N}])/gu;
  let found = text_regex_first_groups(value, pattern);
  return found;
}
