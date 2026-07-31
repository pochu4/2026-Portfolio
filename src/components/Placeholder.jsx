export default function Placeholder({
  className = '',
  ratio = 'aspect-[4/3]',
}) {
  return <div className={`bg-placeholder rounded-sm ${ratio} ${className}`} />
}
