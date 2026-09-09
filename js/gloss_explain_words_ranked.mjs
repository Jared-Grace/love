import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_entries } from "./gloss_chapter_entries.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_entries_count } from "./gloss_entries_count.mjs";
export async function gloss_explain_words_ranked(fn, explain) {
  "Every word in one gloss store that was handed one exact wording, commonest first, each carried beside how many entries wear it and how many chapters they are spread over.";
  "$plain explain";
  "the wording is the sentence itself, copied out of a ranking, and it is compared word for word. It names nothing that runs.";
  "The ranking beside this one shows a wording and eight of the words on it, and says in its own prose that the whole list can be asked for a chapter at a time. This is that question asked of the whole store at once, which is what somebody about to rewrite a wording actually needs: the words are the work, and their order is what says which of them to author first.";
  "IT COUNTS A WORD STANDING ALONE IN ITS CHAPTER, WHICH THE RANKING NEXT DOOR DOES NOT. That ranking gathers only wordings some other word in the same chapter was given too, because what it is judging is repetition. A rewrite is judging reach, and a sentence read once in a chapter is read by the same person as one read twice. So the total here can stand above the total there for the same wording, and the difference is not a disagreement.";
  "Ranked by entries rather than by chapters, because an entry is one place a reader meets the sentence, and a word standing forty times in three chapters is met more often than one standing twice in twenty.";
  "A chapter nobody has authored yet contributes nothing, so a sweep crosses the gaps without being told where they are.";
  arguments_assert(arguments, 2);
  let key = gloss_entry_explain_key();
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries(chapter_code, fn);
    function entry_wanted_is(entry) {
      let wording = property_get_or_null(entry, key);
      let same = equal(wording, explain);
      return same;
    }
    let wanted = list_filter(entries, entry_wanted_is);
    function entry_row(entry) {
      let word = gloss_entry_word_read(entry);
      let row = {
        word,
        chapter_code,
      };
      return row;
    }
    let rows_found = list_map(wanted, entry_row);
    return rows_found;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_read);
  let rows = list_flat(per_chapter);
  let by_word = list_group_by_property(rows, "word");
  function row_chapter_read(row) {
    let chapter_code = property_get(row, "chapter_code");
    return chapter_code;
  }
  function word_read(gathering) {
    let word = property_get(gathering, "key");
    let items = property_get(gathering, "items");
    let codes = list_map(items, row_chapter_read);
    let spread = list_unique(codes);
    let r = {
      word,
      entries: list_size(items),
      chapters: list_size(spread),
    };
    return r;
  }
  let counted = list_map(by_word, word_read);
  let words = list_sort_number_mapper_reverse(counted, gloss_entries_count);
  let r2 = {
    explain,
    entries: list_size(rows),
    distinct: list_size(words),
    chapters: list_size(chapter_codes),
    words,
  };
  return r2;
}
