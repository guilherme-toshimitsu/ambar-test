import React from 'react';

const headers = [
  {
    id: 'sellerID',
    label: 'Seller Id',
  },
  {
    id: 'NEIssued',
    label: 'NE Emitida',
    tooltipText: (
      <span>
        Dias corridos para liberação de recebíveis a partir do status <strong> Nota fiscal emitida </strong>, quando o
        pedido não for Magalu Entregas.
      </span>
    ),
  },
  {
    id: 'NEIssuedMle',
    label: 'NF Emitida MLE',
    tooltipText: (
      <span>
        Dias corridos para liberação de recebíveis a partir do status <strong> Nota fiscal emitida </strong>, quando o
        pedido for Magalu Entregas.
      </span>
    ),
  },
  {
    id: 'shipment',
    label: 'Despachado',
    tooltipText: (
      <span>
        Dias corridos para liberação de recebíveis a partir do status <strong> Despachado </strong>, quando o pedido não
        for Magalu Entregas.
      </span>
    ),
  },
  {
    id: 'shipmentMLE',
    label: 'Despachado MLE',
    tooltipText: (
      <span>
        Dias corridos para liberação de recebíveis a partir do status <strong> Nota fiscal emitida </strong>, quando o
        pedido for Magalu Entregas.
      </span>
    ),
  },
  {
    id: 'delivered',
    label: 'Entregue',
    tooltipText: (
      <span>
        Dias corridos para liberação de recebíveis a partir do status <strong> Nota fiscal emitida </strong>, quando o
        pedido não for Magalu Entregas.
      </span>
    ),
  },
  {
    id: 'actions',
    // label: 'Ações',
    label: ' ',
  },
];

export { headers };
