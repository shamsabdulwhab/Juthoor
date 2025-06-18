import React, { useRef } from 'react';
import './carousel.css';
import LeftArrow from '../icons/LeftArrow.tsx';
import RightArrow from '../icons/RightArrow.tsx';

export type Service = {
  id: number;
  image: string;
  title: string;
};

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  customClass?: string;
}

const Carousel = <T,>({ items, renderItem, customClass }: CarouselProps<T>) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSlide = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { scrollLeft } = sliderRef.current;
            // Cast children[0] to HTMLElement to access offsetWidth
            const itemWidth = (sliderRef.current.children[0] as HTMLElement)?.offsetWidth + 32; // Assuming 32px for gap/padding

            if (itemWidth) {
                if (direction === "left") {
                    const newScrollLeft = scrollLeft - itemWidth;
                    sliderRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
                } else {
                    const newScrollLeft = scrollLeft + itemWidth;
                    sliderRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section className='carousel-container'>
            <div className='carousel-arrow left-arrow' onClick={() => handleSlide('left')}>
                <LeftArrow />
            </div>
            <div className={`carousel-body${customClass ? ' ' + customClass : ''}`} ref={sliderRef}>
                {items.map((item, index) => renderItem(item, index))}
            </div>
            <div className='carousel-arrow right-arrow' onClick={() => handleSlide('right')} >
               <RightArrow />
            </div>
        </section>
    );
};

export default Carousel;

