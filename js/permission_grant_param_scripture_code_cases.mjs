export function permission_grant_param_scripture_code_cases() {
  "Which parameter names say their code is a place in the Bible and which do not, written down.";
  "Every other reading in the permission system treats a word in a name as a reason to refuse, and refusing wrongly costs a prompt. This one says yes, and saying yes wrongly hands out a rule nobody weighed - so it is the one reading here whose answers are worth pinning case by case rather than left to be re-derived from the repo as it happens to stand.";
  "The cases that answer no carry as much weight as the ones that answer yes. A reading that simply looked for the word code would pass a corpus of scripture names alone, and the shapes it would wrongly clear are all here: a code that is not an address at all, a scripture word with no code beside it, and a single part of a name that happens to hold both words inside it.";
  "The names are the ones the repository actually writes, apart from the two that are there to be refused. A parameter is only ever read as the parts it is written in, so a case is chosen for the way it is cut rather than for the function it belongs to.";
  let cases = [
    {
      p_name: "chapter_code",
      scripture: true,
      why: "the name the whole reading exists for - three hundred and eighty-one functions carry it and every one of them means a chapter of scripture",
    },
    {
      p_name: "book_code",
      scripture: true,
      why: "the other half of an address, and the case that keeps the word list from shrinking to one word",
    },
    {
      p_name: "chapters_codes",
      scripture: true,
      why: "both words in the plural, which is the spelling a list of single forms would have missed - a list of Bible chapters is exactly as much an address as one chapter is",
    },
    {
      p_name: "verse_chapter_code",
      scripture: true,
      why: "three parts, two of them scripture, and the code at the end - a name is read as all of its parts rather than as its last two",
    },
    {
      p_name: "lambda$chapter_code",
      scripture: true,
      why: "the marker a lifted lambda carries is cut through like an underscore, or every parameter a lifted closure receives would silently stop being read",
    },
    {
      p_name: "language_code",
      scripture: false,
      why: "a code that is not a place in scripture, so the refusal stands - this is the case that says the reading is about the address and not about the word code",
    },
    {
      p_name: "chapter_number",
      scripture: false,
      why: "scripture, with no code beside it - nothing was refused here in the first place, so there is nothing for this reading to clear",
    },
    {
      p_name: "code",
      scripture: false,
      why: "the bare word the refusal exists for, and the one answer that must never change",
    },
    {
      p_name: "codebook",
      scripture: false,
      why: "one part holding both words inside it and being neither of them - the shape that clears wrongly the moment a name is searched rather than cut into its parts",
    },
  ];
  return cases;
}
