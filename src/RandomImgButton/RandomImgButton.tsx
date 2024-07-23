interface randomSelector {
    randomImgUrl: string;
    setRandomImgUrl: (selectedImgurl: string) => void
}

export function RandomImgButton ({randomImgUrl, setRandomImgUrl}: randomSelector) : JSX.Element {
    return (
        <button onClick={()=> setRandomImgUrl(`https://picsum.photos/id/6${Math.round(Math.random()*99)}/1600/900.jpg`)}>
          Show a random image
        </button>
    )
}

