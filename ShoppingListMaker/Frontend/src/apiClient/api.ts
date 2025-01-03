/* tslint:disable */
/* eslint-disable */
/**
 * ShoppingListMaker
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface CreateListRequest
 */
export interface CreateListRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateListRequest
     */
    'listName': string;
}
/**
 * 
 * @export
 * @interface CreateObjectRequest
 */
export interface CreateObjectRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateObjectRequest
     */
    'objectName': string;
    /**
     * 
     * @type {number}
     * @memberof CreateObjectRequest
     */
    'listId': number;
}
/**
 * 
 * @export
 * @interface List
 */
export interface List {
    /**
     * 
     * @type {number}
     * @memberof List
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof List
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof List
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof List
     */
    'deletedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof List
     */
    'name'?: string | null;
    /**
     * 
     * @type {Array<ModelObject>}
     * @memberof List
     */
    'objects'?: Array<ModelObject> | null;
}
/**
 * 
 * @export
 * @interface ListResponse
 */
export interface ListResponse {
    /**
     * 
     * @type {string}
     * @memberof ListResponse
     */
    'listName'?: string | null;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {UserResponse}
     * @memberof LoginResponse
     */
    'user'?: UserResponse;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    'token'?: string | null;
}
/**
 * 
 * @export
 * @interface ModelObject
 */
export interface ModelObject {
    /**
     * 
     * @type {number}
     * @memberof ModelObject
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelObject
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelObject
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelObject
     */
    'deletedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModelObject
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof ModelObject
     */
    'listId'?: number;
    /**
     * 
     * @type {List}
     * @memberof ModelObject
     */
    'list'?: List;
}
/**
 * 
 * @export
 * @interface ObjectResponse
 */
export interface ObjectResponse {
    /**
     * 
     * @type {string}
     * @memberof ObjectResponse
     */
    'name'?: string | null;
}
/**
 * 
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'title'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProblemDetails
     */
    'status'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'detail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProblemDetails
     */
    'instance'?: string | null;
}
/**
 * 
 * @export
 * @interface ShareListRequest
 */
