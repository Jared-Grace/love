import { equal } from "./equal.mjs";
export function harmony_key_degrees_hymn(mode) {
  "the chords a key offers when the harmony is the traditional hymn and chorale kind, as steps above the tonic paired with a quality and with how far outside the plain key each one sits";
  "secondary dominants and the borrowed minor fourth are offered here at a real cost rather than left out, because a chorale reaches outside its key on purpose and a tool that could not name those chords would have to name a wrong one instead";
  "the raised leading note in the minor is the ordinary reading, so the major five and its seventh sit at no cost and the plain minor five is the one that has to be argued for";
  if (equal(mode, "major")) {
    let r = [
      {
        step_above: 0,
        quality: "major",
        distance: 0,
      },
      {
        step_above: 2,
        quality: "minor",
        distance: 0,
      },
      {
        step_above: 4,
        quality: "minor",
        distance: 0.3,
      },
      {
        step_above: 5,
        quality: "major",
        distance: 0,
      },
      {
        step_above: 7,
        quality: "major",
        distance: 0,
      },
      {
        step_above: 7,
        quality: "seventh",
        distance: 0.3,
      },
      {
        step_above: 9,
        quality: "minor",
        distance: 0,
      },
      {
        step_above: 11,
        quality: "diminished",
        distance: 0.6,
      },
      {
        step_above: 2,
        quality: "major",
        distance: 1.5,
      },
      {
        step_above: 4,
        quality: "major",
        distance: 1.8,
      },
      {
        step_above: 9,
        quality: "major",
        distance: 1.8,
      },
      {
        step_above: 0,
        quality: "seventh",
        distance: 1.5,
      },
      {
        step_above: 5,
        quality: "minor",
        distance: 2,
      },
    ];
    return r;
  }
  let r2 = [
    {
      step_above: 0,
      quality: "minor",
      distance: 0,
    },
    {
      step_above: 2,
      quality: "diminished",
      distance: 0.6,
    },
    {
      step_above: 3,
      quality: "major",
      distance: 0,
    },
    {
      step_above: 5,
      quality: "minor",
      distance: 0,
    },
    {
      step_above: 7,
      quality: "major",
      distance: 0,
    },
    {
      step_above: 7,
      quality: "seventh",
      distance: 0.3,
    },
    {
      step_above: 7,
      quality: "minor",
      distance: 0.8,
    },
    {
      step_above: 8,
      quality: "major",
      distance: 0,
    },
    {
      step_above: 10,
      quality: "major",
      distance: 0.3,
    },
    {
      step_above: 11,
      quality: "diminished",
      distance: 0.6,
    },
    {
      step_above: 0,
      quality: "major",
      distance: 2,
    },
  ];
  return r2;
}
