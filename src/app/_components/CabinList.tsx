import React from 'react'
import { getCabins } from '../_lib/data-service';
import CabinCard from './CabinCard';

async function CabinList() {
      
  const cabins: any = await getCabins();
  return (
    <div>
        {cabins.length > 0 && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
              {cabins.map((cabin:any) => (
                
                  <CabinCard cabin={cabin} key={cabin.id} />
                
              ))}
            </div>
          )}
    </div>
  )
}

export default CabinList