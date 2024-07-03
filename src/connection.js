import React, { useState, useEffect } from "react";
import * as Utils from './utils';

export function FetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${Utils.BASE_URL}/${url}`, {
        method: 'GET',
        headers: {
          'X-Auth-Token': Utils.TOKEN
        }
      })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [url]);

  return {data};
}