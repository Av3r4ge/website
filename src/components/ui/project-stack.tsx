import Image from "next/image";

type stack = {
    name: string,
    svg: string,
}

export const ProjectStack = ({
    items
}: {
    items: Partial<Record<string,stack>>;
}) => {
    const normalizedItems = Object.values(items).filter(
        (item): item is stack => item !== undefined
    );

    return ( 
        <div className="flex bg-neutral-900 p-3">
            {normalizedItems.map((item, idx) => (
                <div 
                key={idx}
                >

                <Image
                className="m-auto mx-3"
                aria-hidden
                src={item.svg}
                alt={item.name}
                width={32}
                height={32}
                />
                </div>
            ))}
        </div>
    )
}