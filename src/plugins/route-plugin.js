exports.register = function(server, options, next) {

    server.route({
      method: 'GET',
      path: '/partials/{path*}',
      handler: {
        directory: { 
          path: './public/views/partials' 
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/css/{path*}',
      handler: {
        directory: { 
          path: './public/css' 
        }
      }
    }); 

    server.route({
      method: 'GET',
      path: '/img/{path*}',
      handler: {
        directory: { 
          path: './public/img' 
        }
      }
    }); 

    server.route({
      method: 'GET',
      path: '/vendor/{path*}',
      handler: {
        directory: { 
          path: './public/vendor' 
        }
      }
    });    

    server.route({
      method: 'GET',
      path: '/js/{path*}',
      handler: {
        directory: { 
          path: './public/js' 
        }
      }
    }); 

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        file: './public/views/index.html' 
      }
    });

}

exports.register.attributes = {
  name: 'route',
  version: '0.0.1'
};
