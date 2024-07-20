function generateStripesPattern(color, width, height) {
    let pattern = '';
    for (let x = 0; x < width; x += 50) {
        pattern += `<path d="M${x} 0 L${x} ${height}" stroke="white" stroke-width="1" />`;
    }
    for (let y = 0; y < height; y += 50) {
        pattern += `<path d="M0 ${y} L${width} ${y}" stroke="white" stroke-width="1" />`;
    }
    return `
        <rect width="${width}" height="${height}" fill="${color}" />
        ${pattern}
    `;
}

function generateDotsPattern(color, width, height) {
    let pattern = '';
    for (let y = 0; y < height; y += 50) {
        for (let x = 0; x < width; x += 50) {
            pattern += `<circle cx="${x}" cy="${y}" r="5" fill="white" />`;
        }
    }
    return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
}

function generateTrianglesPattern(color, width, height) {
    let pattern = '';
    for (let y = 0; y < height; y += 50) {
        for (let x = 0; x < width; x += 50) {
            pattern += `
                <polygon points="${x},${y} ${x + 50},${y} ${x},${y + 50}" fill="none" stroke="white" />
            `;
        }
    }
    return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
}

function generateHexagonsPattern(color, width, height) {
    let pattern = '';
    const hexagonSize = 20; // Tamaño del lado del hexágono
    const hexHeight = Math.sqrt(3) / 2 * hexagonSize; // Altura del hexágono
    for (let y = 0; y < height + hexHeight; y += hexHeight * 1.5) {
        for (let x = 0, xOffset = 0; x < width + hexagonSize; x += hexagonSize * 1.5, xOffset++) {
            const xStart = x + (xOffset % 2) * (hexagonSize * 0.75);
            pattern += `<polygon points="${xStart},${y} ${xStart + hexagonSize / 2},${y + hexHeight / 2} ${xStart + hexagonSize / 2},${y + 1.5 * hexHeight} ${xStart},${y + 2 * hexHeight} ${xStart - hexagonSize / 2},${y + 1.5 * hexHeight} ${xStart - hexagonSize / 2},${y + hexHeight / 2}" fill="none" stroke="white" />`;
        }
    }
    return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
}

function generateWavesPattern(color, width, height) {
    let pattern = '';
    const waveHeight = 20; // Altura de la ola
    const waveLength = 100; // Longitud de la ola
    for (let y = 0; y < height; y += waveHeight * 2) {
        let pathD = `M 0 ${y + waveHeight}`;
        for (let x = 0; x < width; x += waveLength) {
            pathD += ` C ${x + waveLength / 4} ${y}, ${x + 3 * waveLength / 4} ${y + waveHeight * 2}, ${x + waveLength} ${y + waveHeight}`;
        }
        pattern += `<path d="${pathD}" fill="none" stroke="white" />`;
    }
    return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
}

function generateDiagonalLinesPattern(color, width, height) {
    let pattern = '';
    const lineSpacing = 20; // Espaciado entre líneas
    const lineLength = Math.sqrt(width * width + height * height); // Longitud de la línea para cubrir diagonalmente el área
    for (let x = -lineLength; x < width + lineLength; x += lineSpacing) {
        pattern += `<line x1="${x}" y1="0" x2="${x + lineLength}" y2="${height}" stroke="white" stroke-width="2" />`;
    }
    return `<rect width="${width}" height="${height}" fill="${color}" />${pattern}`;
}


export { 
    generateStripesPattern, 
    generateDotsPattern, 
    generateTrianglesPattern, 
    generateHexagonsPattern, 
    generateWavesPattern,
    generateDiagonalLinesPattern 
};