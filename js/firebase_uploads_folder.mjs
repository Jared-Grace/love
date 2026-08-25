import { text_frozen } from "./text_frozen.mjs";
export function firebase_uploads_folder() {
  "The folder a function's generated files are uploaded into, inside the folder named after that function.";
  "It is frozen because every file already up there is sitting under this exact word, and the shipped apps ask for them by building the same address. A word that changed would move where the apps look and leave everything uploaded so far unreachable.";
  "Two sides spell it and neither is near the other: the side that writes one chapter's address, and the side that asks the bucket which chapters are up there at all. A word spelled twice is a word that can be spelled differently once, and here the two spellings would disagree silently - the writer would keep working and the reader would answer that nothing has been uploaded.";
  let v = text_frozen("uploads");
  return v;
}
