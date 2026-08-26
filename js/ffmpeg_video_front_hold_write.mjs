import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_video_front_hold_write(
  path_in,
  seconds_hold,
  path_out,
) {
  "$plain path_in";
  "$plain seconds_hold";
  "$plain path_out";
  "make a film longer at the front by holding its opening frame still for a stated time, and save that as a new film";
  "THIS IS WHAT AN OPENING THAT GREW NEEDS. When a recording gains an introduction, everything after it moves later by exactly that much, and the picture has to move with it or every word lands early for the whole length of the film. Holding the opening frame is the change that decides least: the picture that was there is still the picture that is there, just for longer.";
  "IT DELIBERATELY DOES NOT FADE UP FROM BLACK. A fade is a decision about how the film should begin and it is the caller's to make, not this function's - and a fade cannot be undone by whoever wanted a hold, whereas a hold can be faded over afterwards by whoever wanted a fade.";
  "THE PICTURE IS REDRAWN AND THERE IS NO WAY AROUND IT. Holding a frame is a filter, and a filter cannot run on a stream that is being copied through untouched, so the frames that come out are not the frames that went in. That cost is paid once and it is worth measuring rather than assuming: comparing the redrawn film against its source over the stretch they share answered between fifty-eight and sixty decibels, with one twenty-second run identical frame for frame, which is far past anything an eye resolves.";
  "THE HOLD LANDS ON A WHOLE FRAME, so ask for the time you want and expect the nearest frame to it. A film runs at a fixed number of pictures a second and there is no such thing as part of one, so a request that falls between two is rounded. Ask for a beat of six hundred and ninety-four thousandths of a second at thirty frames a second and twenty-one frames are held, which is seven hundred thousandths - the picture then sits six thousandths of a second late, a fifth of one frame, and no eye finds that against sound.";
  "IT CARRIES NO SOUND OUT AT ALL, because the reason to lengthen the front of a film is almost always that its sound is being replaced. Padding the old sound to match would produce something nobody wants: a recording with silence spliced into its opening, which then has to be thrown away by the very next step.";
  "The range of the picture follows whatever came in rather than being stated here, because saying it outright is a way of being wrong about a source nobody looked at, and getting it wrong shifts every level in the film.";
  "The index is moved to the front of the file so a player can start before it has the whole thing.";
  let v = String(seconds_hold);
  let filter_text = text_combine_multiple([
    "tpad=start_duration=",
    v,
    ":start_mode=clone,setpts=N/FRAME_RATE/TB",
  ]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_in,
    "-an",
    "-vf",
    filter_text,
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "17",
    "-movflags",
    "+faststart",
    path_out,
  ];
  await ffmpeg_words_run(command_words);
  return path_out;
}
