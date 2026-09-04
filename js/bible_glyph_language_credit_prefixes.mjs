export function bible_glyph_language_credit_prefixes() {
  "The opening words of each line of a reveal file's credit block that anything reading the file back has to find again.";
  "THEY ARE HERE BECAUSE A WRITER AND A GATE HAVE TO AGREE ABOUT THEM WORD FOR WORD. The writer builds these lines and the gate finds them by their first few words, and a wording changed in one place and not the other does not break anything - the gate simply stops finding the line and reports it missing, or worse, stops finding the line it was going to complain about and passes. A sentence two functions must spell identically is a sentence that belongs to neither of them.";
  "THE EDITION LINE IS FOR THE MACHINE AS MUCH AS THE READER. Which of a publisher's bibles the words came from is the one fact that decides whether a notice of alterations belongs in the block, and every other way of recovering it from the finished file meant reading a web address apart and hoping its shape never changed.";
  let r = {
    edition: "The edition is ",
    terms: "The terms are ",
    changes: "The changes are listed at ",
    source: "It came from ",
  };
  return r;
}
