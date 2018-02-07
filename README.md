#### Install packages
```
yarn install
```
---
#### Start development
```
yarn start
```
In other port:
```
WEBPACK_PORT=9000 yarn start
```
---
#### Build
```
yarn run build
```
---
#### Start server
```
yarn run server
```
---
#### Build and update website content
```
alias up='rm -rf dist/fonts && rm -rf dist/img && rm -f dist/index.html && rm -f dist/app.*.js && rm -f dist/style.*.css && yarn run build && git -C dist/ add --all && git -C dist/ commit -m "Updated" && git -C dist/ push origin master -f'
```
