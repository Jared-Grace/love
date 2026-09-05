import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export async function bible_glyph_chapter_fetch_found(chapter_code) {
  arguments_assert(arguments, 1);
  ("THIS IS THE WHOLE REASON THE PAGE IS AFFORDABLE. ",
    fn_name("bible_glyph_chapters"),
    " names every chapter at the top of its file, so anything reaching it carries all of them: four hundred and forty KiB of verses, measured on the twenty eighth of August, of which a reader opens about twenty eight. Sending for one chapter is the same Bible reached the other way round.");
  ("EVERY ADDRESS HERE IS WRITTEN OUT IN FULL, and that is not clumsiness. A bundler decides what to split into separately sendable pieces by reading the addresses in the source; an address it has to work out at the time - a name stuck onto a prefix - it cannot read, and it answers by building a stub that throws for every name on earth. That failure is silent until somebody opens a chapter. So the addresses are spelled, and the price of spelling them is that a new chapter has to be added here as well.");
  ("A PREFIX WOULD ALSO HAVE SWEPT UP THE WRONG FILES. The chapters are not the only things named after this prefix - the light list, the parser and the gates are too - and a bundler asked to cover a prefix covers all of them, which drags code that only ever runs here into a page on a phone.");
  ("The forgetting is caught rather than reasoned about: ",
    fn_name("bible_glyph_chapter_fetch_gate_run"),
    " sends for every chapter the light list names and checks that what came back is that chapter. That catches a chapter nobody added here, and it also catches a code wired to the wrong file, which no amount of reading the list side by side would show.");
  ("An unknown chapter code is refused rather than answered with nothing, for the reason it is refused when the whole Bible is in hand: a chapter that has not been written yet and a chapter code that was misspelled would otherwise look identical.");
  ("IT STANDS ABOVE THE SIZE CEILING AND IS RECORDED AS STANDING THERE by ",
    fn_name("functions_work_size_baseline_add"),
    ". Its length is the number of chapters that have been written rather than the way it was written: each of its cases is one line, no two of them ever run together, and a reader holds exactly one and forgets it. Cutting it in half would give each half a name that means nothing and would still leave that reader reading every one of them to learn which file holds a chapter. It comes back under the ceiling only by getting shorter, which happens the day a bundler can be handed a folder rather than an address at a time.");
  let stored = null;
  if (equal(chapter_code, "GEN01")) {
    let chapter_module = await import("./bible_glyph_chapter_gen01.mjs");
    stored = chapter_module.bible_glyph_chapter_gen01();
  }
  if (equal(chapter_code, "GEN02")) {
    let chapter_module = await import("./bible_glyph_chapter_gen02.mjs");
    stored = chapter_module.bible_glyph_chapter_gen02();
  }
  if (equal(chapter_code, "GEN03")) {
    let chapter_module = await import("./bible_glyph_chapter_gen03.mjs");
    stored = chapter_module.bible_glyph_chapter_gen03();
  }
  if (equal(chapter_code, "EXO14")) {
    let chapter_module = await import("./bible_glyph_chapter_exo14.mjs");
    stored = chapter_module.bible_glyph_chapter_exo14();
  }
  if (equal(chapter_code, "EXO20")) {
    let chapter_module = await import("./bible_glyph_chapter_exo20.mjs");
    stored = chapter_module.bible_glyph_chapter_exo20();
  }
  if (equal(chapter_code, "DEU26")) {
    let chapter_module = await import("./bible_glyph_chapter_deu26.mjs");
    stored = chapter_module.bible_glyph_chapter_deu26();
  }
  if (equal(chapter_code, "DEU30")) {
    let chapter_module = await import("./bible_glyph_chapter_deu30.mjs");
    stored = chapter_module.bible_glyph_chapter_deu30();
  }
  if (equal(chapter_code, "JDG13")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg13.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg13();
  }
  if (equal(chapter_code, "1KI03")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki03.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki03();
  }
  if (equal(chapter_code, "1KI13")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki13.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki13();
  }
  if (equal(chapter_code, "PSA001")) {
    let chapter_module = await import("./bible_glyph_chapter_psa001.mjs");
    stored = chapter_module.bible_glyph_chapter_psa001();
  }
  if (equal(chapter_code, "PSA015")) {
    let chapter_module = await import("./bible_glyph_chapter_psa015.mjs");
    stored = chapter_module.bible_glyph_chapter_psa015();
  }
  if (equal(chapter_code, "PSA023")) {
    let chapter_module = await import("./bible_glyph_chapter_psa023.mjs");
    stored = chapter_module.bible_glyph_chapter_psa023();
  }
  if (equal(chapter_code, "PSA029")) {
    let chapter_module = await import("./bible_glyph_chapter_psa029.mjs");
    stored = chapter_module.bible_glyph_chapter_psa029();
  }
  if (equal(chapter_code, "PSA067")) {
    let chapter_module = await import("./bible_glyph_chapter_psa067.mjs");
    stored = chapter_module.bible_glyph_chapter_psa067();
  }
  if (equal(chapter_code, "PSA085")) {
    let chapter_module = await import("./bible_glyph_chapter_psa085.mjs");
    stored = chapter_module.bible_glyph_chapter_psa085();
  }
  if (equal(chapter_code, "PSA096")) {
    let chapter_module = await import("./bible_glyph_chapter_psa096.mjs");
    stored = chapter_module.bible_glyph_chapter_psa096();
  }
  if (equal(chapter_code, "PSA097")) {
    let chapter_module = await import("./bible_glyph_chapter_psa097.mjs");
    stored = chapter_module.bible_glyph_chapter_psa097();
  }
  if (equal(chapter_code, "PSA099")) {
    let chapter_module = await import("./bible_glyph_chapter_psa099.mjs");
    stored = chapter_module.bible_glyph_chapter_psa099();
  }
  if (equal(chapter_code, "PSA100")) {
    let chapter_module = await import("./bible_glyph_chapter_psa100.mjs");
    stored = chapter_module.bible_glyph_chapter_psa100();
  }
  if (equal(chapter_code, "PSA101")) {
    let chapter_module = await import("./bible_glyph_chapter_psa101.mjs");
    stored = chapter_module.bible_glyph_chapter_psa101();
  }
  if (equal(chapter_code, "PSA111")) {
    let chapter_module = await import("./bible_glyph_chapter_psa111.mjs");
    stored = chapter_module.bible_glyph_chapter_psa111();
  }
  if (equal(chapter_code, "PSA112")) {
    let chapter_module = await import("./bible_glyph_chapter_psa112.mjs");
    stored = chapter_module.bible_glyph_chapter_psa112();
  }
  if (equal(chapter_code, "PSA115")) {
    let chapter_module = await import("./bible_glyph_chapter_psa115.mjs");
    stored = chapter_module.bible_glyph_chapter_psa115();
  }
  if (equal(chapter_code, "PSA118")) {
    let chapter_module = await import("./bible_glyph_chapter_psa118.mjs");
    stored = chapter_module.bible_glyph_chapter_psa118();
  }
  if (equal(chapter_code, "PSA134")) {
    let chapter_module = await import("./bible_glyph_chapter_psa134.mjs");
    stored = chapter_module.bible_glyph_chapter_psa134();
  }
  if (equal(chapter_code, "PSA136")) {
    let chapter_module = await import("./bible_glyph_chapter_psa136.mjs");
    stored = chapter_module.bible_glyph_chapter_psa136();
  }
  if (equal(chapter_code, "PSA138")) {
    let chapter_module = await import("./bible_glyph_chapter_psa138.mjs");
    stored = chapter_module.bible_glyph_chapter_psa138();
  }
  if (equal(chapter_code, "PSA139")) {
    let chapter_module = await import("./bible_glyph_chapter_psa139.mjs");
    stored = chapter_module.bible_glyph_chapter_psa139();
  }
  if (equal(chapter_code, "PSA146")) {
    let chapter_module = await import("./bible_glyph_chapter_psa146.mjs");
    stored = chapter_module.bible_glyph_chapter_psa146();
  }
  if (equal(chapter_code, "ISA01")) {
    let chapter_module = await import("./bible_glyph_chapter_isa01.mjs");
    stored = chapter_module.bible_glyph_chapter_isa01();
  }
  if (equal(chapter_code, "JER26")) {
    let chapter_module = await import("./bible_glyph_chapter_jer26.mjs");
    stored = chapter_module.bible_glyph_chapter_jer26();
  }
  if (equal(chapter_code, "EZK18")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk18.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk18();
  }
  if (equal(chapter_code, "EZK33")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk33.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk33();
  }
  if (equal(chapter_code, "EZK36")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk36.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk36();
  }
  if (equal(chapter_code, "JON01")) {
    let chapter_module = await import("./bible_glyph_chapter_jon01.mjs");
    stored = chapter_module.bible_glyph_chapter_jon01();
  }
  if (equal(chapter_code, "MAT05")) {
    let chapter_module = await import("./bible_glyph_chapter_mat05.mjs");
    stored = chapter_module.bible_glyph_chapter_mat05();
  }
  if (equal(chapter_code, "MRK04")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk04.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk04();
  }
  if (equal(chapter_code, "MRK05")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk05.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk05();
  }
  if (equal(chapter_code, "MRK08")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk08.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk08();
  }
  if (equal(chapter_code, "MRK10")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk10.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk10();
  }
  if (equal(chapter_code, "MRK11")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk11.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk11();
  }
  if (equal(chapter_code, "MRK12")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk12.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk12();
  }
  if (equal(chapter_code, "LUK02")) {
    let chapter_module = await import("./bible_glyph_chapter_luk02.mjs");
    stored = chapter_module.bible_glyph_chapter_luk02();
  }
  if (equal(chapter_code, "LUK07")) {
    let chapter_module = await import("./bible_glyph_chapter_luk07.mjs");
    stored = chapter_module.bible_glyph_chapter_luk07();
  }
  if (equal(chapter_code, "LUK15")) {
    let chapter_module = await import("./bible_glyph_chapter_luk15.mjs");
    stored = chapter_module.bible_glyph_chapter_luk15();
  }
  if (equal(chapter_code, "LUK24")) {
    let chapter_module = await import("./bible_glyph_chapter_luk24.mjs");
    stored = chapter_module.bible_glyph_chapter_luk24();
  }
  if (equal(chapter_code, "JHN01")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn01.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn01();
  }
  if (equal(chapter_code, "JHN02")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn02.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn02();
  }
  if (equal(chapter_code, "JHN03")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn03.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn03();
  }
  if (equal(chapter_code, "JHN04")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn04.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn04();
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
  if (equal(chapter_code, "1TH01")) {
    let chapter_module = await import("./bible_glyph_chapter_1th01.mjs");
    stored = chapter_module.bible_glyph_chapter_1th01();
  }
  if (equal(chapter_code, "2TH01")) {
    let chapter_module = await import("./bible_glyph_chapter_2th01.mjs");
    stored = chapter_module.bible_glyph_chapter_2th01();
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
  if (equal(chapter_code, "REV01")) {
    let chapter_module = await import("./bible_glyph_chapter_rev01.mjs");
    stored = chapter_module.bible_glyph_chapter_rev01();
  }
  if (equal(chapter_code, "REV10")) {
    let chapter_module = await import("./bible_glyph_chapter_rev10.mjs");
    stored = chapter_module.bible_glyph_chapter_rev10();
  }
  let found = not_equal(stored, null);
  let r = {
    stored,
    found,
  };
  return r;
}
