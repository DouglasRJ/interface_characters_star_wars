import './Home.css';
import { Typography, Input, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableItems from '../../Components/TableItems/TableItems';
import CardItems from '../../Components/CardItems/CardItems';
import PaginationItems from '../../Components/PaginationItems/PaginationItems';

type DataType = {
  key: React.Key;
  name: string;
  birth_year: string;
  homeworld: string;
};

const { Search } = Input;
const { Title } = Typography;

const Home = () => {
  const [characters, setCharacters] = useState<DataType[]>([]);
  const [nextPage, setNextPage] = useState<string>('');
  const [previousPage, setPreviousPage] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<string>('card');
  const [loading, setLoading] = useState(false);
  const [loadingPagination, setLoadingpagination] = useState(false);

  const getPlanet = async (url: string) =>
    axios.get(url).then(({ data }) => data.name);

  const getCharacters = async (url?: string) => {
    setLoading(true);

    await axios
      .get(url || 'https://swapi.dev/api/people/')
      .then(({ data }: any) => {
        setNextPage(data.next);
        setPreviousPage(data.previous);
        data.results.forEach(async (character: any) => {
          await getPlanet(character.homeworld).then((name) => {
            setCharacters((prev) => [
              ...prev,
              {
                key: prev.length,
                name: character.name,
                birth_year: character.birth_year,
                homeworld: name,
              },
            ]);
          });
        });
      });
    setLoading(false);
  };

  useEffect(() => {
    setCharacters([]);
    getCharacters();
  }, []);

  const handleNextPage = async () => {
    setCharacters([]);
    setLoadingpagination(true);
    await getCharacters(nextPage).then(() => {
      setLoadingpagination(false);
    });
    setPage(page + 1);
  };

  const handlePreviousPage = async () => {
    setCharacters([]);
    setLoadingpagination(true);
    await getCharacters(previousPage).then(() => {
      setLoadingpagination(false);
    });
    setPage(page - 1);
  };

  const handleSearch = async (e: any) => {
    await axios
      .get(`https://swapi.dev/api/people/?search=${e.target.value}`)
      .then(({ data }: any) => {
        setCharacters([]);
        data.results.forEach(async (character: any) => {
          await getPlanet(character.homeworld).then((name) => {
            setCharacters((prev) => [
              ...prev,
              {
                key: prev.length,
                name: character.name,
                birth_year: character.birth_year,
                homeworld: name,
              },
            ]);
          });
        });
      });
  };

  const handleSwitchViewMode = () => {
    if (viewMode === 'card') {
      setViewMode('table');
    } else {
      setViewMode('card');
    }
  };

  return (
    <div
      style={{
        paddingTop: '30px',
        paddingBottom: '130px',
        paddingLeft: '60px',
        paddingRight: '60px',
      }}
    >
      <Title style={{ color: 'white', textAlign: 'center' }}>
        Star Wars Characters
      </Title>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Search
          onChange={handleSearch}
          placeholder="Input search text"
          style={{ width: 400, marginBottom: '10px' }}
        />
      </div>
      <div>
        <span style={{ color: 'white', fontSize: '1rem', marginRight: '10px' }}>
          View Mode:
        </span>
        <Switch
          checkedChildren="Table"
          unCheckedChildren="Card"
          onChange={() => {
            handleSwitchViewMode();
          }}
        />
      </div>
      {viewMode === 'card' ? (
        <CardItems dataSource={characters} loading={loading} />
      ) : (
        <TableItems dataSource={characters} loading={loading} />
      )}
      <PaginationItems
        page={page}
        loadingPagination={loadingPagination}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default Home;
