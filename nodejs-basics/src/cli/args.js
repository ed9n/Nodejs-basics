export const parseArgs = () => {
    process.argv.forEach((val, index) => {
        if (index == 0) {
            console.log(`prop Node is ${val}`);
        } else if (index == 1) {
            console.log(`prop JS is ${val}`);
        } else {
            console.log(`Your prop is ${val}`);
        };
    });
};

parseArgs();