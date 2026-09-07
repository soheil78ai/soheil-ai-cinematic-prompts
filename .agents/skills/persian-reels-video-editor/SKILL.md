---
name: persian-reels-video-editor
description: Edit or prepare a Persian 9:16 Instagram Reel from an uploaded video, scenario, or transcript. Use when the user wants Persian subtitles, cuts, pacing, zooms, sound-effect cues, motion graphics, callouts, split-screen composition, or a complete edited Reel. Preserve the original speaker and message, keep Persian text accurate and RTL, and use separate transparent overlay assets when graphics are needed.
---

# Persian Reels Video Editor

Build a polished Persian Reel from the user's footage while preserving the original identity, speech, and scenario.

## Workflow

1. Inspect the full video and read any supplied scenario before editing.
2. Create an accurate Persian transcript. Correct obvious ASR errors using context, but do not rewrite what the speaker actually says.
3. Mark hook, key claims, pauses, proof/demo moments, and CTA.
4. Tighten dead air, repeated starts, and unusable gaps without making speech feel unnaturally rushed.
5. Build Persian subtitles with correct RTL shaping, spelling, نیم‌فاصله, and punctuation.
6. Add visual emphasis only where it supports the spoken point: punch-in, crop, graphic, cutaway, screen recording, callout, or sound cue.
7. When custom graphics are needed, invoke/use the `persian-reels-assets` skill if available and keep every overlay asset separate and transparent.
8. Export a vertical 9:16 Reel and, when possible, also preserve editable sidecar files such as SRT and the overlay asset folder.

## Default edit language

- Format: 1080×1920, 9:16.
- Keep the speaker visually dominant.
- Do not cover eyes or mouth with subtitles/graphics.
- Prefer fast, clean edits over excessive transitions.
- Use punch-ins, motion, and SFX to support retention, not as constant decoration.
- Preserve natural skin tone and the original voice unless the user explicitly requests stylization.
- Do not change facial structure, body shape, or identity.
- Keep the visual style premium, modern, clean, and readable on a phone.

## Persian subtitles

- Use short subtitle chunks based on meaning, not arbitrary word counts.
- Keep each subtitle on screen long enough to read.
- Highlight only the few words that deserve emphasis.
- Use correct Persian joining and right-to-left order.
- Avoid tiny text and avoid placing subtitles under Instagram's bottom UI.
- If the user gives exact on-screen wording, treat that wording as authoritative.

## Composition

When the scenario needs extra visual space, use a controlled split layout rather than covering the subject. For example, keep the speaker in one half/region and place demo material, screenshots, or graphics in the remaining region. Do not force split-screen on every shot.

## Sound design

Use restrained, intentional sound cues:

- soft impact for hook/emphasis
- click/tap for UI or checklist actions
- whoosh for directional motion
- subtle riser before reveal/payoff
- notification cue only when the visual represents a notification/message

Never let SFX overpower speech.

## Deliverables

When the environment supports actual video rendering, deliver the final MP4 plus the SRT and any separate overlay assets.

If direct rendering is unavailable, do not pretend the video was edited. Instead deliver an exact edit decision list with timestamps, corrected SRT, asset pack, and render instructions so the edit can be reproduced deterministically.

Read `references/editing-spec.md` for timing, subtitle, safe-zone, and export details.