import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

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

interface RouteParams {
  id: string;
}

const StyledDiv = styled.div`
  td {
    padding: 6px;
    border: 1px solid;
  }
`;

export const House = () => {
  let { id } = useParams<RouteParams>();
  let history = useHistory();

  const [data, setData] = useState<IData>({} as IData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const data = await (
          await fetch(
            `http://mobile-reality-backend.sadek.usermd.net/houses/${id}`
          )
        ).json();
        if (data.error) {
          setError(true);
          setIsLoading(false);
        }
        setData(data.result);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchHouses();

    return () => {
      // cleanup
    };
  }, [id]);

  const deleteHouse = async (id: string) => {
    await fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        history.push('/houses');
        console.log(`Delete succes`);
      })
      .catch((error) => {
        console.log(`Delete error ${error}`);
      });
  };

  return (
    <StyledDiv>
      <h1>house details</h1>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error with getting data</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>_id</th>
                <th>address</th>
                <th>floorsNumber</th>
                <th>description</th>
                <th>label</th>
                <th>created At</th>
                <th>updated At</th>
                <th>__v</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data._id}</td>
                <td>{data.address}</td>
                <td>{data.floorsNumber}</td>
                <td>{data.description}</td>
                <td>{data.label}</td>
                <td>{new Date(data.createdAt).toUTCString()}</td>
                <td>{new Date(data.updatedAt).toUTCString()}</td>
                <td>{data.__v}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => deleteHouse(id)}>Delete</button>
        </>
      )}
    </StyledDiv>
  );
};
