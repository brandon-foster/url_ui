FROM node:16 as client
WORKDIR /usr/src/app/server/client
COPY server/client/package.json package.json
COPY server/client/package-lock.json package-lock.json
RUN npm ci
COPY server/client/public public
COPY server/client/src src
RUN npm run build

FROM node:16 as app
WORKDIR /usr/src/app/server
COPY server/package.json package.json
COPY server/package-lock.json package-lock.json
RUN npm ci
COPY server/.babelrc .babelrc
COPY server/.env .env
COPY server/lib lib
RUN npm run babel
COPY --from=client /usr/src/app/server/client/build dist/react-build
CMD ["npm", "run", "serve"]
