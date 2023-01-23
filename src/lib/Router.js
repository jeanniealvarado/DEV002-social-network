
let routes = {};
let templates = {};


export const route = (path, template) => { //Le entregamos dos parámetros a la función route: path('#/' o '#/About') 
    //y template (las funciones home y about)
    console.log('inicia función route')

    if (typeof template === 'function') {
        //Validamos si el typeof template es una función
        console.log('template es una función');
        console.log(routes[path] = template);
        return routes[path] = template; // El contenido de las funciones se reescribe?

    } else if (typeof template === 'string') {
        //Validamos si el typeof template es un string (nombre de archivo)
        console.log('template es un string');
        console.log(routes[path] = templates[template]);
        return routes[path] = templates[template]; // La función crea elementos del DOM

    } else {
        return; // Si no, no retorna nada, se provoca un error
    }
};

export const template = (name, templateFunction) => { //La función se llama template y espera dos parámetros
    console.log('entra a la función template');
    console.log(templates[name] = templateFunction);
    return templates[name] = templateFunction; // El objeto template recibe las funciones home() o about()
};

export const resolveRoute = (route) => {
    console.log('se ejecuta la función resolveRoute')
    try {
        return routes[route]; // Retorna el objeto ruta con el parámetro route
    }
    catch (e) {
        throw new Error(`Route ${route} not found`); //En caso de que la ruta no exista, arroja error
    };
};

export const router = () => {
    console.log('entra función router')
    let url = window.location.hash.slice(1) || '/'; // guarda el valor de la ruta después del hash (gato o michi)
    console.log(url)
    let route = resolveRoute(url); // Declara la variable route y le asigna lo que regresa la función resolveRoute (la url)
    route() //Manda llamar a la función route
};