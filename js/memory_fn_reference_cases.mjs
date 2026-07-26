export function memory_fn_reference_cases() {
  "Which pieces of memory prose carry a live pointer and which do not, written down. The sweep built on this walks the real memory folder, where a reader that found nothing and a folder holding nothing look the same, so the reading itself is pinned here instead.";
  "The cases that answer with nothing carry as much weight as the ones that answer with a name. A reader that collected every snake case word would pass a corpus of pointers alone, and the shapes it would wrongly collect are all here: a name told as history, a call whose last two letters look like the marker, and a marker whose letters are not the ones a name is made of.";
  "The names inside are invented on purpose. A real one written in a string here would be rewritten into a reference to that function by the canonicalizer, which would quietly change what the case says.";
  let cases = [
    {
      text: "the judgment lives in `fn(judgment_lives_here)`",
      tokens: ["judgment_lives_here"],
      why: "a name marked as a pointer - the one thing the marker exists to say, and the case a reader that gives up and answers nothing fails",
    },
    {
      text: "`narrative_only` was renamed to `narrative_only_now`",
      tokens: [],
      why: "history, not a pointer: rewriting either name here would make the sentence deny what it was written to record, so an unmarked name must never be collected",
    },
    {
      text: "quoted code calling `my_fn(a)` inside a note",
      tokens: [],
      why: "the last two letters before the bracket are the marker's letters, so a reader that forgets the word boundary swallows every call ending that way",
    },
    {
      text: "`fn(pointer_one)` and `fn(pointer_two)`, then `fn(pointer_one)` again",
      tokens: ["pointer_one", "pointer_two"],
      why: "a name pointed at twice is one pointer, and the order is the order it was written, so a note is not reported twice for saying the same thing twice",
    },
    {
      text: "`fn(Pointer_One)` written with capitals",
      tokens: [],
      why: "a name is lower case letters, digits and underscores, and a marker holding anything else names nothing - it would resolve to nothing forever while looking marked",
    },
  ];
  return cases;
}
