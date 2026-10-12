export function js_flow_data_methods_element() {
  "The methods of plain data - a list, a text, bytes - whose answer is made of the thing they are called on and never of what they are handed: a filter hands back some of the list's own items, never the function that chose them. Plain data was built by the language, not by the program, so these are the language's own methods and cannot be a program's look-alike.";
  "Left off on purpose, because the answer may be what the handed function gave back or what was handed in: map, flatMap, reduce, reduceRight, concat, then, and replace with a function. A method missing from here is treated as handing back what it was handed, so the list can only be too short, never wrong in the dangerous direction.";
  let names = [
    "filter",
    "find",
    "findLast",
    "slice",
    "at",
    "sort",
    "toSorted",
    "reverse",
    "toReversed",
    "flat",
    "some",
    "every",
    "findIndex",
    "findLastIndex",
    "includes",
    "indexOf",
    "lastIndexOf",
  ];
  return names;
}
