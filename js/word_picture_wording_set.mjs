import { fn_name } from "./fn_name.mjs";
import { js_object_property_text_set } from "./js_object_property_text_set.mjs";
import { function_transform } from "./function_transform.mjs";
export async function word_picture_wording_set(word, wording) {
  "$plain word";
  "$plain wording";
  "Write a new drawing wording for one taught word into the one place wordings are kept, in place of the one it has now.";
  "IT EDITS THE LIST AND DOES NOT KEEP A SECOND ONE. A wording typed somewhere else would be a wording no reader of the code could account for, and the picture would then show something nothing in the repo asked for. So the review screen's box writes back here, and the wording a picture was drawn from is still findable by reading one function.";
  "THE OLD WORDING IS NOT LOST BY BEING REPLACED, because every attempt already drawn has the wording that made it written down beside it. That is what makes editing in place safe rather than destructive: the list holds what to draw next, and the notes hold what each picture was actually asked for.";
  "IT DRAWS NOTHING. Changing the wording costs nothing and asking for a picture costs money, so the two are separate presses - a box that redrew as you typed would spend money on every half-written sentence.";
  "IT DOES NOT READ THE WORDING BACK TO PROVE IT LANDED, and that is deliberate rather than an omission. This process already holds the list in memory from before the write, so a read-back here would hand over the old wording while the file on disk holds the new one - a check that answers wrongly is worse than no check. What proves it is the next reader: the screen asks again over the seam, and that question is answered by a worker started after the file changed.";
  async function lambda(ast) {
    js_object_property_text_set(ast, word, wording);
  }
  let f_name = fn_name("word_picture_wordings");
  await function_transform(f_name, lambda);
  let r = {
    word,
    wording,
  };
  return r;
}
