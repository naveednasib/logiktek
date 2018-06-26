

function animate(typewriter) {
    sequence = [
        {
            text: "Logiktek Concepts transforms modern organizations into digital leaders with the power of today's cutting-edge technology.\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b",
            instant: false,
            delayBefore: 1500
        },
     
        {
            text: "WE PROVIDE - Software Development  \b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b Web & CMS Development \b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b Corporate Branding  \b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b Mobile Applications",
            instant: false,
            delayAfter: 500
        },
        //   {
        //     text: "WE PROVIDE - Software Development  \b\b\b\b\b\b\b\b\b\b\b\b\b",
        //     instant: false,
        //     delayAfter: 500
        // },
     
    ]


    // for (var i in poem) {
    //     sequence.push({
    //         text: poem[i],
    //         delayAfter: 1500,
    //     });
    // }

 
 
   // typewriter.playSequence(sequence);
    setTimeout(function(){ typewriter.playSequence(sequence); },0);
}
