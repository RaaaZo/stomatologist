import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 30px auto;
  border: 2px solid ${({ theme }) => theme.accentsColor};

  @media (min-width: 660px) and (orientation: landscape) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 50%;
    height: 500px;
  }
`;

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 53.014708, lng: 18.576143 },
      zoom: 15
    });

    new window.google.maps.Marker({
      position: { lat: 53.014708, lng: 18.576143 },
      map: map
    });
  }, []);

  return <MapWrapper ref={mapRef}></MapWrapper>;
};

export default GoogleMap;
