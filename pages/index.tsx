import type { NextPage } from 'next'
import Header from '../components/Team/Header'
import Feras from '../components/Team/Feras'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useFera } from './providers/FeraPreview'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FeraDto } from '../dtos/FerasDto'
import Preview from '../components/Team/Preview'
import { streamerSort } from '../utils/streamer-sort'

// TODO
// x ordenar
// - Fera component
// x css do preview
// x scrollbar
// - preview nao aparece de primeira

const Home: NextPage = () => {
  const [feras, setFeras] = useState<FeraDto[]>([]);
  const [preview, setPreview ] = useState<FeraDto>({
    fera: 'marcellus_v',
    game_name: '',
    is_live: false,
    language: '',	
    profile_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6356c984-9dd2-42db-bc16-c34ed4244500-profile_image-300x300.png',	
    started_at: '',	
    thumbnail_url: '',	
    title: '',
    user_id: '',	
    user_name: 'Marcellus_V',	
  })

  async function getFeras(){
    const response = await axios.get("https://api.feras.club/team/live")
    const ferasTratadas = streamerSort(response.data)
    setFeras(ferasTratadas)
  }

  useEffect(() => {
    getFeras()
    // if(preview === undefined) setPreview(feras[0])
  }, [])

  if(!preview) setPreview(feras[0])
  // useEffect(() => {
  //   // setPreview(feras[0])
  //   console.log(preview)
  // }, [preview])

  return (

    <div>
      <Header />
      <div className='flex w-[940px] mt-20 mx-auto bg-cinzasso p-4 gap-4'>
        <div className="w-96 pt-2">
          <Feras feras={feras} setPreview={setPreview} /> 
        </div>
        <div className='w-full'>
          {preview && <Preview preview={preview}/> }
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

//   return {
//     props: {
//       streamers
//     }
//   }
// }