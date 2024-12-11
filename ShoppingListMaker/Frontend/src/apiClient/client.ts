import { AuthApi, Configuration, ListApi, ModelObject, ObjectsApi } from ".";
import axios, { AxiosInstance } from "axios";

interface BaseConfig {
	config: Configuration;
	baseUrl?: string;
	axios: AxiosInstance;
}

interface ApiConfig {
	baseUrl?: string;
	onRefreshTokenError?: () => void;
}

class Api {
	apiBaseUrl?: string;
	axiosInstance: AxiosInstance;

	listApi : ListApi;
	objectApi : ObjectsApi;
	authApi: AuthApi;

	constructor(config: ApiConfig = {}) {
		this.apiBaseUrl = config.baseUrl;
		this.axiosInstance = axios.create({
			url: this.apiBaseUrl,
		});
		// createAuthResponseInterceptor(
		// 	this.axiosInstance,
		// 	this,
		// 	config.onRefreshTokenError
		// );

		const baseConfig: BaseConfig = {
			config: {
				accessToken: () => {
					return localStorage.getItem("accessToken") as string;
				},
				isJsonMime: () => true,
			},
			baseUrl: this.apiBaseUrl,
			axios: this.axiosInstance,
		};
		this.authApi = new AuthApi(
			baseConfig.config,
			baseConfig.baseUrl,
			baseConfig.axios
		);
		this.listApi = new ListApi(
			baseConfig.config,
			baseConfig.baseUrl,
			baseConfig.axios
		);
		this.objectApi = new ObjectsApi(
			baseConfig.config,
			baseConfig.baseUrl,
			baseConfig.axios
		);
	}
}

export default Api;
