import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CenterEntireMap from './components/CenterEntireMap';
import CenterList from './components/CenterList';

const App = () => {
  const [centers, setCenters] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          'https://api.odcloud.kr/api/15077586/v1/centers',
          {
            params: {
              serviceKey: 'data-portal-test-key',
            },
          },
        );
        setCenters(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    loadData(); // 정의 후 호출
  }, []); // useEffect [] => 맨 처음에 한번 불림

  if (!centers) {
    return null;
  }

  return (
    <>
      <CenterEntireMap centers={centers} />
      <CenterList centers={centers} />
    </>
  );
};

export default App;
