import { useParams } from "react-router-dom";

interface researchProps{
  researchTopics: { id: number; title: string; summary: string; imageUrl: string; detailLink: string; detail: string }[]
}

function ResearchDetail( { researchTopics }: researchProps) {
  const { id } = useParams<{ id: string }>();
  const topic = researchTopics.find((topic) => topic.id === parseInt(id || "", 10));

  if (!topic) {
    return <h1>Topic not found</h1>;
  }

  return (
    <div className = "linkDetailsPage">
      <div className="research-detail">
        <h1>{topic.title}</h1>
        <img src={topic.imageUrl} alt={topic.title} />
        <p>{topic.detail}</p>
      </div>
    </div>
  );
}

export default ResearchDetail;