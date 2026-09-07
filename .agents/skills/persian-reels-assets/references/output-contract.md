# Output Contract — Persian Reels Assets

Use this contract whenever the skill creates final overlay assets.

## File contract

- Format: PNG with alpha channel.
- Background: fully transparent outside the intended element.
- One concept per file. If the visual contains several parts that must animate independently, split them into separate files.
- Recommended canvas: 1024×1024 for isolated graphic objects; use a wider/taller transparent canvas only when the element's natural shape requires it.
- Keep 5–10% transparent breathing room around the element.
- Export at a size that remains sharp when placed in a 1080×1920 Reel.

## Naming

Use zero-padded chronological names:

- `01_hook_text.png`
- `02_arrow_booking.png`
- `03_customer_card.png`
- `04_warning_badge.png`
- `05_cta_chip.png`

Use ASCII filenames for compatibility. Keep the exact Persian wording in the manifest, not in the filename.

## Manifest schema

For each asset provide:

```json
{
  "file": "01_hook_text.png",
  "type": "text-cutout",
  "text_fa": "مشتری راضی بود، چرا برنگشت؟",
  "trigger": "opening hook",
  "time_in": "00:00.30",
  "time_out": "00:02.10",
  "placement": "upper-center",
  "scale": "medium-large",
  "entrance": "fast pop + 3% overshoot",
  "exit": "quick fade/scale",
  "sfx": "soft impact"
}
```

If exact timestamps are unavailable, use the spoken phrase or beat name instead of fabricating times.

## Visual quality gate

Before delivery, verify:

1. The PNG actually has transparency.
2. There is no white/black rectangle around the asset.
3. Persian text reads correctly from right to left.
4. The asset is legible at phone size.
5. No important element is clipped.
6. No duplicate assets were accidentally generated.
7. Every manifest item maps to exactly one file.
8. No file contains a grid or multiple unrelated designs.

## Editing behavior

- Use motion-friendly shapes with clean silhouettes.
- Do not bake motion blur into static assets unless explicitly requested.
- Do not add drop shadows outside the cutout if they would create a visible box; if a shadow is part of the design, keep it soft and transparent.
- For text emphasis, prefer short phrases and individual keyword cutouts over paragraph cards.
- For arrows/highlights, preserve enough negative space so the editor can rotate or reposition them.

## Default aesthetic

When the user gives no specific art direction, use a premium contemporary Reel look: clean composition, high contrast, restrained 3D depth, crisp edges, and minimal visual clutter. Infer accent styling from supplied brand/reference material when available.