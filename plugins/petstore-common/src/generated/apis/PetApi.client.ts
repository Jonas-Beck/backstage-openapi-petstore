//

// ******************************************************************
// * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. *
// ******************************************************************
import { DiscoveryApi } from '../types/discovery';
import { FetchApi } from '../types/fetch';
import crossFetch from 'cross-fetch';
import { pluginId } from '../pluginId';
import * as parser from 'uri-template';

import { ApiResponse } from '../models/ApiResponse.model';
import { Pet } from '../models/Pet.model';

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
export class PetApiClient {
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
   * Add a new pet to the store
   * Add a new pet to the store
   * @param pet Create a new pet in the store
   */
  public async addPet(
    // @ts-ignore
    request: {
      body: Pet;
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Pet>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet`;

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

  /**
   * delete a pet
   * Deletes a pet
   * @param petId Pet id to delete
   * @param apiKey
   */
  public async deletePet(
    // @ts-ignore
    request: {
      path: {
        petId: number;
      };
      header: {
        apiKey?: string;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<void>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet/{petId}`;

    const uri = parser.parse(uriTemplate).expand({
      petId: request.path.petId,
    });

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        ...request.header,
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'DELETE',
    });
  }

  /**
   * Multiple status values can be provided with comma separated strings
   * Finds Pets by status
   * @param status Status values that need to be considered for filter
   */
  public async findPetsByStatus(
    // @ts-ignore
    request: {
      query: {
        status?: 'available' | 'pending' | 'sold';
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Array<Pet>>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet/findByStatus{?status}`;

    const uri = parser.parse(uriTemplate).expand({
      ...request.query,
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
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * Finds Pets by tags
   * @param tags Tags to filter by
   */
  public async findPetsByTags(
    // @ts-ignore
    request: {
      query: {
        tags?: Array<string>;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Array<Pet>>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet/findByTags{?tags*}`;

    const uri = parser.parse(uriTemplate).expand({
      ...request.query,
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
   * Returns a single pet
   * Find pet by ID
   * @param petId ID of pet to return
   */
  public async getPetById(
    // @ts-ignore
    request: {
      path: {
        petId: number;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Pet>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet/{petId}`;

    const uri = parser.parse(uriTemplate).expand({
      petId: request.path.petId,
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
   * Update an existing pet by Id
   * Update an existing pet
   * @param pet Update an existent pet in the store
   */
  public async updatePet(
    // @ts-ignore
    request: {
      body: Pet;
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<Pet>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet`;

    const uri = parser.parse(uriTemplate).expand({});

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'PUT',
      body: JSON.stringify(request.body),
    });
  }

  /**
   *
   * Updates a pet in the store with form data
   * @param petId ID of pet that needs to be updated
   * @param name Name of pet that needs to be updated
   * @param status Status of pet that needs to be updated
   */
  public async updatePetWithForm(
    // @ts-ignore
    request: {
      path: {
        petId: number;
      };
      query: {
        name?: string;
        status?: string;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<void>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet/{petId}{?name,status}`;

    const uri = parser.parse(uriTemplate).expand({
      petId: request.path.petId,
      ...request.query,
    });

    return await this.fetchApi.fetch(`${baseUrl}${uri}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options?.token && { Authorization: `Bearer ${options?.token}` }),
      },
      method: 'POST',
    });
  }

  /**
   *
   * uploads an image
   * @param petId ID of pet to update
   * @param additionalMetadata Additional Metadata
   * @param body
   */
  public async uploadFile(
    // @ts-ignore
    request: {
      path: {
        petId: number;
      };
      body: HttpFile;
      query: {
        additionalMetadata?: string;
      };
    },
    options?: RequestOptions,
  ): Promise<TypedResponse<ApiResponse>> {
    const baseUrl = await this.discoveryApi.getBaseUrl(pluginId);

    const uriTemplate = `/pet/{petId}/uploadImage{?additionalMetadata}`;

    const uri = parser.parse(uriTemplate).expand({
      petId: request.path.petId,
      ...request.query,
    });

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
