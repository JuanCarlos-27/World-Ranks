import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const params = req.params.appendAll({
    fields:
      'name,capital,independent,area,population,flags,region,subregion,unMember',
  });

  req = req.clone({ params });
  return next(req);
};
