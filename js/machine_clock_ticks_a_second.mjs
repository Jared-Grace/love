export function machine_clock_ticks_a_second() {
  "How many ticks of the machine's own clock make a second, which is what the times it records about a process are counted in.";
  "A hundred everywhere this runs. It has a name so that a reading turning ticks into seconds says which number it is dividing by and why, rather than carrying a bare hundred that reads like a rounding.";
  let r = 100;
  return r;
}
