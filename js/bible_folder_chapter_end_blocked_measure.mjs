import { bible_sentence_end_sample_count } from "./bible_sentence_end_sample_count.mjs";
import { bible_folder_chapter_verses_outcome } from "./bible_folder_chapter_verses_outcome.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { bible_verse_end_blocked_or_null } from "./bible_verse_end_blocked_or_null.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_folder_chapter_end_blocked_measure(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Reads one named chapter of one bible and answers the closing marks that stand between its verses and the sentence marks behind them.";
  "The count of verses that finish a sentence says how many a bible marks; it cannot say why the rest do not, and the two reasons want quite different repairs. A verse that writes no mark at all is a fact about a language. A verse that writes one and then closes a quotation over it is a fact about the short list of marks taken off before the question is asked, and widening that list repairs every bible closing the same way at once.";
  "The same sixteen verses the sentence-end record reads, so what this finds stands beside that record rather than beside a different reading of a different chapter.";
  let count = bible_sentence_end_sample_count();
  let outcome = await bible_folder_chapter_verses_outcome(
    bible_folder,
    chapter_code,
    count,
  );
  let verses = property_get(outcome, "verses");
  let read = list_filter(verses, null_not_is);
  function bible_folder_chapter_end_blocked_marks(verse) {
    let text = property_get(verse, "text");
    let blocking = bible_verse_end_blocked_or_null(text);
    return blocking;
  }
  let blocked = list_map_filter_null_not_is(
    read,
    bible_folder_chapter_end_blocked_marks,
  );
  let marks = list_unique(blocked);
  list_sort_text(marks);
  let measured = {
    bible_folder,
    chapter_code,
    read: list_size(read),
    blocked: list_size(blocked),
    marks,
  };
  return measured;
}
