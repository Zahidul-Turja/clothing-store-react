import { createContext, useState, useEffect } from "react";

import { getCatagoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCatagoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// ? This was for setting categories in Firebase DB
// import SHOP_DATA from "../shop-data.js";

// useEffect(() => {
//   addCollectionAndDocuments("categories", SHOP_DATA);
// }, []);
