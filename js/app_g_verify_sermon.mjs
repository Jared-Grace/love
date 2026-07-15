export function app_g_verify_sermon() {
  let passage =
    "That which was from the beginning, which we have heard, which we have seen with our own eyes, which we have gazed upon and touched with our own hands—this is the Word of life.";
  let lines = [
    {
      text: "The Word of life, the Word, was from the beginning of all things.",
      indices: [2, 3, 4, 5, 31, 32, 33, 34],
    },
    { text: "The Word is Jesus.", indices: [30, 31, 32] },
    { text: "Jesus is the Life.", indices: [30, 31, 34] },
    {
      text: "Before the world was made, the Word was there eternally.",
      indices: [2, 31, 32],
    },
    { text: "We are witnesses of the Word.", indices: [7, 31, 32, 33] },
    { text: "We have heard the Word.", indices: [7, 8, 9, 31, 32] },
    {
      text: "We have seen the Word with our own eyes.",
      indices: [11, 12, 13, 14, 15, 16, 17, 31, 32],
    },
    { text: "We have gazed upon the Word.", indices: [19, 20, 21, 22, 31, 32] },
    {
      text: "And we have touched the Word with our own hands.",
      indices: [19, 20, 23, 24, 25, 26, 27, 28, 31, 32],
    },
    { text: "And so the Word came to us in a real body.", indices: [23, 31, 32] },
  ];
  return { passage, lines };
}
