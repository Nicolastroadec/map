import { MapsDetails } from '@/app/lib/data';

interface MapsDetailsData {
    data: MapsDetails,
}

export default function MapInfos({ data }: MapsDetailsData) {
    const { name, license, maxRequests, site } = data;
    return (
        <div className="flex flex-col text-white xl:w-1/3 w-full  xl:h-[500px] mb-5 z-0 p-10" >
            <h2 className="mb-3 text-3xl"><span className="font-bold">Nom :</span> {name}</h2>
            <p className="mb-3 text-xl"><span className="font-bold">License :</span> {license}</p>
            <p className="mb-3 text-xl"><span className="font-bold">Nombre maximum de requêtes :</span> {maxRequests}</p>
            <p className="mb-3 text-xl rounded p-2 pl-4 pr-4 bg-[#1d2d44] w-fit cursor-pointer hover:bg-[#3e5c76]"><a href={site} target="_blank">Plus d&apos;infos</a></p>
        </div >
    )
}