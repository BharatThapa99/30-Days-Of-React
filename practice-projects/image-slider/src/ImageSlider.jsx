import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'

export function ImageSlider({imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0);

    return <div>
        
        <img src={imageUrls[imageIndex]} alt="" />
        <button>
            <ArrowBigLeft />
        </button>
        <button>
            <ArrowBigRight />
        </button>
    </div>
}