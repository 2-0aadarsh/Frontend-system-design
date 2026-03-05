import { useEffect, lazy, Suspense } from "react";
import { useInView } from 'react-intersection-observer';

const HeroSection = lazy(()=> import('../components/HeroSection'))
const AboutSection = lazy(()=> import('../components/AboutSection'))
const TestimonialSection = lazy(()=> import('../components/TestimonialSection'))


const Home = () => {
    const { ref : aboutRef, inView : aboutInView } = useInView();
    const { ref : testimonialRef, inView : testimonialInView } = useInView();


    return (
        <div>
            <Suspense fallback={<div>Loading HeroSection...</div>}>
                <HeroSection />
            </Suspense>
            
            {/* Give these divs a min-height so they occupy space while empty */}
            <div ref={aboutRef} style={{ minHeight: '50vh' }}>
                { aboutInView && (
                    <Suspense fallback={<div>Loading AboutSection...</div>}>
                        <AboutSection />
                    </Suspense>
                )}
            </div>
            
            <div ref={testimonialRef} style={{ minHeight: '50vh' }}>
                { testimonialInView && (
                    <Suspense fallback={<div>Loading Testimonials...</div>}>
                        <TestimonialSection />
                    </Suspense>
                )}
            </div>
        </div>
    )
}
export default Home;