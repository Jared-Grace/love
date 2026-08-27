import { equal } from "./equal.mjs";
export function harmony_key_degrees(mode) {
  "lists the chords a key offers as steps above its tonic paired with a quality and with how far outside the plain key each one sits";
  "the plain scale chords sit at zero and a borrowed or a secondary chord sits further out so the scorer prefers the plain one unless the notes insist";
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
