const evalFunc = (input) => {
    const regex = /^(\w+)\s*\(([^)]*)\)$/;
    const match = input.match(regex);
    let functionName = '';
    let parameters = [];

    if (match) {
        functionName = match[1];
        const paramsString = match[2]; 
        parameters = paramsString.split(',').map(param => param.trim());
    } else {
        return 'Error: Invalid function format';
    }

    switch (functionName) {
        case 'pol_dif':
            let final = [];
            let vals = parameters.map(Number).reverse();
            vals.forEach((element, i) => {
                if (i !== 0) { final.push(element * i); }
            });
            final.reverse();
            return final.join(', ');

        default:
            return `Error: Unknown function ${functionName}`;
    }
};
