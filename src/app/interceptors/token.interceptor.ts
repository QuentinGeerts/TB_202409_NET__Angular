import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  // Récupération du token présent dans le LocalStorage (s'il y a)
  const token = localStorage.getItem('token');

  if (token && token != "") {

    console.log('Token trouvé :>> ', token);

    // Cloner la requête et ajouter le token à l'en-tête de la requête
    const cloneReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });

    return next(cloneReq);
  }

  console.log("Aucun token trouvé");

  return next(req);
};
