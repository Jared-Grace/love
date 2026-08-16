import { api_read } from "./api_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function api_read_or(f_name, args, answer_instead) {
  arguments_assert(arguments, 3);
  ("What the server answers when a named function is asked for, or a ready-made answer of your own when the asking does not come back at all.");
  ("A screen that shows what is stored has nothing to show before anything is stored, and asking for a file that is not there yet is a failure rather than an empty answer. So every one of these reads is written as an attempt with something plain to fall back on - a chapter with no passages in it, a state that says nothing is happening - and the screen paints either way.");
  ("Written out by hand the fallback is five lines each time, and a screen that reads four things spends twenty lines saying the same thing four times. That is the shape this replaces: measured on 2026-08-17 one screen's opening step was seventeen lines of work and sixteen of them were this.");
  ("Anything at all that goes wrong is taken as nothing being there. That is the honest reading for a screen - a reader who cannot be shown what is stored is in the same position whether the file is missing or the network is down - and it is not the honest reading for a step that writes, which is why this is offered for reading only.");
  try {
    let answer = await api_read(f_name, args);
    return answer;
  } catch (missing) {
    return answer_instead;
  }
}
