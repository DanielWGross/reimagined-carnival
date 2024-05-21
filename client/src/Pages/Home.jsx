import { useQuery, gql } from '@apollo/client';

const GET_KITTIES = gql`
  query Kitty {
    kitty {
      _id
      name
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_KITTIES);

  if (error) {
    return <p>You broke it, way to go...</p>;
  }

  if (loading) {
    return <p>Loading!!!! Please chill out a min.</p>;
  }

  return (
    <div>
      {data.kitty.map((kitten) => (
        <p key={kitten._id}>{kitten.name}</p>
      ))}
    </div>
  );
}

export default Home;
