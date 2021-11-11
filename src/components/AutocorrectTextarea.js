/// As no pulugins or libraries were user for autocorrect words list i have created a dummy list for two sentences , logic will be same when more dataset is provided
/// 1. Hello welcome to my house
/// 2. Have a great day

import React, { useEffect, useState } from 'react';
import {screen} from '@testing-library/dom'

export default function Autocorrecttextarea(){
    const[textcontent,settextcontent]=useState("")
    
    
    const corrections = {
        "wellcome": "welcome",
        "hous": "house",
        "helloo": "Hello",
        "greet": "great",
        "dae": "day",
        "hav": "Have"
    };

    useEffect(() => {
        document.body.onkeyup = function(e){
            if(e.code == "Space"){
                var content = screen.getByTestId("textarea").value
                var arr = content.split(" ")
                var lasttxt = arr[arr.length - 2]
                
                Object.keys(corrections).map( function(key) {                    
                    if(lasttxt.toLowerCase() == key){
                        var correctedtxt = content.replace(lasttxt,corrections[key])
                        screen.getByTestId("textarea").value=correctedtxt
                        settextcontent(correctedtxt)
                        return
                    }
                })
            }
        }
    },[])
    
    return(
        <div>
            <textarea id="txt" data-testid="textarea" spellCheck="true" onChange={event => settextcontent(event.target.value)}></textarea>
        </div>
    )
}