import { arguments_assert } from "./arguments_assert.mjs";
import { gigabyte_bytes } from "./gigabyte_bytes.mjs";
import { multiply } from "./multiply.mjs";
import { machine_memory_available_bytes_or_null } from "./machine_memory_available_bytes_or_null.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
export async function bible_audio_speech_workers() {
  "How many processes read chapters aloud at the same time.";
  "★ IT IS A MEASUREMENT AND IT IS WRITTEN DOWN HERE SO IT CAN BE RE-MEASURED RATHER THAN INHERITED. Three was chosen from a small trial and then quoted at 0.85 times real time before anything had been recorded end to end. Recorded end to end it came out at 0.515 - thirteen psalms, 573.7 seconds of audio in 1114.5 seconds - against 0.39 for one process, so the gain was a quarter and not the double that was claimed.";
  "★ THE REASON TO EXPECT MORE IS THAT THE MACHINE IS NOT BUSY. Fourteen cores were available and 7.65 of them were working, so the engine is not the thing that is full; each worker spends part of its time turning letters into sounds and writing the file, and neither of those spreads across cores. A worker that is idle half the time is an argument for more workers rather than for faster ones.";
  "★ A WORKER COSTS 1.03 GIGABYTES AND NOT THE THIRD OF ONE THE MODEL WEIGHS, WHICH IS THE NUMBER EVERYTHING BELOW IS DIVIDED BY. Asked during a real recording run, the three workers held 1071, 1069 and 983 megabytes; the parent holding the list held 31. So it is not the weights that dominate but the runtime around them, and six workers would want about 6.2 gigabytes rather than the 2 that had been assumed.";
  "★ THE MEMORY THAT IS FREE ON THIS MACHINE IS NOT A CONSTANT, WHICH IS WHY THIS IS NO LONGER A FIXED NUMBER AT ALL. It read 7.4 gigabytes available during that run and 2 an hour earlier, because about ten Claudes share this one machine and none of them announces what it is about to take. Any single number written here is therefore too many in one hour or too few in another, and a run that starts in the bad hour is the one that stops somebody elses work.";
  "★ SO IT IS ASKED AT THE MOMENT THE RUN STARTS AND WORKED OUT FROM WHAT IS ACTUALLY THERE. Three gigabytes are set aside for everybody else first, and what remains is divided by what one worker was measured to cost. At the 7.4 that was read during the last run that comes to four workers; at the 3.3 read while this was being written it comes to one.";
  "★ THE RESERVE IS THREE GIGABYTES BECAUSE THAT IS LARGER THAN THE SWING THAT WAS OBSERVED. Read twice about thirty seconds apart, this machine reported 5.4 gigabytes available and then 4.3, so the figure a run starts from can be a gigabyte stale before the first chapter is spoken. A reserve smaller than the swing would let a good reading start work the machine cannot hold a minute later.";
  "★ IT ANSWERS THREE WHEN THE MACHINE WILL NOT SAY, WHICH IS THE ONLY NUMBER THAT WAS SAFE IN EVERY HOUR OBSERVED. A reading that failed must not be treated as a reading of zero, because that would refuse to record on a machine that is merely quiet about itself.";
  "★ THE READING IS WAITED FOR NOW. It used to be taken straight, and then the file it reads had to be sent for from inside the reading rather than named above it, because a line naming something outside this repo does not survive a draft being promoted. So the reading became something to wait for and this became something to wait for with it - which is why the one caller waits too.";
  arguments_assert(arguments, 0);
  let a_gigabyte = gigabyte_bytes();
  let worker_bytes = multiply(1.03, a_gigabyte);
  let reserve_bytes = multiply(3, a_gigabyte);
  let unread_workers = 3;
  let available = await machine_memory_available_bytes_or_null();
  if (not(available)) {
    return unread_workers;
  }
  let spare = subtract(available, reserve_bytes);
  let fits = divide_floor(spare, worker_bytes);
  let most = 6;
  let b = math_min(most, fits);
  let workers = math_max(1, b);
  return workers;
}
