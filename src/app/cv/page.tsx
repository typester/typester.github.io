export default async function Cv() {
  const data = await import("../../../public/data/cv.json", { with: { type: "json" }});

  return (
    <div id="cv">
      <h1>{data.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
    </div>
  );
}
