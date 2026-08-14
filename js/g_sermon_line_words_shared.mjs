import { list_intersection } from "./list_intersection.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_word_roots } from "./text_word_roots.mjs";
import { word_role } from "./word_role.mjs";
export function g_sermon_line_words_shared(scripture, line) {
  "How much of one sermon line is made of the passage's own words, counted by root so that formed meets forms.";
  "This is the beginner's ramp, measured. The player is shown the passage, one true line and one false one, and nothing else; where the true line's words are mostly the passage's own words, the choice can be made on word match alone, before any of it is understood. So a high count here is the line being EASY, not the line being lazy.";
  "The words the line does not share are the other half of the reading, and the more useful half. They are what the line ADDS - a name, a custom, the meaning of a word the passage never explains - and every one of them is spent against the ease measured beside it. A gloss has to buy more understanding than the matching it costs.";
  "Between the two sits a third kind, reported apart under serving. A verse saying for Adam was formed first and a line saying because God formed the man are making the same joint with different words, and a reader who has just read the verse recognises it - so counting because as pure cost is too harsh, while counting it as a shared word is too kind. It is neither, so it is named as neither: the word, and the job it and the passage's own word are both doing.";
  "The passage's own unshared words are not reported, because a passage word no line reached is already told by the coverage reading, and told better there.";
  let scripture_roots = text_word_roots(scripture);
  let line_roots = text_word_roots(line);
  let shared = list_intersection(line_roots, scripture_roots);
  let unshared = list_difference(line_roots, scripture_roots);
  let scripture_roles_all = list_map(scripture_roots, word_role);
  let scripture_roles = list_filter_text_empty_not_is(scripture_roles_all);
  function serving_is(root) {
    let role = word_role(root);
    let met = list_includes(scripture_roles, role);
    return met;
  }
  let serving_roots = list_filter(unshared, serving_is);
  function serving_read(root) {
    let role = word_role(root);
    return {
      word: root,
      role,
    };
  }
  let serving = list_map(serving_roots, serving_read);
  let added = list_difference(unshared, serving_roots);
  let r = {
    line,
    of: line_roots.length,
    shared_count: shared.length,
    serving_count: serving.length,
    shared,
    serving,
    added,
  };
  return r;
}
