import { arguments_assert } from "./arguments_assert.mjs";
import { claude_project_slug } from "./claude_project_slug.mjs";
export function folder_spellings(folder) {
  "Every way one folder gets written down: the folder itself, and the name the assistant files that folder's conversations under.";
  "There are two ways of saying the same place and only one of them looks like a place. The second has no separators in it at all - every one has been turned into a dash - so anything hunting for a folder by its own letters walks straight past it. That is how six live rules and two hooks came to keep pointing at a folder after it had been renamed.";
  "Said once, here, so that whatever asks what still names an old place and whatever rewrites those places are asking the same question. Two lists would answer differently the day one of them learned a third way, and the half that had not learned it would report the work finished.";
  arguments_assert(arguments, 1);
  let slug = claude_project_slug(folder);
  let spellings = [folder, slug];
  return spellings;
}
