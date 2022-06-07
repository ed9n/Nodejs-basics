export const parseArgs = () => {
    const arrayArgs = process.argv;
    const [node, jsFile, ...restArg] = arrayArgs;

    restArg.forEach((val, index, array) => {
        if (val.substring(0, 2) == '--') {
            if (array[index + 1].substring(0, 2) != '--') {
                console.log(`${val.substring(0)} is ${array[index + 1]}`);
            }
        }
    });
};

parseArgs();