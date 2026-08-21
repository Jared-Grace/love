export function bundle_size_step_ceiling() {
  "The most a client bundle may grow in one step, in bytes.";
  "A ceiling on a bundle's SIZE has to be raised every time the app legitimately grows, which costs a person a measurement each time and can only ever be set for the few apps small enough to have a size worth naming. A ceiling on its growth needs none of that: an app may grow to any size it likes, one honest step at a time, and a whole dependency tree arriving still fails on the step it arrives on. That difference is what this measures instead.";
  "The number is measured rather than chosen. Three hundred and nine steps were read out of the history, across eight bundles: half of them moved under sixty bytes, nine in ten under eleven hundred, ninety nine in a hundred under four and a half KiB, and the largest single step in the whole set was fourteen point nine. So sixteen KiB would have fired on none of them. What it catches is on the other side of a wide gap - the trees the sandbox measured when a preview was registered were forty KiB and up, and a language list arriving is nine and a half.";
  "It is spelt in bytes because it is compared against a difference of two file sizes, and a number that has to be converted before it can be used invites the conversion being forgotten at one of the places using it.";
  let bytes = 16384;
  return bytes;
}
