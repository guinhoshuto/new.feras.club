import Image from 'next/image';
import { useState, useEffect } from 'react'
import { useFera } from '../../pages/providers/FeraPreview'
import { FeraDto } from '../../dtos/FerasDto'

interface FerasProps {
    feras: FeraDto[]
    setPreview: (fera: FeraDto) => void 
}

export default function Feras(props: FerasProps) {
    // const [ferasChannels, setFerasChannels] = useState<FeraDto[]>([])
    // const [online, setOnline] = useState([])

    // useEffect(() => {
    //     handleSetFeras(feras)
    //     // setOnline(feras.filter((fera: FeraDto) => fera.is_live))
    // }, [])

    // function handleSetFeras(channels: any) {
    //     setFerasChannels(channels)
    // }

    // console.log(ferasChannels)
    // const { setFera } = useFera();
    const online = props.feras.filter(fera => fera.is_live)
    console.log('feras', props.feras )

    // function handleFera(fera: FeraDto): void {
    //     setFera(fera);
    // }
    return (
        <aside className="w-full">
            <div className="flex justify-between w-full p-2">
                <div> 
                    <h2 className="text-white font-bold">
                        Team Members
                    </h2>
                </div>
                <div className="text-cinzinha count"> 
                    {online.length} 
                </div>
            </div>
            <div className="bg-fundo overflow-y-auto h-[500px]">
                <ul className='flex flex-col gap-2'>
                    {props.feras.map(fera => (
                        <li key={fera.user_id}>
                            <button 
                                onClick={() => props.setPreview(fera)} 
                                className="flex justify-between w-full text-white h-15 px-4 pt-2 hover:bg-hover-cinzinha"
                            >
                                <div className="flex items-center gap-3 h-full w-full">
                                    <Image 
                                        height={40}
                                        width={40}
                                        className="feras-fotinha rounded-full mr-4 align-middle" 
                                        src={fera.profile_image_url} 
                                        alt="" 
                                    />
                                    {fera.fera} 
                                </div>
                                <div className="text-cinzinha count align-middle">
                                    {fera.is_live &&
                                        <div> <span className="text-red-600">● </span> {fera.viewer_count}</div>}
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )

}