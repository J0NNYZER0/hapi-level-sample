Sample API Built With NodeJS, HapiJS, LevelDB, Swaggerui
=================

This is a sample API built with NodeJS, HapiJS, LevelDB, Swaggerui to demonstrate the ease and rapid prototyping abilities of HapiJS and LevelDB. It will also offer a boilerplate app for anyone looking to build an application with this technology stack. Data will be persisted in LevelDB between each run of the server.

**This is an open sample, if you would like to see this project cover a specific area e.g. views, caching, different auth schemes, open an issue and I will try cover it. I aim to practice [OPEN open source](http://blog.technokrat.nl/2014/09/15/open-open-source/) on this also, which means individuals making significant or valuable contributions will be given commit access.**

To build and run:

        $ git clone Clone project
        $ cd hapi-level-sample
        $ npm install
        $ node index.js
        
You can then view the API documentation generated by Swaggerui by visiting: http://localhost:8080/documentation

If you want to sample authentication for the api, run with:

        $ AUTH=required node index.js
        
Authentication is disabled for the create user route, so you can create a user with an access token of your choosing to specify when querying the other routes.


Node Modules created in the making of this project

 - [hapi-level](https://github.com/johnbrett/hapi-level) : Utility module to ease integration of Hapi and LevelDB

 - [hapi-auth-bearer-token](https://github.com/johnbrett/hapi-auth-bearer-token) : Authorization module for HapiJS based on the Bearer authentication scheme.

 - [calibrate](https://github.com/johnbrett/calibrate) : DRY to create consistent responses, with error handling
