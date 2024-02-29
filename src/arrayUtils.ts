export function groupBy<T, K>(array: T[], getKey: (item: T) => K): { [key: string]: T[] } {
    const grouped: { [key: string]: T[] } = {};

    array.forEach(item => {
        const key = String(getKey(item));
        if (grouped[key]) {
            grouped[key].push(item);
        } else {
            grouped[key] = [item];
        }
    });

    return grouped;
}

export function sortObjectKeysByPriority<T>(obj: { [key: string]: T }, priority: { [key: string]: number }): { [key: string]: any } {
    const orderedKeys = Object.keys(obj).sort((a, b) => {
        const priorityA = priority[a];
        const priorityB = priority[b];

        return priorityA - priorityB;
    });

    const sortedObject: { [key: string]: any } = {};

    orderedKeys.forEach(key => {
        sortedObject[key] = obj[key];
    });

    return sortedObject;
}
