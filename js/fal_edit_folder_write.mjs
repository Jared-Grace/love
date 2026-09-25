import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read } from "./folder_read.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { fal_edit_write } from "./fal_edit_write.mjs";
export async function fal_edit_folder_write(
  model,
  prompt,
  folder_input,
  folder_output,
) {
  arguments_assert(arguments, 4);
  ("$plain model");
  ("$plain prompt");
  ("$plain folder_input");
  ("$plain folder_output");
  ("Changes every PNG in one folder with the same fal model and the same words, saving each under its own file name in another folder.");
  ("★ ONE PROMPT FOR THE WHOLE FOLDER, because a set of pictures stays a set only when every one of them was asked for in the same words.");
  ("A PICTURE ALREADY IN THE OUTPUT FOLDER IS SKIPPED, so a run that stopped part way is finished by running it again rather than paid for twice, and a picture placed there by hand is kept.");
  ("ONE AT A TIME, so a failure stops the run at a known picture with everything before it saved.");
  let names = await folder_read(folder_input);
  let written = [];
  let skipped = [];
  for (let name of names) {
    let png = text_ends_with(name, ".png");
    if (not(png)) {
      continue;
    }
    let path_output = path_join([folder_output, name]);
    let exists = await file_exists(path_output);
    if (exists) {
      list_add(skipped, name);
      continue;
    }
    let path_input = path_join([folder_input, name]);
    await fal_edit_write(model, prompt, path_input, path_output);
    list_add(written, name);
  }
  let r = {
    written,
    skipped,
  };
  return r;
}
