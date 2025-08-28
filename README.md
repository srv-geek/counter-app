# Counter App 

A minimal counter application built with **Angular** and **TypeScript**. It demonstrates components, one‑way/two‑way data binding, and event handling with a tiny, production‑ready setup.

---

## Overview

- Increment, decrement, and reset the counter
- Clean, modular component structure
- Works out of the box with Angular CLI

---

## Prerequisites

- **Node.js** (LTS recommended)
- **Angular CLI** installed globally

```bash
npm install -g @angular/cli
```

---

## Quick Start

Clone the repo, install dependencies, and run the dev server:

```bash
git clone https://github.com/your-username/counter-app.git
cd counter-app
npm install
ng serve
```

Open the app at:

```
http://localhost:4200/
```

---

## Project Structure

```text
counter-app/
├─ src/
│  ├─ app/
│  │  ├─ counter/
│  │  │  ├─ counter.component.ts
│  │  │  ├─ counter.component.html
│  │  │  └─ counter.component.css
│  │  └─ app.module.ts
│  ├─ assets/
│  ├─ index.html
│  └─ main.ts
├─ angular.json
├─ package.json
└─ README.md
```

---

## Usage

- **Increment** → click the `+` button  
- **Decrement** → click the `-` button  
- **Reset** → click **Reset**

If you use an input for the starting value, ensure it's bound via `[(ngModel)]` or a reactive form control.

---

## Scripts

Common NPM scripts (may vary by your setup):

```bash
# start dev server
npm start        # alias for: ng serve

# production build
npm run build    # alias for: ng build --configuration production

# unit tests (if configured)
npm test

# lint (if configured)
npm run lint
```

---

## Build (Production)

```bash
ng build --configuration production
```

Bundles will be output to `dist/`. Serve the built files with any static server.

---

## Troubleshooting

- If the CLI command `ng` is not found, reinstall Angular CLI globally:
  ```bash
  npm install -g @angular/cli
  ```
- If install fails, clear cache and retry:
  ```bash
  npm cache verify
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## Contributing

Issues and PRs are welcome. Please open an issue to discuss major changes first.

---

## License

MIT
