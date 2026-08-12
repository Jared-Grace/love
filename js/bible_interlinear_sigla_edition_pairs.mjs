("The character pairs that wrap a word belonging to one edition rather than to the base");
("text, each given as codepoints rather than as the character itself.");
("Written as codepoints on purpose. These marks have near-identical twins - the guillemet");
("has three, the chevron two - and a typed copy that picks the wrong twin matches nothing.");
("Matching nothing does not read as an error here: it reads as a word with no mark on it,");
("which is the answer that keeps a copyrighted reading in the shipped text. A codepoint");
("cannot be mistyped into a different character that still looks right.");
("Derived by ",
  "bible_interlinear_sigla_report",
  ", which finds the editorial marks without being told any:");
("a mark is editorial exactly when the tables' other base-text column drops it. That test");
("also cleared the marks that are NOT editorial and must survive into the text - Hebrew's");
("sof pasuq, maqaf and paseq, the Greek elision apostrophe, the undertie and broken bar.");
("Two of these six were found by that test and appear in no legend: the guillemets, which");
("wrap an article before a proper name, and a trailing asterisk - the asterisk is NOT here");
("because it flags a word the base already carries, so it is stripped and the word kept.");
export function bible_interlinear_sigla_edition_pairs() {
  let pairs = [
    { open: 0x5b, close: 0x5d, edition: "NA" },
    { open: 0x28, close: 0x29, edition: "WH" },
    { open: 0x2039, close: 0x203a, edition: "SBL" },
    { open: 0x2329, close: 0x232a, edition: "NE" },
    { open: 0x29fc, close: 0x29fd, edition: "RP" },
    { open: 0xab, close: 0xbb, edition: "article" },
    { open: 0x7b, close: 0x7d, edition: "TR" },
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
