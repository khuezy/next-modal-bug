export default async function Gallery({ params }) {
  const { dynamic } = await params
  return <div>
    <h1>Modal Dynamic: {dynamic}</h1>
    {dynamic === 'static' && <div>If you see me, this is bad! Fixed route should not be intercepted!</div>}
  </div>
}