import { child_output_wait } from "./child_output_wait.mjs";
import { property_get } from "./property_get.mjs";
export async function ffmpeg_words_run(command_words) {
  "$plain command_words";
  "Runs ffmpeg, given the command as a list of words rather than as a line of text, and answers what it printed.";
  "THE LIST IS THE WHOLE POINT, and here it is a filter that forces it. A line of text has to be split back into words before it can be run, and the splitter this repo runs a line through refuses outright any line holding a semicolon, a dollar or a bracket - rightly, because in a line those are shell operators and there is no way to tell a real one from a harmless one by looking at the text. Every one of those characters is ordinary punctuation inside a filter graph, so a picture instruction written as a line is not merely fragile, it is unsendable. Handed over already separated there is no split to be confused, and nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but ffmpeg. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  "Waiting for what it printed is shared with the other wrappers, because reading a program that is already running cannot choose which program ran - only the spawning has to stay here, where the name is spelled.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("ffmpeg", command_words, {
    shell: false,
  });
  let out = await child_output_wait(child, "ffmpeg", command_words);
  return out;
}
