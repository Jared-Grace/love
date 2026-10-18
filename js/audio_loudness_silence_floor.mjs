export function audio_loudness_silence_floor() {
  "How quiet a stretch of a recording has to be before it is treated as silence rather than as a reading, said in decibels.";
  "★ A TRUE SILENCE IS REPORTED AS MINUS INFINITY AND NO ARITHMETIC SURVIVES THAT. The loudness meter answers a real number for anything audible and the word for infinity for a stretch holding nothing at all, so a run of readings carrying one of those cannot be averaged, subtracted or correlated - every answer that touches it comes out as not a number, and that spreads to the whole measurement rather than to the one window. Floored to an ordinary number, silence is simply the quietest thing the measurement can say.";
  "MINUS NINETY IS BELOW ANYTHING A RECORDING OF SINGING HOLDS, which is what makes it safe to put in place of silence. Sixteen bits of sound cannot describe anything quieter than about minus ninety-six, and a room with a microphone in it never gets near that, so no real reading is ever pushed up to this floor and the shape of the singing is untouched.";
  let decibels = -90;
  return decibels;
}
