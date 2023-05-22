import type { NextPage } from 'next'
import Header from '../components/Team/Header'
import Feras from '../components/Team/Feras'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFera } from './providers/FeraPreview'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FeraDto } from '../dtos/FerasDto'
import Preview from '../components/Team/Preview'

const Home: NextPage = () => {
  const [feras, setFeras] = useState<FeraDto[]>([]);
  const [preview, setPreview ] = useState<FeraDto>({
    fera: 'Marcellus_V',
    game_name: '',
    is_live: false,
    language: '',	
    profile_image_url: '',	
    started_at: '',	
    thumbnail_url: '',	
    title: '',
    user_id: '',	
    user_name: '',	
  })

  async function getFeras(){
    const response = await axios.get("https://api.feras.club/team/live")
    setFeras(response.data)
    console.log(feras)
  }


  
  // const { fera, setFera } = useFera();
  // function getFeraOnline(streamers: any) {
  //   setFeras(streamers)
  //   // setFera(props.streamers[0])
  // }

  useEffect(() => {
    getFeras()
    setPreview(feras[0])
    // getFeraOnline(streamers)
  }, [])

  useEffect(() => {
    console.log(preview)
  }, [preview])

  return (
    <div>
      <Header />
      <div className='flex w-[940px] h-[720px] mt-20 mx-auto'>
        <div className="w-96 p-4">
          <Feras feras={feras} setPreview={setPreview} /> 
        </div>
        <div className='w-full'>
          <Preview preview={preview}/>
        </div>
      </div>
    </div>
  )
}

export default Home

// export async function getServerSideProps() {
//   const ferasStreamers = await axios.get("https://feras-leaderboards.herokuapp.com/team")
//   const streamers = ferasStreamers.data.response;
//   streamers.forEach((s: any) => {
//     s.preview = true
//   })
//   streamers.sort((a: any, b: any) => {
//     if (a.viewer_count > b.viewer_count)
//       return -1;
//     if (a.viewer_count < b.viewer_count)
//       return 1
//     return 0
//   });

//   return {
//     props: {
//       streamers
//     }
//   }
// }