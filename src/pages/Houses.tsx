import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { LinkButton } from '../components/LinkButton';

interface IData {
  _id: string;
  address: string;
  floorsNumber: number;
  description: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const StyledTable = styled.table`
  margin: 50px;
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid grey;
  }
  th {
    color: #777;
    background: rgba(0, 0, 0, 0.1);
  }

  tr:hover {
    background: rgba(190, 190, 190, 0.7);
  }
`;

export const Houses = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchHouses = async () => {
    try {
      const data = await (
        await fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/all`)
      ).json();
      if (data.error) {
        setError(true);
        setIsLoading(false);
      }
      setData(data.results);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchHouses();

    return () => {
      // cleanup
    };
  }, []);

  const deleteHouse = async (id: string) => {
    await fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Delete succes`);
        fetchHouses();
      })
      .catch((error) => {
        console.log(`Delete error ${error}`);
      });
  };

  return (
    <div>
      <h1>Houses list</h1>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error with getting data</p>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>address</th>
              <th>floorsNumber</th>
              <th>description</th>
              <th>visit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ _id, address, floorsNumber, description }) => (
              <tr key={_id}>
                <td>{address}</td>
                <td>{floorsNumber}</td>
                <td>{description}</td>
                <td>
                  <LinkButton to={`/houses/${_id}`}>Visit house</LinkButton>
                </td>
                <td>
                  <Button onClick={() => deleteHouse(_id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
      <div>
        <LinkButton to={`/houses/add`}>Add house</LinkButton>
      </div>
    </div>
  );
};
