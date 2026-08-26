export function beats_seconds_cases() {
  "counts of beats at stated speeds, and how long each one should last";
  "THE SPEEDS ARE CHOSEN SO A READER CAN CHECK THE ANSWER WITHOUT RUNNING ANYTHING. Sixty beats in a minute makes a beat a second, a hundred and twenty makes it half of one, and the rest divide as cleanly. A case whose answer only a machine can confirm records what the code did on the day it was written, including on the day it started doing the wrong thing.";
  "THE LAST CASE IS THE ONE THE OTHERS CANNOT COVER, and it is written out to every digit on purpose. The speed a real recording was played at does not divide evenly, so the length of three of its beats cannot be written down exactly - and it is precisely there that measuring one beat first and multiplying it afterwards drifts away from dividing the count once. Pinning the full value is what keeps that order of operations from being quietly reversed by somebody tidying the line.";
  "A COUNT OF NOTHING IS HELD AS A CASE BECAUSE ITS ANSWER IS A LENGTH OF NOTHING. A distance of no beats is an ordinary thing to work out at the edge of a stretch, and anything that invents a beat there moves the whole edit by one.";
  let cases = [
    {
      beat_count: 1,
      beats_per_minute: 60,
      seconds: 1,
      why: "at sixty beats in a minute a beat is a second, which is the one case a reader can check by knowing what a minute is",
    },
    {
      beat_count: 4,
      beats_per_minute: 120,
      seconds: 2,
      why: "twice as fast makes each beat half as long, so four of them last what two did before",
    },
    {
      beat_count: 3,
      beats_per_minute: 90,
      seconds: 2,
      why: "a count that does not match the speed still divides cleanly, so a wrong answer here would be arithmetic rather than rounding",
    },
    {
      beat_count: 8,
      beats_per_minute: 128,
      seconds: 3.75,
      why: "an answer with a fraction in it that is still exact, which separates a fault in the arithmetic from a fault in the rounding",
    },
    {
      beat_count: 0,
      beats_per_minute: 86.5,
      seconds: 0,
      why: "no beats last no time, so nothing is invented at the edge of a stretch where a count comes out as none",
    },
    {
      beat_count: 3,
      beats_per_minute: 86.5,
      seconds: 2.0809248554913293,
      why: "a real speed that does not divide evenly, pinned to every digit, because this is the only case where measuring one beat first and multiplying it afterwards gives a different answer from dividing the count once",
    },
  ];
  return cases;
}
