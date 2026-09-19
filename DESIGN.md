---
name: Mission-Critical MES & Operations System
colors:
  surface: "#f8f9ff"
  surface-dim: "#cbdbf5"
  surface-bright: "#f8f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#eff4ff"
  surface-container: "#e5eeff"
  surface-container-high: "#dce9ff"
  surface-container-highest: "#d3e4fe"
  on-surface: "#0b1c30"
  on-surface-variant: "#434655"
  inverse-surface: "#213145"
  inverse-on-surface: "#eaf1ff"
  outline: "#737686"
  outline-variant: "#c3c6d7"
  surface-tint: "#0053db"
  primary: "#004ac6"
  on-primary: "#ffffff"
  primary-container: "#2563eb"
  on-primary-container: "#eeefff"
  inverse-primary: "#b4c5ff"
  secondary: "#515f74"
  on-secondary: "#ffffff"
  secondary-container: "#d5e3fc"
  on-secondary-container: "#57657a"
  tertiary: "#006243"
  on-tertiary: "#ffffff"
  tertiary-container: "#007d57"
  on-tertiary-container: "#bdffdc"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#dbe1ff"
  primary-fixed-dim: "#b4c5ff"
  on-primary-fixed: "#00174b"
  on-primary-fixed-variant: "#003ea8"
  secondary-fixed: "#d5e3fc"
  secondary-fixed-dim: "#b9c7df"
  on-secondary-fixed: "#0d1c2e"
  on-secondary-fixed-variant: "#3a485b"
  tertiary-fixed: "#85f8c4"
  tertiary-fixed-dim: "#68dba9"
  on-tertiary-fixed: "#002114"
  on-tertiary-fixed-variant: "#005137"
  background: "#f8f9ff"
  on-background: "#0b1c30"
  surface-variant: "#d3e4fe"
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "600"
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 18px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.04em
  label-xs:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: "700"
    lineHeight: 12px
    letterSpacing: 0.06em
  metric-display:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: "700"
    lineHeight: 32px
    letterSpacing: -0.03em
  metric-mono:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.75rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system delivers a high-density, mission-critical operations cockpit built for manufacturing execution systems (MES), industrial plant monitoring, and real-time telemetry control rooms.

### Brand Personality & Philosophy

- **Reliable & Utilitarian:** Form strictly follows function. Visual adornments, decorative gradients, and frivolous micro-interactions are replaced by data legibility, low latency perception, and predictable interaction models.
- **Calm Under Pressure:** High-density telemetry displays can easily overwhelm operators. The system uses subdued slate surfaces and disciplined grayscale hierarchies so that active states, threshold violations, and machine alarms instantly capture operator attention without ambient visual noise.
- **Precision Engineering:** Layouts rely on compact tabular density, precise alignment grids, crisp 1px delineation lines, and monospaced numerical readouts.

### Design Movement

**Corporate / Technical Precision:** Built on an architectural 4px grid, subtle hairline framing, and structured surface layering. Elevation is communicated through low-contrast physical borders rather than heavy atmospheric drop shadows, creating an ultra-clean, enterprise SaaS operational terminal.

## Colors

The palette is tuned for long shifts under harsh plant lighting or high-resolution control monitors. It prioritizes contrast ratios that exceed WCAG AAA standards for critical metrics while keeping structural chrome quiet.

### Structural Grayscale & Canvases

- **Canvas Base (`#f8fafc`):** The default screen-level background, preventing high-key eye fatigue.
- **Well / Trough Surface (`#f1f5f9`):** Recessed container fills, metric card headers, and table track backgrounds.
- **Surface Elevation 0 (`#ffffff`):** Pure white container surfaces, data grid rows, and operational panels.
- **Borders & Dividers (`#e2e8f0`):** Hairline 1px structural framing separating high-density data regions.
- **Border Strong (`#cbd5e1`):** Input field borders, splitters, and panel partitions.

### Semantic Status Palette

