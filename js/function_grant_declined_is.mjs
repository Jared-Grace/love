import { permission_grant_declined_phrase } from "./permission_grant_declined_phrase.mjs";
import { function_read } from "./function_read.mjs";
import { text_includes } from "./text_includes.mjs";
export async function function_grant_declined_is(f_name) {
  "Whether a function has asked in its own words never to be handed a standing approval";
  "A function that edits what runs unasked can say so in its own prose and nothing was reading it. The remover of dangling allow rules says outright that it must be seen every time; the refusal checker called it clean twice in three days and the only thing standing between that and a written rule was a reader who happened to open the file";
  "The refusal checker works out what it can from the call graph and the parameter list. Whether a standing approval is wise is sometimes neither - it is a judgment the author already made and wrote down - so this is the seam where prose gets a vote alongside the measurements";
  "Deliberately about the asked function alone rather than about what it reaches. A caller that reaches a declining function is not thereby declining: the request is about approving THIS command without a human seeing it and each function is the only one that can say that of itself";
  let phrase = permission_grant_declined_phrase();
  let text = await function_read(f_name);
  let declined = text_includes(text, phrase);
  return declined;
}
