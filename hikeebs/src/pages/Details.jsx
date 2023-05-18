import { useParams } from "react-router";
import { SculptsGrid } from '../components/SculptsGrid';

export function KeycapDetails() {
    const { sculptId } = useParams();
  return ( 
    <div className='body'>
      <SculptsGrid ide={sculptId}/>
    </div>
  );
}