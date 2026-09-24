# motor-platform

Volaris One — Motor Insurance Platform. A platform shell with a module-selection home screen; each business module is a self-contained app under `modules/`.

## Run

Open `index.html` in a browser (no build step). Flow: **Platform home → select module → module sign-in → module workspace**.

## Structure

```
index.html              Platform shell: home / module-selection screen
platform/
  modules.js            Module registry — the only file to edit to add or change modules
  platform.js           Renders the registry, routes to live modules, theme toggle
  platform.css          Shell styles (design tokens shared with the Garage Portal)
modules/
  garage/index.html     Garage Portal (live) — its own login, then the existing portal
```

## Modules

| Module | Status |
| --- | --- |
| Garage | Live |
| Surveyor, Claims Operations, Claim Recovery, Fraud & Investigation | Planned |
| Customer, Broker & Agent | Planned |
| Underwriting & Policy Admin, Finance | Planned |
| Platform Administration | Planned |

## Adding a module

1. Create `modules/<module-id>/index.html` (the module owns its own sign-in and screens).
2. In `platform/modules.js`, add or update an entry: set `status: 'live'` and `entry: 'modules/<module-id>/index.html'`.

Cards are grouped by the `group` field; a new group name creates a new section on the home screen.
