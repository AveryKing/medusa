import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Header from "../components/Header";
import {sanityClient, urlFor} from '../sanity';
import {Post} from "../typings";

interface Props {
    posts: Post[];
}

const Home = ({posts}: Props) => {
    console.log(posts);
    return (
        <div className='max-w-7xl mx-auto'>
            <Head>
                <title>Medusa</title>
            </Head>
            <Header/>
            <div className='flex justify-between  items-center bg-blue-50  py-10 lg:py-0'>
                <div className='px-10 space-y-5'>
                    <h1 className='text-6xl max-w-xl '><span
                        className='underline decoration-black decoration-4'>Medusa</span> is a place to share, learn, and connect.</h1>
                    <h2>Join today to start posting and sharing your thoughts with our readers.</h2>
                </div>
                <img className='hidden md:inline-flex w-80 mr-20 lg:w-4/12 object-contain'
                     src="svg.svg"
                     alt="Medusa"/>
            </div>
            { /* Posts */}
            <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6"}>
                {posts.map(post => (
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                        <div className="border rounded-lg group cursor-pointer overflow-hidden">
                            <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt={post.title} />
                            <div className='flex justify-between p-5 bg-white'>
                                <div>
                                    <p className="text-lg font-bold">{post.title}</p>
                                    <p className="text-sm">{post.description} by {post.author.name}</p>
                                </div>
                                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!}
                                     alt={post.author.name}/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;


export const getServerSideProps = async () => {
    const query = `*[_type == "post"] {
      _id,
      title,
      author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
    }`;
    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts
        }
    }
}

