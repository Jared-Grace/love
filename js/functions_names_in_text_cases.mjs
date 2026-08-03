export function functions_names_in_text_cases() {
  "Which functions a piece of writing names and which it does not, written down. The reading built on this is asked about a gate's own complaint, where a reader that had quietly stopped collecting anything and a complaint that genuinely named nothing give back the very same empty list.";
  "Telling those two apart is the whole reason the corpus exists, because of what the empty answer means downstream: a red gate naming no function is counted as reaching every app and holds a deploy. So a reading that had gone silent would not look broken - it would look like every gate in the repo suddenly concerned every app, and the wrongness would be spent as caution rather than reported as a fault.";
  "The names inside are invented on purpose. A real one written here would be rewritten into a reference to that function by the canonicalizing pass, which would quietly change what the case says, and the case would then follow every later rename of a function it was never about.";
  "The single-word ones are the exception, and are real. The canonicalizing pass leaves a word without an underscore alone for the same reason the reading now does, so writing one here is safe - and a made-up single word would prove nothing, because what those cases are about is that these particular words are both ordinary English and real functions of this repo.";
  "The list of real names is handed to the reading rather than looked up by it, so each case carries its own. Two cases share one piece of writing and differ only in that list, which is what proves the list is consulted at all.";
  let cases = [
    {
      text: "gate_named_this is bound nowhere and nothing answers to it",
      known: ["gate_named_this", "gate_named_that"],
      names: ["gate_named_this"],
      why: "a name said plainly in a sentence - the one thing the reading exists to find, and the case a reader that gives up and answers nothing fails",
    },
    {
      text: "gate_named_that is shadowed",
      known: [],
      names: [],
      why: "the same shape of writing, judged against a repo holding no such function, names nothing. A reader that ignored the list it was handed and asked the repo itself would answer alike for this and the case above, and fail one of them",
    },
    {
      text: "3 files are over their size ceiling",
      known: ["gate_named_this", "gate_named_that"],
      names: [],
      why: "a complaint that counted rather than named. This is the answer that decides a deploy, so it has to mean the writing named nothing and never that the reading stopped early",
    },
    {
      text: "gate_named_this_and_more is missing an import",
      known: ["gate_named_this", "gate_named_this_and_more"],
      names: ["gate_named_this_and_more"],
      why: "the whole word is the name, and the shorter name it begins with is not collected as well. A reader matching on plain containment would answer with both and hold a deploy over a function the writing never mentioned",
    },
    {
      text: "gate_named_that and gate_named_this, then gate_named_that again",
      known: ["gate_named_this", "gate_named_that"],
      names: ["gate_named_that", "gate_named_this"],
      why: "a gate naming one function across twenty lines is one complaint about one function, and the order is the order it was written, so what is read back follows the writing rather than an order of its own",
    },
    {
      text: "these hide an outer binding: (gate_named_this), gate_named_that.",
      known: ["gate_named_this", "gate_named_that"],
      names: ["gate_named_this", "gate_named_that"],
      why: "real complaints write names inside brackets and lists. A reader that let a name run to the next space would collect the brackets and commas with it, match nothing, and answer empty for writing that named two functions - and empty is the answer that stops a deploy",
    },
    {
      text: "Gate_named_this begins the sentence",
      known: ["gate_named_this"],
      names: [],
      why: "a name is lower case, and a capitalised word opening a sentence is a different word. Matching loosely here would let ordinary prose put a function into an answer it never appeared in",
    },
    {
      text: "and each of these is folded the wrong way round",
      known: ["and", "each", "gate_named_this"],
      names: [],
      why: "a sentence made of ordinary words, two of which this repo also happens to have functions for. Answering with them is how a gate complaining about one file came to read as a complaint about every app at once: every bundle carries the small words, so every intersection hits",
    },
    {
      text: "and each of these: gate_named_this",
      known: ["and", "each", "gate_named_this"],
      names: ["gate_named_this"],
      why: "the same writing carrying both kinds, which is the ordinary case - a gate says a sentence and names an offender inside it. Only the offender comes back, and dropping the small words does not cost the answer anything it was using",
    },
    {
      text: "$gate_named_this",
      known: ["gate_named_this"],
      names: [],
      why: "a dollar belongs to an identifier the way JavaScript counts one, so a name run straight onto it is another word. Written down as a limit rather than an intention: nothing a gate prints puts a dollar against a name, and the marker prose uses keeps a space after it, so the name stands alone there",
    },
  ];
  return cases;
}
