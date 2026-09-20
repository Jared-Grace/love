export function audio_master_ceiling_decibels() {
  "answer the loudest any single instant of a finished recording is allowed to be, as a number of decibels below full scale";
  "IT SITS A LITTLE UNDER FULL SCALE RATHER THAN AT IT, because every step after this one can put a fraction back. An encoder rounds, a player redraws the wave between the samples, and either can hand back a shade more than was written. There has to be somewhere for that to go, and this is the somewhere.";
  "IT IS ONE NUMBER SHARED BY EVERY STEP THAT AIMS AT IT, and that is the whole point. The squeezing step works out how hard to squeeze from where the ceiling is, and the holding step after it refuses to let anything past the same place. Two steps disagreeing about where the ceiling is means the first one aims at a line the second one has moved, and nothing would report it.";
  let r = -1;
  return r;
}
