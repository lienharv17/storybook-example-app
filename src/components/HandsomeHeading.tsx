import React from 'react';

export interface PresentableProps {
    /**
     * The text of the title.
     */
    cuteContent: string;
    /**
     * The color of the title.
     */
    charmingColor: string;
    /**
     * The size of the title.
     */
    fabulousFontSize: 'small' | 'medium' | 'large';
    /**
     * The font of the title.
     */
    fancyFontFamily: 'Nunito Sans' | 'Arial' | 'fantasy' | 'Times New Roman';
}

/**
 * This is the title of the page, also called the main heading.
 */
export const Title: React.FC<PresentableProps> = ({cuteContent, charmingColor, fabulousFontSize, fancyFontFamily}) => {
    const getStyle = (): React.CSSProperties => ({
        color: charmingColor,
        fontSize: fabulousFontSize === 'large' ? '40px' : fabulousFontSize === 'medium' ? '30px' : '20px',
        fontFamily: fancyFontFamily
    });

    return <h1 style={getStyle()}>{cuteContent}</h1>;
};

export default Title;