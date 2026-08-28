import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_usfm_version_book_path_or_null } from "./bible_usfm_version_book_path_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_content } from "./text_words_content.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_intersect } from "./list_intersect.mjs";
export async function bible_usfm_versions_book_verses_apart(book_code) {
  arguments_assert(arguments, 1);
  ("$plain book_code");
  ("Every verse of one book where one bible on the shelf says not a single meaning-carrying word the way any other bible on the shelf says it, which at a verse the rest agree about means it is not that verse.");
  ("THIS IS THE ONE FAULT NOTHING ELSE HERE CAN SEE. A bible that numbers its chapters against a different reckoning hands back real words in good English about the passage next door, so every question this repo asks about whether a translation answered is satisfied, and a comparison of wordings shows the wrong passage sitting among the right ones as one more way of putting it. It was found once by a person reading a comparison and noticing that one line was about a different subject than the other twenty-two, and a person reading is not a way of checking sixty-six books.");
  ("SHARING NOT ONE WORD IS THE LINE BECAUSE THAT IS A STATEMENT ABOUT THE PASSAGE RATHER THAN ABOUT THE STYLE. Translations of one verse disagree about wording constantly and still say some content word the same way; saying none of them the same way, at a verse the others agree about, is not a looser translation, it is a different verse. The line is deliberately the most generous one there is, so that what it does catch is not arguable.");
  ("AGAINST THE OTHERS RATHER THAN AGAINST A CHOSEN ONE, because choosing one bible to measure from would decide in advance whose reckoning is the right one, and the question here is which bibles stand apart from the rest, whichever rest that turns out to be. The walk stops at the first other bible that shares a word, so a verse everybody agrees about costs one comparison and only a verse where something stands apart costs the full round.");
  ("A VERSE FEWER THAN THREE BIBLES CARRY IS NOT MEASURED AT ALL. Standing apart from a single other bible is symmetric and says nothing about which of the two moved, and the answer wanted here is about a bible that differs from a settled agreement rather than about a disagreeing pair.");
  ("A verse whose words all carry no meaning of their own is left out with it. A bible writing a verse as one word the counting drops would share nothing with anybody for a reason that has nothing to do with which passage it is.");
  ("It says where the bibles stand apart and stops there. What counts as too many is decided next door, where there is a number to fail on.");
  let versions = bible_usfm_versions();
  let words = object_property_names(versions);
  let carried = [];
  for (let version of words) {
    let file_path = await bible_usfm_version_book_path_or_null(
      version,
      book_code,
    );
    let unfound = null_is(file_path);
    if (unfound) {
      continue;
    }
    let there = await file_exists(file_path);
    let absent = not(there);
    if (absent) {
      continue;
    }
    let usfm = await file_read(file_path);
    let chapters = usfm_chapters_verses(usfm);
    let read = {
      version,
      chapters,
    };
    list_add(carried, read);
  }
  let words_by_version = {};
  let references = [];
  let references_seen = {};
  for (let read of carried) {
    let version = property_get(read, "version");
    let chapters = property_get(read, "chapters");
    let words_by_reference = {};
    for (let chapter of chapters) {
      let chapter_number = property_get(chapter, "chapter_number");
      let verses = property_get(chapter, "verses");
      for (let verse of verses) {
        let verse_number = property_get(verse, "verse_number");
        let text = property_get(verse, "text");
        let reference = chapter_number + ":" + verse_number;
        let content = text_words_content(text);
        let wordless = list_empty_is(content);
        if (wordless) {
          continue;
        }
        words_by_reference[reference] = content;
        let before = property_get_or_null(references_seen, reference);
        let first = null_is(before);
        if (first) {
          references_seen[reference] = reference;
          list_add(references, reference);
        }
      }
    }
    words_by_version[version] = words_by_reference;
  }
  let apart = [];
  let held_by_version = {}; let measured = 0;
  for (let reference of references) {
    let holders = [];
    for (let read of carried) {
      let version = property_get(read, "version");
      let words_by_reference = property_get(words_by_version, version);
      let content = property_get_or_null(words_by_reference, reference);
      let b = null_is(content);
      let held = not(b);
      if (held) {
        let holder = {
          version,
          content,
        };
        list_add(holders, holder);
      }
    }
    let a = list_size(holders);
    let enough = greater_than(a, 2);
    if (not(enough)) {
      continue;
    }
    measured = add(measured, 1);
    for (let holder of holders) {
      let version = property_get(holder, "version");
      let content = property_get(holder, "content"); let held_before = property_get_or_null(held_by_version, version); let held_first = null_is(held_before); let held_now = 1; if (not(held_first)) { held_now = add(held_before, 1); } held_by_version[version] = held_now;
      let shares = false;
      for (let against of holders) {
        let itself = property_equals(against, "version", version);
        if (itself) {
          continue;
        }
        let other_content = property_get(against, "content");
        let common = list_intersect(content, other_content);
        let b2 = list_empty_is(common);
        let any = not(b2);
        if (any) {
          shares = true;
          break;
        }
      }
      if (shares) {
        continue;
      }
      let alone = {
        version,
        book_code,
        reference,
        holders: list_size(holders),
      };
      list_add(apart, alone);
    }
  }
  let r = {
    book_code,
    versions: list_size(carried),
    verses: measured,
    apart,
  };
  return r;
}
