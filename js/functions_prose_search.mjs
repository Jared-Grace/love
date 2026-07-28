import { functions_prose } from "./functions_prose.mjs";
import { search_generic } from "./search_generic.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes_lower } from "./text_includes_lower.mjs";
export async function functions_prose_search(search) {
  "Find a function by what it is FOR, when you cannot guess what it is called.";
  "The search beside this one matches names, and a name is only findable by somebody who already half knows it. That is the gap this fills, and it was measured rather than supposed: on 2026-07-28 six capabilities were each looked for and missed, and the one that no name search could ever have reached was the batch grant adder - it answers the question behind repeating the refusal check, and shares not one word with it.";
  "Same shape as the name search on purpose - substrings joined by commas, all of them required - so knowing one is knowing both.";
  let prose = await functions_prose();
  let names = properties_get(prose);
  function purpose_of(f_name) {
    let purpose = property_get(prose, f_name);
    return purpose;
  }
  function include(f_name, term) {
    let purpose = purpose_of(f_name);
    let has = text_includes_lower(purpose, term);
    return has;
  }
  let result = search_generic(search, names, purpose_of, include);
  return result;
}
