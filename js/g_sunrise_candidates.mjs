export function g_sunrise_candidates() {
  "the sunrise palettes under comparison on the #sky panel: WARM (a peach dawn that eases into morning), LAVENDER (a cool periwinkle bridge out of night), SPLIT (a rose-lavender midpoint, the currently-baked sunrise). each is {label, components} so the compare pills can render the name and preview the palette; one place so a final pick stays in sync";
  let candidates = [
    {
      label: "Warm",
      components: {
        r: 250,
        g: 182,
        b: 150,
        a: 0.53,
        saturate: 0.6,
        darkness: 0.38,
      },
    },
    {
      label: "Lavender",
      components: {
        r: 200,
        g: 165,
        b: 242,
        a: 0.6,
        saturate: 0.42,
        darkness: 0.4,
      },
    },
    {
      label: "Split",
      components: {
        r: 228,
        g: 172,
        b: 210,
        a: 0.57,
        saturate: 0.48,
        darkness: 0.4,
      },
    },
  ];
  return candidates;
}
