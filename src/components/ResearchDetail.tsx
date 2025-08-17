import React from "react";
import { useParams } from "react-router-dom";

const researchTopics = [
  { id: 1, title: "Carbon Capture", summary: "Techniques for capturing CO₂.", imageUrl: "/images/carbon_capture.jpg", detail: "Detailed information about Carbon Capture." },
  { id: 2, title: "Deep Sink Storage", summary: "Long-term storage strategies.", imageUrl: "/images/deep_sink.jpg", detail: "Detailed information about Deep Sink Storage." },
  { id: 3, title: "Monitoring Systems", summary: "Sensors and AI to track stored carbon safely.", imageUrl: "/images/monitoring.jpg", detail: "Detailed information about Monitoring Systems." },
];

function ResearchDetail() {
  const { id } = useParams<{ id: string }>();
  const topic = researchTopics.find((topic) => topic.id === parseInt(id || "", 10));

  if (!topic) {
    return <h1>Topic not found</h1>;
  }

  return (
   
    <div className="research-detail">
      <h1>{topic.title}</h1>
      <img src={topic.imageUrl} alt={topic.title} />
      <p>{topic.detail}</p>
    </div>
    
  );
}

export default ResearchDetail;