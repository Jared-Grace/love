import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_frames_per_second() {
  arguments_assert(arguments, 0);
  ("How many frames of a lyric video stand for one second of the song.");
  ("★ TWO PLACES NEED THIS NUMBER AND THEY HAVE TO AGREE. The black ground is made at a rate, and a picture handed over slowly has to be brought up to that same rate before it can be faded - a fade is a different picture on every frame, and a stream carrying one frame a second can only offer a fade one step a second, which is a flicker rather than a fade. Two numbers written apart would let the ground run at one rate and the fading at another, and what that looks like is a crossfade that stutters while everything around it is smooth.");
  ("It is thirty because that is what the ground has always been made at, so nothing already rendered changes by asking for the number here instead of writing it down twice.");
  let rate = 30;
  return rate;
}
