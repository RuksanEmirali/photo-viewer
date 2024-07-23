import React from "react";  // import React (to provide access to TSX)
import "./ImageSelector.css"

const brokenImages : Array<number> = [
    1, 24, 32, 36, 44, 47
];


interface ImageSelectorProps {
    selectedImgUrl: string;
    setSelectedImgUrl: (url: string) => void
}

export function ImageSelector({selectedImgUrl, setSelectedImgUrl} : ImageSelectorProps) : JSX.Element {

    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    const imgItems = urls.map(imageUrl => 
            <img 
                src={imageUrl} 
                className={(selectedImgUrl === imageUrl)? "selected" : "unselected"} 
                onClick={() => setSelectedImgUrl(imageUrl)}
            />
    );
    return imgItems;
}


// export function ImageSelector({selectedImgUrl, setSelectedImgUrl} : ImageSelectorProps) : JSX.Element {
//     const urls = [];
//     for (let i = 0; i < 50; i++) {
//         if (!brokenImages.includes(i)) {
//             const imageNumberString = i.toString().padStart(2, '0');
//             urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
//         }
//     }
//     const imgItems = urls.map(imageUrl => 
//             <img 
//                 src={imageUrl} 
//                 className="thumb-img"
//                 // className={(selectedImgUrl === imageUrl)? "selected" : "unselected"} 
//                 // onClick={() => selectImg(imageUrl)}
//             />
//     );
//     return imgItems;
// }




// export function ImageSelector(getImageUrls : Array<string>) {    // declare and export new function called 'PhotoViewer'
//     return (                             
//         getImageUrls.forEach((url:string) => <img src = url />)
//     );
// }

// function getImageUrls() {
//     const urls : Array<string> = [];

//     for (let i = 0; i < 50; i++) {
//         if (!brokenImages.includes(i)) {
//             const imageNumberString : string = i.toString().padStart(2, '0');
//             urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
//         }
//     }
//     return urls;
// }
// export const imageUrls = getImageUrls();