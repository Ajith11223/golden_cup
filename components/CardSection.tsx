import Link from 'next/link'

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
]

export default function CardSection() {
    return (
        <section className="bg-background py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl border-t px-6">
                {/* <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Models</span> */}
                <div className="mt-5 gap-4 sm:grid sm:grid-cols-2 md:mt-15">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our Collections</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top hover:grayscale transition-all duration-500 grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}