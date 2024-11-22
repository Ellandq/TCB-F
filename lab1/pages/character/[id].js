import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchCharacterById } from '../../utils/rickAndMortyApi';

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCharacterById(id)
        .then((response) => setCharacter(response.data))
        .catch((error) => setError('Character not found.'));
    }
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterDetail;
