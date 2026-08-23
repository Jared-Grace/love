import { arguments_assert } from "./arguments_assert.mjs";
export function folders_root_expected() {
  "The folders this repo is allowed to be made of at its top level, each one a different kind of thing.";
  "A list written by hand rather than worked out, because what makes this right is a judgment nothing in the code can make: whether a new folder is a kind of its own or somebody's belongings that belong inside an existing one. The check reading this cannot answer that, and it is not meant to - it is meant to make somebody answer it once, on the day the folder appears, instead of never.";
  "Eight names is the whole of what the repo is: what it says, what it is told and what it found out, what it is for, what it built, what it shows, how it is spoken to, how it reaches a phone, and how Claude is governed. Adding a ninth is a claim that there is another kind, and that claim is worth a moment of somebody's attention.";
  "What it shows is the newest of them. Pictures and data files a browser fetches as content used to sit inside what it built, which meant every one of them was deployed again whenever any app was, and changing one could not reach a reader any other way. They are their own kind because they are not built and they are not code: they are uploaded to storage under this same name, and the folder here is the copy that stays under version control so storage is never the only one.";
  "What it found out used to be an eighth name of its own. It is inside what it is told now, in a room called found beside the room called given, and the two are told apart there rather than here. Nothing about how it is read changed: the sweeps that ask whether a name is still spoken for name the given room, so a record of the past goes on being invisible to them by being named, which is what a separate folder at the top was doing for it before.";
  "Adding a name here is how the check is answered, and that is deliberately the only way. There is no way to say a folder is fine just this once, because the whole value is that the list and the disk are the same thing.";
  arguments_assert(arguments, 0);
  let expected = [
    ".claude",
    "android",
    "data",
    "js",
    "notes",
    "public",
    "scripts",
    "web_assets",
  ];
  return expected;
}
