export default function ChevronRight(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M10.75 8.75L14.25 12L10.75 15.25"
      />
    </svg>
  )
}
