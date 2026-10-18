export function audio_envelope_windows_per_second() {
  "How many loudness readings a second of a recording is measured into, which is the same number an offset counted in readings has to be divided by to be said in seconds.";
  "★ IT IS SPELLED ONCE BECAUSE TWO PLACES HAVE TO AGREE OR THE ANSWER IS SILENTLY IN THE WRONG UNIT. The measuring asks for a reading every so many samples, and the reporting turns a count of readings back into seconds; spelled twice those two would agree until either was tuned, and the way that failure shows is an offset that looks like a plausible number of seconds and is wrong by whatever factor the two differ by - nothing red, a confident wrong answer.";
  "TEN A SECOND IS FINE ENOUGH TO LINE UP SINGING AND COARSE ENOUGH TO IGNORE THE DIFFERENCE BETWEEN TWO ENCODINGS OF IT. Syllables arrive several a second, so a tenth of a second still carries the rhythm that makes one singing recognisable; and a video's sound has been through a lossy encoding that moves individual samples about, which a measurement this coarse averages away.";
  let readings = 10;
  return readings;
}
