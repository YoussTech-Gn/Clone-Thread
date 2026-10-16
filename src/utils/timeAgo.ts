function timeAgo(date: string): string {
  const diffInMs = Math.max(0, Date.now() - new Date(date).getTime());

  const secs = Math.floor(diffInMs / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);

  if (secs < 60) return `${secs}s`;
  if (mins < 60) return `${mins}m`;
  if (hours < 24) return `${hours}h`;
  if (days === 1) return "Yesterday";
  return `${days}d`;
}

export { timeAgo };
