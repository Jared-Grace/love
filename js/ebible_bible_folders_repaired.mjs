import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
export function ebible_bible_folders_repaired() {
  "Every publisher's bible this app alters before a reader sees it, named in one place.";
  "A LIST RATHER THAN A COMPARISON, because three separate things now have to agree about it - the repair that alters the text, the notice that tells a reader it was altered, and the gate that checks a generated file carries that notice. A comparison answers one folder at a time, so the gate could only ever ask about a folder it had already worked out for itself, and working it out meant reading a url apart. Handed the list, the gate builds the line each of these bibles would be named by and looks for it.";
  "ADDING ONE IS A DECISION ABOUT SOMEBODY'S SCRIPTURE and belongs to whoever can read that language. The Urdu repairs write the Arabic spelling of the name of God as the Urdu word for it, which is right for the Urdu bible and would silently rewrite the name of God in the Arabic one.";
  let urdu = ebible_folder_urdu();
  let folders = [urdu];
  return folders;
}
