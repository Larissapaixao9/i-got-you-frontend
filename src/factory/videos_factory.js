import React from 'react'

export async function case1_songs() {

    const list = [
        'http://www.youtube.com/watch?v=Za_gPPgfKf4',
        'http://www.youtube.com/watch?v=sdfOv0SR_Zs',
        'http://www.youtube.com/watch?v=ffiOB0wTFQ0',
        'http://www.youtube.com/watch?v=qBIxI580dI8',
        'https://www.youtube.com/watch?v=jB6moGj2vys',
        'https://www.youtube.com/watch?v=Evi-TS5ud4Q'
    ]
    return list[Math.floor(Math.random() * (6 - 0) + 0)]
}

export async function case2_songs(){
    const list = [
        'https://www.youtube.com/watch?v=Evi-TS5ud4Q',
        'https://www.youtube.com/watch?v=o4552tadeuM',
        'https://www.youtube.com/watch?v=UNaYpBpRJOY',
        'https://www.youtube.com/watch?v=eVTXPUF4Oz4',
        'https://www.youtube.com/watch?v=kjggvv0xM8Q',
        'https://www.youtube.com/watch?v=1D-6Pss2luU&t=217s',
        'https://www.youtube.com/watch?v=Ri-eF5PJ2X0'
    ]

    return list[Math.floor(Math.random() * (7 - 0) + 0)]
}
