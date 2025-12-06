import { marker } from "../../../love/public/src/marker.mjs";
export function string_split_multiple() {
  marker("1");const escaped = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const regex = new RegExp(`[${escaped.join('')}]`);

// Split string
const parts = str.split(regex);
}
