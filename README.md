# Reproduction

1. npm install
2. npm run dev
3. Go to localhost:3000/gallery
4. Click on /gallery/dynamic
5. See dynamic route modal interception
6. Go back
7. Click /gallery/static
8. See that the static route is intercepted when it shouldn't

NOTE:
Without "@modal", the /gallery/static is processed before the `/gallery/[dynamic]` route. But with "@modal" interception, it is intercepting the `/gallery/static` path as `[dynamic]`
