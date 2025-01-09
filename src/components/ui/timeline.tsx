interface TimeLineEvent {
    date: string;
    title: string; 
    description: string;
}

export const TimeLine = ( {
    className,
    events
}: {
    className: string;
    events: TimeLineEvent[];
}) => {
    return (
        <div className={className}>
            <ol className="border-s">
                {events.map((event, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-purple-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-purple-700 dark:bg-purple-700"></div>
                        <time className="text-lg text-purple-600"> {event.date} </time>
                        <h1 className="text-3xl font-semibold text-neutral-300"> {event.title} </h1>
                        <div className="mr-12 text-pretty break-all">
                            <p className="text-2xl text-neutral-400"> {event.description} </p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
 