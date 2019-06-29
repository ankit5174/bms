import {excludes} from "./constant";

export const compute = (data) => {
    const results = new Map();
    excludes.forEach((excludeItem) => {
        results.set(excludeItem, -1);
    });
    data.forEach((dataItem) => {
        const range = dataItem.split('-');
        if (range.length > 1) {
            range[0] = parseFloat(range[0]);
            range[1] = parseFloat(range[1]);
            for (let i = range[0]; i <= range[1]; i++) {
                if (!results.get(i)) {
                    results.set(i, 1);
                } else {
                    results.set(i, results.get(i) + 1);
                }
            }
        } else {
            range[0] = parseFloat(range[0]);
            if (!results.get(range[0])) {
                results.set(range[0], 1);
            } else {
                results.set(range[0], results.get(range[0]) + 1);
            }
        }
    });
    return results;
};

export const convertObjectToArray = (object) => {
    return Object.keys(object).map((key) => {
        return object[key];
    })
};
