import { arguments_assert } from "./arguments_assert.mjs";
export function bible_audio_speech_workers() {
  "How many processes read chapters aloud at the same time.";
  "★ IT IS A MEASUREMENT AND IT IS WRITTEN DOWN HERE SO IT CAN BE RE-MEASURED RATHER THAN INHERITED. Three was chosen from a small trial and then quoted at 0.85 times real time before anything had been recorded end to end. Recorded end to end it came out at 0.515 - thirteen psalms, 573.7 seconds of audio in 1114.5 seconds - against 0.39 for one process, so the gain was a quarter and not the double that was claimed.";
  "★ THE REASON TO EXPECT MORE IS THAT THE MACHINE IS NOT BUSY. Fourteen cores were available and 7.65 of them were working, so the engine is not the thing that is full; each worker spends part of its time turning letters into sounds and writing the file, and neither of those spreads across cores. A worker that is idle half the time is an argument for more workers rather than for faster ones.";
  "★ THE COST OF BEING WRONG UPWARDS IS A COPY OF THE MODEL PER WORKER, WHICH IS ABOUT A THIRD OF A GIGABYTE. That is the ceiling to check against before raising this, and it is why the number lives in one place rather than being spelled at the call.";
  arguments_assert(arguments, 0);
  let workers = 6;
  return workers;
}
