import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { lyric_video_bible_document_name_read_or_null } from "./lyric_video_bible_document_name_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { object_values } from "./object_values.mjs";
import { list_sort_number_property } from "./list_sort_number_property.mjs";
export async function lyric_video_chapter_plans() {
  arguments_assert(arguments, 0);
  ("Every psalm that has a timing document, with the whole-chapter plan it has and the part plans it has, so the two kinds can be asked about together.");
  ("★ A CHAPTER HAS TWO KINDS OF PLAN AND NOTHING IN A FOLDER LISTING SAYS SO. The documents sit side by side in one folder under names that differ only by a verse range, and a reader walking that folder meets bsb_PSA_91 and bsb_PSA_91_9-16 as two unrelated files. They are not unrelated: they describe the same psalm, they usually draw their pictures out of one folder, and an edit to either can break the other. Putting them back together is what lets a question be asked about the pair rather than about a file.");
  ("★ SUPERSEDED TAKES ARE LEFT OUT, AND LEAVING THEM IN WOULD ANSWER THE OPPOSITE OF WHAT IS ASKED. A take is a plan that has already been replaced, so a picture it still names is a picture that was dropped rather than a picture in use. A caller asking which pictures a chapter actually uses would be handed the rejected ones back, and would conclude the work was safe to throw away when it is the live plan that holds it.");
  ("A plan is counted out when its name carries any mark at all, not only the word take, because the mark is the one field of the address that says this is not the plain document. The plain one's mark is empty by the same rule that spells the name.");
  ("Documents of other books are passed over rather than reported, because this asks about psalms and the folder is allowed to hold anything else. A name that will not read at all is reported by the walk that reads names, not here.");
  let read = await lyric_video_documents_read();
  let held = {};
  for (let one of read) {
    let name = lyric_video_bible_document_name_read_or_null(one.name);
    if (null_is(name)) {
      continue;
    }
    let psalms_is = equal(name.book_code, "PSA");
    if (not(psalms_is)) {
      continue;
    }
    let plain_is = text_empty_is(name.mark);
    if (not(plain_is)) {
      continue;
    }
    let chapter_number = name.chapter_number;
    let known = property_exists(held, chapter_number);
    if (not(known)) {
      let fresh = {
        chapter_number: chapter_number,
        whole: null,
        parts: [],
      };
      property_set(held, chapter_number, fresh);
    }
    let chapter = property_get(held, chapter_number);
    let whole_is = text_empty_is(name.verse_first);
    if (whole_is) {
      chapter.whole = one;
      continue;
    }
    list_add(chapter.parts, one);
  }
  let chapters = object_values(held);
  list_sort_number_property(chapters, "chapter_number");
  return chapters;
}
