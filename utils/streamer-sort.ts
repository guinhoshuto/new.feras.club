import { FeraDto } from "../dtos/FerasDto";

export function streamerSort(streamers: FeraDto[]): FeraDto[]{
  streamers.sort((a: any, b: any) => {
    if (a.viewer_count > b.viewer_count)
      return -1;
    if (a.viewer_count < b.viewer_count)
      return 1
    return 0
  });

  return streamers
}