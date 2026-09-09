import { text_split_comma } from "./text_split_comma.mjs";
import { domain_porkbun_pricing } from "./domain_porkbun_pricing.mjs";
import { domain_tlds_renewal_max } from "./domain_tlds_renewal_max.mjs";
import { domain_names_words_tlds } from "./domain_names_words_tlds.mjs";
import { domain_quotes_porkbun_batches } from "./domain_quotes_porkbun_batches.mjs";
import { domain_quotes_cheap } from "./domain_quotes_cheap.mjs";
export async function domain_search_words_cheap(words_comma, renewal_max) {
  "The whole domain hunt in one ask: takes the words a person would want in front of the dot and a ceiling on the yearly price, and hands back every ending they can actually have at that price, cheapest first.";
  "IT TAKES HALF AN HOUR FOR A FEW WORDS AND IS MEANT TO. Porkbun accepts about one bulk search every ninety seconds, and the four hundred endings under a fifty dollar ceiling are four hundred names per word.";
  "EVERY PRICE THAT COMES BACK IS A QUOTE FOR THAT NAME, premium and all, which is the point - a catalogue rate for an ending says nothing about a name a registry has priced for itself.";
  let words = text_split_comma(words_comma);
  let ceiling = Number(renewal_max);
  let pricing = await domain_porkbun_pricing();
  let tlds = domain_tlds_renewal_max(pricing, ceiling);
  let names = domain_names_words_tlds(words, tlds);
  let quotes = await domain_quotes_porkbun_batches(names);
  let cheap = domain_quotes_cheap(quotes, ceiling);
  let answer = {
    asked: names.length,
    quoted: quotes.length,
    cheap,
  };
  return answer;
}
