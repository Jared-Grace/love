export function gloss_chapters_run_offenders_cases() {
  "Every shape a run of authored chapters can arrive in, written down with what the walk over it has to answer. The three that must come back clean and the four that must not.";
  "THE CLEAN CASES CARRY AS MUCH WEIGHT AS THE DIRTY ONES. A walk that answered nothing at all, or that complained about every store under construction, would pass a corpus of faults alone - so a store that has reached the middle of its second book, a store holding nothing yet, and a store whose chapters arrive in no particular order are all here, and all of them clean.";
  "THE FAULTS ARE HERE BECAUSE A GATE READS ITS STORE OFF THE DISK AND SO CANNOT BE MADE TO GO RED WITHOUT BREAKING THE STORE. These are the only place the two complaints are ever seen being made, which is what stops the gate standing over a check that cannot disagree.";
  "The book codes travel with each case rather than being shared above them, so a case can be read on its own without carrying a list down from somewhere else, and so a later case may walk a different stretch of the canon without disturbing the ones already written.";
  "Judges appears as the jumped-to book because that is the fault the original-language card would actually meet: its Old Testament run stops inside Judges, and the next book authored out of turn is the thing that would make the card's promise false.";
  let book_codes = ["GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "JDG", "RUT"];
  let cases = [
    {
      chapter_codes: ["GEN01", "GEN02", "GEN03", "EXO01", "EXO02"],
      book_codes,
      chapters: 5,
      offenders: [],
      why: "a store under construction: the run reaches into the second book and stops there, which is what every store on its way somewhere looks like and must never be called a fault",
    },
    {
      chapter_codes: [],
      book_codes,
      chapters: 0,
      offenders: [],
      why: "nothing authored yet is clean, and the count of nothing travels back beside it so a caller can tell this apart from a walk that reached a store it could not open",
    },
    {
      chapter_codes: ["EXO02", "GEN03", "EXO01", "GEN01", "GEN02"],
      book_codes,
      chapters: 5,
      offenders: [],
      why: "the same store with its chapters in no order at all: a folder listing is not sorted, so the walk has to sort before it compares or every real store would read as full of holes",
    },
    {
      chapter_codes: ["GEN01", "GEN02", "GEN03", "JDG01", "JDG02"],
      book_codes,
      chapters: 5,
      offenders: ["JDG"],
      why: "a book begun while four books between it and the run are untouched - the run jumped, so the book is named on its own with no chapter number beside it",
    },
    {
      chapter_codes: ["GEN01", "GEN02", "GEN03", "EXO01", "EXO03"],
      book_codes,
      chapters: 5,
      offenders: ["EXO 2"],
      why: "a hole inside a book that has been begun: the chapter at fault is the one that is not there, so it is named by the book and the number the run was expecting rather than by a code no file wears",
    },
    {
      chapter_codes: ["GEN02", "GEN03", "GEN04"],
      book_codes,
      chapters: 3,
      offenders: ["GEN 1"],
      why: "a book that does not start at its first chapter is the same fault as a hole and must be caught by the same comparison, because a run that begins at the second chapter is not a run from the beginning",
    },
    {
      chapter_codes: ["GEN01", "GEN02", "GENxx"],
      book_codes,
      chapters: 3,
      offenders: ["GENxx"],
      why: "a file in the store whose name is a book code with something other than a number after it: it is named as it stands, because nothing can be worked out about where it belongs in the run",
    },
  ];
  return cases;
}
