import { arguments_assert } from "./arguments_assert.mjs";
import { ffprobe_words_run } from "./ffprobe_words_run.mjs";
export async function picture_size(path) {
  "$plain path";
  "How many pixels across and down a picture on disk is.";
  "★ IT IS ASKED OF THE PROBER RATHER THAN READ OUT OF THE FILE, because the pictures here arrive as whatever the place they came from serves - a painting from a museum scan, a drawing from a house that answers in one format this week and another next - and a reader written for one of those answers nothing at all for the others. The prober already understands every one of them, and it is on this machine because the videos are made with its twin.";
  "★ THE NAME GOES OVER AS ONE WORD AND IS NEVER JOINED INTO A LINE. A painting's file name is the painting's title, and titles have spaces and commas in them; a line of text that has to be split back into words turns one such file into several files that are not there.";
  "It answers the two numbers together because nothing ever wants one of them: every use of this is working out a rectangle, and a rectangle needs both.";
  arguments_assert(arguments, 1);
  let words = [
    "-v",
    "error",
    "-select_streams",
    "v:0",
    "-show_entries",
    "stream=width,height",
    "-of",
    "csv=s=x:p=0",
    path,
  ];
  let printed = await ffprobe_words_run(words);
  let said = printed.trim().split("x");
  let r = {
    width: Number(said[0]),
    height: Number(said[1]),
  };
  return r;
}
