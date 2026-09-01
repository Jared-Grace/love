import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_lag_measured_cases() {
  arguments_assert(arguments, 0);
  ("Runs of sounds and the presses that answered them, with the lag each run has to come back as.");
  ("EVERY MOMENT IN HERE IS AUTHORED RATHER THAN RECORDED, which is the point of the corpus and not a shortcut in it. The lag of a real run is unknown before it is worked out, so a run taken from a person could only ever be checked against whatever the code already says about it. A run written down with the lag chosen first can be checked against the lag.");
  ("THE MOMENTS ARE ALL QUARTERS AND EIGHTHS OF A SECOND, WHICH IS ARITHMETIC AND NOT TASTE. A machine holds a fifth of a second as very slightly more or less than a fifth, so a run built out of tenths comes back a hair away from the answer written beside it and the gate goes red over the last few digits of a number that is right. Halves and quarters are held exactly, and a corpus made of them fails only when something is actually wrong.");
  ("THE SOUNDS ARE SPACED UNEVENLY BECAUSE THEY ARE SPACED UNEVENLY IN THE ROOM. A steady beat gets answered ahead of itself: somebody who can tell when the next one is coming presses before it arrives, and the run then reports a smaller lag than that person really has, or a negative one. Uneven spacing removes the thing being anticipated, so what is left is somebody hearing a sound and reacting to it - which is what the box on the desk is for.");
  ("EVERY CASE HERE WAS CHECKED BY WRITING THE WRONG VERSIONS OUT AND SEEING WHICH CASES REFUSED THEM. Three of the first eight refused none of them, and the run that answered one press to three sounds - the fault with a whole paragraph written about it next door - was refused by none of them either. A case that no wrong version fails is not holding anything down; it is describing the code back to itself. So the wide window moved onto a press late enough to be reachable from several sounds, the stray press moved to where a sound was still waiting for an answer, and the clean run stayed because a version that subtracts the two moments the wrong way round fails it. That last was written down as something only the clean run catches, and it is not: every run here with a lag at all catches it, so the clean run is held by nothing no other case holds.");
  ("THAT CHECK WAS THEN RUN A SECOND TIME AGAINST A WIDER SET OF WRONG VERSIONS, AND THREE OF THEM GOT THROUGH, which is the thing to understand about this kind of proof: it answers for the wrong versions somebody thought of, and nothing at all about the ones they did not. A version that let a press land on the very edge of the window and threw it away, and two versions that picked the middle off one side or the other instead of working it out, all agreed with every case that was here. Both faults are invisible for the same reason - eight runs had gone by without a press ever landing on the edge, and without the distances either side of a middle ever differing - so one run with both properties was written down and all three versions now fail it.");
  ("TWO OF THE WIDER SET GOT THROUGH AND WERE LEFT ALONE, BECAUSE THEY ARE THE SAME WORKING-OUT IN DIFFERENT WORDS. One skips putting the presses in order, which changes nothing because a press is written down at the moment it happens and a list built that way is already in order. The other works the missed count out by taking the answered ones away from the number of sounds, instead of counting them as it goes, which is the same number because every sound is either answered or missed and there is no third thing it can be. Neither is a hole; both are arguments about what a run can look like, and either would become a hole if something ever handed this a list of presses it had not watched arrive.");
  ("A press that answers nothing and a press that answers twice each have their own case, because they are the two ways the pairing goes wrong and only one of them can be seen afterwards. A stray press that gets counted drags the middle; a press handed to two sounds reports a run as fully answered by somebody who barely answered it.");
  ("THE WRONG VERSIONS ARE NO LONGER A PARAGRAPH ABOUT THE PAST. They are written out in data/given/red_proofs/",
    fn_name("lyric_timing_lag_measured"),
    ".mjs, and ",
    fn_name("red_proofs_gate_run"),
    " asks every one of them of every case here on each run. Writing them down that way immediately caught something a paragraph never could: the backwards-subtraction version the account above leans on had never been written out at all, so the sentence justifying the clean run was resting on a check that existed only in prose.");
  let cases = [
    {
      clicks: [1, 2.5, 4.25, 5.75],
      taps: [1.25, 2.75, 4.5, 6],
      window_seconds: 1,
      measured: {
        lag: 0.25,
        heard: 4,
        missed: 0,
      },
      why: "a clean run answered every time at the same distance comes back as that distance, with nothing missed - and as a positive distance, because a press comes after the sound it answers",
    },
    {
      clicks: [1, 2.5, 4.25, 5.75, 7.5],
      taps: [1.1875, 2.75, 4.5625, 6, 7.875],
      window_seconds: 1,
      measured: {
        lag: 0.25,
        heard: 5,
        missed: 0,
      },
      why: "presses that scatter around one distance are answered by the middle of them, which is what keeps a single slow press from moving the answer",
    },
    {
      clicks: [1, 2.5, 4.25, 5.75, 7.5],
      taps: [1.25, 2.75, 4.5, 6, 20],
      window_seconds: 1,
      measured: {
        lag: 0.25,
        heard: 4,
        missed: 1,
      },
      why: "a press made long after the run had finished is not the answer to the sound still waiting for one, even though it is the next press to arrive and nothing else ever will",
    },
    {
      clicks: [1, 2.5, 4.25, 5.75],
      taps: [6],
      window_seconds: 4,
      measured: {
        lag: 3.5,
        heard: 1,
        missed: 3,
      },
      why: "one press given a window wide enough to reach back to three sounds answers only the earliest it can still reach, rather than being handed to all three and reporting a run that was almost entirely missed as almost entirely heard",
    },
    {
      clicks: [1, 2.5, 4.25, 5.75],
      taps: [1.25, 1.3125, 2.75, 4.5, 6],
      window_seconds: 1,
      measured: {
        lag: 0.25,
        heard: 4,
        missed: 0,
      },
      why: "pressing twice on one sound is answered by the first of the two, and the second is spent there rather than going on to answer the sound after it",
    },
    {
      clicks: [1, 2.5, 4.25, 5.75],
      taps: [2.75, 6],
      window_seconds: 1,
      measured: {
        lag: 0.25,
        heard: 2,
        missed: 2,
      },
      why: "somebody who caught half of them gets the lag of the half they caught alongside the count of the half they did not, because whether that is a measurement is not a question arithmetic can answer",
    },
    {
      clicks: [1, 2.5, 4.25],
      taps: [],
      window_seconds: 1,
      measured: {
        lag: null,
        heard: 0,
        missed: 3,
      },
      why: "a run nobody answered at all has no lag rather than a lag of zero, which would be a number claiming this person presses at the very instant of the sound",
    },
    {
      clicks: [1, 2.5, 4.25, 5.75],
      taps: [0.5, 1.25, 2.75, 4.5, 6],
      window_seconds: 1,
      measured: {
        lag: 0.25,
        heard: 4,
        missed: 0,
      },
      why: "a press made before the first sound, while somebody was still settling, answers nothing behind it and does not take the first sound's answer away from it",
    },
    {
      clicks: [1, 3],
      taps: [1.5, 3.25],
      window_seconds: 0.5,
      measured: {
        lag: 0.375,
        heard: 2,
        missed: 0,
      },
      why: "a press landing exactly on the far edge of the window is inside it, and the two distances lie either side of the middle with nothing between them - so the middle has to be worked out rather than picked off one side, and a version doing either of those goes red here and nowhere else",
    },
  ];
  return cases;
}
