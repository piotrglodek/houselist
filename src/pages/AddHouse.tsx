import { useState, FC } from 'react';

interface IHouse {
  address: string;
  floorsNumber: number;
  description: string;
  label: string;
}

export const AddHouse: FC = () => {
  const [house, setHouse] = useState<IHouse>({
    address: '',
    floorsNumber: 1,
    description: '',
    label: '',
  });

  const handleInputChange = (event: any) => {
    const target = event.target;
    const type = target.type;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setHouse((prevState) => ({
      ...prevState,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(house),
    };
    fetch(
      'http://mobile-reality-backend.sadek.usermd.net/houses',
      requestOptions
    )
      .then(() => {
        console.log(`Added house sucess`);
        setHouse({
          address: '',
          floorsNumber: 0,
          description: '',
          label: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add house form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          address:
          <input
            required
            name="address"
            type="text"
            value={house.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          floorsNumber:
          <input
            required
            name="floorsNumber"
            type="number"
            value={house.floorsNumber}
            onChange={handleInputChange}
            min={1}
            max={999}
          />
        </label>
        <br />
        <label>
          description:
          <input
            required
            name="description"
            type="text"
            value={house.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          label:
          <input
            required
            name="label"
            type="text"
            value={house.label}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Add house" />
      </form>
    </div>
  );
};
