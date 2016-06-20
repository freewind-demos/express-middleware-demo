Express Middleware Demo
----------------------

```
npm install
node index.js
```

Will listen on `3000`.

Then visit:

```
curl http://localhost:3000/mike
curl http://localhost:3000/123
```

Application Level Middleware
----------------------------

```
node application-level-middleware.js
```

```
curl http://localhost:3000/
curl http://localhost:3000/next-route
```

Router Level Middleware
------------------------

```
node router-level-middleware.js
```

```
curl http://localhost:3000/sub
curl http://localhost:3000/sub/next-route
```

Error Level Middleware
-----------------------

```
node error-level-middleware.js
```

```
curl http://localhost:3000/
```

Built-in Level Middleware
-------------------------

```
node built-in-middleware.js
```

```
curl http://localhost:3000/index.html
```

3rd-party Middleware
--------------------

```
node application-level-middleware.js
```

```
curl --cookie "USER_TOKEN=Yes" http://localhost:3000/cookie
```

```
curl -X POST -d '{"name":"bbb","email":"bbb.com"}' -H "Content-Type: application/json" http://localhost:3000/json
```