export function reply_typo_costs() {
  "What each way of mistyping a word is charged, so that a reading needing no mistakes is preferred to one that needs several.";
  "★ THE NUMBERS ARE A RANKING AND NOT A MEASUREMENT. Nothing here claims a dropped letter is three times rarer than a doubled one; what they claim is an order. A doubled letter and a neighbouring key are the mistakes fingers make without the person noticing. A swap is worse. A letter simply gone is worst of the three, because it is also the mistake most likely to mean the word was never that word at all. Read as an order these are arguable and cheap to change; read as odds they would be invented.";
  "★ A LETTER SWAPPED FOR A LETTER NOWHERE NEAR IT ON THE KEYBOARD IS NOT IN THIS TABLE, and that absence matters more than any number in it. It was in the first draft at a cost of three, and it let `kenza` be read as `kenya` - which is not a misspelling of Kenya, it is somebody's name. A mistake no hand can make is not a typo, it is a different word.";
  let costs = {
    nearby: 1,
    doubled: 1,
    sounded: 1,
    swapped: 2,
    omitted: 3,
    extra: 3,
  };
  return costs;
}
