import '../../styles/main.sass'
import '../../static/icon/flaticon.scss'

export default function Wrapper(props) {
    return(
        <div>
            {props.children}
        </div>
    )
}