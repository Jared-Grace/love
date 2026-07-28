import { functions_prose } from "./functions_prose.mjs";
import { search_generic } from "./search_generic.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export async function functions_prose_search(search) {
  "Find a function by what it is FOR, when you cannot guess what it is called.";
  "The search beside this one matches names, and a name is only findable by somebody who already half knows it. That is the gap this fills, and it was measured rather than supposed: on 2026-07-28 six capabilities were each looked for and missed, and the one that no name search could ever have reached was the batch grant adder - it answers the question behind repeating the refusal check, and shares not one word with it.";
  "Same shape as the name search on purpose - substrings joined by commas, all of them required - so knowing one is knowing both.";
  let prose = await functions_prose();
  let names = properties_get(prose);
  function purpose_of(f_name) {
    "The first line only, because this is what gets read down a list of hits.";
    let lines = property_get(prose, f_name);
    let first = list_first(lines);
    return first;
  }
  function include(f_name, term) {
    "Matched against everything the function says, not only the line shown - a capability is often described where it explains itself rather than where it introduces itself.";
    let lines = property_get(prose, f_name);
    let joined = list_join_space(lines);
    let lowered = text_lower_to(joined);
    let wanted = text_lower_to(term);
    let has = text_includes(lowered, wanted);
    return has;
  }
  let result = search_generic(search, names, purpose_of, include);
  return result;
}
