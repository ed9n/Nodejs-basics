export const parseEnv = () => {

    process.env.RSS_LOGIN = 'ed9';
    process.env.RSS_PASSWORD = 'qwerty';

    for (let key in process.env) {
        let checkOnKey = key.startsWith('RSS_');
        if (checkOnKey) {
            console.log(`${key} = ${process.env[key]}`)
        };
    };
};

parseEnv();