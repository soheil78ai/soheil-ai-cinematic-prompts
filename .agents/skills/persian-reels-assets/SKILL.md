---
name: persian-reels-assets
description: Generate a complete Persian Instagram Reels edit-asset pack from a scenario, transcript, shot list, or uploaded video. Use when the user asks for Persian graphic overlays, cutout text, labels, arrows, icons, counters, CTA cards, callouts, or all visual elements needed to edit a 9:16 Reel. Every visual asset must be delivered as a separate transparent PNG with no background; never combine assets into a grid, collage, contact sheet, or multi-panel image.
---

# Persian Reels Assets

Turn a Reel scenario, transcript, or video into the exact visual elements needed for editing.

## Core workflow

1. Read the full scenario/transcript or inspect the supplied video before deciding what to create.
2. Break the Reel into beats: hook, tension/problem, proof/demo, payoff, CTA.
3. Create only assets that improve comprehension, rhythm, emphasis, or retention. Do not decorate every sentence.
4. Build an asset manifest with one row per asset: filename, exact Persian text, trigger phrase/time, intended screen position, approximate duration, entrance animation, exit animation, and optional SFX cue.
5. Produce every requested visual as its own file. Never merge multiple deliverables into one image.
6. When an image-generation tool is available, use it for non-text illustration/icon assets. For Persian typography or exact wording, prefer deterministic text rendering (SVG/canvas/Pillow/browser rendering) so spelling and RTL shaping remain correct.
7. Verify every PNG has real alpha transparency and tight transparent bounds around the element.

## Mandatory output rules

- Default target: vertical Instagram Reel, 9:16, 1080×1920 timeline.
- Asset files: transparent PNG, high resolution, no baked-in video background.
- One asset = one file.
- Never output a 3×3 sheet, contact sheet, collage, montage, or multi-panel image.
- Keep Persian copy short, conversational, and readable on a phone.
- Preserve exact Persian spelling, نیم‌فاصله, punctuation, and RTL order.
- Do not invent English text when Persian is requested.
- Do not add a logo, watermark, or username unless the user explicitly asks.
- Avoid generic stock-style stickers and childish clip-art unless the scenario calls for that style.
- Prefer premium, modern, clean, high-contrast visual language; use subtle 3D depth only when it improves the Reel.
- Leave enough transparent padding that the user can animate/scale the asset without clipping.

## Asset types

Choose among these only when useful:

- Hook word/phrase cutout
- Persian subtitle emphasis word
- Number/counter
- Arrow / pointer / circle / highlight ring
- Checklist / tick / cross
- Notification or message bubble
- UI-style label or mini-card
- Before/after marker
- Calendar / booking / reminder / customer icon
- Warning / FOMO / proof badge
- CTA chip
- Minimal illustrative object or symbol

## Timing and placement

Use the spoken phrase or shot change as the trigger. Keep important assets inside Reel-safe zones and away from Instagram UI. Do not cover the speaker's eyes, mouth, or key demo area. If the user appears on screen, place graphics around the subject rather than over the face.

## Persian typography

For any asset containing Persian text:

- Render RTL correctly.
- Keep words joined correctly; never output isolated Arabic glyph forms.
- Use Persian numerals only when they fit the user's established style; otherwise preserve the digits used in the scenario.
- Prefer one or two lines. If a phrase becomes long, shorten the copy rather than shrinking it excessively.
- Treat the wording in the scenario as source of truth. Do not paraphrase quoted on-screen copy unless needed for readability.

## Delivery sequence

1. Give a compact asset manifest.
2. Generate/export the assets.
3. Return the files in manifest order.
4. Include a final completeness check: every manifest item must have exactly one matching file.

Read `references/output-contract.md` whenever creating or validating the actual asset files.