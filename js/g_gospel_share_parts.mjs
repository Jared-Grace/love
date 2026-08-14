import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_rock } from "./emoji_rock.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
export function g_gospel_share_parts() {
  "The gospel the player shares, in the three parts it is said in - each part's words and the emoji that stands for it.";
  "TWO READERS NEED THE SAME WORDS. The button the player taps says them, and the arc prompt has to tell the writer what was said so the person can answer it - and a person cannot object to words that were never given, nor object to different words than the ones they will hear. Written twice, the prompt would drift from the button and the drift would show up only as arcs answering something the player never said.";
  "IT IS 1 CORINTHIANS 15 VERSES 3 AND 4 - died, buried, raised - which is Paul naming the gospel he preached as of first importance. So the three parts are not a phrasing choice to be tidied later.";
  "THE PARTS ARE SEPARATE rather than one sentence because the button sets an emoji into each one and the prompt wants none of them. Kept as a sentence, the prompt would have to strip characters back out of it, and a sentence with the pictures cut out is not the same reading as a sentence written without them.";
  let r = [
    {
      said: "Jesus died",
      emoji: emoji_cross(),
    },
    {
      said: "was buried",
      emoji: emoji_rock(),
    },
    {
      said: "rose to life",
      emoji: emoji_sunrise(),
    },
  ];
  return r;
}
