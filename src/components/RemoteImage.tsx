type RemoteImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function RemoteImage({
  src,
  alt,
  className = "object-cover",
  priority = false,
}: RemoteImageProps) {
  return (
    // Native img avoids Next.js remote optimizer issues on some networks.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
