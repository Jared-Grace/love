import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_pace_ms() {
  arguments_assert(arguments, 0);
  ("How long a car takes to cross one square. One number, the same for every car in the");
  ("world.");
  ("It USED to be drawn per car out of a range, and that was the fault behind cars driving");
  ("through one another. Two cars sharing a lane at different speeds is a chase: the quick one");
  ("closes on the slow one and there is nothing in a road made of squares that can stop it,");
  ("so it arrives, overlaps, and drives out the far side. Give every car one speed and the");
  ("gaps between them never change, which makes not overlapping a fact about the arrangement");
  ("rather than something that has to be checked every step.");
  ("That also buys the traffic a single clock. One speed means one timer for the whole road");
  ("instead of a timer per car, and one timer means every car steps on the same beat - so a");
  ("celebration that holds the street still holds all of it still and lets it all go again");
  ("together, with the spacing exactly as it was.");
  ("What is lost is a street where one driver is quicker than another, and it is worth");
  ("losing. Cars on one road going at about the same speed is what a road looks like anyway;");
  ("the variety a crowd wants is variety a queue of traffic does not.");
  ("A person takes between half a second and two and a half seconds a square; a car takes");
  ("rather under a third. That gap is the entire point of putting cars on the street - at");
  ("anything near walking speed a car reads as a large slow person, and the street stops");
  ("saying which parts of it are dangerous and which are not.");
  ("Not faster than that either. A square is a fifth of the screen on a phone, so a car at a");
  ("tenth of a second a square crosses the whole view in under a second, which reads as a");
  ("flicker rather than as traffic - and it would slide further in one step than the eye can");
  ("follow, so the sliding would stop being motion and become teleporting.");
  let ms = 280;
  return ms;
}
