class QxConfig {
    #accessKeyId;
    #accessKeySecret;
    #endpoint;
    constructor(parameters) {
        this.#accessKeyId = parameters.accessKeyId || '';
        this.#accessKeySecret = parameters.accessKeySecret || '';
        this.#endpoint = parameters.endpoint || 'core.csvw88.com';
        this.protocol = parameters.protocol || 'https';
        this.autoRetry = parameters.autoRetry || true;
        this.maxRetryTimes = parameters.maxRetryTimes || 3;
        this.debug = parameters.debug || false;
        this.timeout = parameters.timeout || 2000;
        this.autoRefreshToken = parameters.autoRefreshToken || true;
        this.deadline = parameters.deadline || 5;
    }

    get accessKeyId() {
        return this.#accessKeyId;
    }
    get accessKeySecret() {
        return this.#accessKeySecret;
    }
    get endpoint() {
        return this.#endpoint;
    }

    withAccessKeyId(accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    withAccessKeySecret(accessKeySecret) {
        this.accessKeySecret = accessKeySecret;
        return this;
    }
    withEndpoint(endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    withProtocol(protocol) {
        this.protocol = protocol;
        return this;
    }
    withAutoRetry(autoRetry) {
        this.autoRetry = autoRetry;
        return this;
    }
    withMaxRetryTimes(maxRetryTimes) {
        this.maxRetryTimes = maxRetryTimes;
        return this;
    }
    withDebug(debug) {
        this.debug = debug;
        return this;
    }
    withTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }
    withAutoRefreshToken(autoRefreshToken) {
        this.autoRefreshToken = autoRefreshToken;
        return this;
    }
    withDeadline(deadline) {
        this.deadline = deadline;
        return this;
    }
    withClient(client) {
        this.client = client;
        return this;
    }
    withSessionId(sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    withAccessToken(accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    withAccessTokenExpires(accessTokenExpires) {
        this.accessTokenExpires = accessTokenExpires;
        return this;
    }
    withRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    withRefreshTokenExpires(refreshTokenExpires) {
        this.refreshTokenExpires = refreshTokenExpires;
        return this;
    }
    withRetryTimes(retryTimes) {
        this.retryTimes = retryTimes;
        return this;
    }
}

export { QxConfig };