 import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Link  from 'next/link';
import React from 'react'
import Image from 'next/image';
import markdownit from 'markdown-it';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';




 export const exprimantal_ppr=true;

 const md= markdownit();
 
 const page = async ({params}:{params:Promise<{id:string}>}) => {
    const id= (await params).id;

    const post= await client.fetch(STARTUP_BY_ID_QUERY, {
     id});
     if (!post)return notFound();
     const parsedContent=md.render(post?.pitch || '');
   return (
     <div>
       <>
       <section className='pink_container !min-h-[230px]'>
            <p className='tag'>{formatDate(post?._createdAt)}</p>
       
       <h1 className='heading'> {post.title}</h1>
       <p className='sub-heading !max-w-5xl'> {post.description}</p>
       </section>
       <section className='section_container'>
        <img src={post.image} alt="thumbnaill"
        className='w-full h-auto rounded-xl' />

        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
            <div className='flex-between gap-5'>
                <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                    <Image src={post.author.image} alt='avatar' width={64} height={64} className='rounded-full drop-shadow-md'/>
                    <div >
                        <p className='text-20-meduim '> {post.author.name}</p>
                        <p className='text-20-meduim !text-black-300 '> @{post.author.username}</p>
                    </div>
                </Link>
                <p className='category-tag'>{post.category}</p>

            </div>
            <h3 className='text-30-bold'> Pitch Details</h3>
            {parsedContent ? ( 
                <article dangerouslySetInnerHTML={{__html:parsedContent}} className='prose maw-w-4xl font-work-sans break-all'/>
            ):(
                <p className='no-result'>
                    No pitch details available for this startup.
                </p>
            )}
        </div>
        <hr className='divider' />
        <Suspense fallback={<Skeleton className='view_skeleton'/>} >
            <View id={id}/>
        </Suspense>
       </section>
       
       </>
     </div>
   )
 }
 
 export default page
 