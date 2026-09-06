# Preview deployment workflow

This project uses Vercel Preview deployments for visual UAT before production.

## Release path

1. Push changes to a feature branch.
2. Let GitHub CI validate lint and the production build.
3. Let Vercel create a Preview deployment for the feature branch.
4. Perform desktop and mobile visual UAT against the Preview URL.
5. Fix any issues on the feature branch and repeat validation.
6. Merge the pull request only after CI and visual UAT are clean.

Production remains tied to `main`. Preview validation must not require merging unfinished work into `main`.
