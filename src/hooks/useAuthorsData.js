import { useState, useEffect } from 'react'

export const useAuthorsData = () => {

  const url = 'https://course-pluralsight-api.herokuapp.com/authors'

  const [_authorsData, _setAuthorsData] = useState([]);

  useEffect(() => {
    getAuthorsData()
  }, [])


  const getAuthorsData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    _setAuthorsData(jsonData);
  }

  return _authorsData

}

