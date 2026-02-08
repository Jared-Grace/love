import { text_symbols_unique } from "../../../love/public/src/text_symbols_unique.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
export function text_symbols_unique_multiple(mapped) {
  let joined = list_join_empty(mapped);
  let unique = text_symbols_unique(joined);
  return unique;
}
