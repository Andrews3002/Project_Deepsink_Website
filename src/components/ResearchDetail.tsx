import { useParams } from "react-router-dom";
import { useResponsiveFont } from "./useResponsiveFont";

interface researchProps{
  researchTopics: { id: number; title: string; summary: string; imageUrl: string; detailLink: string; detail: string }[]
}

function ResearchDetail( { researchTopics }: researchProps) {
  const { id } = useParams<{ id: string }>();
  const topic = researchTopics.find((topic) => topic.id === parseInt(id || "", 10));
  const { containerRef, headingRef, contentRef } = useResponsiveFont();

  if (!topic) {
    return <h1>Topic not found</h1>;
  }

  return (
    <div className = "linkDetailsPage">
      <div className="research-detail" ref={containerRef}>
        <h1 ref={headingRef}>{topic.title}</h1>
        <p ref={contentRef}>{topic.detail}</p>
      </div>
    </div>
  );
}

export default ResearchDetail;