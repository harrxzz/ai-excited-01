// ai-excited-01 entry (Node 22, standard library only).
//
// The entry is the image entry.png beside this file: a colossal whale
// descending over a rain-slick city street at night, its belly glowing
// neon cyan and magenta, tiny people below for scale. The program's whole
// job is to place that image at /output/entry.png, byte for byte, on every
// run — the judge reads exactly those bytes, so the copy must be exact.
//
// So the program does no drawing, no randomness and no resizing: one copy,
// the same output each time.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
