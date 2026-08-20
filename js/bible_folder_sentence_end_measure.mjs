import { bible_sentence_end_sample_chapter } from "./bible_sentence_end_sample_chapter.mjs";
import { bible_folder_chapter_sentence_end_measure } from "./bible_folder_chapter_sentence_end_measure.mjs";
import { bible_folder_sentence_end_fallback_chapter } from "./bible_folder_sentence_end_fallback_chapter.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_folder_sentence_end_measure(bible_folder) {
  "$plain bible_folder";
  "Reads one bible and counts how many of its verses finish on a mark this repo knows a sentence to end on, asking it for a chapter it actually holds.";
  "Measured 2026-08-20, which is what this line is for. A hundred bibles stood in the record as having no readable verse here; twenty eight of them read in full when asked again the same morning, and the record had been written four hours earlier. The count alone could never have said which twenty eight.";
  "ONE CHAPTER READ IN EVERY BIBLE WAS THE MISTAKE THIS CORRECTS. Luke one was asked of all of them and seventy one answered with nothing, and forty of those hold books they were never asked for - a bible published as a gospel and four letters has no Luke and is not thereby a language without sentences. They stood in the record as unreadable while sitting there readable.";
  "LUKE IS STILL ASKED FOR FIRST, IN EVERY BIBLE, and a second ask only happens when it is not there. Its opening dedication runs across several verses, so a bible that ends a sentence only at the end of a verse and a bible that ends one mid-chapter are told apart there rather than looking alike. Choosing a chapter per bible up front would have thrown that away in the two hundred and seventy odd bibles that do hold Luke, to save one fetch in the seventy that do not.";
  "AND IT HAS TO BE ASKED FOR RATHER THAN LOOKED UP, because the record of what storage holds cannot say. Its list of books is the first page of a listing and stops early - the English bible names two books there and has sixty six - so a bible not naming Luke may hold it all the same. Only the bible itself can say it does not, which is why the first ask is a real read and only its answer of absent sends anything looking further.";
  "A CHAPTER THAT WAS NEVER ANSWERED FOR IS NOT ASKED AROUND, because it is absent that says a bible does not hold something and unreachable that says this run failed. Falling back on a failed ask would quietly turn a bad afternoon into a bible measured somewhere else, and the second reading would be filed as though the first had told us something.";
  let preferred = bible_sentence_end_sample_chapter();
  let measured = await bible_folder_chapter_sentence_end_measure(
    bible_folder,
    preferred,
  );
  let absent = property_get(measured, "absent");
  if (not(absent)) {
    return measured;
  }
  let fallback = await bible_folder_sentence_end_fallback_chapter(bible_folder);
  let unstored = text_empty_is(fallback);
  if (unstored) {
    ("A BIBLE STORAGE HOLDS NOTHING FOR NAMES NO CHAPTER, which is how everything downstream tells it apart from a bible that holds chapters and gave none of them. There was no chapter of it to read, so none is written down. That is an upload that never ran rather than a fact about a language, and the gate naming those bibles is the one that can be acted on.");
    let nothing = {
      bible_folder,
      chapter_code: fallback,
      read: 0,
      ended: 0,
      absent: true,
      unreachable: false,
      unrecognised: [],
    };
    return nothing;
  }
  let second = await bible_folder_chapter_sentence_end_measure(
    bible_folder,
    fallback,
  );
  return second;
}
