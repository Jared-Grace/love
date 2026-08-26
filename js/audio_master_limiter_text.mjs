import { divide } from "./divide.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function audio_master_limiter_text(decibels_gain) {
  "$plain decibels_gain";
  "write the last stretch of the chain that makes a recording loud - turn it up by the amount asked for and hold the top down so nothing that comes out of it goes over the ceiling";
  "TURNING UP AND HOLDING DOWN ARE ONE STEP AND NOT TWO. Turning up first and then trimming whatever went over would simply undo the gain; the point of a limiter is that the loud instants give way and everything else keeps the gain, which is what makes a recording sound louder rather than merely measure louder.";
  "IT WORKS AT FOUR TIMES THE RATE AND COMES BACK DOWN AFTERWARDS, AND THIS WAS MEASURED. Held to the ceiling at the recording's own rate, the samples obey and the wave drawn between them does not: the same run measured a whole decibel over the ceiling at the true peak while every sample sat under it. Playing back through anything that redraws that wave - which is every phone and every streaming service - that overshoot is real and it distorts. Working at four times the rate puts the samples close enough together that holding them down holds the wave down too.";
  "LOWERING THE CEILING INSTEAD DOES NOT FIX IT, and that was tried: at three decibels below full scale the true peak still came out above where the samples said it was. The fault is the drawing between samples, so only more samples answer it.";
  "THE RELEASE ADAPTS RATHER THAN BEING FIXED, which is the behaviour a fixed release cannot have: a short release pumps on sustained material and a long one flattens transients, and the same recording usually wants both in different places.";
  "The ceiling sits a little under full scale rather than at it, because every later step - an encoder, a player's own resampling - can add a fraction back, and there has to be somewhere for it to go.";
  let divided = divide(decibels_gain, 20);
  let level_in = Math.pow(10, divided);
  let v = level_in.toFixed(4);
  let chain_text = text_combine_multiple([
    "aresample=192000:resampler=soxr:precision=28,",
    "alimiter=level_in=",
    v,
    ":level_out=1:limit=0.891251:attack=5:release=50:asc=1:asc_level=0.5:level=disabled,",
    "aresample=48000:resampler=soxr:precision=28",
  ]);
  return chain_text;
}
