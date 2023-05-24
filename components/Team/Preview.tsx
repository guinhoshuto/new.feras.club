import Image from "next/image"
import { FeraDto } from "../../dtos/FerasDto"
import { User, Eye } from '@phosphor-icons/react'

interface PreviewProps{
    preview: FeraDto 
}

export default function Preview(props: PreviewProps){
    return(
        props.preview && (
            <div>
                {/* {console.log(feras)} */}
                <div className="bg-fundo preview">
                    <div className="flex p-4">
                        <div className="mr-2 pt-1">
                            <Image 
                                className="rounded-full fera-fotinha-preview align-middle" 
                                src={props.preview.profile_image_url} 
                                width={40}
                                height={40}
                                alt="" 
                            />
                        </div>
                        <div className="pl-2">
                            <div className="text-left text-roxinho text-lg font-semibold">
                                {props.preview.user_name} 
                            </div>
                            <div className="flex items-center mt-1 gap-3">
                                <div className="flex h-full items-center mr-2 gap-2">
                                    <User size={16} />
                                    <span className="flex text-red-600 text-xs">
                                        {props.preview.viewer_count}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Eye size={16} />
                                    <span className="text-cinzinha text-xs align-top">
                                        {/* {props.preview.view_count} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        title="preview"
                        src={`https://player.twitch.tv/?channel=${props.preview.fera}&parent=localhost&parent=feras.club`}
                        height="350"
                        width="100%"
                        allowFullScreen>
                    </iframe>
                    <div className="p-4">
                        <div className="flex">
                            <span className="text-left text-white text-lg font-semibold">
                                {props.preview.title}
                            </span>
                        </div>
                        <div className="flex">
                            <span className="text-white">
                                Category: &nbsp;
                            </span>
                            <span className="text-roxinho">
                                {props.preview.game_name} &nbsp;
                            </span>
                            <span className="text-cinzinha">
                            • &nbsp;
                            </span>
                            <span className="text-white">
                                Team: &nbsp;
                            </span>
                            <span className="text-roxinho">
                                Clube das Feras
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col p-4">
                        <div className="text-left text-white text-lg font-semibold">
                            Clube das Feras
                        </div>
                        <div className="pt-2 text-white text-left">
                            As feras estão chegando
                        </div>
                    </div>
                </div>

            </div>

        )
    )

}