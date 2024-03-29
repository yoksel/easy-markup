# Some migration tips

## NextJs useful links

* https://nextjs.org/docs — to start with Nextjs
* https://github.com/vercel/next.js/tree/canary/examples/blog-starter — to add markdown support

## Code highlighting

https://prismjs.com/index.html

## Collect posts data

```
npm run getPosts
```

List will be saved to `src/postsList.ts`. In case of adding/removing files command should be runned by hands.

## Deploy

Using github deployments

* https://github.com/vercel/next.js/issues/57038 — problem with publishing static version of site while using App router (not resolved yet)
* [Branch "x" is not allowed to deploy to github-pages due to environment protection rules.](https://github.com/orgs/community/discussions/39054)
