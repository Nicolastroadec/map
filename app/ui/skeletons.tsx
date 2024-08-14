const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div
            className={`${shimmer} h-[150px] relative overflow-hidden rounded-xl bg-gray-800 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                <div className="h-5 w-5 rounded-md bg-gray-900" />
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-900 text-sm font-medium" />
            </div>

        </div>
    );
}

export function MapSkeleton() {
    return (
        <div
            className={`${shimmer} h-[500px] w-full xl:w-2/3 relative overflow-hidden rounded-xl bg-gray-800 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                <div className="h-5 w-5 rounded-md bg-gray-900" />
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-900 text-sm font-medium" />
            </div>

        </div>
    );
}

export default function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
}