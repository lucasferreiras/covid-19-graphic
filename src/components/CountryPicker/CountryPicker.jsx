import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

function CountryPicker({handleCountryChange}) {
  const [fecthedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI()

  }, [setFetchedCountries])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue ='' onChange={(event) => handleCountryChange(event.target.value)}>
        <option value="">Global</option>
        {fecthedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker