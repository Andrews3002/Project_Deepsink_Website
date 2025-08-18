interface ResearchTopic {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  detailLink: string;
  detail: string; // URL to the detailed page
}

interface ResearchTopicsProps {
  topics: ResearchTopic[];
}

function ResearchTopics({ topics }: ResearchTopicsProps) {
  return (
    <section className="research-topics">
      <h1 className="section-title">Research Topics</h1>
      <ul className="topics-list">
        {topics.map((topic) => (
          <li className="topic-card" key={topic.id}>
            <img
              src={topic.imageUrl}
              alt={topic.title}
              className="topic-image"
            />
            <div className="cardDetailsDiv">
              <h2>{topic.title}</h2>
              <p>{topic.summary}</p>
              <a href={topic.detailLink} className="detail-link">
                Read More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResearchTopics;
