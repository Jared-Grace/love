import { fn_name } from "./fn_name.mjs";
export function property_atoms_object_first() {
  "The atoms that take the thing being asked about first, so that a name handed to one of them as its first argument is known to be an object.";
  "IT REPLACED A GUESS MADE FROM THE FIRST WORD OF A NAME, and the guess was wrong. Ninety-nine functions in this repository are named starting with property, and twenty of them do not take the object first at all - the curried and lambda builders take the property NAME first, because what they hand back is a function that will be given the object later. Reading those as proof that the first argument is an object turns a name holding a plain word into a name that supposedly holds an object, which is the direction that refuses a rule somebody needed.";
  "IT IS DELIBERATELY SHORTER THAN THE FULL SET. Seventy-nine of the ninety-nine really do take the object first, and every one of them left out here only makes the reading quieter - a use it cannot see is a use that goes uncounted, and an uncounted use never invents a refusal. Adding one is safe at any time; the cost of adding one that does not belong is a rule refused for a reason nobody can act on, so a name goes in only after its own source has been read.";
  "THESE TEN ARE THE ONES A PERSON ACTUALLY WRITES. Swept over every standing grant, only three of them were ever handed a parameter as their first argument, and the other seven are here because they are the same handful of words spelled slightly differently and would be reached the moment somebody wrote one of them instead.";
  let names = [
    fn_name("property_get"),
    fn_name("property_get_or_null"),
    fn_name("property_get_or"),
    fn_name("property_set"),
    fn_name("property_exists"),
    fn_name("property_exists_not"),
    fn_name("property_delete"),
    fn_name("property_equals"),
    fn_name("property_equals_not"),
    fn_name("property_starts_with"),
  ];
  return names;
}
