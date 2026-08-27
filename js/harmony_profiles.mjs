export function harmony_profiles() {
  "the krumhansl and kessler listening profiles saying how strongly each step of the scale belongs to a major key and to a minor key";
  "these came from people rating how well a note fitted a key they had just heard so they are measurements rather than a rule somebody wrote";
  let major = [
    6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88,
  ];
  let minor = [
    6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17,
  ];
  let r = {
    major,
    minor,
  };
  return r;
}
