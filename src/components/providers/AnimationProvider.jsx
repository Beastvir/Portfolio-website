import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProvider({ children }) {
    const comp = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Global animations or shared scroll triggers can go here
        }, comp);

        return () => ctx.revert();
    }, []);

    return <div ref={comp}>{children}</div>;
}