Operational statuses must be immediately identifiable at distance:

- **Active / Operational Primary (`#2563eb`):** Active selections, confirmed telemetry streams, focus rings, primary actions.
- **Machine Running / Verified Success (`#059669`):** Stable yield, running machine states, closed inspection loops.
- **Warning / Inspection Due (`#d97706`):** Drift detection, approaching maintenance cycles, buffer threshold warnings.
- **Critical / Fault / Emergency E-Stop (`#e11d48`):** Unscheduled line stoppages, critical component failure, safety interlock breaches.
- **Idle / Unscheduled Standby (`#64748b`):** De-energized tooling, line changeover intervals, waiting on material feed.

Status fills use a 10% opacity tint of the respective semantic token on white surfaces, paired with a solid 1px border and high-contrast text to prevent color-only reliance.

## Typography

Typography in this system serves as an instrument of spatial efficiency and rapid information scanning.

### Font Rules & Font Features

- **Primary Typeface:** `Inter` is specified across all hierarchy tiers.
- **OpenType Tabular Figures:** All numeric data, batch counters, timestamps, sensor readings, and table cells must explicitly enable tabular numbers: `font-feature-settings: "tnum" 1, "cv05" 1, "cv02" 1`. This prevents layout shifts during real-time streaming updates.
- **Scale Optimization:** In dense operational tooling, the default reading size is `body-md` (13px) with a tight 18px line height. This maximizes rows visible above the fold without sacrificing character distinction.
- **Uppercase Labels:** `label-xs` and `label-sm` are systematically rendered in full uppercase with expanded letter-spacing (`0.04em` to `0.06em`) for table headers, column categorizations, and hardware parameter labels.

## Layout & Spacing

The layout is built for high data density across 1080p, 1440p, and 4K plant management displays, while remaining responsive down to rugged industrial tablets.

### Grid & Canvas Structure

- **Screen Canvas:** A 12-column fluid grid system pinned to explicit viewport boundaries. Operations dashboards avoid arbitrary vertical scrolling by utilizing full viewport-height fixed layouts (`100vh`) with dedicated internal overflow panes.
- **Margins & Gutters:** Global canvas outer margin is compact at `1rem` (16px). Inter-column gutters are fixed to `0.75rem` (12px), keeping telemetry cards closely packed without visual bleeding.
- **Multi-Monitor Layouts:** On ultra-wide monitors (width > 1920px), operational zones lock to a 24-column distribution allowing simultaneous side-by-side viewports of line schematics, real-time alerts, and tabular audit logs.

### Responsive Breakpoints & Reflow Rules

- **Desktop (>= 1280px):** Full multi-pane operational console with sticky navigation, continuous real-time feeds, and multi-column telemetry tables.
- **Rugged Tablet / HMI Terminal (768px - 1279px):** Secondary metadata sidebars collapse into toggleable drawer overlays. Tables switch to horizontal swipe panes while maintaining fixed left freeze-columns for asset identifiers.
- **Mobile Handheld Inspection (< 768px):** Linear single-column flow. Complex data grids collapse into segmented list cards. Gutter spacing shrinks to `0.5rem` (8px).

## Elevation & Depth

Visual hierarchy is achieved through structured 1px border definitions, micro-bevels, and surface shade contrasts rather than diffuse shadows.

### The Low-Contrast Structural Model

- **Level 0 (App Canvas):** Rendered in `#f8fafc`. Houses global nav bars, breadcrumb trails, and passive backdrops.
- **Level 1 (Data Cards, Inspection Grids, Canvas Panes):** Pure white `#ffffff` background bounded by a sharp `1px solid #e2e8f0` border. No drop shadow is applied during idle states.
- **Level 2 (Active Focus & Filter Panels):** Pure white `#ffffff` with a subtle technical drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)` combined with `border-color: #cbd5e1`.
- **Level 3 (Flyout Menus, Context Popovers, Typeaheads):** Floating overlays use `#ffffff`, framed by `1px solid #cbd5e1`, with structured depth: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
- **Level 4 (Modal Dialogs & Emergency Overrides):** Grounded by a backdrop scrim tinted with `#0f172a` at 40% opacity. The modal surface has a sharp edge and a crisp elevation footprint: `0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.06)`.

