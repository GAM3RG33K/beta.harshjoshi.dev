# DESIGN.md — beta.harshjoshi.dev

Design system tokens for the "Agent Terminal" direction (D-007).

## Palette (dark, single locked theme)

| Token | Value | Use |
|---|---|---|
| `--surface-base` | `#0B0E14` | page background |
| `--surface-1` | `#10161F` | cards |
| `--surface-2` | `#141C29` | cards on cards / hover |
| `--line` | `#1E2735` | borders |
| `--text` | `#E8E6E3` | primary text |
| `--muted` | `#8A93A6` | secondary text |
| `--accent` | `#00E59B` | primary accent (green) |
| `--accent-dim` | `rgba(0,229,155,0.12)` | accent fills |
| `--amber` | `#F0B35E` | tag accent |
| `--blue` | `#6EC6FF` | code/inline links |

Contrast: muted on card ≥ 4.5:1; accent on base ≥ 7:1.

## Type

- Display/headings: Inter 800, tight `-0.045em` (hero), `-0.03em` (section).
- Body: Inter 400/500, 1.55–1.65.
- Mono: JetBrains Mono (nav logos, labels, terminal, tags).

## Form language

- Radius 12–14px cards; 1px borders; no gradients; no noise; dot-grid background (radial-gradient, 34px).
- Hover: translate-y -4px + accent border. Motion 250ms ease. `prefers-reduced-motion` respected everywhere.
- Icons: inline SVG / Lucide only. No emoji in UI.

## Signature elements

- Hero terminal card (`agent-terminal — zsh`) with harness-status + `npx mcp list` lines (static, honest — no fabricated live data).
- Outline (stroke) accent line inside the hero (`-webkit-text-stroke`).
- Section labels `01 / Work`, numbered mono, uppercase.
- Green accent on all primary CTAs; amber for "featured/tag" chips; blue for code.

## Layout

- Max width 1180px, 32px gutters. 12-col grid.
- Home: hero → stats strip → work (4 app cards) → key projects (harness wide-card grid) → experience timeline → stack chips → writing → footer CTA.
- Detail pages: `[slug]` single column, hero band with title/tagline, two-column detail (content + sidebar facts), back-link mono.