export interface ShareListRequest {
    /**
     * 
     * @type {string}
     * @memberof ShareListRequest
     */
    'userName': string;
}
/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'name'?: string | null;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Login
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost: async (loginRequest?: LoginRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authMeGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Login
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authLoginPost(loginRequest?: LoginRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authLoginPost(loginRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authLoginPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authMeGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authMeGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.authMeGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 
         * @summary Login
         * @param {LoginRequest} [loginRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(loginRequest?: LoginRequest, options?: RawAxiosRequestConfig): AxiosPromise<LoginResponse> {
            return localVarFp.authLoginPost(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authMeGet(options?: RawAxiosRequestConfig): AxiosPromise<UserResponse> {
            return localVarFp.authMeGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Login
     * @param {LoginRequest} [loginRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authLoginPost(loginRequest?: LoginRequest, options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authLoginPost(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authMeGet(options?: RawAxiosRequestConfig) {
        return AuthApiFp(this.configuration).authMeGet(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ListApi - axios parameter creator
 * @export
 */
export const ListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get filtered list
         * @param {string} [listName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsGet: async (listName?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/lists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (listName !== undefined) {
                localVarQueryParameter['ListName'] = listName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary remove list
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiListsIdDelete', 'id', id)
            const localVarPath = `/api/lists/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Share list
         * @param {number} id 
         * @param {ShareListRequest} [shareListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsIdPut: async (id: number, shareListRequest?: ShareListRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiListsIdPut', 'id', id)
            const localVarPath = `/api/lists/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(shareListRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add list
         * @param {CreateListRequest} [createListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsPost: async (createListRequest?: CreateListRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/lists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createListRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListApi - functional programming interface
 * @export
 */
export const ListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get filtered list
         * @param {string} [listName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiListsGet(listName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<List>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiListsGet(listName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListApi.apiListsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary remove list
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiListsIdDelete(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiListsIdDelete(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListApi.apiListsIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Share list
         * @param {number} id 
         * @param {ShareListRequest} [shareListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiListsIdPut(id: number, shareListRequest?: ShareListRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiListsIdPut(id, shareListRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListApi.apiListsIdPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Add list
         * @param {CreateListRequest} [createListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiListsPost(createListRequest?: CreateListRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiListsPost(createListRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ListApi.apiListsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ListApi - factory interface
 * @export
 */
export const ListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListApiFp(configuration)
    return {
        /**
         * 
         * @summary Get filtered list
         * @param {string} [listName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsGet(listName?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<List>> {
            return localVarFp.apiListsGet(listName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary remove list
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsIdDelete(id: number, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.apiListsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Share list
         * @param {number} id 
         * @param {ShareListRequest} [shareListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsIdPut(id: number, shareListRequest?: ShareListRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.apiListsIdPut(id, shareListRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Add list
         * @param {CreateListRequest} [createListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiListsPost(createListRequest?: CreateListRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListResponse> {
            return localVarFp.apiListsPost(createListRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ListApi - object-oriented interface
 * @export
 * @class ListApi
 * @extends {BaseAPI}
 */
export class ListApi extends BaseAPI {
    /**
     * 
     * @summary Get filtered list
     * @param {string} [listName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public apiListsGet(listName?: string, options?: RawAxiosRequestConfig) {
        return ListApiFp(this.configuration).apiListsGet(listName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary remove list
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public apiListsIdDelete(id: number, options?: RawAxiosRequestConfig) {
        return ListApiFp(this.configuration).apiListsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Share list
     * @param {number} id 
     * @param {ShareListRequest} [shareListRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public apiListsIdPut(id: number, shareListRequest?: ShareListRequest, options?: RawAxiosRequestConfig) {
        return ListApiFp(this.configuration).apiListsIdPut(id, shareListRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Add list
     * @param {CreateListRequest} [createListRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    public apiListsPost(createListRequest?: CreateListRequest, options?: RawAxiosRequestConfig) {
        return ListApiFp(this.configuration).apiListsPost(createListRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ObjectsApi - axios parameter creator
 * @export
 */
export const ObjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary remove list
         * @param {number} id 
         * @param {string} [objectName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiObjectsIdDelete: async (id: number, objectName?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiObjectsIdDelete', 'id', id)
            const localVarPath = `/api/objects/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (objectName !== undefined) {
                localVarQueryParameter['objectName'] = objectName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get filtered objects in list
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiObjectsIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiObjectsIdGet', 'id', id)
            const localVarPath = `/api/objects/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create in list
         * @param {number} id 
         * @param {CreateObjectRequest} [createObjectRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiObjectsIdPost: async (id: number, createObjectRequest?: CreateObjectRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiObjectsIdPost', 'id', id)
            const localVarPath = `/api/objects/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createObjectRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ObjectsApi - functional programming interface
 * @export
 */
export const ObjectsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ObjectsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary remove list
         * @param {number} id 
         * @param {string} [objectName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiObjectsIdDelete(id: number, objectName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiObjectsIdDelete(id, objectName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ObjectsApi.apiObjectsIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get filtered objects in list
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiObjectsIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelObject>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiObjectsIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ObjectsApi.apiObjectsIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create in list
         * @param {number} id 
         * @param {CreateObjectRequest} [createObjectRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiObjectsIdPost(id: number, createObjectRequest?: CreateObjectRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiObjectsIdPost(id, createObjectRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ObjectsApi.apiObjectsIdPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ObjectsApi - factory interface
 * @export
 */
export const ObjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ObjectsApiFp(configuration)
    return {
        /**
         * 
         * @summary remove list
         * @param {number} id 
         * @param {string} [objectName] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiObjectsIdDelete(id: number, objectName?: string, options?: RawAxiosRequestConfig): AxiosPromise<boolean> {
            return localVarFp.apiObjectsIdDelete(id, objectName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get filtered objects in list
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiObjectsIdGet(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<ModelObject>> {
            return localVarFp.apiObjectsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create in list
         * @param {number} id 
         * @param {CreateObjectRequest} [createObjectRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiObjectsIdPost(id: number, createObjectRequest?: CreateObjectRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObjectResponse> {
            return localVarFp.apiObjectsIdPost(id, createObjectRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ObjectsApi - object-oriented interface
 * @export
 * @class ObjectsApi
 * @extends {BaseAPI}
 */
export class ObjectsApi extends BaseAPI {
    /**
     * 
     * @summary remove list
     * @param {number} id 
     * @param {string} [objectName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public apiObjectsIdDelete(id: number, objectName?: string, options?: RawAxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).apiObjectsIdDelete(id, objectName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get filtered objects in list
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public apiObjectsIdGet(id: number, options?: RawAxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).apiObjectsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create in list
     * @param {number} id 
     * @param {CreateObjectRequest} [createObjectRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public apiObjectsIdPost(id: number, createObjectRequest?: CreateObjectRequest, options?: RawAxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).apiObjectsIdPost(id, createObjectRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



