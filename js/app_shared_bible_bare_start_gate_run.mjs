import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_bible_chapter_hash_get_or_default } from "./app_shared_bible_chapter_hash_get_or_default.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { ebible_chapter_code_known_is } from "./ebible_chapter_code_known_is.mjs";
import { app_shared_bible_verse_number_default } from "./app_shared_bible_verse_number_default.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { less_than } from "./less_than.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function app_shared_bible_bare_start_gate_run() {
  "QA gate: the page a shared link opens still gives somebody a chapter to start reading when they arrive with no link at all, which is the second half of what its card promises a stranger.";
  "THE PAGE ONCE SAID NOTHING FOR EVER IN EXACTLY THIS CASE, and the page's own words still record it: it insisted on a chapter being named and stopped when none was, inside the opening, before a single line was drawn - so it kept the words it paints while it starts and sat on them. A hang says less than an error does, and this one said nothing at all. Nothing anywhere noticed, because there is no wrong thing on the screen to notice: the screen is the one it draws while it is still working.";
  "IT NEEDS NO BIBLE, WHICH IS WHAT LETS IT BE A GATE. Every question here is answered out of this repo's own words. Whether three letters and a number could be a chapter is settled by the shape of them and nothing else, and the one place that could really list every chapter of every book has to fetch a bible to do it - so a check standing on that would run only after the failure it exists to catch, which is to say never.";
  "THE DOOR THE PAGE REACHES THROUGH IS CHECKED, NOT ONLY WHAT THE DOOR ANSWERS. Three readings of the same word sit side by side: one stops everything when no chapter is named, one answers with nothing on purpose, and one never comes back empty-handed. Asking the third and finding a chapter proves nothing about this page if the page has gone back to asking one of the other two - the values would stay right while the screen went back to hanging. So which names the page imports is read off its own source, and the two that can come back with nothing are refused by name.";
  "THE CARD IS READ TOO, BECAUSE A GATE GUARDING A SENTENCE THAT CHANGED IS GUARDING NOTHING. The promise being proved is the card's own closing clause, that opening it with no link still gives you somewhere to start. If somebody rewords that away, this fails and asks them to point it at whatever the card promises instead, rather than staying quietly green over a page nobody is promising anything about.";
  arguments_assert(arguments, 0);
  let wrong = [];
  let app_name = "next";
  let sentence = app_shared_description(app_name);
  let promised = text_includes(sentence, "with no link");
  if (not(promised)) {
    list_add(wrong, {
      fault:
        "the card for this page no longer promises that opening it with no link still gives somebody somewhere to start, so this gate is proving a promise nobody is handed",
      sentence,
    });
  }
  ("Arriving with no link at all, which is the whole case, is stood in for by a link that says nothing.");
  let no_link = {};
  let chapter_code = app_shared_bible_chapter_hash_get_or_default(no_link);
  let none = text_empty_is(chapter_code);
  if (none) {
    list_add(wrong, {
      fault:
        "asked with no link at all, the chapter this page opens on comes back as nothing, so the page has nowhere to start and will wait for a chapter that is never going to arrive",
      chapter_code,
    });
  }
  let known = ebible_chapter_code_known_is(chapter_code);
  if (not(known)) {
    list_add(wrong, {
      fault:
        "the chapter this page opens on from nothing is not written the way a chapter of this bible is written, so it will be looked up and come back with nothing - the three letters have to name a book and a single-digit chapter has to keep its nought",
      chapter_code,
    });
  }
  let verse = app_shared_bible_verse_number_default();
  let verse_digits = text_digits_is(verse);
  if (not(verse_digits)) {
    list_add(wrong, {
      fault:
        "the verse this page opens on from nothing is not a number written out, so there is no verse to scroll to",
      verse,
    });
  }
  if (verse_digits) {
    let n = number_from_text(verse);
    let before_the_first = less_than(n, 1);
    if (before_the_first) {
      list_add(wrong, {
        fault:
          "the verse this page opens on from nothing comes before the first verse a chapter has",
        verse,
      });
    }
  }
  ("Which door the page actually reaches through, read off its own source rather than gathered by running it.");
  let home = fn_name("app_next_home");
  let imports = await function_imports(home);
  let never_empty = fn_name("app_shared_bible_chapter_hash_get_or_default");
  let reaches = list_includes(imports, never_empty);
  if (not(reaches)) {
    list_add(wrong, {
      fault:
        "this page no longer asks for its chapter through the one reading of it that never comes back empty-handed, so everything above is true of a function the page has stopped calling",
      wanted: never_empty,
      home,
    });
  }
  let refused = [
    fn_name("app_shared_bible_chapter_hash_get"),
    fn_name("app_shared_bible_chapter_hash_get_or_empty"),
  ];
  for (let door of refused) {
    let taken = list_includes(imports, door);
    if (taken) {
      list_add(wrong, {
        fault:
          "this page asks for its chapter through a reading of it that can come back with nothing, which is how the hang was written in the first place - the one that never comes back empty-handed is the one a page that simply has to show something wants",
        door,
        home,
      });
    }
  }
  list_empty_is_assert_json(wrong, {
    hint: "these are the ways the page a shared link opens would stop saying anything to somebody who arrived without one, which is the half of its card a stranger is most likely to meet first",
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    app_name,
    chapter_code,
    verse,
    imports: list_size(imports),
    doors_refused: list_size(refused),
  };
  return r;
}
