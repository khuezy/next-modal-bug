export default async function Gallery({ params }) {
  const { dynamic } = await params
  return <div>
    <h1>Dynamic: {dynamic}</h1>
  </div>
}