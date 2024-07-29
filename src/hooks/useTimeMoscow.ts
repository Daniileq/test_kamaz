import { useEffect, useState } from 'react';

export const useTimeMoscow = (time: string): string[] => {
  const [timeM, SetTimeM] = useState<string>('');

  useEffect(() => {
    const date = new Date(time);
    const formattedDate = date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    SetTimeM(formattedDate);
  }, [JSON.stringify(time)]);
  return [timeM];
};
