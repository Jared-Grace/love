import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapter_fetch(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to send for and nothing that runs.");
  ("One stored picture Bible chapter, sent for on its own, with the other twenty four left where they are.");
  ("THIS IS THE WHOLE REASON THE PAGE IS AFFORDABLE. ",
    fn_name("bible_glyph_chapters"),
    " names every chapter at the top of its file, so anything reaching it carries all of them: four hundred and forty KiB of verses, measured on the twenty eighth of August, of which a reader opens about twenty eight. Sending for one chapter is the same Bible reached the other way round.");
  ("EVERY ADDRESS HERE IS WRITTEN OUT IN FULL, and that is not clumsiness. A bundler decides what to split into separately sendable pieces by reading the addresses in the source; an address it has to work out at the time - a name stuck onto a prefix - it cannot read, and it answers by building a stub that throws for every name on earth. That failure is silent until somebody opens a chapter. So the addresses are spelled, and the price of spelling them is that a new chapter has to be added here as well.");
  ("A PREFIX WOULD ALSO HAVE SWEPT UP THE WRONG FILES. The chapters are not the only things named after this prefix - the light list, the parser and the gates are too - and a bundler asked to cover a prefix covers all of them, which drags code that only ever runs here into a page on a phone.");
  ("The forgetting is caught rather than reasoned about: ",
    fn_name("bible_glyph_chapter_fetch_gate_run"),
    " sends for every chapter the light list names and checks that what came back is that chapter. That catches a chapter nobody added here, and it also catches a code wired to the wrong file, which no amount of reading the list side by side would show.");
  ("An unknown chapter code is refused rather than answered with nothing, for the reason it is refused when the whole Bible is in hand: a chapter that has not been written yet and a chapter code that was misspelled would otherwise look identical.");
  let stored = null;
  if (equal(chapter_code, "EXO20")) {
    let chapter_module = await import("./bible_glyph_chapter_exo20.mjs");
    stored = chapter_module.bible_glyph_chapter_exo20();
  }
  if (equal(chapter_code, "DEU30")) {
    let chapter_module = await import("./bible_glyph_chapter_deu30.mjs");
    stored = chapter_module.bible_glyph_chapter_deu30();
  }
  if (equal(chapter_code, "JDG13")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg13.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg13();
  }
  if (equal(chapter_code, "PSA023")) {
    let chapter_module = await import("./bible_glyph_chapter_psa023.mjs");
    stored = chapter_module.bible_glyph_chapter_psa023();
  }
  if (equal(chapter_code, "PSA029")) {
    let chapter_module = await import("./bible_glyph_chapter_psa029.mjs");
    stored = chapter_module.bible_glyph_chapter_psa029();
  }
  if (equal(chapter_code, "PSA100")) {
    let chapter_module = await import("./bible_glyph_chapter_psa100.mjs");
    stored = chapter_module.bible_glyph_chapter_psa100();
  }
  if (equal(chapter_code, "PSA136")) {
    let chapter_module = await import("./bible_glyph_chapter_psa136.mjs");
    stored = chapter_module.bible_glyph_chapter_psa136();
  }
  if (equal(chapter_code, "PSA138")) {
    let chapter_module = await import("./bible_glyph_chapter_psa138.mjs");
    stored = chapter_module.bible_glyph_chapter_psa138();
  }
  if (equal(chapter_code, "EZK18")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk18.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk18();
  }
  if (equal(chapter_code, "EZK33")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk33.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk33();
  }
  if (equal(chapter_code, "JHN01")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn01.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn01();
  }
  if (equal(chapter_code, "JHN03")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn03.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn03();
  }
  if (equal(chapter_code, "JHN09")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn09.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn09();
  }
  if (equal(chapter_code, "JHN10")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn10.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn10();
  }
  if (equal(chapter_code, "JHN14")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn14.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn14();
  }
  if (equal(chapter_code, "JHN17")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn17.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn17();
  }
  if (equal(chapter_code, "JHN20")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn20.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn20();
  }
  if (equal(chapter_code, "1JN01")) {
    let chapter_module = await import("./bible_glyph_chapter_1jn01.mjs");
    stored = chapter_module.bible_glyph_chapter_1jn01();
  }
  if (equal(chapter_code, "1JN02")) {
    let chapter_module = await import("./bible_glyph_chapter_1jn02.mjs");
    stored = chapter_module.bible_glyph_chapter_1jn02();
  }
  if (equal(chapter_code, "1JN03")) {
    let chapter_module = await import("./bible_glyph_chapter_1jn03.mjs");
    stored = chapter_module.bible_glyph_chapter_1jn03();
  }
  if (equal(chapter_code, "1JN04")) {
    let chapter_module = await import("./bible_glyph_chapter_1jn04.mjs");
    stored = chapter_module.bible_glyph_chapter_1jn04();
  }
  if (equal(chapter_code, "1JN05")) {
    let chapter_module = await import("./bible_glyph_chapter_1jn05.mjs");
    stored = chapter_module.bible_glyph_chapter_1jn05();
  }
  if (equal(chapter_code, "2JN01")) {
    let chapter_module = await import("./bible_glyph_chapter_2jn01.mjs");
    stored = chapter_module.bible_glyph_chapter_2jn01();
  }
  if (equal(chapter_code, "3JN01")) {
    let chapter_module = await import("./bible_glyph_chapter_3jn01.mjs");
    stored = chapter_module.bible_glyph_chapter_3jn01();
  }
  if (equal(chapter_code, "JUD01")) {
    let chapter_module = await import("./bible_glyph_chapter_jud01.mjs");
    stored = chapter_module.bible_glyph_chapter_jud01();
  }
  let found = not_equal(stored, null);
  let f_name = fn_name("bible_glyph_chapter_references");
  assert_json(found, {
    chapter_code,
    hint: text_combine_multiple([
      "no picture Bible chapter answers to that code here - either it has not been written, or it has been written and nobody added it to this list of addresses. Ask ",
      f_name,
      " for the chapters that exist, and if the code is in there then the address is what is missing",
    ]),
  });
  return stored;
}
