export const getTotalHours = (start: Date, end: Date): number => (start.getTime() - end.getTime()) / 1000;
