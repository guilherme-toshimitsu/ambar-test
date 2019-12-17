function createData(
  sellerID,
  NEIssued = '',
  NEIssuedMle = ' ',
  shipment = ' ',
  shipmentMLE = ' ',
  delivered = ' ',
  actions = ' '
) {
  return { sellerID, NEIssued, NEIssuedMle, shipment, shipmentMLE, delivered, actions };
}

const rows = [
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('abv', '01', '03', '07', '01', '01'),
  createData('dsad', '01', '03', '07', '01', '01'),
  createData('xsa', '01', '03', '07', '01', '01'),
  createData('SellerIdsadasdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('ddsdsds', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('sds', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('xxx', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('dsdsds', '01', '03', '07', '01', '01'),
  createData('dsdsds', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
  createData('SellerIdOpenApi', '01', '03', '07', '01', '01'),
];

const getAll = config => {
  const start = config.params.page * config.params.size;
  const end = start + config.params.size;
  return {
    data: {
      result: rows.slice(start, end),
      size: rows.length,
    },
  };
};

const getAllErrors = () => {
  return {
    message: 'ixiii deu ruim',
    status: '404',
  };
};

export default {
  getAll,
  getAllErrors,
};
