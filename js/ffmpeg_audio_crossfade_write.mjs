import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function ffmpeg_audio_crossfade_write(
  path_first,
  seconds_first_end,
  path_second,
  seconds_second_start,
  seconds_crossfade,
  path_out,
) {
  "$plain path_first";
  "$plain seconds_first_end";
  "$plain path_second";
  "$plain seconds_second_start";
  "$plain seconds_crossfade";
  "$plain path_out";
  "join the front of one recording to the rest of another, fading across between them, and save the join as a new recording";
  "THIS IS WHAT REPLACING AN OPENING ACTUALLY NEEDS. A take recorded again to fix its first few seconds does not simply stop where the old one starts - it carries on into the music, and the two versions then overlap. Butted together at a single instant the overlap becomes a step, heard as a click or a lurch even where both sides are the same performance. Faded across, the overlap becomes the join.";
  "THE FADE IS STRAIGHT RATHER THAN CURVED, AND WHICH ONE IS RIGHT DEPENDS ENTIRELY ON WHETHER THE TWO SIDES AGREE. Two takes of one performance reinforce each other where they overlap, so their levels add and a straight fade holds the loudness level across the join. The curved fade every crossfade tool offers by default is for two sides that have nothing to do with each other, where the powers add instead - use it on matching takes and the middle of the join swells. Prove the sides agree before trusting this, by laying one on the other and looking at what is left over.";
  "THE LENGTHS ARE NOT WHAT A CALLER EXPECTS AND THIS IS WHERE THE ARITHMETIC GOES WRONG. What comes out is as long as both pieces added together less the length of the fade, and the second recording's content begins in the answer at the first one's length less that same fade. So lengthening the fade pulls everything after the join earlier - which is the opposite of the intuition that a longer fade makes a longer file, and it moves every timing downstream of it.";
  "The front of the first recording is taken from its very beginning, because the piece being spliced on is an opening and an opening has nothing before it.";
  "The rest of the second recording is taken to its end without a stated stop, so the join cannot silently shorten the thing it is joining onto.";
  "Both are brought to one rate first, because two recordings at different rates cannot be faded into each other without one of them being resampled by something that was not asked to.";
  "It is saved with every sample kept, because a join is an intermediate step and a recording that will be mastered afterwards should not have been thinned first.";
  let v = String(seconds_first_end);
  let branch_first = text_combine_multiple([
    "[0:a]aresample=48000:resampler=soxr:precision=28,aformat=sample_fmts=fltp:channel_layouts=stereo,atrim=start=0:end=",
    v,
    ",asetpts=N/SR/TB[a];",
  ]);
  let v2 = String(seconds_second_start);
  let branch_second = text_combine_multiple([
    "[1:a]aresample=48000:resampler=soxr:precision=28,aformat=sample_fmts=fltp:channel_layouts=stereo,atrim=start=",
    v2,
    ",asetpts=N/SR/TB[b];",
  ]);
  let v3 = String(seconds_crossfade);
  let joining = text_combine_multiple([
    "[a][b]acrossfade=d=",
    v3,
    ":c1=tri:c2=tri[out]",
  ]);
  let filter_text = text_combine_multiple([
    branch_first,
    branch_second,
    joining,
  ]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-y",
    "-i",
    path_first,
    "-i",
    path_second,
    "-filter_complex",
    filter_text,
    "-map",
    "[out]",
    "-c:a",
    "pcm_s24le",
    "-ar",
    "48000",
    path_out,
  ];
  await ffmpeg_words_run(command_words);
  return path_out;
}
