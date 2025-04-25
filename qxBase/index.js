class QxBase {
    #cli;
    constructor(cli) {
        this.#cli = cli;
    }

    healthz (ctx) {
        return this.#cli.get("/healthz", null)
        .then(response => {
            // console.log('Response data:', response);
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching healthz:', error);
            throw error;
        });
    }

    zones(ctx, params) {
        return this.#cli.get("/v1/zones", {
            lang: String(params.lang),
            // svc: String(params.svc),
        })
        .then(response => {
            // console.log('Response data:', response);
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching zones:', error);
            throw error;
        });
    }
}
export { QxBase }