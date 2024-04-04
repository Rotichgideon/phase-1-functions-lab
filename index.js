// Code your solution in this file!


function distanceFromHqInBlocks(street) {
    //returns the number of blocks given a value
    return Math.abs(street - 42);
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264;
  }

  function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street);
    return blocks * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // $25 for a distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Does not allow rides over 2500 feet
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  