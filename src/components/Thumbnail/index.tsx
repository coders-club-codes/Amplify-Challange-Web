import { Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { PLACEHOLDER_IMAGE_URL } from "../../utils/contants";
import { Image } from "./styles";

type Props = {
  thumbnailKey?: string | null;
}


export default function Thumbnail({ thumbnailKey }: Props) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

  useEffect(() => {
    async function loadThumbnailUrl() {

      if (thumbnailKey) {
        const thumbnail = await Storage.get(thumbnailKey);
        setThumbnailUrl(thumbnail);
      }
    }

    loadThumbnailUrl()
  }, [thumbnailKey]);

  if (!thumbnailUrl) {
    <Image src={PLACEHOLDER_IMAGE_URL} />
  }

  if (!thumbnailUrl) {
    return null;
  }

  return (
    <Image src={thumbnailUrl} />
  )
}