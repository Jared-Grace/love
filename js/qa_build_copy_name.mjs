import { text_frozen } from "./text_frozen.mjs";
export function qa_build_copy_name() {
  "What the frozen copy that apps are built inside is called";
  "Two things want this word - the one that works out where the copy sits, and the one that asks for the copy to be put at a commit - so it is said once here rather than twice in them. Said twice, one of them could be changed and the other not, and the copy would then be made in one place and looked for in another";
  "The word is held as plain writing rather than left to look like a name. A word here matching a function name is rewritten by the canonicalizing pass into a reference to that function, and the folder would then follow every later rename of it - while the folder already sitting on disk would not, so a fresh copy would quietly be built somewhere else every time";
  let copy_name = text_frozen("qa_build");
  return copy_name;
}
