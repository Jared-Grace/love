import { path_inside_folder_assert } from "../../../js/path_inside_folder_assert.mjs";
export const example = {
  kind: "rejection",
  title: "The same check says nothing at all about an ordinary name",
  note: [
    "A guard is only half described by what it refuses. The other half is that it ",
    "lets every real call through untouched, and that half is the one a later ",
    "tightening breaks — a check made stricter to close one more hole can quietly ",
    "start refusing the work it was written to protect, and every ordinary run ",
    "then fails at a line nobody was looking at.",
    " ",
    "So the accepting side is recorded here as its own example rather than left to ",
    "be exercised by accident. A chapter code is letters and digits and reaches a ",
    "plain name inside the folder it was promised; the check returns and says ",
    "nothing. An expectation that is not the word throw is read as must not throw.",
  ],
  call: `${path_inside_folder_assert.name}("/a/b", "/a/b/gloss_JHN01.json")`,
  expectText: `returns — the name landed inside the folder it was built from`,
  fn: path_inside_folder_assert.name,
  args: [
    { value: "/a/b", parse: "value" },
    { value: "/a/b/gloss_JHN01.json", parse: "value" },
  ],
  expect: "return",
};
