export const formatEgyptTime = (isoString: string): string => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  const date = new Date(isoString);
  const parts = formatter.formatToParts(date);
  
  const day = parts.find(p => p.type === 'day')?.value;
  const month = parts.find(p => p.type === 'month')?.value;
  const hour = parts.find(p => p.type === 'hour')?.value;
  const minute = parts.find(p => p.type === 'minute')?.value;
  const period = parts.find(p => p.type === 'dayPeriod')?.value.toLowerCase();
  
  return `${day} ${month} | ${hour}:${minute}${period}`;
};