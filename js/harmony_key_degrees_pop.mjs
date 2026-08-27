import { equal } from "./equal.mjs";
export function harmony_key_degrees_pop(mode) {
  "the chords a key offers when the harmony is the modern worship and pop kind, as steps above the tonic paired with a quality and with how far outside the plain key each one sits";
  "the plain scale chords are the whole vocabulary here and everything that leaves the key is pushed far enough out that it takes overwhelming evidence to be chosen, which is what was asked for: no chord out of key";
  "nothing but three note chords is offered, because a fourth or a seventh held in the tune over a plain chord is the singer's note and not a change of chord, and offering a shape that swallows it lets the tune name the harmony instead of the bass";
  "suspended and seventh shapes were offered here first and they fired constantly on exactly those held notes, which put a colour on the page that the writer would have had to take off again by hand";
  "a chord standing on a note that is not its root is still reached, because that is named by the bass note written after a slash rather than by a wider chord";
  "the minor here is the plain natural one, so the raised leading note and everything built on it is treated as leaving the key";
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
        distance: 0.4,
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
        step_above: 9,
        quality: "minor",
        distance: 0,
      },
      {
        step_above: 11,
        quality: "diminished",
        distance: 1.8,
      },
      {
        step_above: 2,
        quality: "major",
        distance: 3,
      },
      {
        step_above: 4,
        quality: "major",
        distance: 3,
      },
      {
        step_above: 9,
        quality: "major",
        distance: 3,
      },
      {
        step_above: 5,
        quality: "minor",
        distance: 3,
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
      step_above: 8,
      quality: "major",
      distance: 0,
    },
    {
      step_above: 10,
      quality: "major",
      distance: 0,
    },
    {
      step_above: 7,
      quality: "minor",
      distance: 0.2,
    },
    {
      step_above: 2,
      quality: "diminished",
      distance: 1.6,
    },
    {
      step_above: 7,
      quality: "major",
      distance: 2.5,
    },
    {
      step_above: 11,
      quality: "diminished",
      distance: 3,
    },
    {
      step_above: 0,
      quality: "major",
      distance: 3,
    },
  ];
  return r2;
}
