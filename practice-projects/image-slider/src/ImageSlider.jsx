import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'


export function ImageSlider({imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0);


    function showNextImg() {
        setImageIndex(index=> {
            if(index === imageUrls.length -1) return 0
            return index + 1
        })
    }
    function showPreviousImg() {
        setImageIndex(index=> {
            if(index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    return <div style={{width:"100%", height:"100%",position:"relative"}}>
        
        <img src={imageUrls[imageIndex]} alt="" className="img-slider-img"/>
        <button onClick= {showPreviousImg} className="img-slider-btn" style={{left:"0"}}>
            <ArrowBigLeft />
        </button>
        <button onClick= {showNextImg} className="img-slider-btn" style={{right:"0"}}>
            <ArrowBigRight />
        </button>
    </div>
}