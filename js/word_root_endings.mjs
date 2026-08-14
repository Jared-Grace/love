export function word_root_endings() {
  "Every plain English ending this repo cuts off a word, each one paired with how much of the word it takes and what it puts back.";
  "Written longest ending first, because that is what makes ONE of them the answer: witnesses ends in sses and in ss and in s, and only the longest of those three is the ending it actually has. A reader picks the first that matches and stops, so the order here is the rule, not a tidy way of listing them.";
  "Two of them cut nothing. An English word ending doubled s, or ending us, keeps every letter it has - they are here so that the plain s below never reaches cross or Jesus, which is a thing an ending list can only say by naming the words the ending does not belong to.";
  "This is data rather than a run of branches on purpose. A chain of else-if was fed to the canonicalizing pass and came back four branches shorter, silently, with every gate still green; a list cannot be folded, because there is nothing in it to fold.";
  let endings = [
    { end: "sses", drop: 2, add: "" },
    { end: "ches", drop: 2, add: "" },
    { end: "shes", drop: 2, add: "" },
    { end: "xes", drop: 2, add: "" },
    { end: "ies", drop: 3, add: "y" },
    { end: "ing", drop: 3, add: "" },
    { end: "ss", drop: 0, add: "" },
    { end: "us", drop: 0, add: "" },
    { end: "ed", drop: 2, add: "" },
    { end: "ly", drop: 2, add: "" },
    { end: "s", drop: 1, add: "" },
  ];
  return endings;
}
