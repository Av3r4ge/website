import Image from 'next/image'

interface Projects {
    date: string;
    title: string; 
    description: string;
    image: string;
    link?: string; 
}

export const Projects = ( {
    className,
    items
}: {
    className: string;
    items: Projects[];
}) => {
    return (
        <ul>
            {items.map((item, index) => (   
                <li key={index} className={className}>
                    <div className="border border-purple-700 rounded bg-neutral-800">
                        <Image src={"/projects/website/one.png"} alt='' width={200} height={50} ></Image>                        

                        {item.date}
                        {item.title}
                        {item.description}
                        {item.link}
                    </div>
                </li>
            ))}
        </ul>
    )
}
 