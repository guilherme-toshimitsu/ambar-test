import SellerMain, { SellerHome, ProductsBySeller } from '@pages/Seller';

const route = {
  path: '/seller',
  component: SellerMain,
  routes: [
    {
      path: ['/seller', '/seller/home'],
      exact: true,
      component: SellerHome,
    },
    {
      path: ['/seller/:id'],
      exact: true,
      component: ProductsBySeller,
    },
  ],
};

export default route;
