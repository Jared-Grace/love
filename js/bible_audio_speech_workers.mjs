import { arguments_assert } from "./arguments_assert.mjs";
export function bible_audio_speech_workers() {
  "How many processes read chapters aloud at the same time.";
  "★ IT IS A MEASUREMENT AND IT IS WRITTEN DOWN HERE SO IT CAN BE RE-MEASURED RATHER THAN INHERITED. Three was chosen from a small trial and then quoted at 0.85 times real time before anything had been recorded end to end. Recorded end to end it came out at 0.515 - thirteen psalms, 573.7 seconds of audio in 1114.5 seconds - against 0.39 for one process, so the gain was a quarter and not the double that was claimed.";
  "★ THE REASON TO EXPECT MORE IS THAT THE MACHINE IS NOT BUSY. Fourteen cores were available and 7.65 of them were working, so the engine is not the thing that is full; each worker spends part of its time turning letters into sounds and writing the file, and neither of those spreads across cores. A worker that is idle half the time is an argument for more workers rather than for faster ones.";
  "★ A WORKER COSTS 1.03 GIGABYTES AND NOT THE THIRD OF ONE THE MODEL WEIGHS, WHICH IS WHY IT IS STILL THREE. Asked during a real recording run, the three workers held 1071, 1069 and 983 megabytes; the parent holding the list held 31. So it is not the weights that dominate but the runtime around them, and six workers would want about 6.2 gigabytes rather than the 2 that had been assumed.";
  "★ THE MEMORY THAT IS FREE ON THIS MACHINE IS NOT A CONSTANT, WHICH IS WHAT MAKES ANY FIXED NUMBER HERE WRONG SOMEWHERE. It was measured at 7.4 gigabytes available during that run and at 2 an hour earlier, because about ten Claudes share this one machine and none of them announces what it is about to take. Three fits both. Four fits the good hour and not the bad one, and a run that starts in the bad hour is the one that stops somebody elses work.";
  "★ SO THE NUMBER THAT WOULD ACTUALLY BE RIGHT IS NOT A NUMBER BUT A READING OF WHAT IS FREE WHEN THE RUN STARTS. That wants an atom this repo does not have yet - what the machine reports as available rather than as unused, which are different figures and only the second one is easy to get. Until then three is the value that is safe in every hour that has been observed.";
  arguments_assert(arguments, 0);
  let workers = 3;
  return workers;
}
