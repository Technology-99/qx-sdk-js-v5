import axios from 'axios';
class QxClient {
    #config;
    #sessionId;
    #accessKeyId;
    #accessToken;
    #accessTokenExpires;
    #refreshToken;
    #refreshTokenExpires;

    constructor(config) {
        this.#config = config;
        this.#accessKeyId = config.accessKeyId;
        this.client = null;
        this.init();
    }

    init() {
        console.log('Initializing QxClient endpoint:', this.#config.endpoint);

        const api = axios.create({
            baseURL: this.#config.endpoint,
            timeout: this.#config.timeout,
            withCredentials: false
        })

        // http request 拦截器
        api.interceptors.request.use(
            config => {
                config.headers = {}
                return config
            },
            error => {
                return error
            }
        )

        // http response 拦截器
        api.interceptors.response.use(
            response => {
                return response.data
            },
            error => {
                return error
            }
        )
        this.client = api;
    }

    get(url, data) {
        const realUrl = `${this.#config.protocol}://${this.#config.endpoint}/qx/v5/apis${url}`
        // console.log("qx debug: url:", realUrl);
        return this.client({
            method: "GET",
            url: realUrl,
            params: data,
        })
    }

}

export { QxClient }