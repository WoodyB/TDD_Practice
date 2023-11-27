export function diversionChecker(numOfBinaryDigits: number): number {
    if (numOfBinaryDigits === 1) {
        return 2;
    }

    return fibonacci(numOfBinaryDigits);
}

function fibonacci(n: number): number {
    let n_minus_1 = 1;
    let n_minus_2 = 1;

    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    for (let i = 0; i < n; i++) {
        const temp = n_minus_1 + n_minus_2;
        n_minus_2 = n_minus_1;
        n_minus_1 = temp;
    }

    return n_minus_1;
}
