import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";

export const useTracking = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_ID as string);
    ReactGA.send({
      hitType: "pageview",
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname + location.search,
    });
  }, [location]);
};
