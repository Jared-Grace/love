import { arguments_assert } from "./arguments_assert.mjs";
export function text_regex_first_groups(text, regex) {
  "Everything the first bracketed part of this pattern catches, once for each place the pattern matches, in the order they appear.";
  "Two readings wanted this and each wrote the loop out: the roots a gloss explanation names, and the quoted names in a piece of source. The pattern and what the catch means are the whole of what differs, and neither of those belongs in a loop.";
  "Where the search resumes is put back to the start before anything is read. A pattern kept under a name remembers where it last stopped, so the second thing asked of one would begin reading from the middle of itself and answer with less than is there - and answering with less is the one failure nothing downstream can see. Both callers happened to build their pattern fresh each time, which is exactly the sort of thing that stays true until somebody lifts a pattern out to a name of its own.";
  arguments_assert(arguments, 2);
  regex.lastIndex = 0;
  let caught = [];
  let match = regex.exec(text);
  while (match) {
    caught.push(match[1]);
    match = regex.exec(text);
  }
  return caught;
}
