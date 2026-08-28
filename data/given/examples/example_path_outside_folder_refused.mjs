import { path_inside_folder_assert } from "../../../js/path_inside_folder_assert.mjs";
import { gloss_write_chapter_file_path } from "../../../js/gloss_write_chapter_file_path.mjs";
export const example = {
  kind: "rejection",
  title: "A path built from an argument is refused when it lands outside its folder",
  note: [
    "A path made by sticking a caller's word onto a fixed folder looks constrained ",
    "and is not. ",
    { fn: gloss_write_chapter_file_path.name },
    " builds one that way, and the function above it takes that file away once it ",
    "has read it — so a word that walks out of the folder chooses a file nobody ",
    "named, and it is deleted. ",
    { fn: path_inside_folder_assert.name },
    " is the check that the folder the caller was promised is the folder the path ",
    "actually reached.",
    " ",
    "The near miss is the part worth knowing, because it is why reading the text ",
    "proves nothing. Two dots and a slash joined straight on do NOT escape: the ",
    "word gloss_ and the dots become the single segment gloss_.., which the ",
    "following pair of dots merely pops, landing back inside. What escapes is a ",
    "leading slash first — the dots then have a segment of their own to pop, and a ",
    "second pair walks out past the folder. Both spellings look equally alarming ",
    "and only one of them is, which is why the check resolves the whole path ",
    "instead of reading it.",
  ],
  call: `${path_inside_folder_assert.name}("/a/b", "/a/b/gloss_/../../x.json")`,
  expectText: `throws — the part joined on has walked back out of the folder`,
  fn: path_inside_folder_assert.name,
  args: [
    { value: "/a/b", parse: "value" },
    { value: "/a/b/gloss_/../../x.json", parse: "value" },
  ],
  expect: "throw",
};
