export function memory_index_head_separated_cases() {
  "The heads of index lines that a rebuild is allowed to touch, and the ones it is not, each with the reason.";
  "Every one of these is a real head off the index. The three that answer no are the three lines a run without this question came back having broken, kept here so the same shape cannot be let through again.";
  let cases = [
    {
      head: "- [Measure before optimize](x.md) — guessing was wrong; BOUNDED by",
      separated: false,
      why: "the link is the object of the sentence, so dropping what follows it leaves a sentence with nothing to end on",
    },
    {
      head: "- [Minimize interaction cost](x.md) — alias typed AT A CLAUDE PROMPT → plain twin,",
      separated: true,
      why: "a comma says more of the same follows, which is exactly a list of links",
    },
    {
      head: "- [Unread param = live BUG](x.md) — skip contract-mandated; +1 child in-note (",
      separated: false,
      why: "an open bracket is a promise that something later closes it, and the closing is in the part a rebuild drops",
    },
    {
      head: "- [Auto-commit after edits](x.md) — `ai_git`; ",
      separated: true,
      why: "a semicolon is the ordinary way this index introduces the links it carries",
    },
    {
      head: "- [★ g game MAP](x.md) — ",
      separated: true,
      why: "the long dash opens a hook, so a line whose links start right after it has links for its whole hook",
    },
    {
      head: "- [Fn names = folders](x.md) — a_b_c to a/b/c.mjs; DEFERRED",
      separated: false,
      why: "the head ends on a word of its own, so the sentence was still going when the link arrived",
    },
  ];
  return cases;
}
