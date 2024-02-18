import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('alpha')) return next(req);

  const params = req.params.appendAll({
    fields:
      'name,capital,independent,area,population,flags,region,subregion,unMember,continents,currencies,languages,borders',
  });

  req = req.clone({ params });
  return next(req);
};
