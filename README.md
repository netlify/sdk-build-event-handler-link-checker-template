# Netlify SDK Build Event Handler linkchecker template

This is a very simple project that has everything you need to deploy a private integration to Netlify. It is build using the [Netlify SDK](https://sdk.netlify.com).

This private integration contains a [Build Event Handler](https://sdk.netlify.com/build-event-handlers/overview/) that uses [Linkinator](https://www.npmjs.com/package/linkinator) to check for broken links on any site this integration is enabled on.

## Quick Setup + Deploy Option

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/integration/start/deploy?repository=https://github.com/netlify/sdk-build-event-handler-link-checker-template&integrationName=link-checker-integration&integrationSlug=link-checker-integration&integrationDescription=Check%20your%20sites%20links&scopes=site:read&integrationLevel=site)

## Scripts

### Build

This builds the integration and outputs a `.ntli` folder. This is the folder that Netlify uses to deploy the integration.

```bash
pnpm run build
```
