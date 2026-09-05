import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map } from "./list_map.mjs";
export function bible_sentence_end_hidden_named(rows, field) {
  "$plain field";
  "Answers the recorded bibles whose named field holds anything, each named beside the chapter it was read from and what was found there.";
  "The record of how every bible ends its verses carries more than one kind of hidden sentence mark, and each kind is refused the same way: find the rows where the list is not empty, and say which bible, which chapter and what was in the way. Only the wording of the refusal differs, so only that is written twice.";
  "WHICH FIELD IS THE CALLER'S TO SAY, because the two kinds are told apart by nothing else. One holds the closing marks standing between a verse and its sentence mark; the other holds a whole bracketed span doing the same job. A third kind would be a third field and no new reading of anything.";
  "WHAT WAS FOUND IS HANDED BACK UNDER ONE NAME RATHER THAN THE FIELD ITS OWN, so that whatever reads this needs no knowledge of which kind it asked for. The refusal names the kind, which is where a reader is looking anyway.";
  function bible_sentence_end_hidden_any_is(row) {
    let any = property_list_empty_not_is(row, field);
    return any;
  }
  let found = list_filter(rows, bible_sentence_end_hidden_any_is);
  function bible_sentence_end_hidden_row_named(row) {
    let bible_folder = property_get(row, bible_folder_key());
    let chapter_code = property_get(row, "chapter_code");
    let hidden = property_get(row, field);
    let named = {
      bible_folder,
      chapter_code,
      hidden,
    };
    return named;
  }
  let named = list_map(found, bible_sentence_end_hidden_row_named);
  return named;
}
