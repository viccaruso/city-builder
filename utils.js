export function createCountString(count1, count2, count3) {
    return `You've changed the buildings ${count1} ${(count1 === 1) ? 'time' : 'times'}, the waterfront ${count2} ${(count2 === 1) ? 'time' : 'times'}, and the park ${count3} ${(count3 === 1) ? 'time' : 'times'}. Everybody loves your city's slogans:`;
}