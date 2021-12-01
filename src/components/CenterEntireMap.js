import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const CenterEntireMapBlock = styled.div`
  display: flex;
  text-align: center;
`;

const CenterEntireMap = ({ centers }) => {
  const mapContainer = useRef('entireMap');

  useEffect(() => {
    const container = mapContainer.current;
    const options = {
      // 지도를 표시할 div
      center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
      level: 14, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options);

    // eslint-disable-next-line array-callback-return
    centers.map((location) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(location.lat, location.lng),
        title: location.centerName,
      });
    });
  }, [centers]);

  return (
    <CenterEntireMapBlock>
      <div
        ref={mapContainer}
        style={{
          width: '700px',
          height: '400px',
          marginLeft: '25%',
        }}
      ></div>
    </CenterEntireMapBlock>
  );
};

export default CenterEntireMap;
