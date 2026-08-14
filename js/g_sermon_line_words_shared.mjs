import { list_intersection } from "./list_intersection.mjs";
import { list_difference } from "./list_difference.mjs";
import { text_word_roots } from "./text_word_roots.mjs";
export function g_sermon_line_words_shared(scripture, line) {
  "How much of one sermon line is made of the passage's own words, counted by root so that formed meets forms.";
  "This is the beginner's ramp, measured. The player is shown the passage, one true line and one false one, and nothing else; where the true line's words are mostly the passage's own words, the choice can be made on word match alone, before any of it is understood. So a high count here is the line being EASY, not the line being lazy.";
  "The words the line does not share are the other half of the reading, and the more useful half. They are what the line ADDS - a name, a custom, the meaning of a word the passage never explains - and every one of them is spent against the ease measured beside it. A gloss has to buy more understanding than the matching it costs.";
  "The passage's own unshared words are not reported, because a passage word no line reached is already told by the coverage reading, and told better there.";
  let scripture_roots = text_word_roots(scripture);
  let line_roots = text_word_roots(line);
  let shared = list_intersection(line_roots, scripture_roots);
  let added = list_difference(line_roots, scripture_roots);
  let r = {
    line,
    of: line_roots.length,
    shared_count: shared.length,
    shared,
    added,
  };
  return r;
}
