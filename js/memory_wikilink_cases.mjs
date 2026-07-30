import { text_frozen } from "./text_frozen.mjs";
export function memory_wikilink_cases() {
  "Small pieces of writing, each saying which double-bracket names a reader should";
  "find in it and which bracketed things it should pass over.";
  "Every check built on this reader walks the real memory folder, where the honest";
  "answer today is that nothing is wrong. A reader that had quietly stopped finding";
  "any names at all would give that same clean answer, and it would give it for";
  "every check at once, because the whole memory-link family asks this one question";
  "first. So the pieces here hold the two opposite kinds together: writing where a";
  "name must be found, and writing where a bracket must be passed over.";
  "One piece says out loud that a name written inside backticks is still found here.";
  "Deciding that a quotation is being shown rather than said belongs to the caller";
  "that wants it, and two of the three callers do not - folding it in here would";
  "take names away from them without anybody editing their files.";
  "Each piece is held as fixed text, because the pass that canonicalizes this file";
  "would otherwise read the names written inside as references and change what the";
  "piece says.";
  let cases = [
    {
      text: text_frozen("the reasoning lives in [[project_alpha]] and holds"),
      links: ["project_alpha"],
      why: "a name in double brackets in the middle of a sentence is the whole shape this looks for",
    },
    {
      text: text_frozen("see [[project_alpha]] and also [[reference_beta]]"),
      links: ["project_alpha", "reference_beta"],
      why: "two names in one piece, so a reader that stopped after the first would be caught",
    },
    {
      text: text_frozen("[[project_alpha]] again later: [[project_alpha]]"),
      links: ["project_alpha"],
      why: "the same name written twice is one name, so a reader that handed back both would make every count wrong",
    },
    {
      text: text_frozen("plain writing with no brackets in it at all"),
      links: [],
      why: "nothing to find, and the answer must be an empty list rather than the nothing the pattern hands back",
    },
    {
      text: text_frozen("a row of [Title](file.md) and one [single] bracket"),
      links: [],
      why: "one bracket is not two, and the index is full of this shape, so a reader keying on brackets alone would call every row of it a link",
    },
    {
      text: text_frozen("[[Not A Note]] and [[dashed-name]] and [[]]"),
      links: [],
      why: "a capital, a space, a dash and nothing at all are none of them how a note is named, so a reader taking whatever sits between the brackets would invent three",
    },
    {
      text: text_frozen("quoted as `[[project_alpha]]` inside backticks"),
      links: ["project_alpha"],
      why: "quoting is judged by whoever cares about it, and two of the three callers here want the name anyway",
    },
  ];
  return cases;
}
