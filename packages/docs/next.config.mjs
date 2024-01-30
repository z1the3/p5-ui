import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/
})

const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

  compiler: {
    styledComponents: true,
  },
}

export default withMDX(nextConfig)
