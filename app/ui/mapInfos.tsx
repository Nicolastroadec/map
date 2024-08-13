import { MapsDetails } from '@/app/lib/data';

interface MapsDetailsData {
    data: MapsDetails,
}

export default function MapInfos({ data }: MapsDetailsData) {
    const { name, license, maxRequests } = data;
    return (
        <div className="flex flex-col text-white w-1/3 h-[500px] mb-10 z-0 p-10" >
            <h2 className="mb-3 text-3xl"><span className="font-bold">Nom :</span> {name}</h2>
            <p className="mb-3 text-xl"><span className="font-bold">License :</span> {license}</p>
            <p className="mb-3 text-xl"><span className="font-bold">Nombre maximum de requêtes :</span> {maxRequests}</p>
        </div >
    )
}