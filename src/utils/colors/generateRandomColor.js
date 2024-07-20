function generateRandomColor() {
    const colors = [
        { color: '#4d8fa5', priority: 0.01 },
        { color: '#3a7e94', priority: 0.01 },
        { color: '#276e83', priority: 0.01 },
        { color: '#135d71', priority: 0.01 },
        { color: '#004c60', priority: 0.01 },
        { color: '#a5694d', priority: 0.01 },
        { color: '#594da5', priority: 0.01 },
        { color: '#4da563', priority: 0.01 },
        { color: '#a5954d', priority: 0.01 },
        { color: '#a54d6d', priority: 0.01 },
    ];

    const random = Math.random();
    let cumulativeProbability = 0;

    for (const { color, priority } of colors) {
        cumulativeProbability += priority;
        if (random < cumulativeProbability) {
            return color;
        }
    }

    return (
        '#' +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')
            .toUpperCase()
    );
}

export default generateRandomColor;