export function memory_link_cases() {
  "Which unresolved double-bracket names are faults and which are innocent, written down. The sweep that judges these walks the real memory folder, where every unresolved name today is innocent and should stay that way, so it comes back empty whether the judging works or was never reached.";
  "The four innocent ones carry the weight. A judgment that called everything a fault would pass a corpus of faults alone, and the shapes it would wrongly condemn are all here: a name that is not a note, a piece of quoted syntax, a link its writer marked on purpose, and one the neighbouring check already reports.";
  "The kinds are spelled out one per case rather than folded together, because a fault named wrongly is as useless as one not found - the wording is what tells a Claude whether to write a note or take a marker off.";
  let stems = ["project_exists", "reference_slip"];
  let cases = [
    {
      link: "project_missing",
      stems,
      typo_links: [],
      kind: "unwritten",
      suggestion: "todo_project_missing",
      why: "a link named like a note, naming no note, that nobody marked - the fault the whole check exists for",
    },
    {
      link: "todo_project_missing",
      stems,
      typo_links: [],
      kind: "",
      suggestion: "",
      why: "the same link, marked - the instructions allow meaning a note not yet written, and the marker is how that is said out loud",
    },
    {
      link: "todo_project_exists",
      stems,
      typo_links: [],
      kind: "stale",
      suggestion: "project_exists",
      why: "the note arrived and the marker stayed, which is how a promise silts up into noise if nothing watches for it",
    },
    {
      link: "user_missing",
      stems,
      typo_links: [],
      kind: "unwritten",
      suggestion: "todo_user_missing",
      why: "a second kind, because a check reading for only the kind it was written against would pass the first case and miss three quarters of the faults",
    },
    {
      link: "type_rest",
      stems,
      typo_links: [],
      kind: "",
      suggestion: "",
      why: "a note about how links are written quotes a bare name inside brackets, and no note was ever meant by it",
    },
    {
      link: "stem",
      stems,
      typo_links: [],
      kind: "",
      suggestion: "",
      why: "the same again in one word, kept because a check keying on the separator rather than the kind would tell the two apart wrongly",
    },
    {
      link: "project_slip",
      stems,
      typo_links: ["project_slip"],
      kind: "",
      suggestion: "",
      why: "the neighbouring check already names this one and offers the note it was meant to be, so claiming it here would report one slip twice in the vaguer of the two wordings",
    },
  ];
  return cases;
}
