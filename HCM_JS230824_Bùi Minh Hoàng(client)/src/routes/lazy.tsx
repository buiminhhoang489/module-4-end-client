import { lazy, Suspense } from "react";
import Loading from "@components/loading/Loading";

export const lazyFn = (importFunc: any, access: boolean = true) => {
  
  if(!access) {
    return <>Không có quyền truy cập</>
  }
  
  const LazyComponent = lazy(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(importFunc());
        }, 1000);
      });
    });
  //const LazyComponent = lazy(importFunc);

  return <Suspense fallback={<Loading/>}>
    <LazyComponent />
  </Suspense>;
};  
export const lazyFnReal = (importFunc: any, access: boolean = true) => {
  
  if(!access) {
    return <>Không có quyền truy cập</>
  }
  
  // const LazyComponent = lazy(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(importFunc());
  //       }, 1000);
  //     });
  //   });
  const LazyComponent = lazy(importFunc);

  return <Suspense fallback={<Loading/>}>
    <LazyComponent />
  </Suspense>;
};    
