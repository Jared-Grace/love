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
  if (equal(chapter_code, "GEN04")) {
    let chapter_module = await import("./bible_glyph_chapter_gen04.mjs");
    stored = chapter_module.bible_glyph_chapter_gen04();
  }
  if (equal(chapter_code, "GEN05")) {
    let chapter_module = await import("./bible_glyph_chapter_gen05.mjs");
    stored = chapter_module.bible_glyph_chapter_gen05();
  }
  if (equal(chapter_code, "GEN06")) {
    let chapter_module = await import("./bible_glyph_chapter_gen06.mjs");
    stored = chapter_module.bible_glyph_chapter_gen06();
  }
  if (equal(chapter_code, "GEN07")) {
    let chapter_module = await import("./bible_glyph_chapter_gen07.mjs");
    stored = chapter_module.bible_glyph_chapter_gen07();
  }
  if (equal(chapter_code, "GEN08")) {
    let chapter_module = await import("./bible_glyph_chapter_gen08.mjs");
    stored = chapter_module.bible_glyph_chapter_gen08();
  }
  if (equal(chapter_code, "GEN09")) {
    let chapter_module = await import("./bible_glyph_chapter_gen09.mjs");
    stored = chapter_module.bible_glyph_chapter_gen09();
  }
  if (equal(chapter_code, "GEN10")) {
    let chapter_module = await import("./bible_glyph_chapter_gen10.mjs");
    stored = chapter_module.bible_glyph_chapter_gen10();
  }
  if (equal(chapter_code, "GEN11")) {
    let chapter_module = await import("./bible_glyph_chapter_gen11.mjs");
    stored = chapter_module.bible_glyph_chapter_gen11();
  }
  if (equal(chapter_code, "GEN12")) {
    let chapter_module = await import("./bible_glyph_chapter_gen12.mjs");
    stored = chapter_module.bible_glyph_chapter_gen12();
  }
  if (equal(chapter_code, "GEN13")) {
    let chapter_module = await import("./bible_glyph_chapter_gen13.mjs");
    stored = chapter_module.bible_glyph_chapter_gen13();
  }
  if (equal(chapter_code, "GEN14")) {
    let chapter_module = await import("./bible_glyph_chapter_gen14.mjs");
    stored = chapter_module.bible_glyph_chapter_gen14();
  }
  if (equal(chapter_code, "GEN15")) {
    let chapter_module = await import("./bible_glyph_chapter_gen15.mjs");
    stored = chapter_module.bible_glyph_chapter_gen15();
  }
  if (equal(chapter_code, "GEN16")) {
    let chapter_module = await import("./bible_glyph_chapter_gen16.mjs");
    stored = chapter_module.bible_glyph_chapter_gen16();
  }
  if (equal(chapter_code, "GEN17")) {
    let chapter_module = await import("./bible_glyph_chapter_gen17.mjs");
    stored = chapter_module.bible_glyph_chapter_gen17();
  }
  if (equal(chapter_code, "GEN18")) {
    let chapter_module = await import("./bible_glyph_chapter_gen18.mjs");
    stored = chapter_module.bible_glyph_chapter_gen18();
  }
  if (equal(chapter_code, "GEN19")) {
    let chapter_module = await import("./bible_glyph_chapter_gen19.mjs");
    stored = chapter_module.bible_glyph_chapter_gen19();
  }
  if (equal(chapter_code, "GEN20")) {
    let chapter_module = await import("./bible_glyph_chapter_gen20.mjs");
    stored = chapter_module.bible_glyph_chapter_gen20();
  }
  if (equal(chapter_code, "GEN21")) {
    let chapter_module = await import("./bible_glyph_chapter_gen21.mjs");
    stored = chapter_module.bible_glyph_chapter_gen21();
  }
  if (equal(chapter_code, "GEN22")) {
    let chapter_module = await import("./bible_glyph_chapter_gen22.mjs");
    stored = chapter_module.bible_glyph_chapter_gen22();
  }
  if (equal(chapter_code, "GEN23")) {
    let chapter_module = await import("./bible_glyph_chapter_gen23.mjs");
    stored = chapter_module.bible_glyph_chapter_gen23();
  }
  if (equal(chapter_code, "GEN24")) {
    let chapter_module = await import("./bible_glyph_chapter_gen24.mjs");
    stored = chapter_module.bible_glyph_chapter_gen24();
  }
  if (equal(chapter_code, "GEN25")) {
    let chapter_module = await import("./bible_glyph_chapter_gen25.mjs");
    stored = chapter_module.bible_glyph_chapter_gen25();
  }
  if (equal(chapter_code, "GEN26")) {
    let chapter_module = await import("./bible_glyph_chapter_gen26.mjs");
    stored = chapter_module.bible_glyph_chapter_gen26();
  }
  if (equal(chapter_code, "GEN27")) {
    let chapter_module = await import("./bible_glyph_chapter_gen27.mjs");
    stored = chapter_module.bible_glyph_chapter_gen27();
  }
  if (equal(chapter_code, "GEN28")) {
    let chapter_module = await import("./bible_glyph_chapter_gen28.mjs");
    stored = chapter_module.bible_glyph_chapter_gen28();
  }
  if (equal(chapter_code, "GEN29")) {
    let chapter_module = await import("./bible_glyph_chapter_gen29.mjs");
    stored = chapter_module.bible_glyph_chapter_gen29();
  }
  if (equal(chapter_code, "GEN30")) {
    let chapter_module = await import("./bible_glyph_chapter_gen30.mjs");
    stored = chapter_module.bible_glyph_chapter_gen30();
  }
  if (equal(chapter_code, "GEN31")) {
    let chapter_module = await import("./bible_glyph_chapter_gen31.mjs");
    stored = chapter_module.bible_glyph_chapter_gen31();
  }
  if (equal(chapter_code, "GEN32")) {
    let chapter_module = await import("./bible_glyph_chapter_gen32.mjs");
    stored = chapter_module.bible_glyph_chapter_gen32();
  }
  if (equal(chapter_code, "GEN33")) {
    let chapter_module = await import("./bible_glyph_chapter_gen33.mjs");
    stored = chapter_module.bible_glyph_chapter_gen33();
  }
  if (equal(chapter_code, "GEN34")) {
    let chapter_module = await import("./bible_glyph_chapter_gen34.mjs");
    stored = chapter_module.bible_glyph_chapter_gen34();
  }
  if (equal(chapter_code, "GEN35")) {
    let chapter_module = await import("./bible_glyph_chapter_gen35.mjs");
    stored = chapter_module.bible_glyph_chapter_gen35();
  }
  if (equal(chapter_code, "GEN36")) {
    let chapter_module = await import("./bible_glyph_chapter_gen36.mjs");
    stored = chapter_module.bible_glyph_chapter_gen36();
  }
  if (equal(chapter_code, "GEN37")) {
    let chapter_module = await import("./bible_glyph_chapter_gen37.mjs");
    stored = chapter_module.bible_glyph_chapter_gen37();
  }
  if (equal(chapter_code, "GEN38")) {
    let chapter_module = await import("./bible_glyph_chapter_gen38.mjs");
    stored = chapter_module.bible_glyph_chapter_gen38();
  }
  if (equal(chapter_code, "GEN39")) {
    let chapter_module = await import("./bible_glyph_chapter_gen39.mjs");
    stored = chapter_module.bible_glyph_chapter_gen39();
  }
  if (equal(chapter_code, "GEN40")) {
    let chapter_module = await import("./bible_glyph_chapter_gen40.mjs");
    stored = chapter_module.bible_glyph_chapter_gen40();
  }
  if (equal(chapter_code, "GEN41")) {
    let chapter_module = await import("./bible_glyph_chapter_gen41.mjs");
    stored = chapter_module.bible_glyph_chapter_gen41();
  }
  if (equal(chapter_code, "GEN42")) {
    let chapter_module = await import("./bible_glyph_chapter_gen42.mjs");
    stored = chapter_module.bible_glyph_chapter_gen42();
  }
  if (equal(chapter_code, "GEN43")) {
    let chapter_module = await import("./bible_glyph_chapter_gen43.mjs");
    stored = chapter_module.bible_glyph_chapter_gen43();
  }
  if (equal(chapter_code, "GEN44")) {
    let chapter_module = await import("./bible_glyph_chapter_gen44.mjs");
    stored = chapter_module.bible_glyph_chapter_gen44();
  }
  if (equal(chapter_code, "GEN45")) {
    let chapter_module = await import("./bible_glyph_chapter_gen45.mjs");
    stored = chapter_module.bible_glyph_chapter_gen45();
  }
  if (equal(chapter_code, "GEN46")) {
    let chapter_module = await import("./bible_glyph_chapter_gen46.mjs");
    stored = chapter_module.bible_glyph_chapter_gen46();
  }
  if (equal(chapter_code, "GEN47")) {
    let chapter_module = await import("./bible_glyph_chapter_gen47.mjs");
    stored = chapter_module.bible_glyph_chapter_gen47();
  }
  if (equal(chapter_code, "GEN48")) {
    let chapter_module = await import("./bible_glyph_chapter_gen48.mjs");
    stored = chapter_module.bible_glyph_chapter_gen48();
  }
  if (equal(chapter_code, "GEN49")) {
    let chapter_module = await import("./bible_glyph_chapter_gen49.mjs");
    stored = chapter_module.bible_glyph_chapter_gen49();
  }
  if (equal(chapter_code, "GEN50")) {
    let chapter_module = await import("./bible_glyph_chapter_gen50.mjs");
    stored = chapter_module.bible_glyph_chapter_gen50();
  }
  if (equal(chapter_code, "EXO01")) {
    let chapter_module = await import("./bible_glyph_chapter_exo01.mjs");
    stored = chapter_module.bible_glyph_chapter_exo01();
  }
  if (equal(chapter_code, "EXO02")) {
    let chapter_module = await import("./bible_glyph_chapter_exo02.mjs");
    stored = chapter_module.bible_glyph_chapter_exo02();
  }
  if (equal(chapter_code, "EXO03")) {
    let chapter_module = await import("./bible_glyph_chapter_exo03.mjs");
    stored = chapter_module.bible_glyph_chapter_exo03();
  }
  if (equal(chapter_code, "EXO04")) {
    let chapter_module = await import("./bible_glyph_chapter_exo04.mjs");
    stored = chapter_module.bible_glyph_chapter_exo04();
  }
  if (equal(chapter_code, "EXO05")) {
    let chapter_module = await import("./bible_glyph_chapter_exo05.mjs");
    stored = chapter_module.bible_glyph_chapter_exo05();
  }
  if (equal(chapter_code, "EXO06")) {
    let chapter_module = await import("./bible_glyph_chapter_exo06.mjs");
    stored = chapter_module.bible_glyph_chapter_exo06();
  }
  if (equal(chapter_code, "EXO07")) {
    let chapter_module = await import("./bible_glyph_chapter_exo07.mjs");
    stored = chapter_module.bible_glyph_chapter_exo07();
  }
  if (equal(chapter_code, "EXO08")) {
    let chapter_module = await import("./bible_glyph_chapter_exo08.mjs");
    stored = chapter_module.bible_glyph_chapter_exo08();
  }
  if (equal(chapter_code, "EXO09")) {
    let chapter_module = await import("./bible_glyph_chapter_exo09.mjs");
    stored = chapter_module.bible_glyph_chapter_exo09();
  }
  if (equal(chapter_code, "EXO10")) {
    let chapter_module = await import("./bible_glyph_chapter_exo10.mjs");
    stored = chapter_module.bible_glyph_chapter_exo10();
  }
  if (equal(chapter_code, "EXO11")) {
    let chapter_module = await import("./bible_glyph_chapter_exo11.mjs");
    stored = chapter_module.bible_glyph_chapter_exo11();
  }
  if (equal(chapter_code, "EXO12")) {
    let chapter_module = await import("./bible_glyph_chapter_exo12.mjs");
    stored = chapter_module.bible_glyph_chapter_exo12();
  }
  if (equal(chapter_code, "EXO13")) {
    let chapter_module = await import("./bible_glyph_chapter_exo13.mjs");
    stored = chapter_module.bible_glyph_chapter_exo13();
  }
  if (equal(chapter_code, "EXO14")) {
    let chapter_module = await import("./bible_glyph_chapter_exo14.mjs");
    stored = chapter_module.bible_glyph_chapter_exo14();
  }
  if (equal(chapter_code, "EXO15")) {
    let chapter_module = await import("./bible_glyph_chapter_exo15.mjs");
    stored = chapter_module.bible_glyph_chapter_exo15();
  }
  if (equal(chapter_code, "EXO16")) {
    let chapter_module = await import("./bible_glyph_chapter_exo16.mjs");
    stored = chapter_module.bible_glyph_chapter_exo16();
  }
  if (equal(chapter_code, "EXO17")) {
    let chapter_module = await import("./bible_glyph_chapter_exo17.mjs");
    stored = chapter_module.bible_glyph_chapter_exo17();
  }
  if (equal(chapter_code, "EXO18")) {
    let chapter_module = await import("./bible_glyph_chapter_exo18.mjs");
    stored = chapter_module.bible_glyph_chapter_exo18();
  }
  if (equal(chapter_code, "EXO19")) {
    let chapter_module = await import("./bible_glyph_chapter_exo19.mjs");
    stored = chapter_module.bible_glyph_chapter_exo19();
  }
  if (equal(chapter_code, "EXO20")) {
    let chapter_module = await import("./bible_glyph_chapter_exo20.mjs");
    stored = chapter_module.bible_glyph_chapter_exo20();
  }
  if (equal(chapter_code, "EXO21")) {
    let chapter_module = await import("./bible_glyph_chapter_exo21.mjs");
    stored = chapter_module.bible_glyph_chapter_exo21();
  }
  if (equal(chapter_code, "EXO22")) {
    let chapter_module = await import("./bible_glyph_chapter_exo22.mjs");
    stored = chapter_module.bible_glyph_chapter_exo22();
  }
  if (equal(chapter_code, "EXO23")) {
    let chapter_module = await import("./bible_glyph_chapter_exo23.mjs");
    stored = chapter_module.bible_glyph_chapter_exo23();
  }
  if (equal(chapter_code, "EXO24")) {
    let chapter_module = await import("./bible_glyph_chapter_exo24.mjs");
    stored = chapter_module.bible_glyph_chapter_exo24();
  }
  if (equal(chapter_code, "EXO25")) {
    let chapter_module = await import("./bible_glyph_chapter_exo25.mjs");
    stored = chapter_module.bible_glyph_chapter_exo25();
  }
  if (equal(chapter_code, "EXO26")) {
    let chapter_module = await import("./bible_glyph_chapter_exo26.mjs");
    stored = chapter_module.bible_glyph_chapter_exo26();
  }
  if (equal(chapter_code, "EXO27")) {
    let chapter_module = await import("./bible_glyph_chapter_exo27.mjs");
    stored = chapter_module.bible_glyph_chapter_exo27();
  }
  if (equal(chapter_code, "EXO28")) {
    let chapter_module = await import("./bible_glyph_chapter_exo28.mjs");
    stored = chapter_module.bible_glyph_chapter_exo28();
  }
  if (equal(chapter_code, "EXO29")) {
    let chapter_module = await import("./bible_glyph_chapter_exo29.mjs");
    stored = chapter_module.bible_glyph_chapter_exo29();
  }
  if (equal(chapter_code, "EXO30")) {
    let chapter_module = await import("./bible_glyph_chapter_exo30.mjs");
    stored = chapter_module.bible_glyph_chapter_exo30();
  }
  if (equal(chapter_code, "EXO31")) {
    let chapter_module = await import("./bible_glyph_chapter_exo31.mjs");
    stored = chapter_module.bible_glyph_chapter_exo31();
  }
  if (equal(chapter_code, "EXO32")) {
    let chapter_module = await import("./bible_glyph_chapter_exo32.mjs");
    stored = chapter_module.bible_glyph_chapter_exo32();
  }
  if (equal(chapter_code, "EXO33")) {
    let chapter_module = await import("./bible_glyph_chapter_exo33.mjs");
    stored = chapter_module.bible_glyph_chapter_exo33();
  }
  if (equal(chapter_code, "EXO34")) {
    let chapter_module = await import("./bible_glyph_chapter_exo34.mjs");
    stored = chapter_module.bible_glyph_chapter_exo34();
  }
  if (equal(chapter_code, "EXO35")) {
    let chapter_module = await import("./bible_glyph_chapter_exo35.mjs");
    stored = chapter_module.bible_glyph_chapter_exo35();
  }
  if (equal(chapter_code, "EXO36")) {
    let chapter_module = await import("./bible_glyph_chapter_exo36.mjs");
    stored = chapter_module.bible_glyph_chapter_exo36();
  }
  if (equal(chapter_code, "EXO37")) {
    let chapter_module = await import("./bible_glyph_chapter_exo37.mjs");
    stored = chapter_module.bible_glyph_chapter_exo37();
  }
  if (equal(chapter_code, "EXO38")) {
    let chapter_module = await import("./bible_glyph_chapter_exo38.mjs");
    stored = chapter_module.bible_glyph_chapter_exo38();
  }
  if (equal(chapter_code, "EXO39")) {
    let chapter_module = await import("./bible_glyph_chapter_exo39.mjs");
    stored = chapter_module.bible_glyph_chapter_exo39();
  }
  if (equal(chapter_code, "EXO40")) {
    let chapter_module = await import("./bible_glyph_chapter_exo40.mjs");
    stored = chapter_module.bible_glyph_chapter_exo40();
  }
  if (equal(chapter_code, "LEV01")) {
    let chapter_module = await import("./bible_glyph_chapter_lev01.mjs");
    stored = chapter_module.bible_glyph_chapter_lev01();
  }
  if (equal(chapter_code, "LEV02")) {
    let chapter_module = await import("./bible_glyph_chapter_lev02.mjs");
    stored = chapter_module.bible_glyph_chapter_lev02();
  }
  if (equal(chapter_code, "LEV03")) {
    let chapter_module = await import("./bible_glyph_chapter_lev03.mjs");
    stored = chapter_module.bible_glyph_chapter_lev03();
  }
  if (equal(chapter_code, "LEV04")) {
    let chapter_module = await import("./bible_glyph_chapter_lev04.mjs");
    stored = chapter_module.bible_glyph_chapter_lev04();
  }
  if (equal(chapter_code, "LEV05")) {
    let chapter_module = await import("./bible_glyph_chapter_lev05.mjs");
    stored = chapter_module.bible_glyph_chapter_lev05();
  }
  if (equal(chapter_code, "LEV06")) {
    let chapter_module = await import("./bible_glyph_chapter_lev06.mjs");
    stored = chapter_module.bible_glyph_chapter_lev06();
  }
  if (equal(chapter_code, "LEV07")) {
    let chapter_module = await import("./bible_glyph_chapter_lev07.mjs");
    stored = chapter_module.bible_glyph_chapter_lev07();
  }
  if (equal(chapter_code, "LEV08")) {
    let chapter_module = await import("./bible_glyph_chapter_lev08.mjs");
    stored = chapter_module.bible_glyph_chapter_lev08();
  }
  if (equal(chapter_code, "LEV09")) {
    let chapter_module = await import("./bible_glyph_chapter_lev09.mjs");
    stored = chapter_module.bible_glyph_chapter_lev09();
  }
  if (equal(chapter_code, "LEV10")) {
    let chapter_module = await import("./bible_glyph_chapter_lev10.mjs");
    stored = chapter_module.bible_glyph_chapter_lev10();
  }
  if (equal(chapter_code, "LEV11")) {
    let chapter_module = await import("./bible_glyph_chapter_lev11.mjs");
    stored = chapter_module.bible_glyph_chapter_lev11();
  }
  if (equal(chapter_code, "LEV12")) {
    let chapter_module = await import("./bible_glyph_chapter_lev12.mjs");
    stored = chapter_module.bible_glyph_chapter_lev12();
  }
  if (equal(chapter_code, "LEV13")) {
    let chapter_module = await import("./bible_glyph_chapter_lev13.mjs");
    stored = chapter_module.bible_glyph_chapter_lev13();
  }
  if (equal(chapter_code, "LEV14")) {
    let chapter_module = await import("./bible_glyph_chapter_lev14.mjs");
    stored = chapter_module.bible_glyph_chapter_lev14();
  }
  if (equal(chapter_code, "LEV15")) {
    let chapter_module = await import("./bible_glyph_chapter_lev15.mjs");
    stored = chapter_module.bible_glyph_chapter_lev15();
  }
  if (equal(chapter_code, "LEV16")) {
    let chapter_module = await import("./bible_glyph_chapter_lev16.mjs");
    stored = chapter_module.bible_glyph_chapter_lev16();
  }
  if (equal(chapter_code, "LEV17")) {
    let chapter_module = await import("./bible_glyph_chapter_lev17.mjs");
    stored = chapter_module.bible_glyph_chapter_lev17();
  }
  if (equal(chapter_code, "LEV18")) {
    let chapter_module = await import("./bible_glyph_chapter_lev18.mjs");
    stored = chapter_module.bible_glyph_chapter_lev18();
  }
  if (equal(chapter_code, "LEV19")) {
    let chapter_module = await import("./bible_glyph_chapter_lev19.mjs");
    stored = chapter_module.bible_glyph_chapter_lev19();
  }
  if (equal(chapter_code, "LEV20")) {
    let chapter_module = await import("./bible_glyph_chapter_lev20.mjs");
    stored = chapter_module.bible_glyph_chapter_lev20();
  }
  if (equal(chapter_code, "LEV21")) {
    let chapter_module = await import("./bible_glyph_chapter_lev21.mjs");
    stored = chapter_module.bible_glyph_chapter_lev21();
  }
  if (equal(chapter_code, "LEV22")) {
    let chapter_module = await import("./bible_glyph_chapter_lev22.mjs");
    stored = chapter_module.bible_glyph_chapter_lev22();
  }
  if (equal(chapter_code, "LEV23")) {
    let chapter_module = await import("./bible_glyph_chapter_lev23.mjs");
    stored = chapter_module.bible_glyph_chapter_lev23();
  }
  if (equal(chapter_code, "LEV24")) {
    let chapter_module = await import("./bible_glyph_chapter_lev24.mjs");
    stored = chapter_module.bible_glyph_chapter_lev24();
  }
  if (equal(chapter_code, "LEV25")) {
    let chapter_module = await import("./bible_glyph_chapter_lev25.mjs");
    stored = chapter_module.bible_glyph_chapter_lev25();
  }
  if (equal(chapter_code, "LEV26")) {
    let chapter_module = await import("./bible_glyph_chapter_lev26.mjs");
    stored = chapter_module.bible_glyph_chapter_lev26();
  }
  if (equal(chapter_code, "LEV27")) {
    let chapter_module = await import("./bible_glyph_chapter_lev27.mjs");
    stored = chapter_module.bible_glyph_chapter_lev27();
  }
  if (equal(chapter_code, "NUM01")) {
    let chapter_module = await import("./bible_glyph_chapter_num01.mjs");
    stored = chapter_module.bible_glyph_chapter_num01();
  }
  if (equal(chapter_code, "NUM02")) {
    let chapter_module = await import("./bible_glyph_chapter_num02.mjs");
    stored = chapter_module.bible_glyph_chapter_num02();
  }
  if (equal(chapter_code, "NUM03")) {
    let chapter_module = await import("./bible_glyph_chapter_num03.mjs");
    stored = chapter_module.bible_glyph_chapter_num03();
  }
  if (equal(chapter_code, "NUM04")) {
    let chapter_module = await import("./bible_glyph_chapter_num04.mjs");
    stored = chapter_module.bible_glyph_chapter_num04();
  }
  if (equal(chapter_code, "NUM05")) {
    let chapter_module = await import("./bible_glyph_chapter_num05.mjs");
    stored = chapter_module.bible_glyph_chapter_num05();
  }
  if (equal(chapter_code, "NUM06")) {
    let chapter_module = await import("./bible_glyph_chapter_num06.mjs");
    stored = chapter_module.bible_glyph_chapter_num06();
  }
  if (equal(chapter_code, "NUM07")) {
    let chapter_module = await import("./bible_glyph_chapter_num07.mjs");
    stored = chapter_module.bible_glyph_chapter_num07();
  }
  if (equal(chapter_code, "NUM08")) {
    let chapter_module = await import("./bible_glyph_chapter_num08.mjs");
    stored = chapter_module.bible_glyph_chapter_num08();
  }
  if (equal(chapter_code, "NUM09")) {
    let chapter_module = await import("./bible_glyph_chapter_num09.mjs");
    stored = chapter_module.bible_glyph_chapter_num09();
  }
  if (equal(chapter_code, "NUM10")) {
    let chapter_module = await import("./bible_glyph_chapter_num10.mjs");
    stored = chapter_module.bible_glyph_chapter_num10();
  }
  if (equal(chapter_code, "NUM11")) {
    let chapter_module = await import("./bible_glyph_chapter_num11.mjs");
    stored = chapter_module.bible_glyph_chapter_num11();
  }
  if (equal(chapter_code, "NUM12")) {
    let chapter_module = await import("./bible_glyph_chapter_num12.mjs");
    stored = chapter_module.bible_glyph_chapter_num12();
  }
  if (equal(chapter_code, "NUM13")) {
    let chapter_module = await import("./bible_glyph_chapter_num13.mjs");
    stored = chapter_module.bible_glyph_chapter_num13();
  }
  if (equal(chapter_code, "NUM14")) {
    let chapter_module = await import("./bible_glyph_chapter_num14.mjs");
    stored = chapter_module.bible_glyph_chapter_num14();
  }
  if (equal(chapter_code, "NUM15")) {
    let chapter_module = await import("./bible_glyph_chapter_num15.mjs");
    stored = chapter_module.bible_glyph_chapter_num15();
  }
  if (equal(chapter_code, "NUM16")) {
    let chapter_module = await import("./bible_glyph_chapter_num16.mjs");
    stored = chapter_module.bible_glyph_chapter_num16();
  }
  if (equal(chapter_code, "NUM17")) {
    let chapter_module = await import("./bible_glyph_chapter_num17.mjs");
    stored = chapter_module.bible_glyph_chapter_num17();
  }
  if (equal(chapter_code, "NUM18")) {
    let chapter_module = await import("./bible_glyph_chapter_num18.mjs");
    stored = chapter_module.bible_glyph_chapter_num18();
  }
  if (equal(chapter_code, "NUM19")) {
    let chapter_module = await import("./bible_glyph_chapter_num19.mjs");
    stored = chapter_module.bible_glyph_chapter_num19();
  }
  if (equal(chapter_code, "NUM20")) {
    let chapter_module = await import("./bible_glyph_chapter_num20.mjs");
    stored = chapter_module.bible_glyph_chapter_num20();
  }
  if (equal(chapter_code, "NUM21")) {
    let chapter_module = await import("./bible_glyph_chapter_num21.mjs");
    stored = chapter_module.bible_glyph_chapter_num21();
  }
  if (equal(chapter_code, "NUM22")) {
    let chapter_module = await import("./bible_glyph_chapter_num22.mjs");
    stored = chapter_module.bible_glyph_chapter_num22();
  }
  if (equal(chapter_code, "NUM23")) {
    let chapter_module = await import("./bible_glyph_chapter_num23.mjs");
    stored = chapter_module.bible_glyph_chapter_num23();
  }
  if (equal(chapter_code, "NUM24")) {
    let chapter_module = await import("./bible_glyph_chapter_num24.mjs");
    stored = chapter_module.bible_glyph_chapter_num24();
  }
  if (equal(chapter_code, "NUM25")) {
    let chapter_module = await import("./bible_glyph_chapter_num25.mjs");
    stored = chapter_module.bible_glyph_chapter_num25();
  }
  if (equal(chapter_code, "NUM26")) {
    let chapter_module = await import("./bible_glyph_chapter_num26.mjs");
    stored = chapter_module.bible_glyph_chapter_num26();
  }
  if (equal(chapter_code, "NUM27")) {
    let chapter_module = await import("./bible_glyph_chapter_num27.mjs");
    stored = chapter_module.bible_glyph_chapter_num27();
  }
  if (equal(chapter_code, "NUM28")) {
    let chapter_module = await import("./bible_glyph_chapter_num28.mjs");
    stored = chapter_module.bible_glyph_chapter_num28();
  }
  if (equal(chapter_code, "NUM29")) {
    let chapter_module = await import("./bible_glyph_chapter_num29.mjs");
    stored = chapter_module.bible_glyph_chapter_num29();
  }
  if (equal(chapter_code, "NUM30")) {
    let chapter_module = await import("./bible_glyph_chapter_num30.mjs");
    stored = chapter_module.bible_glyph_chapter_num30();
  }
  if (equal(chapter_code, "NUM31")) {
    let chapter_module = await import("./bible_glyph_chapter_num31.mjs");
    stored = chapter_module.bible_glyph_chapter_num31();
  }
  if (equal(chapter_code, "NUM32")) {
    let chapter_module = await import("./bible_glyph_chapter_num32.mjs");
    stored = chapter_module.bible_glyph_chapter_num32();
  }
  if (equal(chapter_code, "NUM33")) {
    let chapter_module = await import("./bible_glyph_chapter_num33.mjs");
    stored = chapter_module.bible_glyph_chapter_num33();
  }
  if (equal(chapter_code, "NUM34")) {
    let chapter_module = await import("./bible_glyph_chapter_num34.mjs");
    stored = chapter_module.bible_glyph_chapter_num34();
  }
  if (equal(chapter_code, "NUM35")) {
    let chapter_module = await import("./bible_glyph_chapter_num35.mjs");
    stored = chapter_module.bible_glyph_chapter_num35();
  }
  if (equal(chapter_code, "NUM36")) {
    let chapter_module = await import("./bible_glyph_chapter_num36.mjs");
    stored = chapter_module.bible_glyph_chapter_num36();
  }
  if (equal(chapter_code, "DEU01")) {
    let chapter_module = await import("./bible_glyph_chapter_deu01.mjs");
    stored = chapter_module.bible_glyph_chapter_deu01();
  }
  if (equal(chapter_code, "DEU02")) {
    let chapter_module = await import("./bible_glyph_chapter_deu02.mjs");
    stored = chapter_module.bible_glyph_chapter_deu02();
  }
  if (equal(chapter_code, "DEU03")) {
    let chapter_module = await import("./bible_glyph_chapter_deu03.mjs");
    stored = chapter_module.bible_glyph_chapter_deu03();
  }
  if (equal(chapter_code, "DEU04")) {
    let chapter_module = await import("./bible_glyph_chapter_deu04.mjs");
    stored = chapter_module.bible_glyph_chapter_deu04();
  }
  if (equal(chapter_code, "DEU05")) {
    let chapter_module = await import("./bible_glyph_chapter_deu05.mjs");
    stored = chapter_module.bible_glyph_chapter_deu05();
  }
  if (equal(chapter_code, "DEU06")) {
    let chapter_module = await import("./bible_glyph_chapter_deu06.mjs");
    stored = chapter_module.bible_glyph_chapter_deu06();
  }
  if (equal(chapter_code, "DEU07")) {
    let chapter_module = await import("./bible_glyph_chapter_deu07.mjs");
    stored = chapter_module.bible_glyph_chapter_deu07();
  }
  if (equal(chapter_code, "DEU08")) {
    let chapter_module = await import("./bible_glyph_chapter_deu08.mjs");
    stored = chapter_module.bible_glyph_chapter_deu08();
  }
  if (equal(chapter_code, "DEU09")) {
    let chapter_module = await import("./bible_glyph_chapter_deu09.mjs");
    stored = chapter_module.bible_glyph_chapter_deu09();
  }
  if (equal(chapter_code, "DEU10")) {
    let chapter_module = await import("./bible_glyph_chapter_deu10.mjs");
    stored = chapter_module.bible_glyph_chapter_deu10();
  }
  if (equal(chapter_code, "DEU11")) {
    let chapter_module = await import("./bible_glyph_chapter_deu11.mjs");
    stored = chapter_module.bible_glyph_chapter_deu11();
  }
  if (equal(chapter_code, "DEU12")) {
    let chapter_module = await import("./bible_glyph_chapter_deu12.mjs");
    stored = chapter_module.bible_glyph_chapter_deu12();
  }
  if (equal(chapter_code, "DEU13")) {
    let chapter_module = await import("./bible_glyph_chapter_deu13.mjs");
    stored = chapter_module.bible_glyph_chapter_deu13();
  }
  if (equal(chapter_code, "DEU14")) {
    let chapter_module = await import("./bible_glyph_chapter_deu14.mjs");
    stored = chapter_module.bible_glyph_chapter_deu14();
  }
  if (equal(chapter_code, "DEU15")) {
    let chapter_module = await import("./bible_glyph_chapter_deu15.mjs");
    stored = chapter_module.bible_glyph_chapter_deu15();
  }
  if (equal(chapter_code, "DEU16")) {
    let chapter_module = await import("./bible_glyph_chapter_deu16.mjs");
    stored = chapter_module.bible_glyph_chapter_deu16();
  }
  if (equal(chapter_code, "DEU17")) {
    let chapter_module = await import("./bible_glyph_chapter_deu17.mjs");
    stored = chapter_module.bible_glyph_chapter_deu17();
  }
  if (equal(chapter_code, "DEU18")) {
    let chapter_module = await import("./bible_glyph_chapter_deu18.mjs");
    stored = chapter_module.bible_glyph_chapter_deu18();
  }
  if (equal(chapter_code, "DEU19")) {
    let chapter_module = await import("./bible_glyph_chapter_deu19.mjs");
    stored = chapter_module.bible_glyph_chapter_deu19();
  }
  if (equal(chapter_code, "DEU20")) {
    let chapter_module = await import("./bible_glyph_chapter_deu20.mjs");
    stored = chapter_module.bible_glyph_chapter_deu20();
  }
  if (equal(chapter_code, "DEU21")) {
    let chapter_module = await import("./bible_glyph_chapter_deu21.mjs");
    stored = chapter_module.bible_glyph_chapter_deu21();
  }
  if (equal(chapter_code, "DEU22")) {
    let chapter_module = await import("./bible_glyph_chapter_deu22.mjs");
    stored = chapter_module.bible_glyph_chapter_deu22();
  }
  if (equal(chapter_code, "DEU23")) {
    let chapter_module = await import("./bible_glyph_chapter_deu23.mjs");
    stored = chapter_module.bible_glyph_chapter_deu23();
  }
  if (equal(chapter_code, "DEU24")) {
    let chapter_module = await import("./bible_glyph_chapter_deu24.mjs");
    stored = chapter_module.bible_glyph_chapter_deu24();
  }
  if (equal(chapter_code, "DEU25")) {
    let chapter_module = await import("./bible_glyph_chapter_deu25.mjs");
    stored = chapter_module.bible_glyph_chapter_deu25();
  }
  if (equal(chapter_code, "DEU26")) {
    let chapter_module = await import("./bible_glyph_chapter_deu26.mjs");
    stored = chapter_module.bible_glyph_chapter_deu26();
  }
  if (equal(chapter_code, "DEU27")) {
    let chapter_module = await import("./bible_glyph_chapter_deu27.mjs");
    stored = chapter_module.bible_glyph_chapter_deu27();
  }
  if (equal(chapter_code, "DEU28")) {
    let chapter_module = await import("./bible_glyph_chapter_deu28.mjs");
    stored = chapter_module.bible_glyph_chapter_deu28();
  }
  if (equal(chapter_code, "DEU29")) {
    let chapter_module = await import("./bible_glyph_chapter_deu29.mjs");
    stored = chapter_module.bible_glyph_chapter_deu29();
  }
  if (equal(chapter_code, "DEU30")) {
    let chapter_module = await import("./bible_glyph_chapter_deu30.mjs");
    stored = chapter_module.bible_glyph_chapter_deu30();
  }
  if (equal(chapter_code, "DEU31")) {
    let chapter_module = await import("./bible_glyph_chapter_deu31.mjs");
    stored = chapter_module.bible_glyph_chapter_deu31();
  }
  if (equal(chapter_code, "DEU32")) {
    let chapter_module = await import("./bible_glyph_chapter_deu32.mjs");
    stored = chapter_module.bible_glyph_chapter_deu32();
  }
  if (equal(chapter_code, "DEU33")) {
    let chapter_module = await import("./bible_glyph_chapter_deu33.mjs");
    stored = chapter_module.bible_glyph_chapter_deu33();
  }
  if (equal(chapter_code, "DEU34")) {
    let chapter_module = await import("./bible_glyph_chapter_deu34.mjs");
    stored = chapter_module.bible_glyph_chapter_deu34();
  }
  if (equal(chapter_code, "JOS01")) {
    let chapter_module = await import("./bible_glyph_chapter_jos01.mjs");
    stored = chapter_module.bible_glyph_chapter_jos01();
  }
  if (equal(chapter_code, "JOS02")) {
    let chapter_module = await import("./bible_glyph_chapter_jos02.mjs");
    stored = chapter_module.bible_glyph_chapter_jos02();
  }
  if (equal(chapter_code, "JOS03")) {
    let chapter_module = await import("./bible_glyph_chapter_jos03.mjs");
    stored = chapter_module.bible_glyph_chapter_jos03();
  }
  if (equal(chapter_code, "JOS04")) {
    let chapter_module = await import("./bible_glyph_chapter_jos04.mjs");
    stored = chapter_module.bible_glyph_chapter_jos04();
  }
  if (equal(chapter_code, "JOS05")) {
    let chapter_module = await import("./bible_glyph_chapter_jos05.mjs");
    stored = chapter_module.bible_glyph_chapter_jos05();
  }
  if (equal(chapter_code, "JOS06")) {
    let chapter_module = await import("./bible_glyph_chapter_jos06.mjs");
    stored = chapter_module.bible_glyph_chapter_jos06();
  }
  if (equal(chapter_code, "JOS07")) {
    let chapter_module = await import("./bible_glyph_chapter_jos07.mjs");
    stored = chapter_module.bible_glyph_chapter_jos07();
  }
  if (equal(chapter_code, "JOS08")) {
    let chapter_module = await import("./bible_glyph_chapter_jos08.mjs");
    stored = chapter_module.bible_glyph_chapter_jos08();
  }
  if (equal(chapter_code, "JOS09")) {
    let chapter_module = await import("./bible_glyph_chapter_jos09.mjs");
    stored = chapter_module.bible_glyph_chapter_jos09();
  }
  if (equal(chapter_code, "JOS10")) {
    let chapter_module = await import("./bible_glyph_chapter_jos10.mjs");
    stored = chapter_module.bible_glyph_chapter_jos10();
  }
  if (equal(chapter_code, "JOS11")) {
    let chapter_module = await import("./bible_glyph_chapter_jos11.mjs");
    stored = chapter_module.bible_glyph_chapter_jos11();
  }
  if (equal(chapter_code, "JOS12")) {
    let chapter_module = await import("./bible_glyph_chapter_jos12.mjs");
    stored = chapter_module.bible_glyph_chapter_jos12();
  }
  if (equal(chapter_code, "JOS13")) {
    let chapter_module = await import("./bible_glyph_chapter_jos13.mjs");
    stored = chapter_module.bible_glyph_chapter_jos13();
  }
  if (equal(chapter_code, "JOS14")) {
    let chapter_module = await import("./bible_glyph_chapter_jos14.mjs");
    stored = chapter_module.bible_glyph_chapter_jos14();
  }
  if (equal(chapter_code, "JOS15")) {
    let chapter_module = await import("./bible_glyph_chapter_jos15.mjs");
    stored = chapter_module.bible_glyph_chapter_jos15();
  }
  if (equal(chapter_code, "JOS16")) {
    let chapter_module = await import("./bible_glyph_chapter_jos16.mjs");
    stored = chapter_module.bible_glyph_chapter_jos16();
  }
  if (equal(chapter_code, "JOS17")) {
    let chapter_module = await import("./bible_glyph_chapter_jos17.mjs");
    stored = chapter_module.bible_glyph_chapter_jos17();
  }
  if (equal(chapter_code, "JOS18")) {
    let chapter_module = await import("./bible_glyph_chapter_jos18.mjs");
    stored = chapter_module.bible_glyph_chapter_jos18();
  }
  if (equal(chapter_code, "JOS19")) {
    let chapter_module = await import("./bible_glyph_chapter_jos19.mjs");
    stored = chapter_module.bible_glyph_chapter_jos19();
  }
  if (equal(chapter_code, "JOS20")) {
    let chapter_module = await import("./bible_glyph_chapter_jos20.mjs");
    stored = chapter_module.bible_glyph_chapter_jos20();
  }
  if (equal(chapter_code, "JOS21")) {
    let chapter_module = await import("./bible_glyph_chapter_jos21.mjs");
    stored = chapter_module.bible_glyph_chapter_jos21();
  }
  if (equal(chapter_code, "JOS22")) {
    let chapter_module = await import("./bible_glyph_chapter_jos22.mjs");
    stored = chapter_module.bible_glyph_chapter_jos22();
  }
  if (equal(chapter_code, "JOS23")) {
    let chapter_module = await import("./bible_glyph_chapter_jos23.mjs");
    stored = chapter_module.bible_glyph_chapter_jos23();
  }
  if (equal(chapter_code, "JOS24")) {
    let chapter_module = await import("./bible_glyph_chapter_jos24.mjs");
    stored = chapter_module.bible_glyph_chapter_jos24();
  }
  if (equal(chapter_code, "JDG01")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg01.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg01();
  }
  if (equal(chapter_code, "JDG02")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg02.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg02();
  }
  if (equal(chapter_code, "JDG03")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg03.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg03();
  }
  if (equal(chapter_code, "JDG04")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg04.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg04();
  }
  if (equal(chapter_code, "JDG05")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg05.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg05();
  }
  if (equal(chapter_code, "JDG06")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg06.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg06();
  }
  if (equal(chapter_code, "JDG07")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg07.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg07();
  }
  if (equal(chapter_code, "JDG08")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg08.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg08();
  }
  if (equal(chapter_code, "JDG09")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg09.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg09();
  }
  if (equal(chapter_code, "JDG10")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg10.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg10();
  }
  if (equal(chapter_code, "JDG11")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg11.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg11();
  }
  if (equal(chapter_code, "JDG12")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg12.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg12();
  }
  if (equal(chapter_code, "JDG13")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg13.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg13();
  }
  if (equal(chapter_code, "JDG14")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg14.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg14();
  }
  if (equal(chapter_code, "JDG15")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg15.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg15();
  }
  if (equal(chapter_code, "JDG16")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg16.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg16();
  }
  if (equal(chapter_code, "JDG17")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg17.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg17();
  }
  if (equal(chapter_code, "JDG18")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg18.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg18();
  }
  if (equal(chapter_code, "JDG19")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg19.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg19();
  }
  if (equal(chapter_code, "JDG20")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg20.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg20();
  }
  if (equal(chapter_code, "JDG21")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg21.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg21();
  }
  if (equal(chapter_code, "RUT01")) {
    let chapter_module = await import("./bible_glyph_chapter_rut01.mjs");
    stored = chapter_module.bible_glyph_chapter_rut01();
  }
  if (equal(chapter_code, "RUT02")) {
    let chapter_module = await import("./bible_glyph_chapter_rut02.mjs");
    stored = chapter_module.bible_glyph_chapter_rut02();
  }
  if (equal(chapter_code, "RUT03")) {
    let chapter_module = await import("./bible_glyph_chapter_rut03.mjs");
    stored = chapter_module.bible_glyph_chapter_rut03();
  }
  if (equal(chapter_code, "RUT04")) {
    let chapter_module = await import("./bible_glyph_chapter_rut04.mjs");
    stored = chapter_module.bible_glyph_chapter_rut04();
  }
  if (equal(chapter_code, "1SA01")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa01.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa01();
  }
  if (equal(chapter_code, "1SA02")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa02.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa02();
  }
  if (equal(chapter_code, "1SA03")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa03.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa03();
  }
  if (equal(chapter_code, "1SA04")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa04.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa04();
  }
  if (equal(chapter_code, "1SA05")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa05.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa05();
  }
  if (equal(chapter_code, "1SA06")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa06.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa06();
  }
  if (equal(chapter_code, "1SA07")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa07.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa07();
  }
  if (equal(chapter_code, "1SA08")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa08.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa08();
  }
  if (equal(chapter_code, "1SA09")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa09.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa09();
  }
  if (equal(chapter_code, "1SA10")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa10.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa10();
  }
  if (equal(chapter_code, "1SA11")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa11.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa11();
  }
  if (equal(chapter_code, "1SA12")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa12.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa12();
  }
  if (equal(chapter_code, "1SA13")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa13.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa13();
  }
  if (equal(chapter_code, "1SA14")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa14.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa14();
  }
  if (equal(chapter_code, "1SA15")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa15.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa15();
  }
  if (equal(chapter_code, "1SA16")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa16.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa16();
  }
  if (equal(chapter_code, "1SA17")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa17.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa17();
  }
  if (equal(chapter_code, "1SA18")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa18.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa18();
  }
  if (equal(chapter_code, "1SA19")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa19.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa19();
  }
  if (equal(chapter_code, "1SA20")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa20.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa20();
  }
  if (equal(chapter_code, "1SA21")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa21.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa21();
  }
  if (equal(chapter_code, "1SA22")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa22.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa22();
  }
  if (equal(chapter_code, "1SA23")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa23.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa23();
  }
  if (equal(chapter_code, "1SA24")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa24.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa24();
  }
  if (equal(chapter_code, "1SA25")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa25.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa25();
  }
  if (equal(chapter_code, "1SA26")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa26.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa26();
  }
  if (equal(chapter_code, "1SA27")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa27.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa27();
  }
  if (equal(chapter_code, "1SA28")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa28.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa28();
  }
  if (equal(chapter_code, "1SA29")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa29.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa29();
  }
  if (equal(chapter_code, "1SA30")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa30.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa30();
  }
  if (equal(chapter_code, "1SA31")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa31.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa31();
  }
  if (equal(chapter_code, "2SA01")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa01.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa01();
  }
  if (equal(chapter_code, "2SA02")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa02.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa02();
  }
  if (equal(chapter_code, "2SA03")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa03.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa03();
  }
  if (equal(chapter_code, "2SA05")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa05.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa05();
  }
  if (equal(chapter_code, "2SA06")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa06.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa06();
  }
  if (equal(chapter_code, "2SA07")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa07.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa07();
  }
  if (equal(chapter_code, "2SA11")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa11.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa11();
  }
  if (equal(chapter_code, "2SA12")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa12.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa12();
  }
  if (equal(chapter_code, "1KI01")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki01.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki01();
  }
  if (equal(chapter_code, "1KI02")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki02.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki02();
  }
  if (equal(chapter_code, "1KI03")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki03.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki03();
  }
  if (equal(chapter_code, "1KI08")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki08.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki08();
  }
  if (equal(chapter_code, "1KI12")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki12.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki12();
  }
  if (equal(chapter_code, "1KI13")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki13.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki13();
  }
  if (equal(chapter_code, "1KI17")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki17.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki17();
  }
  if (equal(chapter_code, "1KI18")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki18.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki18();
  }
  if (equal(chapter_code, "1KI19")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki19.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki19();
  }
  if (equal(chapter_code, "1KI20")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki20.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki20();
  }
  if (equal(chapter_code, "1KI21")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki21.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki21();
  }
  if (equal(chapter_code, "1KI22")) {
    let chapter_module = await import("./bible_glyph_chapter_1ki22.mjs");
    stored = chapter_module.bible_glyph_chapter_1ki22();
  }
  if (equal(chapter_code, "2KI01")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki01.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki01();
  }
  if (equal(chapter_code, "2KI02")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki02.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki02();
  }
  if (equal(chapter_code, "2KI03")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki03.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki03();
  }
  if (equal(chapter_code, "2KI04")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki04.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki04();
  }
  if (equal(chapter_code, "2KI05")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki05.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki05();
  }
  if (equal(chapter_code, "2KI06")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki06.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki06();
  }
  if (equal(chapter_code, "2KI09")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki09.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki09();
  }
  if (equal(chapter_code, "2KI10")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki10.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki10();
  }
  if (equal(chapter_code, "2KI11")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki11.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki11();
  }
  if (equal(chapter_code, "2KI17")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki17.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki17();
  }
  if (equal(chapter_code, "2KI22")) {
    let chapter_module = await import("./bible_glyph_chapter_2ki22.mjs");
    stored = chapter_module.bible_glyph_chapter_2ki22();
  }
  if (equal(chapter_code, "1CH29")) {
    let chapter_module = await import("./bible_glyph_chapter_1ch29.mjs");
    stored = chapter_module.bible_glyph_chapter_1ch29();
  }
  if (equal(chapter_code, "2CH06")) {
    let chapter_module = await import("./bible_glyph_chapter_2ch06.mjs");
    stored = chapter_module.bible_glyph_chapter_2ch06();
  }
  if (equal(chapter_code, "2CH07")) {
    let chapter_module = await import("./bible_glyph_chapter_2ch07.mjs");
    stored = chapter_module.bible_glyph_chapter_2ch07();
  }
  if (equal(chapter_code, "2CH20")) {
    let chapter_module = await import("./bible_glyph_chapter_2ch20.mjs");
    stored = chapter_module.bible_glyph_chapter_2ch20();
  }
  if (equal(chapter_code, "2CH34")) {
    let chapter_module = await import("./bible_glyph_chapter_2ch34.mjs");
    stored = chapter_module.bible_glyph_chapter_2ch34();
  }
  if (equal(chapter_code, "EZR01")) {
    let chapter_module = await import("./bible_glyph_chapter_ezr01.mjs");
    stored = chapter_module.bible_glyph_chapter_ezr01();
  }
  if (equal(chapter_code, "EZR03")) {
    let chapter_module = await import("./bible_glyph_chapter_ezr03.mjs");
    stored = chapter_module.bible_glyph_chapter_ezr03();
  }
  if (equal(chapter_code, "NEH01")) {
    let chapter_module = await import("./bible_glyph_chapter_neh01.mjs");
    stored = chapter_module.bible_glyph_chapter_neh01();
  }
  if (equal(chapter_code, "NEH08")) {
    let chapter_module = await import("./bible_glyph_chapter_neh08.mjs");
    stored = chapter_module.bible_glyph_chapter_neh08();
  }
  if (equal(chapter_code, "NEH09")) {
    let chapter_module = await import("./bible_glyph_chapter_neh09.mjs");
    stored = chapter_module.bible_glyph_chapter_neh09();
  }
  if (equal(chapter_code, "EST01")) {
    let chapter_module = await import("./bible_glyph_chapter_est01.mjs");
    stored = chapter_module.bible_glyph_chapter_est01();
  }
  if (equal(chapter_code, "EST04")) {
    let chapter_module = await import("./bible_glyph_chapter_est04.mjs");
    stored = chapter_module.bible_glyph_chapter_est04();
  }
  if (equal(chapter_code, "JOB01")) {
    let chapter_module = await import("./bible_glyph_chapter_job01.mjs");
    stored = chapter_module.bible_glyph_chapter_job01();
  }
  if (equal(chapter_code, "JOB03")) {
    let chapter_module = await import("./bible_glyph_chapter_job03.mjs");
    stored = chapter_module.bible_glyph_chapter_job03();
  }
  if (equal(chapter_code, "JOB19")) {
    let chapter_module = await import("./bible_glyph_chapter_job19.mjs");
    stored = chapter_module.bible_glyph_chapter_job19();
  }
  if (equal(chapter_code, "JOB23")) {
    let chapter_module = await import("./bible_glyph_chapter_job23.mjs");
    stored = chapter_module.bible_glyph_chapter_job23();
  }
  if (equal(chapter_code, "JOB28")) {
    let chapter_module = await import("./bible_glyph_chapter_job28.mjs");
    stored = chapter_module.bible_glyph_chapter_job28();
  }
  if (equal(chapter_code, "JOB31")) {
    let chapter_module = await import("./bible_glyph_chapter_job31.mjs");
    stored = chapter_module.bible_glyph_chapter_job31();
  }
  if (equal(chapter_code, "JOB38")) {
    let chapter_module = await import("./bible_glyph_chapter_job38.mjs");
    stored = chapter_module.bible_glyph_chapter_job38();
  }
  if (equal(chapter_code, "JOB42")) {
    let chapter_module = await import("./bible_glyph_chapter_job42.mjs");
    stored = chapter_module.bible_glyph_chapter_job42();
  }
  if (equal(chapter_code, "PSA001")) {
    let chapter_module = await import("./bible_glyph_chapter_psa001.mjs");
    stored = chapter_module.bible_glyph_chapter_psa001();
  }
  if (equal(chapter_code, "PSA008")) {
    let chapter_module = await import("./bible_glyph_chapter_psa008.mjs");
    stored = chapter_module.bible_glyph_chapter_psa008();
  }
  if (equal(chapter_code, "PSA015")) {
    let chapter_module = await import("./bible_glyph_chapter_psa015.mjs");
    stored = chapter_module.bible_glyph_chapter_psa015();
  }
  if (equal(chapter_code, "PSA019")) {
    let chapter_module = await import("./bible_glyph_chapter_psa019.mjs");
    stored = chapter_module.bible_glyph_chapter_psa019();
  }
  if (equal(chapter_code, "PSA022")) {
    let chapter_module = await import("./bible_glyph_chapter_psa022.mjs");
    stored = chapter_module.bible_glyph_chapter_psa022();
  }
  if (equal(chapter_code, "PSA023")) {
    let chapter_module = await import("./bible_glyph_chapter_psa023.mjs");
    stored = chapter_module.bible_glyph_chapter_psa023();
  }
  if (equal(chapter_code, "PSA027")) {
    let chapter_module = await import("./bible_glyph_chapter_psa027.mjs");
    stored = chapter_module.bible_glyph_chapter_psa027();
  }
  if (equal(chapter_code, "PSA029")) {
    let chapter_module = await import("./bible_glyph_chapter_psa029.mjs");
    stored = chapter_module.bible_glyph_chapter_psa029();
  }
  if (equal(chapter_code, "PSA032")) {
    let chapter_module = await import("./bible_glyph_chapter_psa032.mjs");
    stored = chapter_module.bible_glyph_chapter_psa032();
  }
  if (equal(chapter_code, "PSA034")) {
    let chapter_module = await import("./bible_glyph_chapter_psa034.mjs");
    stored = chapter_module.bible_glyph_chapter_psa034();
  }
  if (equal(chapter_code, "PSA042")) {
    let chapter_module = await import("./bible_glyph_chapter_psa042.mjs");
    stored = chapter_module.bible_glyph_chapter_psa042();
  }
  if (equal(chapter_code, "PSA046")) {
    let chapter_module = await import("./bible_glyph_chapter_psa046.mjs");
    stored = chapter_module.bible_glyph_chapter_psa046();
  }
  if (equal(chapter_code, "PSA051")) {
    let chapter_module = await import("./bible_glyph_chapter_psa051.mjs");
    stored = chapter_module.bible_glyph_chapter_psa051();
  }
  if (equal(chapter_code, "PSA063")) {
    let chapter_module = await import("./bible_glyph_chapter_psa063.mjs");
    stored = chapter_module.bible_glyph_chapter_psa063();
  }
  if (equal(chapter_code, "PSA067")) {
    let chapter_module = await import("./bible_glyph_chapter_psa067.mjs");
    stored = chapter_module.bible_glyph_chapter_psa067();
  }
  if (equal(chapter_code, "PSA073")) {
    let chapter_module = await import("./bible_glyph_chapter_psa073.mjs");
    stored = chapter_module.bible_glyph_chapter_psa073();
  }
  if (equal(chapter_code, "PSA084")) {
    let chapter_module = await import("./bible_glyph_chapter_psa084.mjs");
    stored = chapter_module.bible_glyph_chapter_psa084();
  }
  if (equal(chapter_code, "PSA085")) {
    let chapter_module = await import("./bible_glyph_chapter_psa085.mjs");
    stored = chapter_module.bible_glyph_chapter_psa085();
  }
  if (equal(chapter_code, "PSA090")) {
    let chapter_module = await import("./bible_glyph_chapter_psa090.mjs");
    stored = chapter_module.bible_glyph_chapter_psa090();
  }
  if (equal(chapter_code, "PSA091")) {
    let chapter_module = await import("./bible_glyph_chapter_psa091.mjs");
    stored = chapter_module.bible_glyph_chapter_psa091();
  }
  if (equal(chapter_code, "PSA095")) {
    let chapter_module = await import("./bible_glyph_chapter_psa095.mjs");
    stored = chapter_module.bible_glyph_chapter_psa095();
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
  if (equal(chapter_code, "PSA103")) {
    let chapter_module = await import("./bible_glyph_chapter_psa103.mjs");
    stored = chapter_module.bible_glyph_chapter_psa103();
  }
  if (equal(chapter_code, "PSA110")) {
    let chapter_module = await import("./bible_glyph_chapter_psa110.mjs");
    stored = chapter_module.bible_glyph_chapter_psa110();
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
  if (equal(chapter_code, "PSA116")) {
    let chapter_module = await import("./bible_glyph_chapter_psa116.mjs");
    stored = chapter_module.bible_glyph_chapter_psa116();
  }
  if (equal(chapter_code, "PSA118")) {
    let chapter_module = await import("./bible_glyph_chapter_psa118.mjs");
    stored = chapter_module.bible_glyph_chapter_psa118();
  }
  if (equal(chapter_code, "PSA121")) {
    let chapter_module = await import("./bible_glyph_chapter_psa121.mjs");
    stored = chapter_module.bible_glyph_chapter_psa121();
  }
  if (equal(chapter_code, "PSA130")) {
    let chapter_module = await import("./bible_glyph_chapter_psa130.mjs");
    stored = chapter_module.bible_glyph_chapter_psa130();
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
  if (equal(chapter_code, "PSA145")) {
    let chapter_module = await import("./bible_glyph_chapter_psa145.mjs");
    stored = chapter_module.bible_glyph_chapter_psa145();
  }
  if (equal(chapter_code, "PSA146")) {
    let chapter_module = await import("./bible_glyph_chapter_psa146.mjs");
    stored = chapter_module.bible_glyph_chapter_psa146();
  }
  if (equal(chapter_code, "PRO01")) {
    let chapter_module = await import("./bible_glyph_chapter_pro01.mjs");
    stored = chapter_module.bible_glyph_chapter_pro01();
  }
  if (equal(chapter_code, "PRO02")) {
    let chapter_module = await import("./bible_glyph_chapter_pro02.mjs");
    stored = chapter_module.bible_glyph_chapter_pro02();
  }
  if (equal(chapter_code, "PRO03")) {
    let chapter_module = await import("./bible_glyph_chapter_pro03.mjs");
    stored = chapter_module.bible_glyph_chapter_pro03();
  }
  if (equal(chapter_code, "PRO04")) {
    let chapter_module = await import("./bible_glyph_chapter_pro04.mjs");
    stored = chapter_module.bible_glyph_chapter_pro04();
  }
  if (equal(chapter_code, "PRO08")) {
    let chapter_module = await import("./bible_glyph_chapter_pro08.mjs");
    stored = chapter_module.bible_glyph_chapter_pro08();
  }
  if (equal(chapter_code, "PRO16")) {
    let chapter_module = await import("./bible_glyph_chapter_pro16.mjs");
    stored = chapter_module.bible_glyph_chapter_pro16();
  }
  if (equal(chapter_code, "PRO31")) {
    let chapter_module = await import("./bible_glyph_chapter_pro31.mjs");
    stored = chapter_module.bible_glyph_chapter_pro31();
  }
  if (equal(chapter_code, "ECC01")) {
    let chapter_module = await import("./bible_glyph_chapter_ecc01.mjs");
    stored = chapter_module.bible_glyph_chapter_ecc01();
  }
  if (equal(chapter_code, "ECC03")) {
    let chapter_module = await import("./bible_glyph_chapter_ecc03.mjs");
    stored = chapter_module.bible_glyph_chapter_ecc03();
  }
  if (equal(chapter_code, "ECC12")) {
    let chapter_module = await import("./bible_glyph_chapter_ecc12.mjs");
    stored = chapter_module.bible_glyph_chapter_ecc12();
  }
  if (equal(chapter_code, "SNG02")) {
    let chapter_module = await import("./bible_glyph_chapter_sng02.mjs");
    stored = chapter_module.bible_glyph_chapter_sng02();
  }
  if (equal(chapter_code, "SNG08")) {
    let chapter_module = await import("./bible_glyph_chapter_sng08.mjs");
    stored = chapter_module.bible_glyph_chapter_sng08();
  }
  if (equal(chapter_code, "ISA01")) {
    let chapter_module = await import("./bible_glyph_chapter_isa01.mjs");
    stored = chapter_module.bible_glyph_chapter_isa01();
  }
  if (equal(chapter_code, "ISA02")) {
    let chapter_module = await import("./bible_glyph_chapter_isa02.mjs");
    stored = chapter_module.bible_glyph_chapter_isa02();
  }
  if (equal(chapter_code, "ISA06")) {
    let chapter_module = await import("./bible_glyph_chapter_isa06.mjs");
    stored = chapter_module.bible_glyph_chapter_isa06();
  }
  if (equal(chapter_code, "ISA07")) {
    let chapter_module = await import("./bible_glyph_chapter_isa07.mjs");
    stored = chapter_module.bible_glyph_chapter_isa07();
  }
  if (equal(chapter_code, "ISA09")) {
    let chapter_module = await import("./bible_glyph_chapter_isa09.mjs");
    stored = chapter_module.bible_glyph_chapter_isa09();
  }
  if (equal(chapter_code, "ISA11")) {
    let chapter_module = await import("./bible_glyph_chapter_isa11.mjs");
    stored = chapter_module.bible_glyph_chapter_isa11();
  }
  if (equal(chapter_code, "ISA12")) {
    let chapter_module = await import("./bible_glyph_chapter_isa12.mjs");
    stored = chapter_module.bible_glyph_chapter_isa12();
  }
  if (equal(chapter_code, "ISA26")) {
    let chapter_module = await import("./bible_glyph_chapter_isa26.mjs");
    stored = chapter_module.bible_glyph_chapter_isa26();
  }
  if (equal(chapter_code, "ISA35")) {
    let chapter_module = await import("./bible_glyph_chapter_isa35.mjs");
    stored = chapter_module.bible_glyph_chapter_isa35();
  }
  if (equal(chapter_code, "ISA40")) {
    let chapter_module = await import("./bible_glyph_chapter_isa40.mjs");
    stored = chapter_module.bible_glyph_chapter_isa40();
  }
  if (equal(chapter_code, "ISA43")) {
    let chapter_module = await import("./bible_glyph_chapter_isa43.mjs");
    stored = chapter_module.bible_glyph_chapter_isa43();
  }
  if (equal(chapter_code, "ISA49")) {
    let chapter_module = await import("./bible_glyph_chapter_isa49.mjs");
    stored = chapter_module.bible_glyph_chapter_isa49();
  }
  if (equal(chapter_code, "ISA53")) {
    let chapter_module = await import("./bible_glyph_chapter_isa53.mjs");
    stored = chapter_module.bible_glyph_chapter_isa53();
  }
  if (equal(chapter_code, "ISA55")) {
    let chapter_module = await import("./bible_glyph_chapter_isa55.mjs");
    stored = chapter_module.bible_glyph_chapter_isa55();
  }
  if (equal(chapter_code, "ISA56")) {
    let chapter_module = await import("./bible_glyph_chapter_isa56.mjs");
    stored = chapter_module.bible_glyph_chapter_isa56();
  }
  if (equal(chapter_code, "ISA58")) {
    let chapter_module = await import("./bible_glyph_chapter_isa58.mjs");
    stored = chapter_module.bible_glyph_chapter_isa58();
  }
  if (equal(chapter_code, "ISA61")) {
    let chapter_module = await import("./bible_glyph_chapter_isa61.mjs");
    stored = chapter_module.bible_glyph_chapter_isa61();
  }
  if (equal(chapter_code, "ISA64")) {
    let chapter_module = await import("./bible_glyph_chapter_isa64.mjs");
    stored = chapter_module.bible_glyph_chapter_isa64();
  }
  if (equal(chapter_code, "JER01")) {
    let chapter_module = await import("./bible_glyph_chapter_jer01.mjs");
    stored = chapter_module.bible_glyph_chapter_jer01();
  }
  if (equal(chapter_code, "JER07")) {
    let chapter_module = await import("./bible_glyph_chapter_jer07.mjs");
    stored = chapter_module.bible_glyph_chapter_jer07();
  }
  if (equal(chapter_code, "JER17")) {
    let chapter_module = await import("./bible_glyph_chapter_jer17.mjs");
    stored = chapter_module.bible_glyph_chapter_jer17();
  }
  if (equal(chapter_code, "JER18")) {
    let chapter_module = await import("./bible_glyph_chapter_jer18.mjs");
    stored = chapter_module.bible_glyph_chapter_jer18();
  }
  if (equal(chapter_code, "JER23")) {
    let chapter_module = await import("./bible_glyph_chapter_jer23.mjs");
    stored = chapter_module.bible_glyph_chapter_jer23();
  }
  if (equal(chapter_code, "JER26")) {
    let chapter_module = await import("./bible_glyph_chapter_jer26.mjs");
    stored = chapter_module.bible_glyph_chapter_jer26();
  }
  if (equal(chapter_code, "JER29")) {
    let chapter_module = await import("./bible_glyph_chapter_jer29.mjs");
    stored = chapter_module.bible_glyph_chapter_jer29();
  }
  if (equal(chapter_code, "JER31")) {
    let chapter_module = await import("./bible_glyph_chapter_jer31.mjs");
    stored = chapter_module.bible_glyph_chapter_jer31();
  }
  if (equal(chapter_code, "JER32")) {
    let chapter_module = await import("./bible_glyph_chapter_jer32.mjs");
    stored = chapter_module.bible_glyph_chapter_jer32();
  }
  if (equal(chapter_code, "LAM01")) {
    let chapter_module = await import("./bible_glyph_chapter_lam01.mjs");
    stored = chapter_module.bible_glyph_chapter_lam01();
  }
  if (equal(chapter_code, "LAM02")) {
    let chapter_module = await import("./bible_glyph_chapter_lam02.mjs");
    stored = chapter_module.bible_glyph_chapter_lam02();
  }
  if (equal(chapter_code, "LAM03")) {
    let chapter_module = await import("./bible_glyph_chapter_lam03.mjs");
    stored = chapter_module.bible_glyph_chapter_lam03();
  }
  if (equal(chapter_code, "LAM04")) {
    let chapter_module = await import("./bible_glyph_chapter_lam04.mjs");
    stored = chapter_module.bible_glyph_chapter_lam04();
  }
  if (equal(chapter_code, "LAM05")) {
    let chapter_module = await import("./bible_glyph_chapter_lam05.mjs");
    stored = chapter_module.bible_glyph_chapter_lam05();
  }
  if (equal(chapter_code, "EZK01")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk01.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk01();
  }
  if (equal(chapter_code, "EZK03")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk03.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk03();
  }
  if (equal(chapter_code, "EZK11")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk11.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk11();
  }
  if (equal(chapter_code, "EZK18")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk18.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk18();
  }
  if (equal(chapter_code, "EZK33")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk33.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk33();
  }
  if (equal(chapter_code, "EZK34")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk34.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk34();
  }
  if (equal(chapter_code, "EZK36")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk36.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk36();
  }
  if (equal(chapter_code, "EZK37")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk37.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk37();
  }
  if (equal(chapter_code, "EZK47")) {
    let chapter_module = await import("./bible_glyph_chapter_ezk47.mjs");
    stored = chapter_module.bible_glyph_chapter_ezk47();
  }
  if (equal(chapter_code, "DAN01")) {
    let chapter_module = await import("./bible_glyph_chapter_dan01.mjs");
    stored = chapter_module.bible_glyph_chapter_dan01();
  }
  if (equal(chapter_code, "DAN09")) {
    let chapter_module = await import("./bible_glyph_chapter_dan09.mjs");
    stored = chapter_module.bible_glyph_chapter_dan09();
  }
  if (equal(chapter_code, "DAN12")) {
    let chapter_module = await import("./bible_glyph_chapter_dan12.mjs");
    stored = chapter_module.bible_glyph_chapter_dan12();
  }
  if (equal(chapter_code, "HOS02")) {
    let chapter_module = await import("./bible_glyph_chapter_hos02.mjs");
    stored = chapter_module.bible_glyph_chapter_hos02();
  }
  if (equal(chapter_code, "HOS06")) {
    let chapter_module = await import("./bible_glyph_chapter_hos06.mjs");
    stored = chapter_module.bible_glyph_chapter_hos06();
  }
  if (equal(chapter_code, "HOS11")) {
    let chapter_module = await import("./bible_glyph_chapter_hos11.mjs");
    stored = chapter_module.bible_glyph_chapter_hos11();
  }
  if (equal(chapter_code, "HOS14")) {
    let chapter_module = await import("./bible_glyph_chapter_hos14.mjs");
    stored = chapter_module.bible_glyph_chapter_hos14();
  }
  if (equal(chapter_code, "JOL01")) {
    let chapter_module = await import("./bible_glyph_chapter_jol01.mjs");
    stored = chapter_module.bible_glyph_chapter_jol01();
  }
  if (equal(chapter_code, "JOL02")) {
    let chapter_module = await import("./bible_glyph_chapter_jol02.mjs");
    stored = chapter_module.bible_glyph_chapter_jol02();
  }
  if (equal(chapter_code, "JOL03")) {
    let chapter_module = await import("./bible_glyph_chapter_jol03.mjs");
    stored = chapter_module.bible_glyph_chapter_jol03();
  }
  if (equal(chapter_code, "AMO05")) {
    let chapter_module = await import("./bible_glyph_chapter_amo05.mjs");
    stored = chapter_module.bible_glyph_chapter_amo05();
  }
  if (equal(chapter_code, "AMO09")) {
    let chapter_module = await import("./bible_glyph_chapter_amo09.mjs");
    stored = chapter_module.bible_glyph_chapter_amo09();
  }
  if (equal(chapter_code, "OBA01")) {
    let chapter_module = await import("./bible_glyph_chapter_oba01.mjs");
    stored = chapter_module.bible_glyph_chapter_oba01();
  }
  if (equal(chapter_code, "JON01")) {
    let chapter_module = await import("./bible_glyph_chapter_jon01.mjs");
    stored = chapter_module.bible_glyph_chapter_jon01();
  }
  if (equal(chapter_code, "JON02")) {
    let chapter_module = await import("./bible_glyph_chapter_jon02.mjs");
    stored = chapter_module.bible_glyph_chapter_jon02();
  }
  if (equal(chapter_code, "JON03")) {
    let chapter_module = await import("./bible_glyph_chapter_jon03.mjs");
    stored = chapter_module.bible_glyph_chapter_jon03();
  }
  if (equal(chapter_code, "JON04")) {
    let chapter_module = await import("./bible_glyph_chapter_jon04.mjs");
    stored = chapter_module.bible_glyph_chapter_jon04();
  }
  if (equal(chapter_code, "MIC01")) {
    let chapter_module = await import("./bible_glyph_chapter_mic01.mjs");
    stored = chapter_module.bible_glyph_chapter_mic01();
  }
  if (equal(chapter_code, "MIC02")) {
    let chapter_module = await import("./bible_glyph_chapter_mic02.mjs");
    stored = chapter_module.bible_glyph_chapter_mic02();
  }
  if (equal(chapter_code, "MIC03")) {
    let chapter_module = await import("./bible_glyph_chapter_mic03.mjs");
    stored = chapter_module.bible_glyph_chapter_mic03();
  }
  if (equal(chapter_code, "MIC04")) {
    let chapter_module = await import("./bible_glyph_chapter_mic04.mjs");
    stored = chapter_module.bible_glyph_chapter_mic04();
  }
  if (equal(chapter_code, "MIC05")) {
    let chapter_module = await import("./bible_glyph_chapter_mic05.mjs");
    stored = chapter_module.bible_glyph_chapter_mic05();
  }
  if (equal(chapter_code, "MIC06")) {
    let chapter_module = await import("./bible_glyph_chapter_mic06.mjs");
    stored = chapter_module.bible_glyph_chapter_mic06();
  }
  if (equal(chapter_code, "MIC07")) {
    let chapter_module = await import("./bible_glyph_chapter_mic07.mjs");
    stored = chapter_module.bible_glyph_chapter_mic07();
  }
  if (equal(chapter_code, "NAM01")) {
    let chapter_module = await import("./bible_glyph_chapter_nam01.mjs");
    stored = chapter_module.bible_glyph_chapter_nam01();
  }
  if (equal(chapter_code, "NAM02")) {
    let chapter_module = await import("./bible_glyph_chapter_nam02.mjs");
    stored = chapter_module.bible_glyph_chapter_nam02();
  }
  if (equal(chapter_code, "NAM03")) {
    let chapter_module = await import("./bible_glyph_chapter_nam03.mjs");
    stored = chapter_module.bible_glyph_chapter_nam03();
  }
  if (equal(chapter_code, "HAB01")) {
    let chapter_module = await import("./bible_glyph_chapter_hab01.mjs");
    stored = chapter_module.bible_glyph_chapter_hab01();
  }
  if (equal(chapter_code, "HAB02")) {
    let chapter_module = await import("./bible_glyph_chapter_hab02.mjs");
    stored = chapter_module.bible_glyph_chapter_hab02();
  }
  if (equal(chapter_code, "HAB03")) {
    let chapter_module = await import("./bible_glyph_chapter_hab03.mjs");
    stored = chapter_module.bible_glyph_chapter_hab03();
  }
  if (equal(chapter_code, "ZEP01")) {
    let chapter_module = await import("./bible_glyph_chapter_zep01.mjs");
    stored = chapter_module.bible_glyph_chapter_zep01();
  }
  if (equal(chapter_code, "ZEP02")) {
    let chapter_module = await import("./bible_glyph_chapter_zep02.mjs");
    stored = chapter_module.bible_glyph_chapter_zep02();
  }
  if (equal(chapter_code, "ZEP03")) {
    let chapter_module = await import("./bible_glyph_chapter_zep03.mjs");
    stored = chapter_module.bible_glyph_chapter_zep03();
  }
  if (equal(chapter_code, "HAG01")) {
    let chapter_module = await import("./bible_glyph_chapter_hag01.mjs");
    stored = chapter_module.bible_glyph_chapter_hag01();
  }
  if (equal(chapter_code, "HAG02")) {
    let chapter_module = await import("./bible_glyph_chapter_hag02.mjs");
    stored = chapter_module.bible_glyph_chapter_hag02();
  }
  if (equal(chapter_code, "ZEC03")) {
    let chapter_module = await import("./bible_glyph_chapter_zec03.mjs");
    stored = chapter_module.bible_glyph_chapter_zec03();
  }
  if (equal(chapter_code, "ZEC04")) {
    let chapter_module = await import("./bible_glyph_chapter_zec04.mjs");
    stored = chapter_module.bible_glyph_chapter_zec04();
  }
  if (equal(chapter_code, "ZEC05")) {
    let chapter_module = await import("./bible_glyph_chapter_zec05.mjs");
    stored = chapter_module.bible_glyph_chapter_zec05();
  }
  if (equal(chapter_code, "ZEC08")) {
    let chapter_module = await import("./bible_glyph_chapter_zec08.mjs");
    stored = chapter_module.bible_glyph_chapter_zec08();
  }
  if (equal(chapter_code, "ZEC09")) {
    let chapter_module = await import("./bible_glyph_chapter_zec09.mjs");
    stored = chapter_module.bible_glyph_chapter_zec09();
  }
  if (equal(chapter_code, "ZEC12")) {
    let chapter_module = await import("./bible_glyph_chapter_zec12.mjs");
    stored = chapter_module.bible_glyph_chapter_zec12();
  }
  if (equal(chapter_code, "ZEC14")) {
    let chapter_module = await import("./bible_glyph_chapter_zec14.mjs");
    stored = chapter_module.bible_glyph_chapter_zec14();
  }
  if (equal(chapter_code, "MAL01")) {
    let chapter_module = await import("./bible_glyph_chapter_mal01.mjs");
    stored = chapter_module.bible_glyph_chapter_mal01();
  }
  if (equal(chapter_code, "MAL02")) {
    let chapter_module = await import("./bible_glyph_chapter_mal02.mjs");
    stored = chapter_module.bible_glyph_chapter_mal02();
  }
  if (equal(chapter_code, "MAL03")) {
    let chapter_module = await import("./bible_glyph_chapter_mal03.mjs");
    stored = chapter_module.bible_glyph_chapter_mal03();
  }
  if (equal(chapter_code, "MAL04")) {
    let chapter_module = await import("./bible_glyph_chapter_mal04.mjs");
    stored = chapter_module.bible_glyph_chapter_mal04();
  }
  if (equal(chapter_code, "MAT01")) {
    let chapter_module = await import("./bible_glyph_chapter_mat01.mjs");
    stored = chapter_module.bible_glyph_chapter_mat01();
  }
  if (equal(chapter_code, "MAT02")) {
    let chapter_module = await import("./bible_glyph_chapter_mat02.mjs");
    stored = chapter_module.bible_glyph_chapter_mat02();
  }
  if (equal(chapter_code, "MAT03")) {
    let chapter_module = await import("./bible_glyph_chapter_mat03.mjs");
    stored = chapter_module.bible_glyph_chapter_mat03();
  }
  if (equal(chapter_code, "MAT04")) {
    let chapter_module = await import("./bible_glyph_chapter_mat04.mjs");
    stored = chapter_module.bible_glyph_chapter_mat04();
  }
  if (equal(chapter_code, "MAT05")) {
    let chapter_module = await import("./bible_glyph_chapter_mat05.mjs");
    stored = chapter_module.bible_glyph_chapter_mat05();
  }
  if (equal(chapter_code, "MAT06")) {
    let chapter_module = await import("./bible_glyph_chapter_mat06.mjs");
    stored = chapter_module.bible_glyph_chapter_mat06();
  }
  if (equal(chapter_code, "MAT07")) {
    let chapter_module = await import("./bible_glyph_chapter_mat07.mjs");
    stored = chapter_module.bible_glyph_chapter_mat07();
  }
  if (equal(chapter_code, "MAT08")) {
    let chapter_module = await import("./bible_glyph_chapter_mat08.mjs");
    stored = chapter_module.bible_glyph_chapter_mat08();
  }
  if (equal(chapter_code, "MAT09")) {
    let chapter_module = await import("./bible_glyph_chapter_mat09.mjs");
    stored = chapter_module.bible_glyph_chapter_mat09();
  }
  if (equal(chapter_code, "MAT10")) {
    let chapter_module = await import("./bible_glyph_chapter_mat10.mjs");
    stored = chapter_module.bible_glyph_chapter_mat10();
  }
  if (equal(chapter_code, "MAT11")) {
    let chapter_module = await import("./bible_glyph_chapter_mat11.mjs");
    stored = chapter_module.bible_glyph_chapter_mat11();
  }
  if (equal(chapter_code, "MAT12")) {
    let chapter_module = await import("./bible_glyph_chapter_mat12.mjs");
    stored = chapter_module.bible_glyph_chapter_mat12();
  }
  if (equal(chapter_code, "MAT13")) {
    let chapter_module = await import("./bible_glyph_chapter_mat13.mjs");
    stored = chapter_module.bible_glyph_chapter_mat13();
  }
  if (equal(chapter_code, "MAT14")) {
    let chapter_module = await import("./bible_glyph_chapter_mat14.mjs");
    stored = chapter_module.bible_glyph_chapter_mat14();
  }
  if (equal(chapter_code, "MAT15")) {
    let chapter_module = await import("./bible_glyph_chapter_mat15.mjs");
    stored = chapter_module.bible_glyph_chapter_mat15();
  }
  if (equal(chapter_code, "MAT16")) {
    let chapter_module = await import("./bible_glyph_chapter_mat16.mjs");
    stored = chapter_module.bible_glyph_chapter_mat16();
  }
  if (equal(chapter_code, "MAT17")) {
    let chapter_module = await import("./bible_glyph_chapter_mat17.mjs");
    stored = chapter_module.bible_glyph_chapter_mat17();
  }
  if (equal(chapter_code, "MAT18")) {
    let chapter_module = await import("./bible_glyph_chapter_mat18.mjs");
    stored = chapter_module.bible_glyph_chapter_mat18();
  }
  if (equal(chapter_code, "MAT19")) {
    let chapter_module = await import("./bible_glyph_chapter_mat19.mjs");
    stored = chapter_module.bible_glyph_chapter_mat19();
  }
  if (equal(chapter_code, "MAT20")) {
    let chapter_module = await import("./bible_glyph_chapter_mat20.mjs");
    stored = chapter_module.bible_glyph_chapter_mat20();
  }
  if (equal(chapter_code, "MAT21")) {
    let chapter_module = await import("./bible_glyph_chapter_mat21.mjs");
    stored = chapter_module.bible_glyph_chapter_mat21();
  }
  if (equal(chapter_code, "MAT22")) {
    let chapter_module = await import("./bible_glyph_chapter_mat22.mjs");
    stored = chapter_module.bible_glyph_chapter_mat22();
  }
  if (equal(chapter_code, "MAT23")) {
    let chapter_module = await import("./bible_glyph_chapter_mat23.mjs");
    stored = chapter_module.bible_glyph_chapter_mat23();
  }
  if (equal(chapter_code, "MAT24")) {
    let chapter_module = await import("./bible_glyph_chapter_mat24.mjs");
    stored = chapter_module.bible_glyph_chapter_mat24();
  }
  if (equal(chapter_code, "MAT25")) {
    let chapter_module = await import("./bible_glyph_chapter_mat25.mjs");
    stored = chapter_module.bible_glyph_chapter_mat25();
  }
  if (equal(chapter_code, "MAT26")) {
    let chapter_module = await import("./bible_glyph_chapter_mat26.mjs");
    stored = chapter_module.bible_glyph_chapter_mat26();
  }
  if (equal(chapter_code, "MAT27")) {
    let chapter_module = await import("./bible_glyph_chapter_mat27.mjs");
    stored = chapter_module.bible_glyph_chapter_mat27();
  }
  if (equal(chapter_code, "MAT28")) {
    let chapter_module = await import("./bible_glyph_chapter_mat28.mjs");
    stored = chapter_module.bible_glyph_chapter_mat28();
  }
  if (equal(chapter_code, "MRK01")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk01.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk01();
  }
  if (equal(chapter_code, "MRK02")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk02.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk02();
  }
  if (equal(chapter_code, "MRK03")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk03.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk03();
  }
  if (equal(chapter_code, "MRK04")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk04.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk04();
  }
  if (equal(chapter_code, "MRK05")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk05.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk05();
  }
  if (equal(chapter_code, "MRK06")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk06.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk06();
  }
  if (equal(chapter_code, "MRK07")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk07.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk07();
  }
  if (equal(chapter_code, "MRK08")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk08.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk08();
  }
  if (equal(chapter_code, "MRK09")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk09.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk09();
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
  if (equal(chapter_code, "MRK13")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk13.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk13();
  }
  if (equal(chapter_code, "MRK14")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk14.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk14();
  }
  if (equal(chapter_code, "MRK15")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk15.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk15();
  }
  if (equal(chapter_code, "MRK16")) {
    let chapter_module = await import("./bible_glyph_chapter_mrk16.mjs");
    stored = chapter_module.bible_glyph_chapter_mrk16();
  }
  if (equal(chapter_code, "LUK01")) {
    let chapter_module = await import("./bible_glyph_chapter_luk01.mjs");
    stored = chapter_module.bible_glyph_chapter_luk01();
  }
  if (equal(chapter_code, "LUK02")) {
    let chapter_module = await import("./bible_glyph_chapter_luk02.mjs");
    stored = chapter_module.bible_glyph_chapter_luk02();
  }
  if (equal(chapter_code, "LUK03")) {
    let chapter_module = await import("./bible_glyph_chapter_luk03.mjs");
    stored = chapter_module.bible_glyph_chapter_luk03();
  }
  if (equal(chapter_code, "LUK04")) {
    let chapter_module = await import("./bible_glyph_chapter_luk04.mjs");
    stored = chapter_module.bible_glyph_chapter_luk04();
  }
  if (equal(chapter_code, "LUK05")) {
    let chapter_module = await import("./bible_glyph_chapter_luk05.mjs");
    stored = chapter_module.bible_glyph_chapter_luk05();
  }
  if (equal(chapter_code, "LUK06")) {
    let chapter_module = await import("./bible_glyph_chapter_luk06.mjs");
    stored = chapter_module.bible_glyph_chapter_luk06();
  }
  if (equal(chapter_code, "LUK07")) {
    let chapter_module = await import("./bible_glyph_chapter_luk07.mjs");
    stored = chapter_module.bible_glyph_chapter_luk07();
  }
  if (equal(chapter_code, "LUK08")) {
    let chapter_module = await import("./bible_glyph_chapter_luk08.mjs");
    stored = chapter_module.bible_glyph_chapter_luk08();
  }
  if (equal(chapter_code, "LUK09")) {
    let chapter_module = await import("./bible_glyph_chapter_luk09.mjs");
    stored = chapter_module.bible_glyph_chapter_luk09();
  }
  if (equal(chapter_code, "LUK10")) {
    let chapter_module = await import("./bible_glyph_chapter_luk10.mjs");
    stored = chapter_module.bible_glyph_chapter_luk10();
  }
  if (equal(chapter_code, "LUK11")) {
    let chapter_module = await import("./bible_glyph_chapter_luk11.mjs");
    stored = chapter_module.bible_glyph_chapter_luk11();
  }
  if (equal(chapter_code, "LUK12")) {
    let chapter_module = await import("./bible_glyph_chapter_luk12.mjs");
    stored = chapter_module.bible_glyph_chapter_luk12();
  }
  if (equal(chapter_code, "LUK13")) {
    let chapter_module = await import("./bible_glyph_chapter_luk13.mjs");
    stored = chapter_module.bible_glyph_chapter_luk13();
  }
  if (equal(chapter_code, "LUK14")) {
    let chapter_module = await import("./bible_glyph_chapter_luk14.mjs");
    stored = chapter_module.bible_glyph_chapter_luk14();
  }
  if (equal(chapter_code, "LUK15")) {
    let chapter_module = await import("./bible_glyph_chapter_luk15.mjs");
    stored = chapter_module.bible_glyph_chapter_luk15();
  }
  if (equal(chapter_code, "LUK16")) {
    let chapter_module = await import("./bible_glyph_chapter_luk16.mjs");
    stored = chapter_module.bible_glyph_chapter_luk16();
  }
  if (equal(chapter_code, "LUK17")) {
    let chapter_module = await import("./bible_glyph_chapter_luk17.mjs");
    stored = chapter_module.bible_glyph_chapter_luk17();
  }
  if (equal(chapter_code, "LUK18")) {
    let chapter_module = await import("./bible_glyph_chapter_luk18.mjs");
    stored = chapter_module.bible_glyph_chapter_luk18();
  }
  if (equal(chapter_code, "LUK19")) {
    let chapter_module = await import("./bible_glyph_chapter_luk19.mjs");
    stored = chapter_module.bible_glyph_chapter_luk19();
  }
  if (equal(chapter_code, "LUK20")) {
    let chapter_module = await import("./bible_glyph_chapter_luk20.mjs");
    stored = chapter_module.bible_glyph_chapter_luk20();
  }
  if (equal(chapter_code, "LUK21")) {
    let chapter_module = await import("./bible_glyph_chapter_luk21.mjs");
    stored = chapter_module.bible_glyph_chapter_luk21();
  }
  if (equal(chapter_code, "LUK22")) {
    let chapter_module = await import("./bible_glyph_chapter_luk22.mjs");
    stored = chapter_module.bible_glyph_chapter_luk22();
  }
  if (equal(chapter_code, "LUK23")) {
    let chapter_module = await import("./bible_glyph_chapter_luk23.mjs");
    stored = chapter_module.bible_glyph_chapter_luk23();
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
  if (equal(chapter_code, "JHN05")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn05.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn05();
  }
  if (equal(chapter_code, "JHN06")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn06.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn06();
  }
  if (equal(chapter_code, "JHN07")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn07.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn07();
  }
  if (equal(chapter_code, "JHN08")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn08.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn08();
  }
  if (equal(chapter_code, "JHN09")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn09.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn09();
  }
  if (equal(chapter_code, "JHN10")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn10.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn10();
  }
  if (equal(chapter_code, "JHN11")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn11.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn11();
  }
  if (equal(chapter_code, "JHN12")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn12.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn12();
  }
  if (equal(chapter_code, "JHN13")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn13.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn13();
  }
  if (equal(chapter_code, "JHN14")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn14.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn14();
  }
  if (equal(chapter_code, "JHN15")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn15.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn15();
  }
  if (equal(chapter_code, "JHN16")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn16.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn16();
  }
  if (equal(chapter_code, "JHN17")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn17.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn17();
  }
  if (equal(chapter_code, "JHN18")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn18.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn18();
  }
  if (equal(chapter_code, "JHN19")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn19.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn19();
  }
  if (equal(chapter_code, "JHN20")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn20.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn20();
  }
  if (equal(chapter_code, "JHN21")) {
    let chapter_module = await import("./bible_glyph_chapter_jhn21.mjs");
    stored = chapter_module.bible_glyph_chapter_jhn21();
  }
  if (equal(chapter_code, "ACT01")) {
    let chapter_module = await import("./bible_glyph_chapter_act01.mjs");
    stored = chapter_module.bible_glyph_chapter_act01();
  }
  if (equal(chapter_code, "ACT02")) {
    let chapter_module = await import("./bible_glyph_chapter_act02.mjs");
    stored = chapter_module.bible_glyph_chapter_act02();
  }
  if (equal(chapter_code, "ACT03")) {
    let chapter_module = await import("./bible_glyph_chapter_act03.mjs");
    stored = chapter_module.bible_glyph_chapter_act03();
  }
  if (equal(chapter_code, "ACT04")) {
    let chapter_module = await import("./bible_glyph_chapter_act04.mjs");
    stored = chapter_module.bible_glyph_chapter_act04();
  }
  if (equal(chapter_code, "ACT05")) {
    let chapter_module = await import("./bible_glyph_chapter_act05.mjs");
    stored = chapter_module.bible_glyph_chapter_act05();
  }
  if (equal(chapter_code, "ACT06")) {
    let chapter_module = await import("./bible_glyph_chapter_act06.mjs");
    stored = chapter_module.bible_glyph_chapter_act06();
  }
  if (equal(chapter_code, "ACT07")) {
    let chapter_module = await import("./bible_glyph_chapter_act07.mjs");
    stored = chapter_module.bible_glyph_chapter_act07();
  }
  if (equal(chapter_code, "ACT08")) {
    let chapter_module = await import("./bible_glyph_chapter_act08.mjs");
    stored = chapter_module.bible_glyph_chapter_act08();
  }
  if (equal(chapter_code, "ACT09")) {
    let chapter_module = await import("./bible_glyph_chapter_act09.mjs");
    stored = chapter_module.bible_glyph_chapter_act09();
  }
  if (equal(chapter_code, "ACT10")) {
    let chapter_module = await import("./bible_glyph_chapter_act10.mjs");
    stored = chapter_module.bible_glyph_chapter_act10();
  }
  if (equal(chapter_code, "ACT11")) {
    let chapter_module = await import("./bible_glyph_chapter_act11.mjs");
    stored = chapter_module.bible_glyph_chapter_act11();
  }
  if (equal(chapter_code, "ACT12")) {
    let chapter_module = await import("./bible_glyph_chapter_act12.mjs");
    stored = chapter_module.bible_glyph_chapter_act12();
  }
  if (equal(chapter_code, "ACT13")) {
    let chapter_module = await import("./bible_glyph_chapter_act13.mjs");
    stored = chapter_module.bible_glyph_chapter_act13();
  }
  if (equal(chapter_code, "ACT14")) {
    let chapter_module = await import("./bible_glyph_chapter_act14.mjs");
    stored = chapter_module.bible_glyph_chapter_act14();
  }
  if (equal(chapter_code, "ACT15")) {
    let chapter_module = await import("./bible_glyph_chapter_act15.mjs");
    stored = chapter_module.bible_glyph_chapter_act15();
  }
  if (equal(chapter_code, "ACT16")) {
    let chapter_module = await import("./bible_glyph_chapter_act16.mjs");
    stored = chapter_module.bible_glyph_chapter_act16();
  }
  if (equal(chapter_code, "ACT17")) {
    let chapter_module = await import("./bible_glyph_chapter_act17.mjs");
    stored = chapter_module.bible_glyph_chapter_act17();
  }
  if (equal(chapter_code, "ACT18")) {
    let chapter_module = await import("./bible_glyph_chapter_act18.mjs");
    stored = chapter_module.bible_glyph_chapter_act18();
  }
  if (equal(chapter_code, "ACT19")) {
    let chapter_module = await import("./bible_glyph_chapter_act19.mjs");
    stored = chapter_module.bible_glyph_chapter_act19();
  }
  if (equal(chapter_code, "ACT20")) {
    let chapter_module = await import("./bible_glyph_chapter_act20.mjs");
    stored = chapter_module.bible_glyph_chapter_act20();
  }
  if (equal(chapter_code, "ACT21")) {
    let chapter_module = await import("./bible_glyph_chapter_act21.mjs");
    stored = chapter_module.bible_glyph_chapter_act21();
  }
  if (equal(chapter_code, "ACT22")) {
    let chapter_module = await import("./bible_glyph_chapter_act22.mjs");
    stored = chapter_module.bible_glyph_chapter_act22();
  }
  if (equal(chapter_code, "ACT23")) {
    let chapter_module = await import("./bible_glyph_chapter_act23.mjs");
    stored = chapter_module.bible_glyph_chapter_act23();
  }
  if (equal(chapter_code, "ACT24")) {
    let chapter_module = await import("./bible_glyph_chapter_act24.mjs");
    stored = chapter_module.bible_glyph_chapter_act24();
  }
  if (equal(chapter_code, "ACT25")) {
    let chapter_module = await import("./bible_glyph_chapter_act25.mjs");
    stored = chapter_module.bible_glyph_chapter_act25();
  }
  if (equal(chapter_code, "ACT26")) {
    let chapter_module = await import("./bible_glyph_chapter_act26.mjs");
    stored = chapter_module.bible_glyph_chapter_act26();
  }
  if (equal(chapter_code, "ACT27")) {
    let chapter_module = await import("./bible_glyph_chapter_act27.mjs");
    stored = chapter_module.bible_glyph_chapter_act27();
  }
  if (equal(chapter_code, "ACT28")) {
    let chapter_module = await import("./bible_glyph_chapter_act28.mjs");
    stored = chapter_module.bible_glyph_chapter_act28();
  }
  if (equal(chapter_code, "ROM01")) {
    let chapter_module = await import("./bible_glyph_chapter_rom01.mjs");
    stored = chapter_module.bible_glyph_chapter_rom01();
  }
  if (equal(chapter_code, "ROM02")) {
    let chapter_module = await import("./bible_glyph_chapter_rom02.mjs");
    stored = chapter_module.bible_glyph_chapter_rom02();
  }
  if (equal(chapter_code, "ROM03")) {
    let chapter_module = await import("./bible_glyph_chapter_rom03.mjs");
    stored = chapter_module.bible_glyph_chapter_rom03();
  }
  if (equal(chapter_code, "ROM04")) {
    let chapter_module = await import("./bible_glyph_chapter_rom04.mjs");
    stored = chapter_module.bible_glyph_chapter_rom04();
  }
  if (equal(chapter_code, "ROM05")) {
    let chapter_module = await import("./bible_glyph_chapter_rom05.mjs");
    stored = chapter_module.bible_glyph_chapter_rom05();
  }
  if (equal(chapter_code, "ROM06")) {
    let chapter_module = await import("./bible_glyph_chapter_rom06.mjs");
    stored = chapter_module.bible_glyph_chapter_rom06();
  }
  if (equal(chapter_code, "ROM07")) {
    let chapter_module = await import("./bible_glyph_chapter_rom07.mjs");
    stored = chapter_module.bible_glyph_chapter_rom07();
  }
  if (equal(chapter_code, "ROM08")) {
    let chapter_module = await import("./bible_glyph_chapter_rom08.mjs");
    stored = chapter_module.bible_glyph_chapter_rom08();
  }
  if (equal(chapter_code, "ROM09")) {
    let chapter_module = await import("./bible_glyph_chapter_rom09.mjs");
    stored = chapter_module.bible_glyph_chapter_rom09();
  }
  if (equal(chapter_code, "ROM10")) {
    let chapter_module = await import("./bible_glyph_chapter_rom10.mjs");
    stored = chapter_module.bible_glyph_chapter_rom10();
  }
  if (equal(chapter_code, "ROM11")) {
    let chapter_module = await import("./bible_glyph_chapter_rom11.mjs");
    stored = chapter_module.bible_glyph_chapter_rom11();
  }
  if (equal(chapter_code, "ROM12")) {
    let chapter_module = await import("./bible_glyph_chapter_rom12.mjs");
    stored = chapter_module.bible_glyph_chapter_rom12();
  }
  if (equal(chapter_code, "ROM13")) {
    let chapter_module = await import("./bible_glyph_chapter_rom13.mjs");
    stored = chapter_module.bible_glyph_chapter_rom13();
  }
  if (equal(chapter_code, "ROM14")) {
    let chapter_module = await import("./bible_glyph_chapter_rom14.mjs");
    stored = chapter_module.bible_glyph_chapter_rom14();
  }
  if (equal(chapter_code, "ROM15")) {
    let chapter_module = await import("./bible_glyph_chapter_rom15.mjs");
    stored = chapter_module.bible_glyph_chapter_rom15();
  }
  if (equal(chapter_code, "ROM16")) {
    let chapter_module = await import("./bible_glyph_chapter_rom16.mjs");
    stored = chapter_module.bible_glyph_chapter_rom16();
  }
  if (equal(chapter_code, "1CO01")) {
    let chapter_module = await import("./bible_glyph_chapter_1co01.mjs");
    stored = chapter_module.bible_glyph_chapter_1co01();
  }
  if (equal(chapter_code, "1CO02")) {
    let chapter_module = await import("./bible_glyph_chapter_1co02.mjs");
    stored = chapter_module.bible_glyph_chapter_1co02();
  }
  if (equal(chapter_code, "1CO03")) {
    let chapter_module = await import("./bible_glyph_chapter_1co03.mjs");
    stored = chapter_module.bible_glyph_chapter_1co03();
  }
  if (equal(chapter_code, "1CO04")) {
    let chapter_module = await import("./bible_glyph_chapter_1co04.mjs");
    stored = chapter_module.bible_glyph_chapter_1co04();
  }
  if (equal(chapter_code, "1CO05")) {
    let chapter_module = await import("./bible_glyph_chapter_1co05.mjs");
    stored = chapter_module.bible_glyph_chapter_1co05();
  }
  if (equal(chapter_code, "1CO06")) {
    let chapter_module = await import("./bible_glyph_chapter_1co06.mjs");
    stored = chapter_module.bible_glyph_chapter_1co06();
  }
  if (equal(chapter_code, "1CO07")) {
    let chapter_module = await import("./bible_glyph_chapter_1co07.mjs");
    stored = chapter_module.bible_glyph_chapter_1co07();
  }
  if (equal(chapter_code, "1CO08")) {
    let chapter_module = await import("./bible_glyph_chapter_1co08.mjs");
    stored = chapter_module.bible_glyph_chapter_1co08();
  }
  if (equal(chapter_code, "1CO09")) {
    let chapter_module = await import("./bible_glyph_chapter_1co09.mjs");
    stored = chapter_module.bible_glyph_chapter_1co09();
  }
  if (equal(chapter_code, "1CO10")) {
    let chapter_module = await import("./bible_glyph_chapter_1co10.mjs");
    stored = chapter_module.bible_glyph_chapter_1co10();
  }
  if (equal(chapter_code, "1CO11")) {
    let chapter_module = await import("./bible_glyph_chapter_1co11.mjs");
    stored = chapter_module.bible_glyph_chapter_1co11();
  }
  if (equal(chapter_code, "1CO12")) {
    let chapter_module = await import("./bible_glyph_chapter_1co12.mjs");
    stored = chapter_module.bible_glyph_chapter_1co12();
  }
  if (equal(chapter_code, "1CO13")) {
    let chapter_module = await import("./bible_glyph_chapter_1co13.mjs");
    stored = chapter_module.bible_glyph_chapter_1co13();
  }
  if (equal(chapter_code, "1CO14")) {
    let chapter_module = await import("./bible_glyph_chapter_1co14.mjs");
    stored = chapter_module.bible_glyph_chapter_1co14();
  }
  if (equal(chapter_code, "1CO15")) {
    let chapter_module = await import("./bible_glyph_chapter_1co15.mjs");
    stored = chapter_module.bible_glyph_chapter_1co15();
  }
  if (equal(chapter_code, "1CO16")) {
    let chapter_module = await import("./bible_glyph_chapter_1co16.mjs");
    stored = chapter_module.bible_glyph_chapter_1co16();
  }
  if (equal(chapter_code, "2CO01")) {
    let chapter_module = await import("./bible_glyph_chapter_2co01.mjs");
    stored = chapter_module.bible_glyph_chapter_2co01();
  }
  if (equal(chapter_code, "2CO02")) {
    let chapter_module = await import("./bible_glyph_chapter_2co02.mjs");
    stored = chapter_module.bible_glyph_chapter_2co02();
  }
  if (equal(chapter_code, "2CO03")) {
    let chapter_module = await import("./bible_glyph_chapter_2co03.mjs");
    stored = chapter_module.bible_glyph_chapter_2co03();
  }
  if (equal(chapter_code, "2CO04")) {
    let chapter_module = await import("./bible_glyph_chapter_2co04.mjs");
    stored = chapter_module.bible_glyph_chapter_2co04();
  }
  if (equal(chapter_code, "2CO05")) {
    let chapter_module = await import("./bible_glyph_chapter_2co05.mjs");
    stored = chapter_module.bible_glyph_chapter_2co05();
  }
  if (equal(chapter_code, "2CO06")) {
    let chapter_module = await import("./bible_glyph_chapter_2co06.mjs");
    stored = chapter_module.bible_glyph_chapter_2co06();
  }
  if (equal(chapter_code, "2CO07")) {
    let chapter_module = await import("./bible_glyph_chapter_2co07.mjs");
    stored = chapter_module.bible_glyph_chapter_2co07();
  }
  if (equal(chapter_code, "2CO08")) {
    let chapter_module = await import("./bible_glyph_chapter_2co08.mjs");
    stored = chapter_module.bible_glyph_chapter_2co08();
  }
  if (equal(chapter_code, "2CO09")) {
    let chapter_module = await import("./bible_glyph_chapter_2co09.mjs");
    stored = chapter_module.bible_glyph_chapter_2co09();
  }
  if (equal(chapter_code, "2CO10")) {
    let chapter_module = await import("./bible_glyph_chapter_2co10.mjs");
    stored = chapter_module.bible_glyph_chapter_2co10();
  }
  if (equal(chapter_code, "2CO11")) {
    let chapter_module = await import("./bible_glyph_chapter_2co11.mjs");
    stored = chapter_module.bible_glyph_chapter_2co11();
  }
  if (equal(chapter_code, "2CO12")) {
    let chapter_module = await import("./bible_glyph_chapter_2co12.mjs");
    stored = chapter_module.bible_glyph_chapter_2co12();
  }
  if (equal(chapter_code, "2CO13")) {
    let chapter_module = await import("./bible_glyph_chapter_2co13.mjs");
    stored = chapter_module.bible_glyph_chapter_2co13();
  }
  if (equal(chapter_code, "GAL01")) {
    let chapter_module = await import("./bible_glyph_chapter_gal01.mjs");
    stored = chapter_module.bible_glyph_chapter_gal01();
  }
  if (equal(chapter_code, "GAL02")) {
    let chapter_module = await import("./bible_glyph_chapter_gal02.mjs");
    stored = chapter_module.bible_glyph_chapter_gal02();
  }
  if (equal(chapter_code, "GAL03")) {
    let chapter_module = await import("./bible_glyph_chapter_gal03.mjs");
    stored = chapter_module.bible_glyph_chapter_gal03();
  }
  if (equal(chapter_code, "GAL04")) {
    let chapter_module = await import("./bible_glyph_chapter_gal04.mjs");
    stored = chapter_module.bible_glyph_chapter_gal04();
  }
  if (equal(chapter_code, "GAL05")) {
    let chapter_module = await import("./bible_glyph_chapter_gal05.mjs");
    stored = chapter_module.bible_glyph_chapter_gal05();
  }
  if (equal(chapter_code, "GAL06")) {
    let chapter_module = await import("./bible_glyph_chapter_gal06.mjs");
    stored = chapter_module.bible_glyph_chapter_gal06();
  }
  if (equal(chapter_code, "EPH01")) {
    let chapter_module = await import("./bible_glyph_chapter_eph01.mjs");
    stored = chapter_module.bible_glyph_chapter_eph01();
  }
  if (equal(chapter_code, "EPH02")) {
    let chapter_module = await import("./bible_glyph_chapter_eph02.mjs");
    stored = chapter_module.bible_glyph_chapter_eph02();
  }
  if (equal(chapter_code, "EPH03")) {
    let chapter_module = await import("./bible_glyph_chapter_eph03.mjs");
    stored = chapter_module.bible_glyph_chapter_eph03();
  }
  if (equal(chapter_code, "EPH04")) {
    let chapter_module = await import("./bible_glyph_chapter_eph04.mjs");
    stored = chapter_module.bible_glyph_chapter_eph04();
  }
  if (equal(chapter_code, "EPH05")) {
    let chapter_module = await import("./bible_glyph_chapter_eph05.mjs");
    stored = chapter_module.bible_glyph_chapter_eph05();
  }
  if (equal(chapter_code, "EPH06")) {
    let chapter_module = await import("./bible_glyph_chapter_eph06.mjs");
    stored = chapter_module.bible_glyph_chapter_eph06();
  }
  if (equal(chapter_code, "PHP01")) {
    let chapter_module = await import("./bible_glyph_chapter_php01.mjs");
    stored = chapter_module.bible_glyph_chapter_php01();
  }
  if (equal(chapter_code, "PHP02")) {
    let chapter_module = await import("./bible_glyph_chapter_php02.mjs");
    stored = chapter_module.bible_glyph_chapter_php02();
  }
  if (equal(chapter_code, "PHP03")) {
    let chapter_module = await import("./bible_glyph_chapter_php03.mjs");
    stored = chapter_module.bible_glyph_chapter_php03();
  }
  if (equal(chapter_code, "PHP04")) {
    let chapter_module = await import("./bible_glyph_chapter_php04.mjs");
    stored = chapter_module.bible_glyph_chapter_php04();
  }
  if (equal(chapter_code, "COL01")) {
    let chapter_module = await import("./bible_glyph_chapter_col01.mjs");
    stored = chapter_module.bible_glyph_chapter_col01();
  }
  if (equal(chapter_code, "COL02")) {
    let chapter_module = await import("./bible_glyph_chapter_col02.mjs");
    stored = chapter_module.bible_glyph_chapter_col02();
  }
  if (equal(chapter_code, "COL03")) {
    let chapter_module = await import("./bible_glyph_chapter_col03.mjs");
    stored = chapter_module.bible_glyph_chapter_col03();
  }
  if (equal(chapter_code, "COL04")) {
    let chapter_module = await import("./bible_glyph_chapter_col04.mjs");
    stored = chapter_module.bible_glyph_chapter_col04();
  }
  if (equal(chapter_code, "1TH01")) {
    let chapter_module = await import("./bible_glyph_chapter_1th01.mjs");
    stored = chapter_module.bible_glyph_chapter_1th01();
  }
  if (equal(chapter_code, "1TH02")) {
    let chapter_module = await import("./bible_glyph_chapter_1th02.mjs");
    stored = chapter_module.bible_glyph_chapter_1th02();
  }
  if (equal(chapter_code, "1TH03")) {
    let chapter_module = await import("./bible_glyph_chapter_1th03.mjs");
    stored = chapter_module.bible_glyph_chapter_1th03();
  }
  if (equal(chapter_code, "1TH04")) {
    let chapter_module = await import("./bible_glyph_chapter_1th04.mjs");
    stored = chapter_module.bible_glyph_chapter_1th04();
  }
  if (equal(chapter_code, "1TH05")) {
    let chapter_module = await import("./bible_glyph_chapter_1th05.mjs");
    stored = chapter_module.bible_glyph_chapter_1th05();
  }
  if (equal(chapter_code, "2TH01")) {
    let chapter_module = await import("./bible_glyph_chapter_2th01.mjs");
    stored = chapter_module.bible_glyph_chapter_2th01();
  }
  if (equal(chapter_code, "2TH02")) {
    let chapter_module = await import("./bible_glyph_chapter_2th02.mjs");
    stored = chapter_module.bible_glyph_chapter_2th02();
  }
  if (equal(chapter_code, "2TH03")) {
    let chapter_module = await import("./bible_glyph_chapter_2th03.mjs");
    stored = chapter_module.bible_glyph_chapter_2th03();
  }
  if (equal(chapter_code, "1TI01")) {
    let chapter_module = await import("./bible_glyph_chapter_1ti01.mjs");
    stored = chapter_module.bible_glyph_chapter_1ti01();
  }
  if (equal(chapter_code, "1TI02")) {
    let chapter_module = await import("./bible_glyph_chapter_1ti02.mjs");
    stored = chapter_module.bible_glyph_chapter_1ti02();
  }
  if (equal(chapter_code, "1TI03")) {
    let chapter_module = await import("./bible_glyph_chapter_1ti03.mjs");
    stored = chapter_module.bible_glyph_chapter_1ti03();
  }
  if (equal(chapter_code, "1TI04")) {
    let chapter_module = await import("./bible_glyph_chapter_1ti04.mjs");
    stored = chapter_module.bible_glyph_chapter_1ti04();
  }
  if (equal(chapter_code, "1TI05")) {
    let chapter_module = await import("./bible_glyph_chapter_1ti05.mjs");
    stored = chapter_module.bible_glyph_chapter_1ti05();
  }
  if (equal(chapter_code, "1TI06")) {
    let chapter_module = await import("./bible_glyph_chapter_1ti06.mjs");
    stored = chapter_module.bible_glyph_chapter_1ti06();
  }
  if (equal(chapter_code, "2TI01")) {
    let chapter_module = await import("./bible_glyph_chapter_2ti01.mjs");
    stored = chapter_module.bible_glyph_chapter_2ti01();
  }
  if (equal(chapter_code, "2TI02")) {
    let chapter_module = await import("./bible_glyph_chapter_2ti02.mjs");
    stored = chapter_module.bible_glyph_chapter_2ti02();
  }
  if (equal(chapter_code, "2TI03")) {
    let chapter_module = await import("./bible_glyph_chapter_2ti03.mjs");
    stored = chapter_module.bible_glyph_chapter_2ti03();
  }
  if (equal(chapter_code, "2TI04")) {
    let chapter_module = await import("./bible_glyph_chapter_2ti04.mjs");
    stored = chapter_module.bible_glyph_chapter_2ti04();
  }
  if (equal(chapter_code, "TIT01")) {
    let chapter_module = await import("./bible_glyph_chapter_tit01.mjs");
    stored = chapter_module.bible_glyph_chapter_tit01();
  }
  if (equal(chapter_code, "TIT02")) {
    let chapter_module = await import("./bible_glyph_chapter_tit02.mjs");
    stored = chapter_module.bible_glyph_chapter_tit02();
  }
  if (equal(chapter_code, "TIT03")) {
    let chapter_module = await import("./bible_glyph_chapter_tit03.mjs");
    stored = chapter_module.bible_glyph_chapter_tit03();
  }
  if (equal(chapter_code, "PHM01")) {
    let chapter_module = await import("./bible_glyph_chapter_phm01.mjs");
    stored = chapter_module.bible_glyph_chapter_phm01();
  }
  if (equal(chapter_code, "HEB01")) {
    let chapter_module = await import("./bible_glyph_chapter_heb01.mjs");
    stored = chapter_module.bible_glyph_chapter_heb01();
  }
  if (equal(chapter_code, "HEB02")) {
    let chapter_module = await import("./bible_glyph_chapter_heb02.mjs");
    stored = chapter_module.bible_glyph_chapter_heb02();
  }
  if (equal(chapter_code, "HEB03")) {
    let chapter_module = await import("./bible_glyph_chapter_heb03.mjs");
    stored = chapter_module.bible_glyph_chapter_heb03();
  }
  if (equal(chapter_code, "HEB04")) {
    let chapter_module = await import("./bible_glyph_chapter_heb04.mjs");
    stored = chapter_module.bible_glyph_chapter_heb04();
  }
  if (equal(chapter_code, "HEB05")) {
    let chapter_module = await import("./bible_glyph_chapter_heb05.mjs");
    stored = chapter_module.bible_glyph_chapter_heb05();
  }
  if (equal(chapter_code, "HEB06")) {
    let chapter_module = await import("./bible_glyph_chapter_heb06.mjs");
    stored = chapter_module.bible_glyph_chapter_heb06();
  }
  if (equal(chapter_code, "HEB07")) {
    let chapter_module = await import("./bible_glyph_chapter_heb07.mjs");
    stored = chapter_module.bible_glyph_chapter_heb07();
  }
  if (equal(chapter_code, "HEB08")) {
    let chapter_module = await import("./bible_glyph_chapter_heb08.mjs");
    stored = chapter_module.bible_glyph_chapter_heb08();
  }
  if (equal(chapter_code, "HEB09")) {
    let chapter_module = await import("./bible_glyph_chapter_heb09.mjs");
    stored = chapter_module.bible_glyph_chapter_heb09();
  }
  if (equal(chapter_code, "HEB10")) {
    let chapter_module = await import("./bible_glyph_chapter_heb10.mjs");
    stored = chapter_module.bible_glyph_chapter_heb10();
  }
  if (equal(chapter_code, "HEB11")) {
    let chapter_module = await import("./bible_glyph_chapter_heb11.mjs");
    stored = chapter_module.bible_glyph_chapter_heb11();
  }
  if (equal(chapter_code, "HEB12")) {
    let chapter_module = await import("./bible_glyph_chapter_heb12.mjs");
    stored = chapter_module.bible_glyph_chapter_heb12();
  }
  if (equal(chapter_code, "HEB13")) {
    let chapter_module = await import("./bible_glyph_chapter_heb13.mjs");
    stored = chapter_module.bible_glyph_chapter_heb13();
  }
  if (equal(chapter_code, "JAS01")) {
    let chapter_module = await import("./bible_glyph_chapter_jas01.mjs");
    stored = chapter_module.bible_glyph_chapter_jas01();
  }
  if (equal(chapter_code, "JAS02")) {
    let chapter_module = await import("./bible_glyph_chapter_jas02.mjs");
    stored = chapter_module.bible_glyph_chapter_jas02();
  }
  if (equal(chapter_code, "JAS03")) {
    let chapter_module = await import("./bible_glyph_chapter_jas03.mjs");
    stored = chapter_module.bible_glyph_chapter_jas03();
  }
  if (equal(chapter_code, "JAS04")) {
    let chapter_module = await import("./bible_glyph_chapter_jas04.mjs");
    stored = chapter_module.bible_glyph_chapter_jas04();
  }
  if (equal(chapter_code, "JAS05")) {
    let chapter_module = await import("./bible_glyph_chapter_jas05.mjs");
    stored = chapter_module.bible_glyph_chapter_jas05();
  }
  if (equal(chapter_code, "1PE01")) {
    let chapter_module = await import("./bible_glyph_chapter_1pe01.mjs");
    stored = chapter_module.bible_glyph_chapter_1pe01();
  }
  if (equal(chapter_code, "1PE02")) {
    let chapter_module = await import("./bible_glyph_chapter_1pe02.mjs");
    stored = chapter_module.bible_glyph_chapter_1pe02();
  }
  if (equal(chapter_code, "1PE03")) {
    let chapter_module = await import("./bible_glyph_chapter_1pe03.mjs");
    stored = chapter_module.bible_glyph_chapter_1pe03();
  }
  if (equal(chapter_code, "1PE04")) {
    let chapter_module = await import("./bible_glyph_chapter_1pe04.mjs");
    stored = chapter_module.bible_glyph_chapter_1pe04();
  }
  if (equal(chapter_code, "1PE05")) {
    let chapter_module = await import("./bible_glyph_chapter_1pe05.mjs");
    stored = chapter_module.bible_glyph_chapter_1pe05();
  }
  if (equal(chapter_code, "2PE01")) {
    let chapter_module = await import("./bible_glyph_chapter_2pe01.mjs");
    stored = chapter_module.bible_glyph_chapter_2pe01();
  }
  if (equal(chapter_code, "2PE02")) {
    let chapter_module = await import("./bible_glyph_chapter_2pe02.mjs");
    stored = chapter_module.bible_glyph_chapter_2pe02();
  }
  if (equal(chapter_code, "2PE03")) {
    let chapter_module = await import("./bible_glyph_chapter_2pe03.mjs");
    stored = chapter_module.bible_glyph_chapter_2pe03();
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
  if (equal(chapter_code, "REV02")) {
    let chapter_module = await import("./bible_glyph_chapter_rev02.mjs");
    stored = chapter_module.bible_glyph_chapter_rev02();
  }
  if (equal(chapter_code, "REV03")) {
    let chapter_module = await import("./bible_glyph_chapter_rev03.mjs");
    stored = chapter_module.bible_glyph_chapter_rev03();
  }
  if (equal(chapter_code, "REV04")) {
    let chapter_module = await import("./bible_glyph_chapter_rev04.mjs");
    stored = chapter_module.bible_glyph_chapter_rev04();
  }
  if (equal(chapter_code, "REV05")) {
    let chapter_module = await import("./bible_glyph_chapter_rev05.mjs");
    stored = chapter_module.bible_glyph_chapter_rev05();
  }
  if (equal(chapter_code, "REV06")) {
    let chapter_module = await import("./bible_glyph_chapter_rev06.mjs");
    stored = chapter_module.bible_glyph_chapter_rev06();
  }
  if (equal(chapter_code, "REV07")) {
    let chapter_module = await import("./bible_glyph_chapter_rev07.mjs");
    stored = chapter_module.bible_glyph_chapter_rev07();
  }
  if (equal(chapter_code, "REV08")) {
    let chapter_module = await import("./bible_glyph_chapter_rev08.mjs");
    stored = chapter_module.bible_glyph_chapter_rev08();
  }
  if (equal(chapter_code, "REV09")) {
    let chapter_module = await import("./bible_glyph_chapter_rev09.mjs");
    stored = chapter_module.bible_glyph_chapter_rev09();
  }
  if (equal(chapter_code, "REV10")) {
    let chapter_module = await import("./bible_glyph_chapter_rev10.mjs");
    stored = chapter_module.bible_glyph_chapter_rev10();
  }
  if (equal(chapter_code, "REV11")) {
    let chapter_module = await import("./bible_glyph_chapter_rev11.mjs");
    stored = chapter_module.bible_glyph_chapter_rev11();
  }
  if (equal(chapter_code, "REV12")) {
    let chapter_module = await import("./bible_glyph_chapter_rev12.mjs");
    stored = chapter_module.bible_glyph_chapter_rev12();
  }
  if (equal(chapter_code, "REV13")) {
    let chapter_module = await import("./bible_glyph_chapter_rev13.mjs");
    stored = chapter_module.bible_glyph_chapter_rev13();
  }
  if (equal(chapter_code, "REV14")) {
    let chapter_module = await import("./bible_glyph_chapter_rev14.mjs");
    stored = chapter_module.bible_glyph_chapter_rev14();
  }
  if (equal(chapter_code, "REV15")) {
    let chapter_module = await import("./bible_glyph_chapter_rev15.mjs");
    stored = chapter_module.bible_glyph_chapter_rev15();
  }
  if (equal(chapter_code, "REV16")) {
    let chapter_module = await import("./bible_glyph_chapter_rev16.mjs");
    stored = chapter_module.bible_glyph_chapter_rev16();
  }
  if (equal(chapter_code, "REV17")) {
    let chapter_module = await import("./bible_glyph_chapter_rev17.mjs");
    stored = chapter_module.bible_glyph_chapter_rev17();
  }
  if (equal(chapter_code, "REV18")) {
    let chapter_module = await import("./bible_glyph_chapter_rev18.mjs");
    stored = chapter_module.bible_glyph_chapter_rev18();
  }
  if (equal(chapter_code, "REV19")) {
    let chapter_module = await import("./bible_glyph_chapter_rev19.mjs");
    stored = chapter_module.bible_glyph_chapter_rev19();
  }
  if (equal(chapter_code, "REV20")) {
    let chapter_module = await import("./bible_glyph_chapter_rev20.mjs");
    stored = chapter_module.bible_glyph_chapter_rev20();
  }
  if (equal(chapter_code, "REV21")) {
    let chapter_module = await import("./bible_glyph_chapter_rev21.mjs");
    stored = chapter_module.bible_glyph_chapter_rev21();
  }
  if (equal(chapter_code, "REV22")) {
    let chapter_module = await import("./bible_glyph_chapter_rev22.mjs");
    stored = chapter_module.bible_glyph_chapter_rev22();
  }
  let found = not_equal(stored, null);
  let r = {
    stored,
    found,
  };
  return r;
}
