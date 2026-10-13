export function durations_near_each_cases() {
  "two small tables of recording lengths, and which lengths on the other side each one should be put forward as possibly the same recording";
  "THE LENGTHS ARE WRITTEN OUT BY HAND rather than read off real recordings, because the point of a case is that a reader can work the answer out themselves and disagree with the code. Taken from a run, every expectation here would be a copy of whatever the join did that day, including the day it started doing the wrong thing.";
  "THE FIRST CASE IS A ROW THAT MATCHES NOTHING, AND IT COMES BACK ANYWAY. Matching nothing is the finding this whole join exists to report - an editing session whose source recording is no longer on the disk - so a shape that quietly drops the empty rows loses exactly the answer that is wanted. The row must be there with nothing beside it.";
  "THE SECOND CASE PUTS A GAP EXACTLY ON THE SLACK, AND IT IS NOT A MATCH. The slack is a limit rather than a target, so equal to it is outside it. A reader cannot guess which way that falls, and a rewrite has an even chance of flipping it, which is the only reason it is pinned.";
  "THE SLACK IN THAT CASE IS A HALF AND NOT A HUNDREDTH, AND THAT IS NOT TIDINESS. Asking about the boundary needs a gap that really is the slack, and a machine holding lengths as binary fractions cannot make one out of hundredths: written the obvious way, a hundred and a hundred-and-five-hundredths come out a hair closer than five hundredths apart, so the case that looks like it sits on the line sits just inside it and proves the opposite of what it says. Halves and quarters are held exactly, so the gap here is exactly the slack. The working slack over real recordings stays a twentieth of a second; what cannot be written is a case about its edge, not the slack itself.";
  "THE THIRD CASE HAS ONE ROW PUTTING TWO LENGTHS FORWARD, because this answers a shortlist and not a pairing. Two recordings of near enough the same length is an ordinary thing, and keeping only the closest would hide one of them from the proper comparison that follows.";
  "THE FOURTH CASE ASKS ABOUT NO ROWS AT ALL and gets no answers, which is the empty table rather than an error.";
  let cases = [
    {
      rows: [
        {
          path_audio: "/a/alone.wav",
          seconds: 100,
        },
      ],
      rows_other: [
        {
          path_audio: "/b/far.wav",
          seconds: 90,
        },
        {
          path_audio: "/b/further.wav",
          seconds: 110,
        },
      ],
      seconds_tolerance: 0.05,
      answers: [
        {
          row: {
            path_audio: "/a/alone.wav",
            seconds: 100,
          },
          near: [],
        },
      ],
      why: "a row whose length nothing on the other side comes near still comes back, holding nothing, because that emptiness is the answer somebody asked for",
    },
    {
      rows: [
        {
          path_audio: "/a/edge.wav",
          seconds: 100,
        },
      ],
      rows_other: [
        {
          path_audio: "/b/exactly_the_slack.wav",
          seconds: 100.5,
        },
        {
          path_audio: "/b/inside_the_slack.wav",
          seconds: 100.25,
        },
      ],
      seconds_tolerance: 0.5,
      answers: [
        {
          row: {
            path_audio: "/a/edge.wav",
            seconds: 100,
          },
          near: [
            {
              path_audio: "/b/inside_the_slack.wav",
              seconds: 100.25,
            },
          ],
        },
      ],
      why: "a gap the same size as the slack is outside it, so the slack is the first distance that no longer counts rather than the last one that does, and the gap is a half because a half is the only sort of gap a machine can hold exactly enough to ask the question",
    },
    {
      rows: [
        {
          path_audio: "/a/first.wav",
          seconds: 50,
        },
        {
          path_audio: "/a/second.wav",
          seconds: 200,
        },
      ],
      rows_other: [
        {
          path_audio: "/b/one.wav",
          seconds: 50.01,
        },
        {
          path_audio: "/b/two.wav",
          seconds: 49.99,
        },
        {
          path_audio: "/b/elsewhere.wav",
          seconds: 300,
        },
      ],
      seconds_tolerance: 0.05,
      answers: [
        {
          row: {
            path_audio: "/a/first.wav",
            seconds: 50,
          },
          near: [
            {
              path_audio: "/b/one.wav",
              seconds: 50.01,
            },
            {
              path_audio: "/b/two.wav",
              seconds: 49.99,
            },
          ],
        },
        {
          row: {
            path_audio: "/a/second.wav",
            seconds: 200,
          },
          near: [],
        },
      ],
      why: "one length can put two recordings forward, and all of them are kept, because this is a shortlist for a proper comparison and not a decision about which one it is",
    },
    {
      rows: [],
      rows_other: [
        {
          path_audio: "/b/one.wav",
          seconds: 50,
        },
      ],
      seconds_tolerance: 0.05,
      answers: [],
      why: "nothing asked about is answered with nothing, so an empty table is an ordinary answer here and not a failure",
    },
  ];
  return cases;
}
