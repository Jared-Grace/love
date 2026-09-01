import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_lag_said_cases() {
  arguments_assert(arguments, 0);
  ("Runs of sounds with what the person should be told about each one, written out by hand.");
  ("WHAT IS BEING PINNED IS THE DECISION, NOT THE WORDING. A sentence can be reworded and these all go red, which sounds like a corpus that costs more than it earns - but every case here separates two ways of deciding, and the wording is only how the decision is read back. A run just over the line and a run just under it differ by one press and get opposite answers; a lag of a quarter of a second and one of a quarter of a second and a bit are the same answer; a run of six and a run of ten with the same shortfall are the same answer. None of those survive a rewording being pasted in without being looked at.");
  ("THE COUNTS ARE NOT ALL TEN, BECAUSE THE SCREEN'S TEN IS THE SCREEN'S. A version that had learnt the length of a run rather than being told it would answer every ten-sound case correctly and go red on the two short runs, and that is the whole reason the short runs are here.");
  ("THE LAGS ARE PICKED FOR WHAT THEY DO TO THE ROUNDING. A quarter of a second and a bit must come back as a quarter, and a hair under a fifth must come back as a fifth - so a version that printed the raw number, or one that kept it to one place, is refused by the first case and by the rounding case respectively rather than by nothing.");
  ("THE RUN NOBODY ANSWERED IS THE ONE CASE HERE THAT REFUSES NOTHING BY ITS WORDS, and it is kept for what it refuses by not falling over. There is no lag at all in it, and a version that turned the lag into words before deciding whether it had one would throw rather than answer - which the gate reads as a failure just as surely as a wrong sentence. It is the only case that can catch that, because it is the only one where the lag is not a number.");
  ("ELEVEN WRONG VERSIONS WERE WRITTEN OUT AND RUN AGAINST THESE CASES, AND ONE OF THEM GOT THROUGH. It decided a run was good enough by asking whether at most two sounds had been missed, rather than by asking what share of them had been answered, and it agreed with all seven cases that were here. The two are the same answer on a run of ten and part company on a short one - two missed out of four is half the run gone and well under the line, while two missed is two missed however long the run was - so the short half-answered run at the end is what tells them apart. It is worth seeing what that version would have done on the desk: somebody who caught two sounds out of four would have been told their lag had been measured and it would have been written into the box, off two presses.");
  ("ONE MORE GOT THROUGH AND WAS LEFT ALONE, because it is the same question in different words. It works the length of the run out by adding the answered ones to the missed ones instead of using the number it was handed, and those are the same number because every sound played is either answered or missed. That holds as long as the thing measuring a run reports on every sound it played, which is what it does; it would stop holding if a run were ever cut off partway through, and the version would then quietly report the run as shorter than it was.");
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
  let ask_two =
    "Only 2 of the 4 sounds were answered, so nothing has been written into the lag box. Would another go, somewhere quiet, be easier?";
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
    {
      measured: {
        lag: 0.3,
        heard: 2,
        missed: 2,
      },
      count: 4,
      said: ask_two,
      why: "Half of a short run, which is well under the line - and the two missed sounds are the same two that would be shrugged off on a run of ten. A version asking how many were missed rather than what share was answered would write a lag into the box off two presses, and this is the only case that tells the two apart.",
    },
  ];
  return cases;
}
