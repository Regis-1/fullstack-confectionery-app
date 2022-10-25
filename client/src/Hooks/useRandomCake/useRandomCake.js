import { useEffect } from "react"

const getRndId = async () => {
  const idsRes = await fetch('http://localhost:8081/api/cakes/ids')
  const idsAvailable = await idsRes.json()

  return idsAvailable[Math.floor(Math.random()*idsAvailable.length)]
}

const getImg = async (id) => {
  const imgRes = await fetch(`http://localhost:8081/api/img/${id}`)
  const imgBlob = await imgRes.blob()

  return URL.createObjectURL(imgBlob)
}

const getDesc = async (id) => {
  const descRes = await fetch(`http://localhost:8081/api/cakes/${id}`)
  const description = await descRes.json()

  return description.name
}

const useRandomCake = (stateSetter) => {
  useEffect(() => {
    const f = async (stateSetter) => {
      const rndId = await getRndId()
      const cakeImg = await getImg(rndId)
      const cakeDesc = await getDesc(rndId)

      stateSetter({ img: cakeImg, desc: cakeDesc })
    }
    
    f(stateSetter)
  }, [])
}

export default useRandomCake