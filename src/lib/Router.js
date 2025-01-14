const routes = {};
const templates = {};

export const route = (path, template) => {
  // Le entregamos dos parámetros a la función route: path('#/' o '#/About')
  // y template (las funciones home y about)

  if (typeof template === 'function') {
    // Validamos si el typeof template es una función
    return routes[path] = template; // El contenido de las funciones se reescribe?
  } if (typeof template === 'string') {
    // Validamos si el typeof template es un string (nombre de archivo)
    return routes[path] = templates[template]; // La función crea elementos del DOM
  }
  // Si no, no retorna nada, se provoca un error
};

// La función se llama template y espera dos parámetros
export const template = (name, templateFunction) => 
  templates[name] = templateFunction;
  // El objeto template recibe las funciones home() o about()

export const resolveRoute = (route) => {
  try {
    return routes[route]; // Retorna el objeto ruta con el parámetro route
  } catch (e) {
    throw new Error(`Route ${route} not found`); // En caso de que la ruta no exista, arroja error
  }
};

export const router = () => {
  const url = window.location.hash.slice(1) || '/';
  // guarda el valor de la ruta después del hash (gato o michi)
  console.log(url);
  const route = resolveRoute(url);
  // Declara la variable route y le asigna lo que regresa la función resolveRoute (la url)
  route(); // Manda llamar a la función route
};
