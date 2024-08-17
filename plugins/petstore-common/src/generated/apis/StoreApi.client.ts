//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { DiscoveryApi } from '../types/discovery';
import { FetchApi } from '../types/fetch';
import crossFetch from 'cross-fetch';
import { pluginId } from '../pluginId';
import * as parser from 'uri-template';

import { Order } from '../models/Order.model';

/**
 * Wraps the Response type to convey a type on the json call.
 *
 * @public
 */
export type TypedResponse<T> = Omit<Response, 'json'> & {
  json: () => Promise<T>;
};

/**
 * Options you can pass into a request for additional information.
 *
 * @public
 */
export interface RequestOptions {
  token?: string;
}

/**
 * no description
 */
export class StoreApiClient {
  private readonly discoveryApi: DiscoveryApi;
  private readonly fetchApi: FetchApi;

  constructor(options: {
    discoveryApi: { getBaseUrl(pluginId: string): Promise<string> };
    fetchApi?: { fetch: typeof fetch };
  }) {
    this.discoveryApi = options.discoveryApi;
    this.fetchApi = options.fetchApi || { fetch: crossFetch };
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   * Delete purchase order by ID
   * @param orderId ID of the order that needs to be deleted
   */
  public async deleteOrder(
    // @ts-ignore
    request: {
      path: {
        orderId: number;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<void>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/store/order/{orderId}`;

    const uri = parser.parse(uriTemplate).expand({
      orderId: request.path.orderId,
    });

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'DELETE',
    });
  }

  /**
   * Returns a map of status codes to quantities
   * Returns pet inventories by status
   */
  public async getInventory(
    // @ts-ignore
    request: {},
    options?: RequestOptions,
  ): Promise<TypedResponse<{ [key: string]: number }>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/store/inventory`;

    const uri = parser.parse(uriTemplate).expand({});

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'GET',
    });
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   * Find purchase order by ID
   * @param orderId ID of order that needs to be fetched
   */
  public async getOrderById(
    // @ts-ignore
    request: {
      path: {
        orderId: number;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Order>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/store/order/{orderId}`;

    const uri = parser.parse(uriTemplate).expand({
      orderId: request.path.orderId,
    });

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'GET',
    });
  }

  /**
   * Place a new order in the store
   * Place an order for a pet
   * @param order
   */
  public async placeOrder(
    // @ts-ignore
    request: {
      body: Order;
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Order>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/store/order`;

    const uri = parser.parse(uriTemplate).expand({});

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'POST',
      body: JSON.stringify(request.body),
    });
  }
}