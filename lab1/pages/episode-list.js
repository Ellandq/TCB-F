import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../utils/rickAndMortyApi';
import Link from 'next/link';

const EpisodeList = () => {
  const router = useRouter();
  const { season, sort } = router.query;
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!season || isNaN(season) || parseInt(season) <= 0) {
      setError("No valid season chosen. Please choose a season.");
      setEpisodes([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    api.get(`/episode`)
      .then((response) => {
        let episodes = response.data.results;

        const seasonEpisodes = episodes.filter((episode) =>
          episode.episode.startsWith(`S${String(season).padStart(2, '0')}`)
        );

        if (seasonEpisodes.length === 0) {
          setError(`No episodes found for season ${season}.`);
          setEpisodes([]);
          setLoading(false);
          return;
        }

        if (sort === 'date') {
          seasonEpisodes.sort((a, b) => new Date(a.air_date) - new Date(b.air_date));
        } else if (sort === 'episode') {
          seasonEpisodes.sort((a, b) => a.episode.localeCompare(b.episode));
        }

        setEpisodes(seasonEpisodes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API error:", error);
        setError("Failed to load episodes. Please try again later.");
        setLoading(false);
      });
  }, [season, sort]);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <>
      <Head>
        <title>Episodes for Season {season} | Rick and Morty</title>
        <meta name="description" content={`Browse all episodes from season ${season}`} />
        <meta property="og:title" content={`Browse all episodes from season ${season}`} />
        <meta property="og:description" content={`Browse all episodes from season ${season}`} />
      </Head>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Episodes for Season {season}</h1>
        
        {error ? (
          <div style={{ textAlign: 'center', color: '#d9534f', marginTop: '20px' }}>
            <p>{error}</p>
            <Link href="/episode-list?season=1">
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Go to Season 1
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '15px' }}>
            {episodes.map((episode) => (
              <div key={episode.id} style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#333', // Dark gray background
                color: '#f1f1f1' // Light text color for better contrast
              }}>
                <h3 style={{ margin: '0 0 5px' }}>{episode.name}</h3>
                <p style={{ margin: '5px 0' }}>Air Date: {episode.air_date}</p>
                <p style={{ margin: '5px 0' }}>Episode: {episode.episode}</p>
                <Link href={`/episode/${episode.id}`}>
                  <button style={{
                    marginTop: '10px',
                    padding: '8px 12px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
          <button
            onClick={() => router.push(`/episode-list?season=${parseInt(season) - 1}&sort=${sort}`)}
            disabled={parseInt(season) <= 1}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: parseInt(season) > 1 ? 'pointer' : 'not-allowed',
              opacity: parseInt(season) > 1 ? 1 : 0.5
            }}
          >
            Previous Season
          </button>
          <button
            onClick={() => router.push(`/episode-list?season=${parseInt(season) + 1}&sort=${sort}`)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Next Season
          </button>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
