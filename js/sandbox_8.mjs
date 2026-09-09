import { domain_search_words_cheap } from "./domain_search_words_cheap.mjs";
import { domain_quotes_lines } from "./domain_quotes_lines.mjs";
export async function sandbox_8() {
  "The domain hunt for the four words a church or a charity would want in front of the dot, everything that can actually be bought at fifty dollars a year or less, cheapest year first.";
  "IT TAKES ABOUT HALF AN HOUR. Porkbun takes roughly one bulk search every ninety seconds and there are four hundred endings under the ceiling, so the waiting is the work.";
  let found = await domain_search_words_cheap("agape,grace,jesus,love", 50);
  let lines = domain_quotes_lines(found.cheap);
  let answer = {
    asked: found.asked,
    quoted: found.quoted,
    cheap: lines.length,
    lines,
  };
  return answer;
}
