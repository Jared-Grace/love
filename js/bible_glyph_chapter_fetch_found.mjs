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
  if (equal(chapter_code, "GEN08")) {
    let chapter_module = await import("./bible_glyph_chapter_gen08.mjs");
    stored = chapter_module.bible_glyph_chapter_gen08();
  }
  if (equal(chapter_code, "GEN09")) {
    let chapter_module = await import("./bible_glyph_chapter_gen09.mjs");
    stored = chapter_module.bible_glyph_chapter_gen09();
  }
  if (equal(chapter_code, "GEN11")) {
    let chapter_module = await import("./bible_glyph_chapter_gen11.mjs");
    stored = chapter_module.bible_glyph_chapter_gen11();
  }
  if (equal(chapter_code, "GEN13")) {
    let chapter_module = await import("./bible_glyph_chapter_gen13.mjs");
    stored = chapter_module.bible_glyph_chapter_gen13();
  }
  if (equal(chapter_code, "GEN14")) {
    let chapter_module = await import("./bible_glyph_chapter_gen14.mjs");
    stored = chapter_module.bible_glyph_chapter_gen14();
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
  if (equal(chapter_code, "GEN20")) {
    let chapter_module = await import("./bible_glyph_chapter_gen20.mjs");
    stored = chapter_module.bible_glyph_chapter_gen20();
  }
  if (equal(chapter_code, "GEN21")) {
    let chapter_module = await import("./bible_glyph_chapter_gen21.mjs");
    stored = chapter_module.bible_glyph_chapter_gen21();
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
  if (equal(chapter_code, "GEN35")) {
    let chapter_module = await import("./bible_glyph_chapter_gen35.mjs");
    stored = chapter_module.bible_glyph_chapter_gen35();
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
  if (equal(chapter_code, "NUM27")) {
    let chapter_module = await import("./bible_glyph_chapter_num27.mjs");
    stored = chapter_module.bible_glyph_chapter_num27();
  }
  if (equal(chapter_code, "NUM30")) {
    let chapter_module = await import("./bible_glyph_chapter_num30.mjs");
    stored = chapter_module.bible_glyph_chapter_num30();
  }
  if (equal(chapter_code, "NUM32")) {
    let chapter_module = await import("./bible_glyph_chapter_num32.mjs");
    stored = chapter_module.bible_glyph_chapter_num32();
  }
  if (equal(chapter_code, "NUM35")) {
    let chapter_module = await import("./bible_glyph_chapter_num35.mjs");
    stored = chapter_module.bible_glyph_chapter_num35();
  }
  if (equal(chapter_code, "NUM36")) {
    let chapter_module = await import("./bible_glyph_chapter_num36.mjs");
    stored = chapter_module.bible_glyph_chapter_num36();
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
  if (equal(chapter_code, "DEU18")) {
    let chapter_module = await import("./bible_glyph_chapter_deu18.mjs");
    stored = chapter_module.bible_glyph_chapter_deu18();
  }
  if (equal(chapter_code, "DEU26")) {
    let chapter_module = await import("./bible_glyph_chapter_deu26.mjs");
    stored = chapter_module.bible_glyph_chapter_deu26();
  }
  if (equal(chapter_code, "DEU28")) {
    let chapter_module = await import("./bible_glyph_chapter_deu28.mjs");
    stored = chapter_module.bible_glyph_chapter_deu28();
  }
  if (equal(chapter_code, "DEU30")) {
    let chapter_module = await import("./bible_glyph_chapter_deu30.mjs");
    stored = chapter_module.bible_glyph_chapter_deu30();
  }
  if (equal(chapter_code, "DEU32")) {
    let chapter_module = await import("./bible_glyph_chapter_deu32.mjs");
    stored = chapter_module.bible_glyph_chapter_deu32();
  }
  if (equal(chapter_code, "DEU34")) {
    let chapter_module = await import("./bible_glyph_chapter_deu34.mjs");
    stored = chapter_module.bible_glyph_chapter_deu34();
  }
  if (equal(chapter_code, "JOS02")) {
    let chapter_module = await import("./bible_glyph_chapter_jos02.mjs");
    stored = chapter_module.bible_glyph_chapter_jos02();
  }
  if (equal(chapter_code, "JOS03")) {
    let chapter_module = await import("./bible_glyph_chapter_jos03.mjs");
    stored = chapter_module.bible_glyph_chapter_jos03();
  }
  if (equal(chapter_code, "JOS07")) {
    let chapter_module = await import("./bible_glyph_chapter_jos07.mjs");
    stored = chapter_module.bible_glyph_chapter_jos07();
  }
  if (equal(chapter_code, "JOS24")) {
    let chapter_module = await import("./bible_glyph_chapter_jos24.mjs");
    stored = chapter_module.bible_glyph_chapter_jos24();
  }
  if (equal(chapter_code, "JDG02")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg02.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg02();
  }
  if (equal(chapter_code, "JDG04")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg04.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg04();
  }
  if (equal(chapter_code, "JDG11")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg11.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg11();
  }
  if (equal(chapter_code, "JDG13")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg13.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg13();
  }
  if (equal(chapter_code, "JDG16")) {
    let chapter_module = await import("./bible_glyph_chapter_jdg16.mjs");
    stored = chapter_module.bible_glyph_chapter_jdg16();
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
  if (equal(chapter_code, "1SA07")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa07.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa07();
  }
  if (equal(chapter_code, "1SA08")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa08.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa08();
  }
  if (equal(chapter_code, "1SA15")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa15.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa15();
  }
  if (equal(chapter_code, "1SA20")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa20.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa20();
  }
  if (equal(chapter_code, "1SA24")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa24.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa24();
  }
  if (equal(chapter_code, "1SA25")) {
    let chapter_module = await import("./bible_glyph_chapter_1sa25.mjs");
    stored = chapter_module.bible_glyph_chapter_1sa25();
  }
  if (equal(chapter_code, "2SA05")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa05.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa05();
  }
  if (equal(chapter_code, "2SA06")) {
    let chapter_module = await import("./bible_glyph_chapter_2sa06.mjs");
    stored = chapter_module.bible_glyph_chapter_2sa06();
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
  if (equal(chapter_code, "NEH09")) {
    let chapter_module = await import("./bible_glyph_chapter_neh09.mjs");
    stored = chapter_module.bible_glyph_chapter_neh09();
  }
  if (equal(chapter_code, "EST01")) {
    let chapter_module = await import("./bible_glyph_chapter_est01.mjs");
    stored = chapter_module.bible_glyph_chapter_est01();
  }
  if (equal(chapter_code, "JOB03")) {
    let chapter_module = await import("./bible_glyph_chapter_job03.mjs");
    stored = chapter_module.bible_glyph_chapter_job03();
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
  if (equal(chapter_code, "PSA023")) {
    let chapter_module = await import("./bible_glyph_chapter_psa023.mjs");
    stored = chapter_module.bible_glyph_chapter_psa023();
  }
  if (equal(chapter_code, "PSA029")) {
    let chapter_module = await import("./bible_glyph_chapter_psa029.mjs");
    stored = chapter_module.bible_glyph_chapter_psa029();
  }
  if (equal(chapter_code, "PSA034")) {
    let chapter_module = await import("./bible_glyph_chapter_psa034.mjs");
    stored = chapter_module.bible_glyph_chapter_psa034();
  }
  if (equal(chapter_code, "PSA042")) {
    let chapter_module = await import("./bible_glyph_chapter_psa042.mjs");
    stored = chapter_module.bible_glyph_chapter_psa042();
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
  if (equal(chapter_code, "PSA085")) {
    let chapter_module = await import("./bible_glyph_chapter_psa085.mjs");
    stored = chapter_module.bible_glyph_chapter_psa085();
  }
  if (equal(chapter_code, "PSA091")) {
    let chapter_module = await import("./bible_glyph_chapter_psa091.mjs");
    stored = chapter_module.bible_glyph_chapter_psa091();
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
  if (equal(chapter_code, "PSA116")) {
    let chapter_module = await import("./bible_glyph_chapter_psa116.mjs");
    stored = chapter_module.bible_glyph_chapter_psa116();
  }
  if (equal(chapter_code, "PSA118")) {
    let chapter_module = await import("./bible_glyph_chapter_psa118.mjs");
    stored = chapter_module.bible_glyph_chapter_psa118();
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
  if (equal(chapter_code, "ECC01")) {
    let chapter_module = await import("./bible_glyph_chapter_ecc01.mjs");
    stored = chapter_module.bible_glyph_chapter_ecc01();
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
  if (equal(chapter_code, "ISA07")) {
    let chapter_module = await import("./bible_glyph_chapter_isa07.mjs");
    stored = chapter_module.bible_glyph_chapter_isa07();
  }
  if (equal(chapter_code, "ISA11")) {
    let chapter_module = await import("./bible_glyph_chapter_isa11.mjs");
    stored = chapter_module.bible_glyph_chapter_isa11();
  }
  if (equal(chapter_code, "ISA12")) {
    let chapter_module = await import("./bible_glyph_chapter_isa12.mjs");
    stored = chapter_module.bible_glyph_chapter_isa12();
  }
  if (equal(chapter_code, "ISA43")) {
    let chapter_module = await import("./bible_glyph_chapter_isa43.mjs");
    stored = chapter_module.bible_glyph_chapter_isa43();
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
  if (equal(chapter_code, "JER32")) {
    let chapter_module = await import("./bible_glyph_chapter_jer32.mjs");
    stored = chapter_module.bible_glyph_chapter_jer32();
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
  if (equal(chapter_code, "DAN12")) {
    let chapter_module = await import("./bible_glyph_chapter_dan12.mjs");
    stored = chapter_module.bible_glyph_chapter_dan12();
  }
  if (equal(chapter_code, "HOS02")) {
    let chapter_module = await import("./bible_glyph_chapter_hos02.mjs");
    stored = chapter_module.bible_glyph_chapter_hos02();
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
  if (equal(chapter_code, "ZEC12")) {
    let chapter_module = await import("./bible_glyph_chapter_zec12.mjs");
    stored = chapter_module.bible_glyph_chapter_zec12();
  }
  if (equal(chapter_code, "ZEC14")) {
    let chapter_module = await import("./bible_glyph_chapter_zec14.mjs");
    stored = chapter_module.bible_glyph_chapter_zec14();
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
