A Realtime TODO App with [Aurelia](http://aurelia.io), [Socket.IO](http://socket.io/), [Node.js](http://www.nodejs.org/), [Koa](http://koajs.com/) and [RethinkDB](https://www.rethinkdb.com/).

A summary of tech stack:
* **Client**: [Aurelia](http://aurelia.io/), [Twitter Bootstrap](http://getbootstrap.com/) & [Font-Awesome](http://fontawesome.io/).
* **Server**: [Koa](http://koajs.com/) for RESTful API serving on [Node.js](https://nodejs.org/).
* **[Socket.IO](http://socket.io/)** along with JSON-RPC is used for real-time client-server communication and browser sync.
* **[RethinkDB](https://rethinkdb.com/)** as the best open-source database for the realtime web.

## Getting Started
Make sure to have [Node.js](https://nodejs.org/) v4.x or higher, and [RethinkDB](https://rethinkdb.com/) v2.3.x or higher installed on your computer.

#### Note
The `CLI` version was created afterward and it varies a little bit compare to the `WebPack` one. The main difference is that, I wanted to try out the new [Bootstrap 4 alpha](http://v4-alpha.getbootstrap.com/) with `SASS` support with [Aurelia-CLI](https://github.com/aurelia/cli), while the [Aurelia-WebPack](https://github.com/aurelia/skeleton-navigation) on the other end uses the stable [Bootstrap 3](http://getbootstrap.com/).

### Git Clone (downloading)
```bash
git clone https://github.com/ghiscoding/Realtime-TODO-Aurelia-Auth-RethinkDB
```

### OAuth Authentication with Aurelia-Auth
We will use [Aurelia-Auth](https://github.com/paulvanbladel/aurelia-auth) for OAuth login so that we can use (Google, Facebook, GitHub, LinkedIn, Windows Live or Twitter) to login to our application. The configuration of the OAuth secret keys will be under `server/config/config.development.js`, this file is however excluded from the project (for obvious reason). **Very important step to do, you will need to go under the folder `/server/config` and rename the file from `config.development.template.js` to `config.development.js` and then put in your OAuth secret keys.**

The `Aurelia-Auth`is based on `Satellizer` and uses the same configurations, so you could refer to their [GitHub Satellizer](https://github.com/sahat/satellizer) repo for more details.

### Database (RethinkDB)
We are using RethinkDB as our favorite NoSQL DB Server, you can use the default port of `28015`.
Also make sure to create a `test` database (if not yet created) with a `todos` and `users` tables. Running the project and adding a new Todo, should in theory, create the table structure.

### Client (CLI)
```bash
cd Realtime-TODO-Aurelia-Auth-RethinkDB/client-cli
npm install
au run --watch
```

The `run` process also has a `node` server option, so if you want, you could run `NodeJS` server directly from the `au run` command by adding the `--node` option.
```bash
au run --watch --node
```
_The `CLI` installation is built with `SASS` as pre-processor. To create and use any stylesheets, you will need to use the `scss` extension while calling them as `css` in your project (because they are transpiled when bundled, refer to [Aurelia CLI](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/the-aurelia-cli) for further information).
With the use of `SASS`, I was then able to try out the new [Bootstrap 4](http://v4-alpha.getbootstrap.com/)._

### Client (WebPack)
Please note that the `Webpack` version was modified to run both the frontend/backend with just `npm start`. However if you just want to run the frontend (client), you can do so by calling `npm run start:client-only`.
```bash
cd Realtime-TODO-Aurelia-Auth-RethinkDB/client-wp
npm install
npm start
```

### Server (NodeJS - KOA)
**This section is totally optional if you run (client-cli) with `au run --watch --node` or (client-wp) with `npm start` since the backend was already started with these flags.**
```bash
cd Realtime-TODO-Aurelia-Auth-RethinkDB/server
npm install
npm start
```

_**Note**: running the server here is optional, since you might have already started it with the `--node` option with CLI client._

## Web UI
If everything goes well, your application should now run locally on port `4000`. Open your browser and go to [http://localhost:4000](http://localhost:4000).

## Configuration
### Server
Server configurations are specified in the [/server/config](https://github.com/ghiscoding/Realtime-TODO-Aurelia-Auth-RethinkDB/blob/master/server/config/) directory. When running `npm start` it will load the configuration that is defined in your `process.env.NODE_ENV` (environment variable, if unset it will use `development` by default).

### Default Ports
Default ports for this application are `4000` for the WebUI and `5000` for the API (server) calls.
You can change these ports by going into
#### CLI
You can change the ports by going into [/client-cli/aurelia_project/tasks/run.js](https://github.com/ghiscoding/Realtime-TODO-Aurelia-Auth-RethinkDB/blob/master/client-cli/aurelia_project/tasks/run.js) via the variables `portBackEnd` and `portFrontEnd`.
#### WebPack
You can change the ports by going into [/client-wp/webpack.config.js](https://github.com/ghiscoding/Realtime-TODO-Aurelia-Auth-RethinkDB/blob/master/client-wp/webpack.config.babel.js) via the variables `portBackEnd`, however the client/frontend port will have to be updated in the [/client/wp/package.json](https://github.com/ghiscoding/Realtime-TODO-Aurelia-Auth-RethinkDB/blob/master/client-wp/package.json) file by changing the variable `WEBPACK_PORT=4000` to whichever port you want (you might also want to update `serve-backend:start-when-ready` line).

## Contributions
Contributions are welcome. I use this project as a placeholder to help (and be helped by) people, which is all about the open community. So please feel free to make any PR (Pull Request).

## License
MIT
