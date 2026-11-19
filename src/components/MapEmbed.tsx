type MapEmbedProps = {
  query: string;
  title: string;
  className?: string;
};

export default function MapEmbed({ query, title, className }: MapEmbedProps) {
  return (
    <iframe
      title={title}
      src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      {...{ credentialless: 'true' }}
    />
  );
}
