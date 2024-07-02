import InmuebleCard from './InmuebleCard'
import PropTypes from 'prop-types';

const InmueblesPreview = ({ inmueblesPreview }) => {

  return (
    <div>
      {inmueblesPreview.map((item, idx) => {
        return (<InmuebleCard key={idx} id={123} title={"Super casa"} description={"Casa coquette"} price={5} services={['WiFi', 'TV']} />)
      })}
    </div>
  )
}

InmueblesPreview.propTypes = {
  inmueblesPreview: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};
export default InmueblesPreview

/* 
<div>{
        {inmueblesPreview.map((item, idx) => {
            return(<InmuebleCard key={idx} id={123} title={"Super casa"} description={"Casa coquette"} price={5} services={['WiFi', 'TV']}/>)
        })}

        h1
    }</div>

*/