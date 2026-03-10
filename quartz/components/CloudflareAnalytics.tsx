import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const CloudflareAnalytics: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token":"45d4388ce0174a0ab6f69a599da77044"}'
    />
  )
}

export default (() => CloudflareAnalytics) satisfies QuartzComponentConstructor