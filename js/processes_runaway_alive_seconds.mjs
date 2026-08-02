export function processes_runaway_alive_seconds() {
  "How long one of this repo's processes has to have been alive before working flat out counts as being stuck rather than being busy.";
  "Two hours. Measured on this machine while everything was healthy, the longest-running piece of real work - a whole gate run, sharded - was alive for about seven minutes, and the one that had genuinely gone in a circle had been alive for four days. There is nothing in between to get wrong, so the line is drawn far above the honest work and still catches the other one about fifty times sooner than anybody noticed it by hand.";
  let r = 7200;
  return r;
}
