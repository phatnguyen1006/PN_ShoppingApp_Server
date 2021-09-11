export const {
    NODE_ENV = 'development',

    APP_PORT = 8001
} = process.env;

export const IN_PRODUCT = NODE_ENV === 'production';