## Shapes

The design system uses a restrained, compact corner radius scale (`roundedness: 1`). Elements exhibit clean, utilitarian corners that preserve horizontal and vertical tracking lines throughout dense tabular views.

### Corner Radius Mapping

- **Base Elements (`rounded-sm` / 0.25rem / 4px):** Applied to inputs, buttons, status chips, table select cells, badges, and toggle switches.
- **Card Containers (`rounded-md` / 0.375rem / 6px):** Applied to telemetry panels, charts, metrics blocks, and modal window frames.
- **Inner Nested Controls:** When a control sits within a padded container, the inner radius is exactly `outer_radius - padding_offset`, ensuring geometric alignment.
- **Zero-Radius Scenarios:** Grid table cells, segmented master-detail divider walls, and docking rail tabs feature strict `0px` radii to maintain unbroken edge alignment.

## Components

Components are engineered for keyboard-first efficiency, data density, and zero ambiguous states.

### Action Buttons

- **Primary:** Solid `#2563eb` fill, `#ffffff` text, 0.25rem border-radius. Height is locked to 32px (compact) or 28px (dense). Hover state shifts to `#1d4ed8`; active state triggers `#1e40af`. Focus rings utilize an explicit 2px outline offset with `rgba(37, 99, 235, 0.35)`.
- **Secondary / Operational:** White surface with `1px solid #cbd5e1`, `#1e293b` text. Hover shifts background to `#f8fafc` and border to `#94a3b8`.
- **Destructive / E-Stop:** Solid `#e11d48` background, `#ffffff` text. Used exclusively for process cancellations, machine aborts, and safety bypass actions.

### Status Chips & Badges

- Built at 20px height with 0.25rem radius.
- Always combine three visual cues:
  1. A 6px solid circular status dot (`#059669` for Running, `#d97706` for Warning, `#e11d48` for Fault, `#64748b` for Idle).
  2. High-contrast, bold uppercase label text (`label-xs`, 10px).
  3. A 10% translucent background wash bordered by a matching 20% opacity border line.

### High-Density Data Grids & Tabular Lists

- Row heights default to 32px (compact) with an option for 28px (condensed).
- Table headers use `#f1f5f9` backgrounds, uppercase `label-xs` typography in `#475569`, with a persistent bottom border of `1px solid #cbd5e1`.
- Row zebra striping is avoided; alternating states rely on subtle `1px solid #f1f5f9` dividers and an immediate row-level hover fill of `#f8fafc`.
- Numerical columns are right-aligned with monospace figures; status and categorical data are left-aligned.

### Form Inputs & Select Controls

- Input heights match buttons at 32px or 28px.
- Background: `#ffffff`; border: `1px solid #cbd5e1`; inner padding: `0 8px`.
- Active/Focused input: Border transitions to `#2563eb` accompanied by a sharp 1px glow ring. Error inputs transition to `#e11d48`.

### Checkboxes & Radios

- Size: 14px by 14px with a 2px radius for checkboxes, circular for radios.
- Unchecked state: White fill with a high-contrast `#94a3b8` 1.5px border.
- Checked state: Primary blue `#2563eb` fill with a crisp `#ffffff` check glyph.

### Operational KPI & Telemetry Cards

- Structured as three vertical zones:
  1. Top metadata bar: Uppercase metric label (`label-xs`) and optional time-delta badge.
  2. Main reading: Prominent bold metric (`metric-display`) paired with a smaller engineering unit indicator (`e.g., bar, rpm, °C`).
  3. Footer: Micro sparkline chart or 2px linear goal-progress indicator.
