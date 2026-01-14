const members = [
    {
        name: 'Premium Kunthan Chocker',
        role: '',
        avatar: '11.jpeg',
        link: '#',
    },
    {
        name: 'Palakka mala ',
        role: '',
        avatar: '12.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Necklace',
        role: '',
        avatar: '13.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Necklace ',
        role: '',
        avatar: '14.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Chocker',
        role: '',
        avatar: '15.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Necklace',
        role: '',
        avatar: '16.jpeg',
        link: '#',
    },
    // {
    //     name: 'Premium Temple Necklace',
    //     role: '',
    //     avatar: '18.jpeg',
    //     link: '#',
    // },
    // {
    //     name: 'Premium Victorian Necklace',
    //     role: '',
    //     avatar: '17.jpeg',
    //     link: '#',
    // },
    // {
    //     name: 'Premium Victorian Necklace',
    //     role: '',
    //     avatar: '17.jpeg',
    //     link: '#',
    // },
    {
        name: 'Premium Kunthan Chocker',
        role: '',
        avatar: '11.jpeg',
        link: '#',
    },
    {
        name: 'Palakka mala ',
        role: '',
        avatar: '12.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Necklace',
        role: '',
        avatar: '13.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Necklace ',
        role: '',
        avatar: '14.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Chocker',
        role: '',
        avatar: '15.jpeg',
        link: '#',
    },
    {
        name: 'Premium Victorian Necklace',
        role: '',
        avatar: '16.jpeg',
        link: '#',
    },
]

export default function ModelCategory() {
    return (
        <section className="bg-muted dark:bg-background py-12 md:py-32">
            <div className="mx-auto max-w-6xl px-8 lg:px-0">
                {/* <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Model categories</h2> */}

                {/* <div>
                    <h3 className="mb-6 text-lg font-medium">Most Rated Models</h3>
                    <div className="grid grid-cols-3 gap-4 border-t py-6 md:grid-cols-6">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="mt-6">
                    <h3 className="mb-6 text-2xl font-medium">New Arrivals</h3>
                    <div data-rounded="full" className="grid grid-cols-3 gap-4 border-t py-6 md:grid-cols-6">
                        {members.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                {/* <span className="text-muted-foreground block text-xs">{member.role}</span> */}
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </section>
    )
}