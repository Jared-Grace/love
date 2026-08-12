("The column name of the interlinear's SIGLA-MARKED original-language text.");
("The tables carry the base text twice. This column keeps the editorial sigla, so a word");
("present only in one edition arrives wrapped: {TR} braces, RP angle-brackets, (WH)");
("parentheses, NE chevrons, [NA] square brackets, SBL guillemets, [[ECM]] doubled square.");
("Its twin drops the sigla, which reads as tidier and is the reason it was used first -");
("but stripping the marks merges a public-domain base with words that come only from");
("copyrighted modern editions, and nothing downstream can tell them apart again.");
("The surrounding spelling is part of the real column name; do not tidy it.");
export function bible_interlinear_original_marked_key() {
  let key = "WLC / Nestle Base {TR} ⧼RP⧽ (WH) 〈NE〉 [NA] ‹SBL› [[ECM]]";
  return key;
}
