import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_lag_said_cases() {
  arguments_assert(arguments, 0);
  ("Runs of sounds with what the person should be told about each one, written out by hand.");
  ("WHAT IS BEING PINNED IS THE DECISION, NOT THE WORDING. A sentence can be reworded and these all go red, which sounds like a corpus that costs more than it earns - but every case here separates two ways of deciding, and the wording is only how the decision is read back. A run just over the line and a run just under it differ by one press and get opposite answers; a lag of a quarter of a second and one of a quarter of a second and a bit are the same answer; a run of six and a run of ten with the same shortfall are the same answer. None of those survive a rewording being pasted in without being looked at.");
  ("THE COUNTS ARE NOT ALL TEN, BECAUSE THE SCREEN'S TEN IS THE SCREEN'S. A version that had learnt the length of a run rather than being told it would answer every ten-sound case correctly and go red on the two short runs, and that is the whole reason the short runs are here.");
  ("THE LAGS ARE PICKED FOR WHAT THEY DO TO THE ROUNDING. A quarter of a second and a bit must come back as a quarter, and a hair under a fifth must come back as a fifth - so a version that printed the raw number, or one that kept it to one place, is refused by the first case and by the rounding case respectively rather than by nothing.");
  ("THE RUN NOBODY ANSWERED IS THE ONE CASE HERE THAT REFUSES NOTHING BY ITS WORDS, and it is kept for what it refuses by not falling over. There is no lag at all in it, and a version that turned the lag into words before deciding whether it had one would throw rather than answer - which the gate reads as a failure just as surely as a wrong sentence. It is the only case that can catch that, because it is the only one where the lag is not a number.");
  let told_quarter =
    "You press 0.25 seconds after a sound, from 10 of the 10 sounds. That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";
  let told_eight =
    "You press 0.31 seconds after a sound, from 8 of the 10 sounds. That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";
  let told_fifth =
    "You press 0.2 seconds after a sound, from 10 of the 10 sounds. That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";
  let told_six =
    "You press 0.5 seconds after a sound, from 6 of the 6 sounds. That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";
  let told_three =
    "You press 0.25 seconds after a sound, from 3 of the 4 sounds. That is now in the lag box. Timing a song runs a little quicker than this, because you can hear a line coming - so if the words still land late, take a little more off.";
  let ask_seven =
    "Only 7 of the 10 sounds were answered, so nothing has been written into the lag box. Would another go, somewhere quiet, be easier?";
  let ask_none =
    "Only 0 of the 10 sounds were answered, so nothing has been written into the lag box. Would another go, somewhere quiet, be easier?";
  let cases = [
    {
      measured: {
        lag: 0.2537,
        heard: 10,
        missed: 0,
      },
      count: 10,
      said: told_quarter,
      why: "Every sound answered. The lag is offered, cut to two places, and the sentence says where it has gone and that it is a place to start.",
    },
    {
      measured: {
        lag: 0.3149,
        heard: 8,
        missed: 2,
      },
      count: 10,
      said: told_eight,
      why: "Eight of ten is exactly the line, and exactly the line is over it. A version drawn at the same place but refusing to count the boundary in goes red here and nowhere else.",
    },
    {
      measured: {
        lag: 0.28,
        heard: 7,
        missed: 3,
      },
      count: 10,
      said: ask_seven,
      why: "One press below the line, with a perfectly reasonable lag sitting there unused. This is the case that refuses a version deciding on whether there is a lag at all rather than on how much of the run stands behind it.",
    },
    {
      measured: {
        lag: null,
        heard: 0,
        missed: 10,
      },
      count: 10,
      said: ask_none,
      why: "Nobody answered anything, so there is no lag to say. It is asked for again in the same words as a half-answered run, because from the person's side both are one thing: go again.",
    },
    {
      measured: {
        lag: 0.19999,
        heard: 10,
        missed: 0,
      },
      count: 10,
      said: told_fifth,
      why: "A hair under a fifth of a second. Two places is what the timing documents are written to, so this comes back as a fifth and not as a string of nines.",
    },
    {
      measured: {
        lag: 0.5,
        heard: 6,
        missed: 0,
      },
      count: 6,
      said: told_six,
      why: "A short run, all of it answered. The number of sounds is whatever it was told, not the ten the screen happens to use.",
    },
    {
      measured: {
        lag: 0.25,
        heard: 3,
        missed: 1,
      },
      count: 4,
      said: told_three,
      why: "Three quarters of a four-sound run, which is the line again at a different length. A version that had the line written as a number of presses rather than as a share of the run goes red here.",
    },
  ];
  return cases;
}
