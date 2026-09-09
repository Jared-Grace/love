import { text_split_comma } from "./text_split_comma.mjs";
import { domain_quotes_porkbun_batches } from "./domain_quotes_porkbun_batches.mjs";
export async function domain_quotes_names_comma(names_comma) {
  "Prices a handful of whole domain names named outright, which is the shape a person asks in - here are the five we are thinking of, what do they cost.";
  let names = text_split_comma(names_comma);
  let quotes = await domain_quotes_porkbun_batches(names);
  return quotes;
}
