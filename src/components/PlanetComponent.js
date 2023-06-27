import React, { useEffect, useState } from 'react';

const PlanetComponent = () => {
  const [planetName, setPlanetName] = useState('');
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    if (planetName.trim() !== '') {
      const apiKey = 'gwaDVEwOAJFzcq3Bslp5Qg==0PcDhanR2sXvD0BL';

      fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey },
      })
        .then(response => response.json())
        .then(result => {
          setPlanetData(result);
        })
        .catch(error => {
          console.error('Error: ', error);
        });
    }
  }, [planetName]);

  const handleInputChange = event => {
    setPlanetName(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (planetName.trim() !== '') {
        const apiKey = 'gwaDVEwOAJFzcq3Bslp5Qg==0PcDhanR2sXvD0BL';

        fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
        })
          .then(response => response.json())
          .then(result => {
            setPlanetData(result);
          })
          .catch(error => {
            console.error('Error: ', error);
          });
      }
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter planet name'
        value={planetName}
        onChange={handleInputChange}

      />
      {planetData ? (
        Object.entries(planetData[0]).map(([key, value]) => (
          <div key={key}>
            <span>{key}: </span>
            <span>{value}</span>
          </div>
        ))
      ) : (
        <p>Fetching planet data...</p>
      )}
    </div>
  );
};

export default PlanetComponent;
