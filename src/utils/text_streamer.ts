import React from 'react';

/**
 * 
 * @param iterable - Stream input from RemoteRunnable
 * @param stream_state - Text state to 
 * @returns 
 */
const streamer = async (iterable: Iterable<ReadableStream>, stream_state:React.Dispatch<React.SetStateAction<any>) => {
  const reader = iterable.getReader();
  let running = true;
  let chunks = [];

  while (running) {
    const { value, done } = await reader.read;
    if (done) {
      running = false;
      break;
    }

    chunks.push(value);
    chunks.length > 1 && stream_state((state) => state + value);
  }

  return chunks;
};
