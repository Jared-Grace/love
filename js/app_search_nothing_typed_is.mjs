import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_search_nothing_typed_is(query) {
  "whether the reader has put anything in the search box at all, spaces not counting as anything.";
  "Named here because two things ask it and they have to agree: what the page says when there is nothing to search for, and whether it also offers the bible reader. Those are the same two cases told apart by the same question - a reader who typed nothing wants the box, a reader who typed a script this search cannot cut wants somewhere that reads their language - and one of them answering it differently would put the offer under the wrong message.";
  let normalized = whitespace_normalize(query);
  let nothing_typed = text_empty_is(normalized);
  return nothing_typed;
}
