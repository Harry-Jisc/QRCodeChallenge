import './index.css'

import {QRCodeSVG} from 'qrcode.react';

type Props = {
    title: string;
    tagline: string;
    link: string;
}

const QRCode = (props: Props) => {
    return (
        <div className='card'>
            <div className='qr-holder'>

                <div className='circle top-circle'></div>
                <div className='circle bottom-circle'></div>
                <QRCodeSVG value={props.title} size={192} fgColor='#FFFFFF'  bgColor='#3875d6'/>
            </div>
            <div className='qr-information'>
                <h2> {props.title} </h2>
                <p> {props.tagline} </p>
            </div>
        </div>
    )
}

export default QRCode;