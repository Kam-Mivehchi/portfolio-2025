import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface IBlurImage {
  height?: any;
  width?: any;
  src?: string | any;
  className?: string | any;
  alt?: string | undefined;

  [x: string]: any;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={clsx(
        'transition duration-500',
        isLoading ? 'blur-sm scale-100' : ' blur-0 scale-100',
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      alt={alt ? alt : 'Avatar'}
      {...rest}
    />
  );
};
