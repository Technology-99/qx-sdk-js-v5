import { QxClient } from './qxClient/index.js';
import { QxBase } from './qxBase/index.js';
import { QxConfig } from './qxConfig/index.js';
import qxLog from './qxLog/index.js';
class QxSdk {
    constructor(config) {
        this.config = new QxConfig(config);
        // console.log('QxSdk initialized with config:', this.config);
        this.cli = new QxClient(this.config);
        this.Base = new QxBase(this.cli);
        this.init();
    }

    init() {
        qxLog.info('Initializing QxSdk with endpoint:', this.config.endpoint);
        this.keepHealthz();
    }

    keepHealthz() {
        setInterval(() => {
            this.Base.healthz()
                .then((res) => {
                    qxLog.info('health check :', res);
                })
                .catch((err) => {
                    qxLog.info('health check err :', err);
                });
        }, 1000); // 60 seconds
    }

    getClient() {
        return this.cli;
    }
}

export default QxSdk;