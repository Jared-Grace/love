import { arguments_assert } from "./arguments_assert.mjs";
export function claude_project_slug(folder) {
  "The name the assistant gives a folder when it files that folder's conversations - the folder spelled out from the root, with every letter that is not a letter or a number turned into a dash.";
  "Worked out rather than written down, and worked out in one place. It was written out by hand in three separate functions, all naming the same folder, and one of them explained that the name lived there once. Moving the folder would have left all three pointing at a folder that is gone - and a name that is gone is not an error here, it is an empty answer, which reads exactly like a repo nobody has talked about yet.";
  arguments_assert(arguments, 1);
  let slug = folder.replace(/[^a-zA-Z0-9]/g, "-");
  return slug;
}
