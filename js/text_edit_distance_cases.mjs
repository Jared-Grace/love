export function text_edit_distance_cases() {
  "Word pairs and the number of one-letter edits between them, written down so the counting can be checked against something other than itself.";
  "The empty pairs are here because a table walked one letter at a time has an edge at each end, and an edge is where an off-by-one hides - it would be right about every real pair and wrong about the ones where a word runs out. The last pair pins what this deliberately is not: two letters written in the wrong order cost two edits here, not one, so nobody reading a suggestion has to wonder which of the two countings it used.";
  let cases = [
    {
      before: "",
      after: "",
      apart: 0,
      why: "two words that are not there at all are not apart",
    },
    {
      before: "abc",
      after: "abc",
      apart: 0,
      why: "the same word is nought edits from itself, which is what lets a known code be told from a mistyped one",
    },
    {
      before: "",
      after: "abc",
      apart: 3,
      why: "building a word out of nothing costs one insertion per letter",
    },
    {
      before: "abc",
      after: "",
      apart: 3,
      why: "and the same the other way round - the counting does not care which word was handed over first",
    },
    {
      before: "gl",
      after: "tgl",
      apart: 1,
      why: "a missing first letter, and the pair the whole offer of a correction rests on - the two words share no beginning, so anything comparing prefixes calls them unrelated",
    },
    {
      before: "ten",
      after: "en",
      apart: 1,
      why: "one letter too many at the front, the same mistake in the other direction",
    },
    {
      before: "kitten",
      after: "sitting",
      apart: 3,
      why: "the pair this counting is known by everywhere else, so a reader can check the answer against what they already know",
    },
    {
      before: "flaw",
      after: "lawn",
      apart: 2,
      why: "a letter off one end and a letter onto the other, which is two edits and not one move",
    },
    {
      before: "ab",
      after: "ba",
      apart: 2,
      why: "two letters written in the wrong order cost two - swapping neighbours is not one of the edits counted here",
    },
  ];
  return cases;
}
