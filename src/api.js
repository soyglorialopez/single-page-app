const urlBase = 'https://postulanteapi-v1.herokuapp.com' 

export const getPostulants = async () => {
  const response = await fetch(`${urlBase}/postulantes/listapostulantes`)
  return await response.json()
};

export const postPais = async (data) => {
  const response = await fetch(`${urlBase}/paises/creapais`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: 'application/json',
    },
    body: JSON.stringify(data)
  })
  return await response.json()
};

export const postCiudad = async (data) => {
  const response = await fetch(`${urlBase}/ciudades/creaciudad`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: 'application/json',
    },
    body: JSON.stringify(data)
  })
  return await response.json()
};

export const postBarrio = async (data) => {
  const response = await fetch(`${urlBase}/barrios/creabarrio`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: 'application/json',
    },
    body: JSON.stringify(data)
  })
  return await response.json()
};


export const postPostulant = async (data) => {
    const response = await fetch(`${urlBase}/postulantes/creapostulante`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: 'application/json',
      },
      body: JSON.stringify(data)
    })
    return await response.json()
};