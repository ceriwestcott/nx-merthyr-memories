// src/apis/productAPI.js

import { api } from '../config/api.config';
import { defineCancelApiObject } from '../config/apiUtils';

export const LocationsApi = {
  getArea: async function (id: string, cancel = false) {
    const response = await api.request({
      url: `/area/${id}`,
      method: 'GET',
      // retrieving the signal value by using the property name
      signal: cancel
        ? cancelApiObject[this.getArea.name].handleRequestCancellation().signal
        : undefined,
    });

    // returning the product returned by the API
    return response.data;
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: '/locations',
      method: 'GET',
      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data;
  },
};

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(LocationsApi);
