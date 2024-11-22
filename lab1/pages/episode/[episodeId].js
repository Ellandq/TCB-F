import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchEpisodeById } from '../../utils/rickAndMortyApi';

const EpisodeDetail = () => {
  const router = useRouter();
  const { episodeId } = router.query;
  const [episode, setEpisode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (episodeId) {
      fetchEpisodeById(episodeId)
        .then((response) => setEpisode(response.data))
        .catch(() => setError('Episode not found.'));
    }
  }, [episodeId]);

  if (error) return <p>{error}</p>;
  if (!episode) return <p>Loading...</p>;

  return (
    <div>
      <h1>{episode.name}</h1>
      <p>Air Date: {episode.air_date}</p>
      <p>Episode: {episode.episode}</p>
    </div>
  );
};

export default EpisodeDetail;
