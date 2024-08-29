import CabinCard from "@/app/_components/CabinCard";
import { getCabin, getCabins } from "../_lib/data-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabins Page",
  description: "The Wild Oasis Exercises",
};
export default async function Page() {
  // CHANGE
  async function getDataCabins(id: any){
    const result = await getCabin(id);
    return result;
  }
  const cabins: any = await getCabins();


  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin:any) => (
            <CabinCard cabinId={async () => await getDataCabins(cabin.id)} cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
