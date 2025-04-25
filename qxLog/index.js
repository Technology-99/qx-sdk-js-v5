const COLORS = {
    info: '\x1b[36m',   // 青色
    error: '\x1b[31m',  // 红色
    warn: '\x1b[33m',   // 黄色
    reset: '\x1b[0m'
};

function formatLog(type, args) {
    const timestamp = new Date().toLocaleString();
    const module = global.__currentModule || 'main';
    const prefix = `[${timestamp}] [${module}] [${type.toUpperCase()}]`;
    return [prefix, ...args];
}

const qxLog = {
    info: (...args) => console.log(...formatLog('info', args)),
    error: (...args) => console.error(...formatLog('error', args)),
    warn: (...args) => console.warn(...formatLog('warn', args)),
};

export default qxLog;