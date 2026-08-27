import { property_get } from "./property_get.mjs";
import { child_output_wait } from "./child_output_wait.mjs";
export async function ffprobe_words_run(command_words) {
  "$plain command_words";
  "Runs ffprobe, given the command as a list of words rather than as a line of text, and answers what it printed.";
  "THE LIST IS WHAT LETS A FILE WITH A SPACE IN ITS NAME BE ASKED ABOUT AT ALL. A line of text has to be split back into words before it can be run, and a split cannot tell the space inside a name apart from the space between two words, so a song called Psalm 150.wav arrives as a file called Psalm and a file called 150.wav and neither is there. Handed over already separated there is no split to be confused, and nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but ffprobe. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let child = spawn("ffprobe", command_words, {
    shell: false,
  });
  let out = await child_output_wait(child, "ffprobe", command_words);
  return out;
}
