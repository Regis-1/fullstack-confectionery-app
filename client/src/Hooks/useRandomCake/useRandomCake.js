const useRandomCake = async (stateSetter) => {
  const imgRes = await fetch('http://localhost:8081/api/img/ck-0015')
  const imgBlob = await imgRes.blob()
  const imgObjUrl = URL.createObjectURL(imgBlob)

  const descRes = await fetch('http://localhost:8081/api/cakes/ck-0015')
  const description = await descRes.json()

  stateSetter({img: imgObjUrl, desc: description.name})
}

export default useRandomCake