import React,{ useEffect,useState }  from "react";
import { ImageDataItem } from "./Interfaces/Interface"

export default function MainPage(){
    const[imageslist,setimageslist] = useState<Array<ImageDataItem>>([])
    let currentlimit=0

    useEffect(() => {
        GetImagesList("5")
        SetLimitCount("5")

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    
    const GetImagesList = (limit:string) =>{
        var url="https://picsum.photos/v2/list?page=1&limit="+limit
        fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            setimageslist(resp)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const SetLimitCount = (pagelimit:string) => {
        var limit = parseInt(pagelimit)
        GetImagesList(limit.toString())
        currentlimit = limit
    }

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        var lmt=currentlimit + 5
        SetLimitCount(lmt.toString())
    }

    return(
        <div>
            {
                (imageslist.length > 0)
                ?
                <div  >
                    {
                        imageslist.map(item => (
                            <div key={item.id} style={{margin:"5px"}} >
                                <img style={{height: "20%",width: "20%"}} src={item.download_url}></img>
                            </div>
                        ))
                    }
                </div>
                :
                <>Images not found!</>
            }
        </div>
    )
}