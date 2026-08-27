export function harmony_key_degrees_pop(mode) {
  "the chords a key offers when the harmony is the modern worship and pop kind, as steps above the tonic paired with a quality and with how far outside the plain key each one sits";
  "the plain scale chords are the whole vocabulary here and everything that leaves the key is pushed far enough out that it takes overwhelming evidence to be chosen, which is what was asked for: no chord out of key";
  "the suspended shapes are offered on the chords that carry them in this music, because a fourth held over the root is a sound this writing reaches for constantly and reading it as a different chord altogether is the mistake that would otherwise be made";
  "they are pushed out past the plain triads all the same, so a suspended chord is only chosen where the note that would say major or minor is genuinely absent";
  "the minor here is the plain natural one, so the raised leading note and everything built on it is treated as leaving the key";
  if (mode === "major") {
    return [
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
        step_above: 7,
        quality: "seventh",
        distance: 0.7,
      },
      {
        step_above: 7,
        quality: "suspended_fourth",
        distance: 1,
      },
      {
        step_above: 0,
        quality: "suspended_fourth",
        distance: 1.1,
      },
      {
        step_above: 0,
        quality: "suspended_second",
        distance: 1.1,
      },
      {
        step_above: 5,
        quality: "suspended_fourth",
        distance: 1.1,
      },
      {
        step_above: 5,
        quality: "suspended_second",
        distance: 1.2,
      },
      {
        step_above: 7,
        quality: "suspended_second",
        distance: 1.2,
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
      {
        step_above: 0,
        quality: "seventh",
        distance: 3,
      },
    ];
  }
  return [
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
      step_above: 0,
      quality: "suspended_fourth",
      distance: 1.1,
    },
    {
      step_above: 5,
      quality: "suspended_fourth",
      distance: 1.1,
    },
    {
      step_above: 0,
      quality: "suspended_second",
      distance: 1.2,
    },
    {
      step_above: 10,
      quality: "suspended_fourth",
      distance: 1.2,
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
      step_above: 7,
      quality: "seventh",
      distance: 2.8,
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
}
