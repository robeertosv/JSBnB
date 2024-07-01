import InmuebleCard from './InmuebleCard'

const InmueblesPreview = ({ inmueblesPreview }) => {

  return (
    <div>{
        inmueblesPreview.map((item, idx) => {
            return(<InmuebleCard key={idx} id={123} title={"Super casa"} description={"Casa coquette"} price={5} services={['WiFi', 'TV']}/>)
        })
    }</div>
  )
}

export default InmueblesPreview