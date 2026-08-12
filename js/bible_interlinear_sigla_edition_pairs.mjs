import { fn_name } from "./fn_name.mjs";
export function bible_interlinear_sigla_edition_pairs() {
  "The character pairs that wrap a word belonging to one edition rather than to the base";
  "text, each given as codepoints rather than as the character itself.";
  "Written as codepoints on purpose. These marks have near-identical twins - the guillemet";
  "has three, the chevron two - and a typed copy that picks the wrong twin matches nothing.";
  "Matching nothing does not read as an error here: it reads as a word with no mark on it,";
  "which is the answer that keeps a copyrighted reading in the shipped text. A codepoint";
  "cannot be mistyped into a different character that still looks right.";
  "These six are the tables' own legend, less the double square bracket, which the single";
  "one already covers. A mark that the legend does not name is NOT here - it is in ";
  fn_name("bible_interlinear_sigla_marks_not_edition");
  (", which");
  ("strips the mark and keeps the word. Two were found by ");
  fn_name("bible_interlinear_sigla_report");
  (" and belong there: the");
  ("guillemets, which mark a block standing in a different PLACE across editions rather");
  ("than in only one of them, and a trailing asterisk, which flags a difference in spelling.");
  ("Reading a mark as an edition wrapper drops every word it covers, so a wrong guess here");
  ("deletes scripture - the guillemets alone cost 1 Corinthians 1:2 eight of its own words.");
  ("That is why an undocumented mark does not get the benefit of the doubt in this list.");
  ("The same report cleared the marks that are not editorial at all and must survive into");
  ("the text: Hebrew's sof pasuq, maqaf and paseq, the Greek elision apostrophe, the");
  ("undertie and the broken bar. A mark is editorial exactly when the tables' other");
  ("base-text column drops it, which is a test that needed no legend to run.");
  let pairs = [
    {
      open: 0x5b,
      close: 0x5d,
      edition: "NA",
    },
    {
      open: 0x28,
      close: 0x29,
      edition: "WH",
    },
    {
      open: 0x2039,
      close: 0x203a,
      edition: "SBL",
    },
    {
      open: 0x2329,
      close: 0x232a,
      edition: "NE",
    },
    {
      open: 0x29fc,
      close: 0x29fd,
      edition: "RP",
    },
    {
      open: 0x7b,
      close: 0x7d,
      edition: "TR",
    },
  ];
  function characters_of(pair) {
    let r = {
      open: String.fromCodePoint(pair.open),
      close: String.fromCodePoint(pair.close),
      edition: pair.edition,
    };
    return r;
  }
  let r2 = pairs.map(characters_of);
  return r2;
}
