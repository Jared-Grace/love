import { arguments_assert } from "./arguments_assert.mjs";
export function bible_audio_speech_workers() {
  "How many processes read chapters aloud at the same time.";
  "★ IT IS A MEASUREMENT AND IT IS WRITTEN DOWN HERE SO IT CAN BE RE-MEASURED RATHER THAN INHERITED. Three was chosen from a small trial and then quoted at 0.85 times real time before anything had been recorded end to end. Recorded end to end it came out at 0.515 - thirteen psalms, 573.7 seconds of audio in 1114.5 seconds - against 0.39 for one process, so the gain was a quarter and not the double that was claimed.";
  "★ THE REASON TO EXPECT MORE IS THAT THE MACHINE IS NOT BUSY. Fourteen cores were available and 7.65 of them were working, so the engine is not the thing that is full; each worker spends part of its time turning letters into sounds and writing the file, and neither of those spreads across cores. A worker that is idle half the time is an argument for more workers rather than for faster ones.";
  "★ THE COST OF BEING WRONG UPWARDS IS A COPY OF THE MODEL PER WORKER, WHICH IS ABOUT A THIRD OF A GIGABYTE, AND THAT IS WHY IT IS STILL THREE. Six was written here and then taken back out without being run: this machine is shared with about ten other Claudes and had 2 of its 30 gigabytes free at the time, so six copies of the model would have been as likely to stop somebody elses work as to record anything faster. The number to raise this to is unmeasured, not known-bad.";
  "★ THE MEASUREMENT IT IS WAITING ON IS WHAT ONE WORKER ACTUALLY COSTS IN MEMORY, WHICH A RECORDING RUN CAN BE ASKED WHILE IT IS ALREADY RUNNING. That answers how many fit in whatever is free at the time, and it needs no run of its own.";
  arguments_assert(arguments, 0);
  let workers = 3;
  return workers;
}
