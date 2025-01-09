import Image from 'next/image'
import Link from 'next/link';

interface Projects {
    title: string; 
    description: string;
    image: string;
    link: string; 
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
                    <Link href={item.link} className="border border-purple-700 rounded bg-neutral-800 flex flex-wrap items-start p-4 group/item">
                        <Image className="aspect-video object-cover mr-4" src={item.image} alt='' width={200} height={50} ></Image>                        

                        <div className=' text-wrap w-1/2'>
                            <p className="text-neutral-300 group-hover/item:text-purple-700 font-semibold text-2xl w-full"> {item.title} </p>

                            <p className='text-neutral-400 text-lg'>
                                {item.description}
                            </p>
                        </div>

                    </Link>
                </li>
            ))}
        </ul>
    )
}
 