import { arguments_assert } from "./arguments_assert.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export function path_inside_folder_assert(folder, path_named) {
  "$plain folder";
  "$plain path_named";
  "Refuses a path that does not land inside the folder it is supposed to be inside, and says nothing at all when it does.";
  "IT EXISTS BECAUSE A NAME BUILT FROM AN ARGUMENT IS NOT THE SAME AS A NAME CHOSEN BY THIS REPO. A path built by sticking a caller's word onto a fixed folder looks constrained and is not: a word holding two dots and a slash walks back out of the folder, and the file that is then written over, or taken away, is one nobody named. The folder is the promise the caller was given; this is the check that the promise was kept.";
  "IT COMPARES WHOLE PATHS AND NOT THE TEXT THEY WERE SPELLED WITH, because the escape is invisible in the text. Both sides are resolved first, so the two dots have already been walked before anything is compared, and what is left is the plain question of whether one sits under the other.";
  "THE FOLDER ITSELF IS NOT INSIDE THE FOLDER. A caller asking about the folder it named is asking to write over the folder, which is the one answer this must never allow through - so the separator is part of what is matched, and only something beneath it passes.";
  "IT THROWS RATHER THAN ANSWERING, because every caller has the same thing to do with a no, and a caller that read a false and carried on regardless is the whole failure this was written to stop. A question that may safely be ignored belongs in a different function from a rule that may not.";
  arguments_assert(arguments, 2);
  let slash = text_slash_forward();
  let folder_full = path.resolve(folder);
  let named_full = path.resolve(path_named);
  let under = text_combine(folder_full, slash);
  let inside = text_starts_with(named_full, under);
  if (not(inside)) {
    error_json({
      hint: "this path was built from something a caller named and it does not land inside the folder it was meant to - the part that was joined on has walked back out of it, so the file written or taken away would be one nobody chose",
      folder: folder_full,
      path: named_full,
    });
  }
}
