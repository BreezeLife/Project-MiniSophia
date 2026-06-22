# Memory

## Durable Context

- This is a Vite/React site deployed under the GitHub Pages repository path
  `Project-MiniSophia`.
- Production image URLs intentionally use absolute GitHub Pages paths through
  `imagePath()` so deployed assets resolve from
  `https://breezelife.github.io/Project-MiniSophia/images/`.
- `lucide-react` is excluded from Vite `optimizeDeps` so the dev server does not
  pre-bundle that dependency.

## Local Verification Notes

- On 2026-06-23, Homebrew Node/npm commands hung in an uninterruptible wait on
  this machine. The bundled Codex Node runtime successfully ran Vite build and
  dev-server verification.
