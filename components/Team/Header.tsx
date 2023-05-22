import styles from '../../styles/Team.module.css'

export default function Header(){
    return(
        <nav className={ styles.teamHeader } >
            <div className="container flex flex-wrap items-center">
                <div className={ styles.twitchIcon }></div>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col pl-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li><a className="block mx-2" href="https://www.twitch.tv/directory/following">Following</a></li>
                        <li><a className="block mx=2" href="https://www.twitch.tv/directory">Browse</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}